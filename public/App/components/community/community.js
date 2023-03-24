export var communityAttribute;
(function (communityAttribute) {
    communityAttribute["communityimage"] = "communityimage";
    communityAttribute["communityname"] = "communityname";
    communityAttribute["communitybreed"] = "communitybreed";
})(communityAttribute || (communityAttribute = {}));
class CommunityCard extends HTMLElement {
    static get observedAttributes() {
        const comattrs = {
            communityimage: null,
            communityname: null,
            communitybreed: null,
        };
        return Object.keys(comattrs);
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
        <link rel= "stylesheet" href="./App/components/community/community.css">
        <h2 class="coomunityTitle">Community</h2>
        <section class="communityCard">
            <img src="${this.communityimage}">
            <h4 class="communityname">${this.communityname}</h4>
            <p class="communitybreed">${this.communitybreed}</p>
            <button class="communitybtn">2</button>
        </section>
        `;
        }
    }
}
customElements.define("my-community", CommunityCard);
export default CommunityCard;
