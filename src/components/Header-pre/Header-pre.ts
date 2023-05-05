import { loadCss } from "../../utils/styles";
import styles from "./Header-pre.css";

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
                    <img class="logoDogeet" src="../../../dist/assets/logo/Dogeet.png">
                </a>
            </article>
            <article class="register">
                <button class"registerbtn">Register</button>
            </article>
        </section>
      </div>
      `;
      loadCss(this, styles);
    }
  }
}

customElements.define("header-pre", Headerpre);
export default Headerpre;
