import styles from "./Login.css";
import "../../components/export";
import { inputAttribute } from "../../components/Input-type1/Input";
import { buttonAttribute } from "../../components/Button/Button";
import { loadCss } from "../../utils/styles";

class Login extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
      <img src="../../../dist/assets/logo/isotipo.png">
      `;
      loadCss(this, styles);
    }
    const header = this.ownerDocument.createElement("header-pre");
    header.className = "Loginheader";
    this.shadowRoot?.appendChild(header);

    const title = this.ownerDocument.createElement("p");
    title.className = "logintitle";
    title.innerHTML = "Please login";
    this.shadowRoot?.appendChild(title);

    const email = this.ownerDocument.createElement("input-component");
    email.className = "inputemail";
    email.setAttribute(inputAttribute.placeholder, "E-mail");
    this.shadowRoot?.appendChild(email);

    const password = this.ownerDocument.createElement("input-component");
    password.className = "inputpassword";
    password.setAttribute(inputAttribute.placeholder, "Password");
    password.className = "input-password";
    this.shadowRoot?.appendChild(password);

    const loginoption = this.ownerDocument.createElement("p");
    loginoption.className = "logintext";
    loginoption.innerHTML = "If you don't have an account, please Register";
    this.shadowRoot?.appendChild(loginoption);

    const loginbtn = this.ownerDocument.createElement("button-component");
    loginbtn.className = "loginbtn";
    loginbtn.setAttribute(buttonAttribute.button, "Login");
    this.shadowRoot?.appendChild(loginbtn);
  }
}

customElements.define("login-screen", Login);
