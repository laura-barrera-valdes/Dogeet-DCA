import { loadCss } from "../../utils/styles";
import styles from "./ShadowContainer.css";

export enum shadowcontAttribute {
  "thetitle" = "thetitle",
}

class MyShadowCont extends HTMLElement {
  thetitle?: string;

  static get observedAttributes() {
    const shadowattrs: Record<shadowcontAttribute, null> = {
      thetitle: null,
    };

    return Object.keys(shadowattrs);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(
    propName: shadowcontAttribute,
    _: string | undefined,
    newValue: string | undefined
  ) {
    this[propName] = newValue;

    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
      <section class="shadowcont">
      <p class="thetitlee">${this.thetitle}</p>
      </section>
      `;
      loadCss(this, styles);
    }
  }
}

customElements.define("shadow-container", MyShadowCont);
export default MyShadowCont;
