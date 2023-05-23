import styles from "./Login.css";
import "../../components/export";
import { inputAttribute } from "../../components/Input-type1/Input";
import { buttonAttribute } from "../../components/Button/Button";
import { loadCss } from "../../utils/styles";
import { dispatch } from "../../store/Index";
import { navigatet } from "../../store/Action";
import { Screens } from "../../types/Store";

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
      this.shadowRoot.innerHTML = ``;
      loadCss(this, styles);
    }

    const div = this.ownerDocument.createElement("div");
    div.className = "divcenter";
    this.shadowRoot?.appendChild(div);

    const section = this.ownerDocument.createElement("section");
    section.className = "centersection";
    div.appendChild(section);

    const article = this.ownerDocument.createElement("article");
    section.className = "article";
    this.shadowRoot?.appendChild(article);

    const header = this.ownerDocument.createElement("header-pre");
    header.className = "Loginheader";
    this.shadowRoot?.appendChild(header);

    const isotipo = this.ownerDocument.createElement("img");
    isotipo.className = "isotipo";
    isotipo.src = "../../../dist/assets/logo/isotipo.png";
    section.appendChild(isotipo);

    const title = this.ownerDocument.createElement("h3");
    title.className = "logintitle";
    title.innerHTML = "Please login";
    section.appendChild(title);

    const email = this.ownerDocument.createElement("input-component");
    email.className = "inputemail";
    email.setAttribute(inputAttribute.placeholder, "E-mail");
    section.appendChild(email);

    const password = this.ownerDocument.createElement("input-component");
    password.className = "inputpassword";
    password.setAttribute(inputAttribute.placeholder, "Password");
    password.className = "input-password";
    section.appendChild(password);

    const loginoption = this.ownerDocument.createElement("p");
    loginoption.className = "logintext";
    loginoption.innerHTML = "If you don't have an account, please Register";
    section.appendChild(loginoption);

    const loginbtn = this.ownerDocument.createElement("button-component");
    loginbtn.className = "loginbtn";
    loginbtn.setAttribute(buttonAttribute.button, "Login");
    loginbtn.addEventListener("click", () => {
      dispatch(navigatet(Screens.DASHBOARD))
    })
    section.appendChild(loginbtn);
  }
}

customElements.define("login-screen", Login);
