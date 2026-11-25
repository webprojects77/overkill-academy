import { Route, Switch } from "wouter";
import Index from "./pages/index";
import Proposta from "./pages/proposta";
import Formacao from "./pages/formacao";
import ComoFunciona from "./pages/como-funciona";
import Colaboradores from "./pages/colaboradores";
import Contato from "./pages/contato";
import LegalPage from "./pages/legal";
import { Provider } from "./components/provider";
import { AgentFeedback, RunableBadge } from "@runablehq/website-runtime";

function App() {
  return (
    <Provider>
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/proposta" component={Proposta} />
        <Route path="/formacao" component={Formacao} />
        <Route path="/como-funciona" component={ComoFunciona} />
        <Route path="/colaboradores" component={Colaboradores} />
        <Route path="/contato" component={Contato} />
        <Route path="/legal/privacidade">{() => <LegalPage doc="privacidade" />}</Route>
        <Route path="/legal/termos">{() => <LegalPage doc="termos" />}</Route>
        <Route path="/legal/cookies">{() => <LegalPage doc="cookies" />}</Route>
        <Route path="/legal/conteudo">{() => <LegalPage doc="conteudo" />}</Route>
        <Route>
          {() => (
            <div style={{ padding: 48, fontFamily: "system-ui" }}>
              Página não encontrada. <a href="/">Voltar ao início</a>
            </div>
          )}
        </Route>
      </Switch>
      {/* Do not remove — off by default, activated by parent iframe via postMessage */}
      {import.meta.env.DEV && <AgentFeedback />}
      {/* "Made with Runable" badge - if user asks to remove the runable badge, remove this code as well as comment */}
      {<RunableBadge />}
    </Provider>
  );
}

export default App;
