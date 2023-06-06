export enum acceptbuttonAttribute {
  "accebutton" = "acceptbutton",
}

class Acceptbutton extends HTMLElement {
  acceptbutton?: string;

  static get observedAttributes() {
    const acceptbuttonattrs: Record<acceptbuttonAttribute, null> = {
      acceptbutton: null,
    };
    return Object.keys(acceptbuttonattrs);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(
    propName: acceptbuttonAttribute,
    _: string | undefined,
    newValue: string | undefined
  ) {
    this[propName] = newValue;

    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <button>
            <img ="${this.acceptbutton}" class="acceptbtn">
        </button>
        `;
    }
  }
}

customElements.define("acceptbutton-component", Acceptbutton);
export default Acceptbutton;
