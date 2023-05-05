import "./components/export";
import "./screens/Dashboard/dashboard";
import "./screens/Login/Login";
import "./screens/Register/Register";
import "./screens/Register-last/Register-last";
import { addObserver, appState } from "./store/Index";
import { Screens } from "./types/store";

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) this.shadowRoot.innerHTML = "";
    
  
    switch (appState.screen) {
      case Screens.DASHBOARD:
        const dashboard = this.ownerDocument.createElement("app-dashboard");
        this.shadowRoot?.appendChild(dashboard);

        break;

      case Screens.LOGIN:
        const login = this.ownerDocument.createElement("login-screen");
        this.shadowRoot?.appendChild(login);

        break;

      case Screens.REGISTER:
        const register = this.ownerDocument.createElement("app-register");
        this.shadowRoot?.appendChild(register);

        break;

      case Screens.REGISTERLAST:
        const registerlast = this.ownerDocument.createElement(
          "registerlast-screen"
        );
        this.shadowRoot?.appendChild(registerlast);

      default:
        break;
    }
  }
}

customElements.define("app-container", AppContainer);
