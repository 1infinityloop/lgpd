import { useEffect, useRef, useState } from 'react';
import { SLIDES } from './content.js';
import { SCENES } from './Scenes.jsx';

/**
 * Carrossel de apresentação (primeiro acesso).
 *
 * - Avança sozinho a cada `autoplayMs` (a barra do slide atual enche); pausa no hover; não avança no último.
 * - Navegação: Próximo/Voltar, barras clicáveis, ← → e arrastar no palco.
 * - Fechar (X, Esc, clique fora ou "Explorar sozinho") chama `onClose`; "Fazer tour guiado" chama `onStartTour`.
 */
export function WelcomeCarousel({ open, onClose, onStartTour, slides = SLIDES, autoplay = true, autoplayMs = 7000, assetsBase = './assets/' }) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState('next');
  const [navCount, setNavCount] = useState(0);
  const dialogRef = useRef(null);
  const swipeX = useRef(null);
  const last = slides.length - 1;

  const go = (i) => {
    if (i < 0 || i > last || i === index) return;
    setDir(i > index ? 'next' : 'prev');
    setIndex(i);
    setNavCount((n) => n + 1);
  };

  useEffect(() => {
    if (!open) return undefined;
    setIndex(0); setDir('next');
    const t = setTimeout(() => dialogRef.current && dialogRef.current.focus(), 60);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(index + 1);
      else if (e.key === 'ArrowLeft') go(index - 1);
      else if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  if (!open) return null;
  const slide = slides[index];
  const Scene = SCENES[slide.id];

  return (
    <div className="ob-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div ref={dialogRef} tabIndex={-1} className={`ob-wc ob-enter-${dir}`} role="dialog" aria-modal="true" aria-roledescription="carrossel" aria-label="Apresentação do LGPD Play">
        <div
          className={`ob-stage${slide.dark ? ' ob-stage--dark' : ''}`}
          style={{ backgroundColor: slide.stage }}
          onPointerDown={(e) => { swipeX.current = e.clientX; }}
          onPointerUp={(e) => {
            if (swipeX.current == null) return;
            const dx = e.clientX - swipeX.current; swipeX.current = null;
            if (dx < -50) go(index + 1); else if (dx > 50) go(index - 1);
          }}
        >
          <div className="ob-stage-top">
            <div className="ob-segs" role="tablist" aria-label="Slides">
              {slides.map((s, i) => {
                const running = i === index && i < last && autoplay;
                const cls = i < index || (i === index && !running) ? 'is-done' : running ? 'is-running' : '';
                return (
                  <button
                    key={s.id} role="tab" aria-selected={i === index} aria-label={`Ir para o slide ${i + 1} de ${slides.length}`}
                    className={`ob-seg ${cls}`} onClick={() => go(i)}
                  >
                    <span
                      style={running ? { animationDuration: `${autoplayMs}ms` } : undefined}
                      onAnimationEnd={running ? () => go(index + 1) : undefined}
                    />
                  </button>
                );
              })}
            </div>
            <button className="ob-close" onClick={onClose} aria-label="Fechar apresentação"><i className="bi bi-x-lg" /></button>
          </div>
          <div className="ob-scene" key={slide.id}>{Scene && <Scene assets={assetsBase} />}</div>
        </div>

        <div className="ob-body">
          <div className={navCount % 2 ? 'ob-copy-a' : 'ob-copy-b'} aria-live="polite">
            <span className="ob-eyebrow" style={{ color: slide.eyebrowColor, background: slide.eyebrowBg }}><i className={`bi ${slide.icon}`} /> {slide.eyebrow}</span>
            <h2 className="ob-title">{slide.title}</h2>
            <p className="ob-text">{slide.text}</p>
          </div>
          <div className="ob-foot">
            {index < last && <button className="ob-skip" onClick={() => go(last)}>Pular apresentação</button>}
            <div className="ob-spacer" />
            {index > 0 && <button className="ob-btn ob-btn--outline" onClick={() => go(index - 1)}><i className="bi bi-arrow-left" /> Voltar</button>}
            {index < last && <button className="ob-btn ob-btn--primary" onClick={() => go(index + 1)}>Próximo <i className="bi bi-arrow-right" /></button>}
            {index === last && (
              <>
                <button className="ob-btn ob-btn--outline" onClick={onClose}>Explorar sozinho</button>
                <button className="ob-btn ob-btn--primary" onClick={onStartTour}><i className="bi bi-signpost-split" /> Fazer tour guiado</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
