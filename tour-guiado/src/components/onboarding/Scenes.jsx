// Cenas animadas do palco do carrossel (uma por slide).
// As animações ficam em onboarding.css; o estado final (base) é o estático usado com "reduzir movimento".

const Tag = ({ kind, children, style }) => <span className={`ob-tag ob-tag--${kind}`} style={style}>{children}</span>;

function WelcomeScene({ assets }) {
  return (
    <>
      <div className="ob-pop" style={{ '--d': '.35s', position: 'absolute', left: '12%', top: '16%' }}>
        <div className="ob-bubble ob-floaty" style={{ '--r': '-6deg', color: '#047b56' }}><i className="bi bi-journal-text" /></div>
      </div>
      <div className="ob-pop" style={{ '--d': '.45s', position: 'absolute', right: '12%', top: '12%' }}>
        <div className="ob-bubble ob-floaty" style={{ '--r': '6deg', '--fd': '-1.2s', color: '#1559ea' }}><i className="bi bi-trophy-fill" /></div>
      </div>
      <div className="ob-pop ob-hide-xs" style={{ '--d': '.55s', position: 'absolute', left: '16%', bottom: '10%' }}>
        <div className="ob-bubble ob-floaty" style={{ '--r': '5deg', '--fd': '-2.1s', color: '#e4570c' }}><i className="bi bi-patch-check-fill" /></div>
      </div>
      <div className="ob-pop ob-hide-xs" style={{ '--d': '.65s', position: 'absolute', right: '15%', bottom: '12%' }}>
        <div className="ob-floaty" style={{ '--fd': '-.6s' }}>
          <div className="ob-orb ob-orb--ink" style={{ width: 56, height: 56 }}><img src={`${assets}lex-happy.svg`} alt="" width="40" height="40" /></div>
        </div>
      </div>
      <img className="ob-twinkle" src={`${assets}sparkle.svg`} alt="" width="22" height="22" style={{ '--d': '.2s', left: '30%', top: '22%' }} />
      <img className="ob-twinkle" src={`${assets}sparkle.svg`} alt="" width="16" height="16" style={{ '--d': '1.1s', right: '31%', bottom: '18%' }} />
      <img className="ob-twinkle" src={`${assets}sparkle.svg`} alt="" width="14" height="14" style={{ '--d': '1.8s', left: '44%', bottom: '10%' }} />
      <div className="ob-ink-card ob-pop" style={{ '--d': '.1s', padding: '20px 26px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, position: 'relative', zIndex: 2 }}>
        <img src={`${assets}logo-tjam-play.svg`} alt="TJAM Play" width="190" height="34" />
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[['aprender', 'APRENDER'], ['fixar', 'FIXAR'], ['aprofundar', 'APROFUNDAR'], ['aplicar', 'APLICAR']].map(([k, l], i) => (
            <span key={k} className={`ob-tag ob-tag--${k} ob-pop`} style={{ '--d': `${0.55 + i * 0.08}s`, fontSize: 12 }}>{l}</span>
          ))}
        </div>
      </div>
    </>
  );
}

function LessonsScene() {
  return (
    <div className="ob-ink-card" style={{ width: 'min(440px, calc(100% - 40px))', padding: 12, display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div className="ob-slide-up ob-hide-xs" style={{ '--d': '.05s', display: 'flex', justifyContent: 'space-between', padding: '2px 6px 6px' }}>
        <span style={{ font: "700 12px 'Roboto',sans-serif", color: '#047b56', letterSpacing: '.04em' }}>UNIDADE 7 · PRINCÍPIOS DA LGPD</span>
        <span style={{ fontSize: 12, color: '#6c757d' }}>2 de 6</span>
      </div>
      <div className="ob-row ob-slide-up" style={{ '--d': '.15s', position: 'relative' }}>
        <div className="ob-row-ico" style={{ background: '#9eacc0' }}>
          <i className="bi bi-camera-video-fill" />
          <span className="ob-check ob-pop" style={{ '--d': '.7s' }}><i className="bi bi-check-lg" /></span>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p className="ob-row-title" style={{ color: '#6c757d', textDecoration: 'line-through' }}>Vídeo: Bases Legais</p>
          <Tag kind="aprender" style={{ fontSize: 11, display: 'inline-block', marginTop: 5 }}>APRENDER</Tag>
        </div>
        <span className="ob-xp-float"><span className="ob-xp-chip">+20 XP</span></span>
        <span className="ob-pop ob-hide-xs" style={{ '--d': '.8s', font: "600 12px 'Roboto',sans-serif", color: '#047b56' }}>Concluída</span>
      </div>
      <div className="ob-row ob-slide-up" style={{ '--d': '.28s', background: '#f0fdf7', boxShadow: '0 0 0 3px rgba(16,183,127,.28)' }}>
        <div className="ob-row-ico" style={{ background: '#047b56' }}><span className="ob-eq"><i /><i /><i /><i /></span></div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p className="ob-row-title" style={{ fontWeight: 700, color: '#047b56' }}>Podcast: Princípios da LGPD</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
            <span className="ob-mini-bar"><span /></span>
            <span className="ob-hide-xs" style={{ fontSize: 11, color: '#6c757d' }}>1:24 / 3:00</span>
          </div>
        </div>
        <span style={{ background: '#10b77f', color: '#fff', borderRadius: 6, padding: '6px 10px', font: "700 12px 'Roboto',sans-serif" }}>Continuar</span>
      </div>
      <div className="ob-row ob-slide-up" style={{ '--d': '.41s' }}>
        <div className="ob-row-ico" style={{ background: '#9eacc0' }}><i className="bi bi-patch-question-fill" /></div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p className="ob-row-title">Quiz: Conceitos Introdutórios</p>
          <Tag kind="fixar" style={{ fontSize: 11, display: 'inline-block', marginTop: 5 }}>FIXAR</Tag>
        </div>
        <span className="ob-hide-xs" style={{ fontSize: 12, color: '#6c757d' }}>3 min</span>
      </div>
    </div>
  );
}

function RankingScene({ assets }) {
  // Estado final: Kátia em 2º. A animação parte da 4ª posição (--from) e sobe.
  const Row = ({ top, from, children, me }) => (
    <div className={`ob-rk${me ? ' ob-rk--me' : ''}`} style={{ top, '--from': from }}>{children}</div>
  );
  return (
    <div className="ob-ink-card" style={{ width: 'min(420px, calc(100% - 40px))', padding: '12px 12px 10px' }}>
      <div className="ob-slide-up" style={{ '--d': '.05s', display: 'flex', alignItems: 'center', gap: 10, background: '#dcebfe', borderRadius: 10, padding: '8px 10px', marginBottom: 8 }}>
        <span style={{ width: 32, height: 32, borderRadius: 6, background: '#91c3fd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="bi bi-mortarboard-fill" style={{ color: '#173fab', fontSize: 15 }} /></span>
        <span style={{ fontWeight: 500, fontSize: 14 }}>Liga Recruta</span>
        <span style={{ background: '#f8f9fa', border: '1px solid #ced4da', borderRadius: 4, padding: '0 6px', fontSize: 12 }}>Nivel 1</span>
        <span style={{ flex: 1 }} />
        <span style={{ fontSize: 11, color: 'rgba(26,26,26,.7)' }}><i className="bi bi-clock" /> 3 dias</span>
      </div>
      <div className="ob-rk-list">
        {[1, 2, 3, 4].map((n, i) => <span key={n} className="ob-rk-num" style={{ top: i * 44 }}>{n}</span>)}
        <div className="ob-rk" style={{ top: 0, animation: 'ob-slideUp .45s var(--ob-ease-out) .1s backwards' }}>
          <img className="ob-rk-av" src={`${assets}avatar-ranking.png`} alt="" /><span className="ob-rk-name">Sophia Mendes</span><span className="ob-rk-xp">1.520 xp</span>
        </div>
        <Row top={88} from="-44px"><img className="ob-rk-av" src={`${assets}avatar-ranking.png`} alt="" /><span className="ob-rk-name">Ivan Berezko</span><span className="ob-rk-xp">1.250 xp</span></Row>
        <Row top={132} from="-44px"><img className="ob-rk-av" src={`${assets}avatar-ranking.png`} alt="" /><span className="ob-rk-name">Ana Paula</span><span className="ob-rk-xp">1.190 xp</span></Row>
        <Row top={44} from="88px" me>
          <span className="ob-rk-av ob-rk-av--initials">KO</span>
          <span className="ob-rk-name">Kátia <span className="ob-you">Você</span><i className="bi bi-arrow-up-circle-fill ob-pop" style={{ '--d': '1.75s', color: '#10b77f', fontSize: 15 }} /></span>
          <span className="ob-rk-xp ob-xp-count" />
          <span className="ob-xp-float" style={{ right: 64, top: -6, animationDelay: '.25s' }}><span className="ob-xp-chip">+80 XP</span></span>
        </Row>
      </div>
    </div>
  );
}

const CONFETTI = [[-44, -34, '#10b77f'], [40, -38, '#f6c45a'], [48, 10, '#7b61ff'], [-46, 14, '#fd7e14'], [-12, -50, '#dc3545'], [18, 44, '#3479e9']];

function AchievementsScene() {
  const Medal = ({ g, icon, d, xs }) => (
    <div className={`ob-pop${xs ? ' ob-hide-xs' : ''}`} style={{ '--d': d }}>
      <div className={`ob-medal ob-medal--${g}`} style={{ width: 52, height: 52, fontSize: 23 }}><i className={`bi ${icon}`} /></div>
    </div>
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
      <div className="ob-ink-card ob-slide-up" style={{ '--d': '.05s', display: 'flex', alignItems: 'center', gap: 14, padding: '12px 16px', background: 'linear-gradient(119deg,#f3f0ff 0%,#ffffff 100%)' }}>
        <div style={{ position: 'relative', width: 44, height: 44, flexShrink: 0 }}>
          <span className="ob-ring-spin" />
          <span style={{ position: 'absolute', inset: -2, borderRadius: '50%', background: '#fff' }} />
          <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#cdeee1', color: '#0a6e4c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15 }}>KO</span>
          <span style={{ position: 'absolute', right: -5, bottom: -5, width: 18, height: 18, borderRadius: 9, background: '#7620c1', border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="bi bi-trophy-fill" style={{ color: '#fff', fontSize: 8, lineHeight: 1 }} /></span>
        </div>
        <div><p style={{ fontWeight: 700, fontSize: 14 }}>Moldura: Imbatível</p><p style={{ fontSize: 12, color: '#6c757d' }}>Badge exclusiva · só você tem</p></div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <Medal g="green" icon="bi-flag-fill" d=".25s" />
        <Medal g="orange" icon="bi-fire" d=".35s" />
        <Medal g="purple" icon="bi-patch-check-fill" d=".45s" />
        <Medal g="green" icon="bi-volume-up-fill" d=".55s" xs />
        <div className="ob-unlock ob-pop" style={{ '--d': '.65s' }}>
          <span className="ob-burst" />
          {CONFETTI.map(([x, y, c], i) => <span key={i} className="ob-confetti" style={{ '--x': `${x}px`, '--y': `${y}px`, background: c }} />)}
          <div className="ob-medal ob-medal--orange"><i className="bi bi-lightning-charge-fill" /></div>
          <span className="ob-locked"><i className="bi bi-lock-fill" /></span>
          <span className="ob-new-chip">NOVA!</span>
        </div>
      </div>
    </div>
  );
}

function LexScene({ assets }) {
  return (
    <>
      <div style={{ position: 'absolute', width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(52,209,155,.45) 0%, rgba(52,209,155,0) 65%)' }} />
      <div className="ob-slide-up ob-chat" style={{ '--d': '.02s' }}>
        <div className="ob-chat-head">
          <div className="ob-orb ob-bob" style={{ width: 32, height: 32, boxShadow: '0 0 0 2px rgba(255,255,255,.35)' }}><img src={`${assets}lex-happy.svg`} alt="" width="24" height="24" /></div>
          <div>
            <p style={{ fontWeight: 600, fontSize: 14, color: '#fff', lineHeight: 1.1 }}>Lex</p>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,.85)', display: 'flex', alignItems: 'center', gap: 4 }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#b8ffdf' }} /> online</p>
          </div>
        </div>
        <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 8, minHeight: 150 }}>
          <div className="ob-slide-up ob-msg ob-msg--user" style={{ '--d': '.3s' }}>Posso enviar o CPF de um colega por e-mail?</div>
          <div style={{ position: 'relative', alignSelf: 'flex-start', maxWidth: '88%' }}>
            <div className="ob-typing"><i /><i /><i /></div>
            <div className="ob-slide-up ob-msg ob-msg--bot" style={{ '--d': '2.05s' }}>Só com finalidade legítima e usando o mínimo de dados necessário.</div>
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            <span className="ob-qr ob-pop" style={{ '--d': '2.45s' }}>Ver os cuidados</span>
            <span className="ob-qr ob-pop" style={{ '--d': '2.55s' }}>O que é base legal?</span>
          </div>
        </div>
      </div>
    </>
  );
}

function TourScene() {
  const line = (w, extra = {}) => <div className="ob-md-line" style={{ width: w, ...extra }} />;
  return (
    <div className="ob-mini-dash ob-slide-up" style={{ '--d': '.02s' }}>
      <div className="ob-md" style={{ left: '3%', top: 10, width: '94%', height: 18, boxShadow: 'none', display: 'flex', alignItems: 'center', gap: 6, padding: '0 8px' }}>
        <span style={{ width: 38, height: 6, borderRadius: 2, background: '#0c1d55' }} /><span style={{ width: 18, height: 5, borderRadius: 2, background: '#10b77f' }} />
        <span style={{ width: 18, height: 5, borderRadius: 2, background: '#ced4da' }} /><span style={{ width: 18, height: 5, borderRadius: 2, background: '#ced4da' }} />
        <span style={{ flex: 1 }} /><span style={{ width: 20, height: 8, borderRadius: 2, background: '#10b77f' }} /><span style={{ width: 10, height: 8, borderRadius: 2, background: '#dc3545' }} />
      </div>
      <div className="ob-md" style={{ left: '3%', top: 36, width: '58%', height: 32, borderColor: '#a046f6', background: 'linear-gradient(95deg,#faf5ff 0%,#f2e5ff 100%)' }}>{line('40%', { background: '#2c1a4d', opacity: 0.6 })}</div>
      <div className="ob-md" style={{ left: '3%', top: 78, width: '58%', height: 106 }}>
        {line('30%', { background: '#047b56' })}{line('60%')}
        <div style={{ margin: 8, height: 22, borderRadius: 5, background: '#f0fdf7', boxShadow: '0 0 0 2px rgba(16,183,127,.3)' }} />
        {line('55%')}{line('45%')}
      </div>
      <div className="ob-md" style={{ left: '64%', top: 36, width: '33%', height: 32 }}>{line('50%', { background: '#212529', opacity: 0.6 })}<div style={{ margin: '5px 8px 0', height: 5, borderRadius: 3, background: 'linear-gradient(90deg,#10b77f 30%,#e9ecef 30%)' }} /></div>
      <div className="ob-md" style={{ left: '64%', top: 80, width: '33%', height: 46 }}>{line('50%', { background: '#212529', opacity: 0.6 })}
        <div style={{ display: 'flex', gap: 4, margin: '7px 8px 0' }}>
          {['#10b77f', '#fd7e14', '#7b61ff'].map((c) => <span key={c} style={{ width: 14, height: 14, borderRadius: '50%', background: `linear-gradient(135deg,#f6c45a,${c})` }} />)}
        </div>
      </div>
      <div className="ob-md" style={{ left: '64%', top: 138, width: '33%', height: 46 }}>{line('50%', { background: '#212529', opacity: 0.6 })}<div style={{ margin: '6px 8px 0', height: 12, borderRadius: 4, background: '#dcebfe' }} /></div>
      <div className="ob-spot-mini" />
      <div className="ob-pop-mini">
        <span style={{ height: 5, width: '60%', borderRadius: 3, background: '#212529' }} />
        <span style={{ height: 4, borderRadius: 3, background: '#dee2e6' }} />
        <span style={{ display: 'flex', justifyContent: 'flex-end' }}><span style={{ height: 10, width: 34, borderRadius: 3, background: '#10b77f' }} /></span>
      </div>
      <i className="bi bi-cursor-fill ob-cursor" />
    </div>
  );
}

export const SCENES = {
  'boas-vindas': WelcomeScene,
  licoes: LessonsScene,
  ranking: RankingScene,
  conquistas: AchievementsScene,
  lex: LexScene,
  tour: TourScene,
};
