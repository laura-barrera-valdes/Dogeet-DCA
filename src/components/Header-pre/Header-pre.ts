import { loadCss } from "../../utils/styles";
import styles from "./Header-pre.css";
import { buttonAttribute } from "../Button/Button";
import { dispatch } from "../../store/Index";
import { Screens } from "../../types/Navigation";
import { navigatet } from "../../store/Actions";

export enum headerpreAttribute {}

class Headerpre extends HTMLElement {
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
      <div class="navbarfixed">
        <section class="headerpre">
            <article class= "logo">
                <a href="#!" class="brand-logo 2botonlogo">
                    <img class="logoDogeet" src="../dist/assets/logo/Dogeet.png">
                </a>
            </article>
            <article class="register">
                <button class"registerbtn">LogIn</button>
            </article>
        </section>
      </div>
      `;
     } 
      loadCss(this, styles);
    
      const loginbtn = this.ownerDocument.createElement("button-component");
      loginbtn.className = "loginbtn";
      loginbtn.setAttribute(buttonAttribute.button, "LogIn");
      loginbtn.addEventListener("click", () => {
          dispatch(navigatet(Screens.LOGIN))
      })
  }
}

customElements.define("header-pre", Headerpre);
export default Headerpre;
