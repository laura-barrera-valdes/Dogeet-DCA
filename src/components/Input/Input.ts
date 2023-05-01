export enum inputAttribute {
  "placeholder" = "placeholder",
}

class Input extends HTMLElement {
  placeholder?: string;

  static get observedAttributes() {
    const registerattrs: Record<inputAttribute, null> = {
      placeholder: null,
    };
    return Object.keys(registerattrs);
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
        <input placeholder="${this.placeholder}"></input>
      `;
    }
  }
}

customElements.define("input-component", Input);
export default Input;
