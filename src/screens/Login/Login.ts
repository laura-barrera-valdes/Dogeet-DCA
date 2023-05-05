import "../../components/export";
import {inputAttribute} from "../../components/Input/Input";
import  {buttonAttribute} from "../../components/Button/Button";


class Login extends HTMLElement {


  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if(this.shadowRoot) {
      this.shadowRoot.innerHTML= `
      <img src="../../../dist/assets/logo/isotipo.png">
      `
    }
    const header = this.ownerDocument.createElement("header-pre");
    this.shadowRoot?.appendChild(header);

    const title = this.ownerDocument.createElement("p");
    title.innerHTML = "Please login";
    this.shadowRoot?.appendChild(title);



    const email = this.ownerDocument.createElement("input-component");
    email.setAttribute(inputAttribute.placeholder, "E-mail");
    this.shadowRoot?.appendChild(email);

    const password = this.ownerDocument.createElement("input-component");
    password.setAttribute(inputAttribute.placeholder, "Password");
    password.className = "input-password";
    this.shadowRoot?.appendChild(password);

    const loginbtn = this.ownerDocument.createElement("button-component");
    loginbtn.setAttribute(buttonAttribute.button, "Login");
    this.shadowRoot?.appendChild(loginbtn);



    }
  }


customElements.define("login-screen", Login);
