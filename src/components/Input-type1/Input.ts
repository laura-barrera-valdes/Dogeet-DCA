import { loadCss } from "../../utils/styles";
import styles from "./Input.css";

export enum inputAttribute {
  "placeholder" = "placeholder",
  "icon" = "icon",
}

class Input extends HTMLElement {
  placeholder?: string;
  icon?: string;

  static get observedAttributes() {
    const inputattrs: Record<inputAttribute, null> = {
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
    propName: inputAttribute,
    _: string | undefined,
    newValue: string | undefined
  ) {
    this[propName] = newValue;

    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <section class="input1">
          <p>${this.placeholder}</p>
          <input></input>
        </section>
      `;
      loadCss(this, styles);
    }
  }
}

customElements.define("input-component", Input);
export default Input;
