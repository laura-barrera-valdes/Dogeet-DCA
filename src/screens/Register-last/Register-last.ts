import styles from "./Register-last.css";
import { loadCss } from "../../utils/styles";

import "../../components/export";
import { inputAttribute } from "../../components/Input-type1/Input";
import { buttonAttribute } from "../../components/Button/Button";
import { dispatch } from "../../store/Index";
import { navigatet } from "../../store/Action";
import { Screens } from "../../types/Store";

class RegisterLast extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = "";
    }
    loadCss(this, styles);

    const header = this.ownerDocument.createElement("header-pre");
    header.className = "headerregister";
    this.shadowRoot?.appendChild(header);

    const article = this.ownerDocument.createElement("article");
    article.className = "article";
    this.shadowRoot?.appendChild(article);

    const title = this.ownerDocument.createElement("p");
    title.className = "Registertitle2";
    title.innerHTML = "Register";
    article.appendChild(title);

    // const username = this.ownerDocument.createElement("input-component");
    // username.className = "inputusername";
    // username.setAttribute(inputAttribute.placeholder, "Enter your username");
    // article.appendChild(username);

    const email = this.ownerDocument.createElement("input-component");
    email.className = "emailregister";
    email.setAttribute(inputAttribute.placeholder, "E-mail");
    article.appendChild(email);

    const password = this.ownerDocument.createElement("input-component");
    password.className = "passwordregister";
    password.setAttribute(inputAttribute.placeholder, "Password");
    article.appendChild(password);

    const confirmpassword = this.ownerDocument.createElement("input-component");
    confirmpassword.className = "confirmpassword";
    confirmpassword.setAttribute(
      inputAttribute.placeholder,
      "Confirm your password"
    );
    article.appendChild(confirmpassword);

    const registerbtn = this.ownerDocument.createElement("button-component");
    registerbtn.className = "registerbtnlast";
    registerbtn.setAttribute(buttonAttribute.button, "Continue");
    registerbtn.addEventListener("click", () => {
      dispatch(navigatet(Screens.REGISTER)); /* LOGIN */
    });
    article.appendChild(registerbtn);

    const imgback = this.ownerDocument.createElement("img");
    imgback.className = "imgbackground";
    imgback.src = "../dist/assets/image/backgrounds/dog.png";
    this.shadowRoot?.appendChild(imgback);
  }
}

customElements.define("registerlast-screen", RegisterLast);
