export enum navbarAttribute {
    "navbarlogo" = "navbarlogo",
    "navbarhome" = "navbarhome",
    "navbarcommunity" = "navbarcommunity",
    "navbarchat" = "navbarchat",
    "navbarnotifications" = "navbarnotifications",
    "navbarnameprofile" = "navbarnameprofile",
    "navbarprofile" = "navbarprofile",

    
}

class NavbarCard extends HTMLElement{
    navbarlogo? : string;
    navbarhome? : string;
    navbarcommunity? : string;
    navbarchat? : string;
    navbarnotifications? : string;
    navbarnameprofile? : string;
    navbarprofile? :string;
    

    static get observedAttributes(){
        const navattrs: Record<navbarAttribute, null> = {
            navbarlogo : null,
            navbarhome : null,
            navbarcommunity : null,
            navbarchat : null,
            navbarnotifications : null,
            navbarnameprofile : null,
            navbarprofile : null,
        };
        return Object.keys(navattrs);
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: navbarAttribute,
        _: string | undefined,
        newValue: string | undefined
){
    
   this[propName] = newValue;
   

    this.render();
}

render(){
    if (this.shadowRoot){
        this.shadowRoot.innerHTML = `
        <section class="communityCard">
            <img class="logoDogeet" src="${this.navbarlogo}">
                <section class="menu">
                    <img class="iconnav" src="${this.navbarhome}">
                    <img class="iconnav" src="${this.navbarcommunity}">
                    <img class="iconnav" src="${this.navbarchat}">
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