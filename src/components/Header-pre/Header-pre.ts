export enum headerpreAttribute {
  "logo" = "logo",
  "loginbtn" = "loginbtn",
}

class Headerpre extends HTMLElement {
  logo?: string;
  loginbtn?: string;

  static get observedAttributes() {
    const headerattrs: Record<headerpreAttribute, null> = {
      logo: null,
      loginbtn: null,
    };

    return Object.keys(headerattrs);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(
    propName: headerpreAttribute,
    _: string | undefined,
    newValue: string | undefined
  ) {
    this[propName] = newValue;

    this.render();
  }

  render(){
    if(this.shadowRoot) {
        this.shadowRoot.innerHTML = `
        <section class="headerpre">
            <section class= "logo">
                 <a href="#!" class="brand-logo 2botonlogo"><img class="logoDogeet2" src="${this.logo}"></a>
            </section>
            <section class="login">
                <button class="loginbtn" src="${this.loginbtn}"></button>
            </section>
        </section>
        `
    }
  }
}

customElements.define("header-pre", Headerpre);
export default Headerpre;