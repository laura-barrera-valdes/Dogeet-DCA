export enum chatlistAttribute {
    "chatlistimage" = "chatlistimage",
    "chatlistname" = "chatlistname",
    "chatlisttext" = "chatlisttext",
    "chatlistwhen" = "chatlistwhen",
}

class chatlistCard extends HTMLElement{
    chatlistimage?: string;
    chatlistname?: string;
    chatlisttext?: string;
    chatlistwhen?: string;
    

    static get observedAttributes(){
        const chatattrs: Record<chatlistAttribute, null> = {
            chatlistimage: null,
            chatlistname: null,
            chatlisttext: null,
            chatlistwhen: null,
        };
        return Object.keys(chatattrs);
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: chatlistAttribute,
        _: string | undefined,
        newValue: string | undefined
){
    
   this[propName] = newValue;
   

    this.render();
}

render(){
    if (this.shadowRoot){
        this.shadowRoot.innerHTML = `
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