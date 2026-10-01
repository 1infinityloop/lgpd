import { useCallback, useEffect, useRef, useState } from 'react';
import { MESSAGES, TOUR_STEPS } from './content.js';

/**
 * Estado salvo por usuário. Em produção, troque o storage pelo endpoint do perfil
 * (a regra é "abre uma única vez por usuário", em qualquer dispositivo).
 *
 * { welcomeSeen: boolean, tour: { status: 'idle'|'running'|'paused'|'skipped'|'done', step: number } }
 */
export const localStorageAdapter = (key = 'lgpdplay.onboarding.v1') => ({
  load() {
    try { return JSON.parse(localStorage.getItem(key)) || null; } catch { return null; }
  },
  save(state) {
    try { localStorage.setItem(key, JSON.stringify(state)); } catch { /* storage indisponível */ }
  },
});

const INITIAL = { welcomeSeen: false, tour: { status: 'idle', step: 0 } };
const TOAST_MS = 7000;

/**
 * Regras de negócio da apresentação e do tour.
 * @param {object} opts
 * @param {{load: () => object|null, save: (s: object) => void}} [opts.storage]
 * @param {boolean} [opts.autoOpen=true] abre a apresentação no primeiro acesso.
 * @param {boolean} [opts.blocked=false] true enquanto outro modal obrigatório estiver aberto.
 */
export function useOnboarding({ storage = localStorageAdapter(), autoOpen = true, blocked = false } = {}) {
  const [saved, setSaved] = useState(() => ({ ...INITIAL, ...(storage.load() || {}) }));
  const [welcomeOpen, setWelcomeOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [toast, setToast] = useState(null);
  const [hint, setHint] = useState(false);
  const toastTimer = useRef();

  const persist = useCallback((next) => {
    setSaved((prev) => {
      const merged = { ...prev, ...next, tour: { ...prev.tour, ...(next.tour || {}) } };
      storage.save(merged);
      return merged;
    });
  }, [storage]);

  const showToast = useCallback((t) => {
    clearTimeout(toastTimer.current);
    setToast(t);
    if (t) toastTimer.current = setTimeout(() => setToast(null), TOAST_MS);
  }, []);
  useEffect(() => () => clearTimeout(toastTimer.current), []);

  // Primeiro acesso: abre a apresentação uma única vez, e nunca por cima de outro modal obrigatório.
  useEffect(() => {
    if (autoOpen && !blocked && !saved.welcomeSeen && !tourOpen) setWelcomeOpen(true);
  }, [autoOpen, blocked, saved.welcomeSeen, tourOpen]);

  const openWelcome = useCallback(() => { setTourOpen(false); setWelcomeOpen(true); }, []);

  const closeWelcome = useCallback(() => {
    setWelcomeOpen(false);
    persist({ welcomeSeen: true });
    setHint(true);
    showToast({ message: MESSAGES.welcomeClosed, icon: 'bi-info-circle-fill' });
  }, [persist, showToast]);

  const startTour = useCallback((from = 0) => {
    setWelcomeOpen(false);
    showToast(null);
    setHint(false);
    persist({ welcomeSeen: true, tour: { status: 'running', step: from } });
    setStep(from);
    setTourOpen(true);
  }, [persist, showToast]);

  const pauseTour = useCallback(() => {
    setTourOpen(false);
    setHint(true);
    persist({ tour: { status: 'paused', step } });
    showToast({
      message: MESSAGES.tourPaused(step + 1, TOUR_STEPS.length), icon: 'bi-pause-circle-fill',
      actionLabel: 'Continuar', onAction: () => startTour(step),
    });
  }, [persist, showToast, startTour, step]);

  const skipTour = useCallback(() => {
    setTourOpen(false);
    setHint(true);
    persist({ tour: { status: 'skipped', step: 0 } });
    showToast({ message: MESSAGES.tourSkipped, icon: 'bi-info-circle-fill', actionLabel: 'Refazer', onAction: () => startTour(0) });
  }, [persist, showToast, startTour]);

  const finishTour = useCallback(() => {
    setTourOpen(false);
    persist({ tour: { status: 'done', step: 0 } });
    showToast({ message: MESSAGES.tourDone, icon: 'bi-check-circle-fill', actionLabel: 'Refazer', onAction: () => startTour(0) });
  }, [persist, showToast, startTour]);

  const paused = saved.tour.status === 'paused';
  return {
    // apresentação
    welcomeOpen, openWelcome, closeWelcome,
    // tour
    tourOpen, step, setStep, startTour, pauseTour, skipTour, finishTour,
    activeStepId: tourOpen ? TOUR_STEPS[step].id : null,
    // menu do usuário
    menuTourLabel: paused ? `Continuar tour · passo ${saved.tour.step + 1} de ${TOUR_STEPS.length}` : 'Fazer tour guiado',
    startTourFromMenu: () => startTour(paused ? saved.tour.step : 0),
    hint, clearHint: () => setHint(false),
    // aviso
    toast, dismissToast: () => showToast(null),
  };
}
