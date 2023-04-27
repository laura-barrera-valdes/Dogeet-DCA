import { loadCss } from "../../utils/styles";
import styles from "./Navbar.css";

export enum navbarAttribute {
  "navbarlogo" = "navbarlogo",
  "navbarhome" = "navbarhome",
  "navbarcommunity" = "navbarcommunity",
  "navbarchat" = "navbarchat",
  "navbarnotifications" = "navbarnotifications",
  "navbarnameprofile" = "navbarnameprofile",
  "navbarprofile" = "navbarprofile",
}

class NavbarCard extends HTMLElement {
  navbarlogo?: string;
  navbarhome?: string;
  navbarcommunity?: string;
  navbarchat?: string;
  navbarnotifications?: string;
  navbarnameprofile?: string;
  navbarprofile?: string;

  static get observedAttributes() {
    const navattrs: Record<navbarAttribute, null> = {
      navbarlogo: null,
      navbarhome: null,
      navbarcommunity: null,
      navbarchat: null,
      navbarnotifications: null,
      navbarnameprofile: null,
      navbarprofile: null,
    };
    return Object.keys(navattrs);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(
    propName: navbarAttribute,
    _: string | undefined,
    newValue: string | undefined
  ) {
    this[propName] = newValue;

    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <section class="navbarfixed">
            <section class="navbar">
                <section class="logo">
                    <a href="#!" class="brand-logo botonlogo"><img class="logoDogeet" src="${this.navbarlogo}"></a>
                </section>
                <section class="menu">
                    <a href="#!" class="iconnav"><img class="iconnav" src="${this.navbarhome}"></a>
                    <a href="#!" class="iconnav"><img class="iconnav" src="${this.navbarcommunity}"></a>
                    <a href="#!" class="iconnav"><img class="iconnav" src="${this.navbarchat}"></a>
                </section>
                <section class="navprofile">
                    <a href="#!" class="brand-logo botonlogo"><img class="iconnav" src="${this.navbarnotifications}"></a>
                    <p>${this.navbarnameprofile}</p>
                    <img class="navimgprofile" src="${this.navbarprofile}">
                </section>
            </section>
        </section>
        `;
      loadCss(this, styles);
    }
  }
}

customElements.define("nav-bar", NavbarCard);
export default NavbarCard;
