# Apresentação e tour guiado — LGPD Play

Onboarding do primeiro acesso: um **carrossel de apresentação** (6 slides) e um **tour guiado** (6 passos) pela dashboard.

- **Design / handoff:** Figma › Responsividade › página *Apresentação e tour guiado* (telas, componentes, protótipo e o card **Instructions** com as regras de negócio).
- **Protótipo HTML navegável:** [`prototipo/`](prototipo/)
- **Componentes React:** [`src/components/onboarding/`](src/components/onboarding/)
- **Demo (dashboard + componentes):** [`src/demo/`](src/demo/)

## Rodar

```bash
npm install
npm run dev          # demo React em http://localhost:5173
npm run prototipo    # protótipo HTML original em http://localhost:8846/Tour%20Guiado.dc.html
```

Para rever o primeiro acesso na demo, limpe o estado no console do navegador:
`localStorage.removeItem('lgpdplay.onboarding.v1')`.

## Usar os componentes

```jsx
import { GuidedTour, Toast, WelcomeCarousel, useOnboarding } from './components/onboarding';

function Home() {
  const ob = useOnboarding({ storage: meuAdaptadorDoPerfil, blocked: termosPendentes });
  const menuOpen = menuAberto || ob.activeStepId === 'perfil'; // passo 6 abre o menu
  const chatOpen = chatAberto || ob.activeStepId === 'lex';    // passo 5 abre a Lex

  return (
    <>
      {/* dashboard com os alvos marcados: data-tour="navbar|nav|licoes|ranking|conquistas|lex|perfilmenu" */}
      <WelcomeCarousel open={ob.welcomeOpen} onClose={ob.closeWelcome} onStartTour={() => ob.startTour(0)} />
      <GuidedTour open={ob.tourOpen} step={ob.step} onStepChange={ob.setStep}
        onPause={ob.pauseTour} onSkip={ob.skipTour} onFinish={ob.finishTour} />
      <Toast toast={ob.toast} onClose={ob.dismissToast} />
    </>
  );
}
```

No menu do usuário, use `ob.menuTourLabel` (vira “Continuar tour · passo N de 6” quando há tour pausado),
`ob.startTourFromMenu()`, `ob.openWelcome()` e `ob.hint` (indicador verde no avatar).

| Arquivo | O que faz |
| --- | --- |
| `content.js` | Textos dos slides, dos passos e dos avisos. Os passos apontam para seletores `data-tour`. |
| `useOnboarding.js` | Regras de negócio: abre no primeiro acesso, pausa/pula/conclui, avisos, rótulo do menu, estado salvo. |
| `WelcomeCarousel.jsx` | Modal do carrossel: barras de progresso com autoplay (7 s, pausa no hover), teclado, arrastar, “Pular”. |
| `Scenes.jsx` | Ilustrações animadas do palco de cada slide. |
| `GuidedTour.jsx` | Destaque + balão do tour: rolagem até o alvo, posicionamento, seta, teclado. |
| `placement.js` | Cálculo do lado do balão (abaixo › acima › esquerda › direita › base da tela). |
| `Toast.jsx` | Aviso de status com ação (“Continuar” / “Refazer”). |
| `onboarding.css` | Estilos e animações (prefixo `ob-`), responsivo e “reduzir movimento”. |

### Persistência

O estado é `{ welcomeSeen, tour: { status, step } }`. A regra é **abrir uma única vez por usuário em qualquer
dispositivo**, então em produção passe um `storage` que leia/grave no perfil do usuário no servidor:

```js
const perfilStorage = {
  load: () => usuario.onboarding ?? null,         // vem junto com o perfil
  save: (estado) => api.patch('/me/onboarding', estado),
};
```

O `localStorageAdapter()` padrão serve apenas para a demo.

## Regras de negócio (resumo)

- A apresentação abre sozinha no **primeiro acesso** à dashboard, uma única vez por usuário, e nunca por cima de outro modal obrigatório.
- Fechar (X, Esc, clique fora ou “Explorar sozinho”) mostra o aviso “Você pode rever a apresentação e fazer o tour pelo menu do seu perfil.” e acende o indicador no avatar.
- O tour só começa por ação do usuário: “Fazer tour guiado” no último slide ou no menu do usuário.
- Tour: X/Esc **pausa** (aviso com “Continuar”, menu passa a “Continuar tour · passo N de 6”); “Pular tour” **encerra** (aviso com “Refazer”); “Concluir” **finaliza** (aviso com “Refazer”, sem XP).
- Passo 5 abre o painel da Lex e o passo 6 abre o menu do perfil só enquanto estão ativos.
- Se o alvo estiver oculto (links da barra no celular), o destaque vai para a barra superior inteira.
- Todas as animações respeitam “reduzir movimento” (sem autoplay, cenas estáticas no estado final).

Regras completas: card **Instructions** no Figma.

## Ponto em aberto

O `Button` do design system usa **texto preto** no botão primário verde (contraste AA); o Figma mostra **texto branco**.
Os componentes seguem o DS via `--ob-primary-fg: #000` em `onboarding.css` — troque o valor quando a decisão for tomada.
Na integração, os botões `ob-btn` podem ser substituídos pelo `Button` do DS do projeto.
