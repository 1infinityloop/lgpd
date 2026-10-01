/**
 * Calcula onde o balão do tour fica em relação ao alvo.
 * Ordem de preferência: abaixo, acima, à esquerda, à direita; se nada couber, centralizado na base.
 * `place` indica o lado do balão; a seta aponta para o alvo (ax/ay = posição da seta no balão).
 */
export function computePlacement(rect, pop, viewport, { pad = 8, gap = 16, margin = 12 } = {}) {
  const t = { x: rect.left - pad, y: rect.top - pad, w: rect.width + pad * 2, h: rect.height + pad * 2 };
  const { width: vw, height: vh } = viewport;
  const W = pop.width, H = pop.height;
  const cx = t.x + t.w / 2, cy = t.y + t.h / 2;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const fits = {
    bottom: t.y + t.h + gap + H < vh - 8,
    top: t.y - gap - H > 8,
    left: t.x - gap - W > 8,
    right: t.x + t.w + gap + W < vw - 8,
  };
  const place = ['bottom', 'top', 'left', 'right'].find((p) => fits[p]) || 'none';
  let x, y, ax = 0, ay = 0;
  if (place === 'bottom' || place === 'top') {
    x = clamp(cx - W / 2, margin, vw - W - margin);
    y = place === 'bottom' ? t.y + t.h + gap : t.y - gap - H;
    ax = clamp(cx - x, 20, W - 20);
  } else if (place === 'left' || place === 'right') {
    y = clamp(cy - H / 2, margin, vh - H - margin);
    x = place === 'left' ? t.x - gap - W : t.x + t.w + gap;
    ay = clamp(cy - y, 20, H - 20);
  } else {
    x = (vw - W) / 2;
    y = vh - H - 16;
  }
  const r = Math.round;
  return { spot: { x: r(t.x), y: r(t.y), w: r(t.w), h: r(t.h) }, x: r(x), y: r(y), place, ax: r(ax), ay: r(ay) };
}
