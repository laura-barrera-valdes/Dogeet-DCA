import { loadCss } from "../../utils/styles";
import styles from "./Button.css";

export enum buttonAttribute {
  "button" = "button",
}

class Button extends HTMLElement {
  button?: string;

  static get observedAttributes() {
    const buttonattrs: Record<buttonAttribute, null> = {
      button: null,
    };
    return Object.keys(buttonattrs);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(
    propName: buttonAttribute,
    _: string | undefined,
    newValue: string | undefined
  ) {
    this[propName] = newValue;

    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <button class="button-component">${this.button}</button>
        `;
      loadCss(this, styles);
    }
  }
}

customElements.define("button-component", Button);
export default Button;
