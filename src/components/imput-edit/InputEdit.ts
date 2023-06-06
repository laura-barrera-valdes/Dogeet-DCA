import { loadCss } from "../../utils/styles";
import styles from "./Input.css";

export enum inputeditAttribute {
  "placeholder" = "placeholder",
  "icon" = "icon",
  "info" = "info",
}

class InputEdit extends HTMLElement {
  placeholder?: string;
  icon?: string;
  info?: string;

  static get observedAttributes() {
    const inputeditattrs: Record<inputeditAttribute, null> = {
      placeholder: null,
      icon: null,
      info: null,
    };
    return Object.keys(inputeditattrs);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(
    propName: inputeditAttribute,
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
          <input>
            <p>${this.info}</p>
          </input>
        </section>
      `;
      loadCss(this, styles);
    }
  }
}

customElements.define("input-edit", InputEdit);
export default InputEdit;
