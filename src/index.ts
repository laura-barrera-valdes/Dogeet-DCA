import "./components/export";
import "./screens/Dashboard/dashboard";
import "./screens/Login/Login";
import "./screens/Register/Register";
import { appState } from "./store/Index";
import { Screens } from "./types/Navigation";

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if(this.shadowRoot) this.shadowRoot.innerHTML = "";
    switch (appState.screen) {
      case Screens.Dashboard:
        const dashboard = this.ownerDocument.createElement("app-dashboard");
        this.shadowRoot?.appendChild(dashboard);
      
        break;
    
        case Screens.Login:
          const login = this.ownerDocument.createElement("login-screen");
          this.shadowRoot?.appendChild(login);

          break;

          case Screens.Register:
          const register = this.ownerDocument.createElement("app-register");
          this.shadowRoot?.appendChild(register);
      

      default:
        break;
    }

  }
  
}

customElements.define("app-container", AppContainer);
