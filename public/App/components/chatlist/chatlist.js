export var chatlistAttribute;
(function (chatlistAttribute) {
    chatlistAttribute["chatlistimage"] = "chatlistimage";
    chatlistAttribute["chatlistname"] = "chatlistname";
    chatlistAttribute["chatlisttext"] = "chatlisttext";
    chatlistAttribute["chatlistwhen"] = "chatlistwhen";
})(chatlistAttribute || (chatlistAttribute = {}));
class chatlistCard extends HTMLElement {
    static get observedAttributes() {
        const chatattrs = {
            chatlistimage: null,
            chatlistname: null,
            chatlisttext: null,
            chatlistwhen: null,
        };
        return Object.keys(chatattrs);
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
        <link rel= "stylesheet" href="./App/components/chatlist/chatlist.css">
        <section class="chatlistCard">
            <img class="chatlistimg" src="${this.chatlistimage}">
            <h4 class="chatlistname">${this.chatlistname}</h4>
            <p class="chatlisttext">${this.chatlisttext}</p>
            <p class="chatlistwhen">${this.chatlistwhen}</p>
        </section>
        `;
        }
    }
}
customElements.define("chat-list", chatlistCard);
export default chatlistCard;
