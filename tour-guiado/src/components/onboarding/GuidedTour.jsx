import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { TOUR_STEPS } from './content.js';
import { computePlacement } from './placement.js';

const isVisible = (el) => !!el && el.offsetWidth > 0 && el.offsetHeight > 0;

function findTarget(step) {
  const el = document.querySelector(step.target);
  if (isVisible(el)) return el;
  return step.fallback ? document.querySelector(step.fallback) : el;
}

/**
 * Tour guiado com destaque (spotlight) e balão.
 *
 * Controlado pelo pai: `open`, `step`, `onStepChange(i)`, `onPause()` (X/Esc), `onSkip()` ("Pular tour"),
 * `onFinish()` ("Concluir"). Alvos que dependem de estado (menu do perfil, painel da Lex) devem ser abertos
 * pelo pai enquanto o passo correspondente está ativo — veja `activeStepId` em useOnboarding.
 */
export function GuidedTour({ open, step, onStepChange, onPause, onSkip, onFinish, steps = TOUR_STEPS, dim = true }) {
  const popRef = useRef(null);
  const [geo, setGeo] = useState(null);
  const current = steps[step];
  const total = steps.length;
  const next = () => (step < total - 1 ? onStepChange(step + 1) : onFinish());
  const prev = () => step > 0 && onStepChange(step - 1);

  const measure = useCallback(() => {
    if (!open || !current) return;
    const el = findTarget(current);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pop = { width: Math.min(360, window.innerWidth - 24), height: popRef.current ? popRef.current.offsetHeight : 260 };
    const nextGeo = { ...computePlacement(rect, pop, { width: window.innerWidth, height: window.innerHeight }), width: pop.width };
    setGeo((prev) => (JSON.stringify(prev) === JSON.stringify(nextGeo) ? prev : nextGeo));
  }, [open, current]);

  // Ao trocar de passo: rola até o alvo (se não for fixo) e mede várias vezes enquanto a página assenta.
  useLayoutEffect(() => {
    if (!open || !current) return undefined;
    setGeo(null);
    const timers = [];
    timers.push(setTimeout(() => {
      const el = findTarget(current);
      if (el && !current.fixed) {
        const r = el.getBoundingClientRect();
        if (r.top < 88 || r.bottom > window.innerHeight - 16) {
          window.scrollTo({ top: Math.max(0, window.scrollY + r.top - 96), behavior: 'smooth' });
        }
      }
      measure();
    }, 30));
    [120, 450, 800].forEach((ms) => timers.push(setTimeout(measure, ms)));
    return () => timers.forEach(clearTimeout);
  }, [open, step]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!open) return undefined;
    const onMove = () => requestAnimationFrame(measure);
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'Escape') onPause();
    };
    window.addEventListener('scroll', onMove, { passive: true });
    window.addEventListener('resize', onMove);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('scroll', onMove);
      window.removeEventListener('resize', onMove);
      window.removeEventListener('keydown', onKey);
    };
  });

  if (!open || !current) return null;

  const g = geo;
  let arrow = null;
  if (g && g.place !== 'none') {
    const pos = {
      bottom: { top: -8, left: g.ax - 7, borderRight: 'none', borderBottom: 'none' },
      top: { bottom: -8, left: g.ax - 7, borderLeft: 'none', borderTop: 'none' },
      left: { right: -8, top: g.ay - 7, borderLeft: 'none', borderBottom: 'none' },
      right: { left: -8, top: g.ay - 7, borderRight: 'none', borderTop: 'none' },
    }[g.place];
    arrow = <div className="ob-arrow" style={pos} />;
  }

  return (
    <>
      <div
        className="ob-spot"
        style={{
          opacity: g ? 1 : 0,
          top: g ? g.spot.y : 0, left: g ? g.spot.x : 0, width: g ? g.spot.w : 0, height: g ? g.spot.h : 0,
          borderRadius: current.radius || 16,
          boxShadow: `0 0 0 3px #10b77f${dim ? ', 0 0 0 9999px rgba(32,42,54,.55)' : ''}`,
        }}
      />
      <div
        ref={popRef} className="ob-tpop" role="dialog" aria-live="polite" aria-label="Tour guiado"
        style={{ opacity: g ? 1 : 0, top: g ? g.y : 0, left: g ? g.x : 0, width: g ? g.width : 360 }}
      >
        {arrow}
        <div className={step % 2 ? 'ob-tp-a' : 'ob-tp-b'}>
          <div className="ob-tp-head">
            <span className="ob-tp-ico"><i className={`bi ${current.icon}`} /></span>
            <span className="ob-tp-step">Passo {step + 1} de {total}</span>
            <button className="ob-icon-btn" onClick={onPause} aria-label="Fechar tour" title="Fechar (Esc)"><i className="bi bi-x-lg" /></button>
          </div>
          <div className="ob-tp-title">{current.title}</div>
          <div className="ob-tp-text">{current.text}</div>
        </div>
        <div className="ob-tp-bars">
          {steps.map((s, i) => (
            <button key={s.id} className="ob-tp-seg" onClick={() => onStepChange(i)} aria-label={`Ir para o passo ${i + 1}`}>
              <span style={{ transform: `scaleX(${i <= step ? 1 : 0})` }} />
            </button>
          ))}
        </div>
        <div className="ob-tp-foot">
          <button className="ob-skip" onClick={onSkip}>Pular tour</button>
          <span className="ob-hide-xs ob-kbds"><span className="ob-kbd">←</span><span className="ob-kbd">→</span></span>
          <div className="ob-spacer" />
          {step > 0 && <button className="ob-btn ob-btn--outline ob-btn--sm" onClick={prev}><i className="bi bi-arrow-left" /> Voltar</button>}
          <button className="ob-btn ob-btn--primary ob-btn--sm" onClick={next}>{step === total - 1 ? 'Concluir' : 'Próximo'}</button>
        </div>
      </div>
    </>
  );
}
