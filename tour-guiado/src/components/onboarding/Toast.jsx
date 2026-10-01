/** Aviso de status (apresentação fechada, tour pausado/encerrado/concluído). */
export function Toast({ toast, onClose }) {
  if (!toast) return null;
  const { message, icon = 'bi-info-circle-fill', actionLabel, onAction } = toast;
  return (
    <div role="status" className="ob-toast">
      <span className="ob-toast-ico"><i className={`bi ${icon}`} /></span>
      <div className="ob-toast-msg">{message}</div>
      {actionLabel && (
        <button className="ob-toast-action" onClick={() => { onClose(); onAction && onAction(); }}>{actionLabel}</button>
      )}
      <button className="ob-toast-close" onClick={onClose} aria-label="Fechar"><i className="bi bi-x-lg" /></button>
    </div>
  );
}
