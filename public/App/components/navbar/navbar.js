export var navbarAttribute;
(function (navbarAttribute) {
    navbarAttribute["navbarlogo"] = "navbarlogo";
    navbarAttribute["navbarhome"] = "navbarhome";
    navbarAttribute["navbarcommunity"] = "navbarcommunity";
    navbarAttribute["navbarchat"] = "navbarchat";
    navbarAttribute["navbarnotifications"] = "navbarnotifications";
    navbarAttribute["navbarnameprofile"] = "navbarnameprofile";
    navbarAttribute["navbarprofile"] = "navbarprofile";
})(navbarAttribute || (navbarAttribute = {}));
class NavbarCard extends HTMLElement {
    static get observedAttributes() {
        const navattrs = {
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
    attributeChangedCallback(propName, _, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
        <link rel= "stylesheet" href="./App/components/navbar/navbar.css">
        <section class="communityCard">
            <img src="${this.navbarlogo}">
                <section class="menu">
                    <img src="${this.navbarhome}">
                    <img src="${this.navbarcommunity}">
                    <img src="${this.navbarchat}">
                </section>
                <section class="navprofile">
                    <img src="${this.navbarnotifications}">
                    <p>${this.navbarnameprofile}</p>
                    <img src="${this.navbarprofile}">
                </section>
        </section>
        `;
        }
    }
}
customElements.define("nav-bar", NavbarCard);
export default NavbarCard;
