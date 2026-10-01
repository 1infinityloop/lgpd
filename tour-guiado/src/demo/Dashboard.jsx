import cardsHtml from './dashboard-cards.html?raw';

/**
 * Dashboard de demonstração (Figma › Wireframes › Home).
 * Os alvos do tour são marcados com data-tour: navbar, nav, licoes, ranking, conquistas, lex, perfilmenu.
 * Os cards são HTML estático copiado do protótipo; barra superior, menu do usuário e Lex são React
 * porque o tour precisa abri-los (passos 5 e 6).
 */
export function Dashboard({ menuOpen, onToggleMenu, onCloseMenu, chatOpen, onOpenChat, onCloseChat, hint, menuTourLabel, onOpenWelcome, onStartTour }) {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <div aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, top: 51, height: 511, background: 'linear-gradient(180deg,#f0fdf7 3.033%,rgba(255,255,255,0) 100%)', pointerEvents: 'none' }} />

      <nav className="nav" data-tour="navbar">
        <div className="nav-left">
          <img className="nav-logo" src="./assets/logo-tjam-play.svg" alt="TJAM Play" width="153" height="27" style={{ display: 'block', flexShrink: 0, marginBottom: -7 }} />
          <div className="nav-links" data-tour="nav">
            <a href="#" className="nav-link active"><i className="bi bi-house-fill" /> Início</a>
            <a href="#" className="nav-link"><i className="bi bi-book-fill" /> Unidades</a>
            <a href="#" className="nav-link nl-opt"><i className="bi bi-shield-fill" /> Desafio Semanal</a>
            <a href="#" className="nav-link"><i className="bi bi-trophy-fill" /> Ranking</a>
            <a href="#" className="nav-link nl-opt"><i className="bi bi-people-fill" /> Amigos</a>
          </div>
        </div>
        <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: 24, flexShrink: 0 }}>
          <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div className="status-badge" style={{ background: '#10b77f' }}><i className="bi bi-lightning-charge-fill" /> 300 XP</div>
            <div className="status-badge" style={{ background: '#dc3545' }}><i className="bi bi-suit-heart-fill" /> 5</div>
          </div>
          <div style={{ position: 'relative' }}>
            <button onClick={onToggleMenu} aria-label="Perfil" aria-expanded={menuOpen} style={{ padding: 0, border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, width: 72, color: '#212529' }}>
              <img src="./assets/avatar-nav.png" alt="" width="32" height="32" style={{ width: 32, height: 32, borderRadius: 999, objectFit: 'cover', background: '#fff', display: 'block' }} />
              <i className="bi bi-chevron-down" style={{ fontSize: 16, transition: 'transform .2s', transform: `rotate(${menuOpen ? 180 : 0}deg)` }} />
            </button>
            {hint && !menuOpen && (
              <span style={{ position: 'absolute', top: -3, left: 22, width: 12, height: 12, borderRadius: '50%', background: '#10b77f', border: '2px solid #fff', animation: 'ringPulse 1.6s ease-out infinite', pointerEvents: 'none' }} />
            )}
            {menuOpen && (
              <div data-tour="perfilmenu" className="menu">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 10px 12px', borderBottom: '1px solid #dee2e6', marginBottom: 6 }}>
                  <span style={{ width: 40, height: 40, borderRadius: '50%', background: '#cdeee1', color: '#0a6e4c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, flexShrink: 0, boxShadow: '0 0 0 2px #fff,0 0 0 4px #7620c1' }}>KO</span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 15, fontWeight: 700 }}>Kátia Oliveira</div>
                    <div style={{ fontSize: 13, color: '#6c757d' }}>Nível 1 · Liga Recruta</div>
                  </div>
                </div>
                <button className="menu-item"><i className="bi bi-person-gear" /> Configurações de perfil</button>
                <button className="menu-item"><i className="bi bi-bank" /> Referências</button>
                <div style={{ height: 1, background: '#dee2e6', margin: '6px 4px' }} />
                <button className="menu-item" onClick={onOpenWelcome}><i className="bi bi-collection-play" style={{ color: '#047b56' }} /> Ver apresentação</button>
                <button className="menu-item" onClick={onStartTour}><i className="bi bi-signpost-split" style={{ color: '#047b56' }} /> <span style={{ flex: 1 }}>{menuTourLabel}</span></button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {menuOpen && <div onClick={onCloseMenu} style={{ position: 'fixed', inset: 0, zIndex: 15 }} />}

      <div dangerouslySetInnerHTML={{ __html: cardsHtml }} />

      {!chatOpen && (
        <button onClick={onOpenChat} className="lex-fab lex-orb" aria-label="Abrir a Lex, assistente de LGPD">
          <img className="bob" src="./assets/lex-happy.svg" alt="" width="46" height="46" />
        </button>
      )}
      {chatOpen && (
        <div data-tour="lex" className="lex-panel" role="dialog" aria-label="Lex, assistente de LGPD">
          <div style={{ background: 'linear-gradient(90deg,#12b981 0%,#0c8f66 100%)', padding: '20px 16px 18px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', width: '100%' }}>
              <button className="lex-hbtn" aria-label="Histórico"><i className="bi bi-clock-history" /></button>
              <div className="lex-orb bob" style={{ width: 64, height: 64 }}><img src="./assets/lex-happy.svg" alt="" width="48" height="48" /></div>
              <button onClick={onCloseChat} className="lex-hbtn" aria-label="Minimizar"><i className="bi bi-dash-lg" /></button>
            </div>
            <p style={{ fontWeight: 600, fontSize: 17, color: '#fff' }}>Lex</p>
          </div>
          <div style={{ flex: 1, minHeight: 0, background: '#f8f9fb', padding: 16, display: 'flex', flexDirection: 'column', gap: 12, overflowY: 'auto' }}>
            <div className="slide-up" style={{ '--d': '.15s', alignSelf: 'flex-end', maxWidth: 320, background: '#10b77f', color: '#fff', borderRadius: '15px 15px 4px 15px', padding: '10px 13px', fontSize: 13.5, lineHeight: 1.45 }}>Oi Lex! Voltei :) Tenho uma dúvida sobre retenção de dados de ex-funcionários.</div>
            <div className="slide-up" style={{ '--d': '.35s', alignSelf: 'flex-start', maxWidth: 320, background: '#fff', border: '1px solid #e7ebf0', color: '#2a3138', borderRadius: '15px 15px 15px 4px', padding: '11px 13px', fontSize: 13.5, lineHeight: 1.5 }}>Que bom te ver de volta! Sobre o que você quer tirar dúvida hoje?</div>
          </div>
          <div style={{ background: '#fff', borderTop: '1px solid #eef1f4', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 6, background: '#f1f3f6', border: '1px solid #e3e7ec', borderRadius: 999 }}>
              <span style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6c757d' }}><i className="bi bi-paperclip" /></span>
              <span style={{ flex: 1, fontSize: 13.5, color: '#2a3138' }}>Digite sua dúvida sobre LGPD...</span>
              <span style={{ width: 34, height: 34, borderRadius: 17, background: '#10b77f', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><i className="bi bi-send" /></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
