import { useState } from 'react';
import { GuidedTour, Toast, WelcomeCarousel, useOnboarding } from '../components/onboarding/index.js';
import { Dashboard } from './Dashboard.jsx';

// Para rever o primeiro acesso, limpe o estado: localStorage.removeItem('lgpdplay.onboarding.v1')
export function App() {
  const ob = useOnboarding();
  const [menu, setMenu] = useState(false);
  const [chat, setChat] = useState(false);

  // Passos 5 e 6 abrem a Lex e o menu do perfil só enquanto estão ativos.
  const menuOpen = menu || ob.activeStepId === 'perfil';
  const chatOpen = chat || ob.activeStepId === 'lex';

  return (
    <>
      <Dashboard
        menuOpen={menuOpen}
        onToggleMenu={() => { setMenu((m) => !m); ob.clearHint(); }}
        onCloseMenu={() => setMenu(false)}
        chatOpen={chatOpen}
        onOpenChat={() => setChat(true)}
        onCloseChat={() => (ob.activeStepId === 'lex' ? ob.setStep(ob.step + 1) : setChat(false))}
        hint={ob.hint}
        menuTourLabel={ob.menuTourLabel}
        onOpenWelcome={() => { setMenu(false); ob.openWelcome(); }}
        onStartTour={() => { setMenu(false); ob.startTourFromMenu(); }}
      />
      <WelcomeCarousel open={ob.welcomeOpen} onClose={ob.closeWelcome} onStartTour={() => ob.startTour(0)} />
      <GuidedTour
        open={ob.tourOpen} step={ob.step} onStepChange={ob.setStep}
        onPause={ob.pauseTour} onSkip={ob.skipTour} onFinish={ob.finishTour}
      />
      <Toast toast={ob.toast} onClose={ob.dismissToast} />
    </>
  );
}
