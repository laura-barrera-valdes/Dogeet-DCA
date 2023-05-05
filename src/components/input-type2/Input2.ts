import { loadCss } from "../../utils/styles";
import styles from "./Input2.css";

export enum secondinputAttribute {
  "placeholder" = "placeholder",
  "icon" = "icon",
}

class secInput extends HTMLElement {
  placeholder?: string;
  icon?: string;

  static get observedAttributes() {
    const inputattrs: Record<secondinputAttribute, null> = {
      placeholder: null,
      icon: null,
    };
    return Object.keys(inputattrs);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(
    propName: secondinputAttribute,
    _: string | undefined,
    newValue: string | undefined
  ) {
    this[propName] = newValue;

    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
      <section class="input2">
            <img src="${this.icon}" class="icon">
            <p>${this.placeholder}</p>
        <input></input>
    </section>
      `;
      loadCss(this, styles);
    }
  }
}

customElements.define("secinput-component", secInput);
export default secInput;