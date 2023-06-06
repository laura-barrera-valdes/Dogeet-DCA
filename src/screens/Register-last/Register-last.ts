import styles from "./Register-last.css";
import { loadCss } from "../../utils/styles";

import "../../components/export";
import { inputAttribute } from "../../components/Input-type1/Input";
import { buttonAttribute } from "../../components/Button/Button";
import { dispatch } from "../../store/Index";
import { navigatet } from "../../store/Actions";
import { Screens } from "../../types/Navigation";
import Firebase from "../../utils/firebase";

const newUser = { email: "", password: "" };

class RegisterLast extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  async handleSigninButton() {
    await Firebase.registerUser(newUser);
    dispatch(navigatet(Screens.REGISTER));
    alert("You have registered your email successfully")
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

    const email = this.ownerDocument.createElement("input");
    email.className = "emailregister";
    email.placeholder = "E-mail";
    email.addEventListener(
      "change",
      (e: any) => (newUser.email = e.target.value)
    );
    article.appendChild(email);

    const password = this.ownerDocument.createElement("input");
    password.className = "passwordregister";
    password.placeholder = "Password";
    password.addEventListener(
      "change",
      (e: any) => (newUser.password = e.target.value)
    );
    article.appendChild(password);

    // const email = this.ownerDocument.createElement("input-component");
    // email.className = "emailregister";
    // email.setAttribute(inputAttribute.placeholder, "E-mail");
    // email.addEventListener(
    //   "change",
    //   (e: any) => (newUser.email = e.target.value)
    // );
    // article.appendChild(email);

    // const password = this.ownerDocument.createElement("input-component");
    // password.className = "passwordregister";
    // password.setAttribute(inputAttribute.placeholder, "Password");
    // password.addEventListener(
    //   "change",
    //   (e: any) => (newUser.email = e.target.value)
    // );
    // article.appendChild(password);

    // const confirmpassword = this.ownerDocument.createElement("input-component");
    // confirmpassword.className = "confirmpassword";
    // confirmpassword.setAttribute(
    //   inputAttribute.placeholder,
    //   "Confirm your password"
    // );
    // article.appendChild(confirmpassword);

    const registerbtn = this.ownerDocument.createElement("button-component");
    registerbtn.className = "registerbtnlast";
    registerbtn.setAttribute(buttonAttribute.button, "Continue");
    registerbtn.addEventListener("click", this.handleSigninButton);
    article.appendChild(registerbtn);

    const imgback = this.ownerDocument.createElement("img");
    imgback.className = "imgbackground";
    imgback.src = "../dist/assets/image/backgrounds/dog.png";
    this.shadowRoot?.appendChild(imgback);
  }
}

customElements.define("registerlast-screen", RegisterLast);
