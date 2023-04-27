import { loadCss } from "../../utils/styles";
import styles from "./Chatlist.css";

export enum chatlistAttribute {
  "chatlistimage" = "chatlistimage",
  "chatlistname" = "chatlistname",
  "chatlisttext" = "chatlisttext",
  "chatlistwhen" = "chatlistwhen",
}

class chatlistCard extends HTMLElement {
  chatlistimage?: string;
  chatlistname?: string;
  chatlisttext?: string;
  chatlistwhen?: string;

  static get observedAttributes() {
    const chatattrs: Record<chatlistAttribute, null> = {
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

  attributeChangedCallback(
    propName: chatlistAttribute,
    _: string | undefined,
    newValue: string | undefined
  ) {
    this[propName] = newValue;

    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <section class="chatlistCard">
            <h2 class="title">Chats</h2>
            <article class="left">
                <img class="imgprofchat" class="chatlistimg" src="${this.chatlistimage}">
            </article>
            <article class="center">
                <p class="chatlistname">${this.chatlistname}</p>
                <p class="chatlisttext">${this.chatlisttext}</p>
            </article>
            <article class="right">
                <p class="chatlistwhen">${this.chatlistwhen}</p>
            </article>
        </section>
        `;
      loadCss(this, styles);
    }
  }
}

customElements.define("chat-list", chatlistCard);
export default chatlistCard;
