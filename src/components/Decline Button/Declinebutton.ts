export enum declinebuttonAttribute {
  "declinebutton" = "declinebutton",
}

class Declinebutton extends HTMLElement {
  declinebutton?: string;

  static get observedAttributes() {
    const deletebuttonattrs: Record<declinebuttonAttribute, null> = {
      declinebutton: null,
    };
    return Object.keys(deletebuttonattrs);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(
    propName: declinebuttonAttribute,
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
            <img ="${this.declinebutton}" class="declinebtn">
        </button>
        `;
    }
  }
}

customElements.define("declinebutton-component", Declinebutton);
export default Declinebutton;
