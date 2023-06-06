import { loadCss } from "../../utils/styles";
import styles from "./ShadowContainerChat.css";
import { dataChatlist } from "../../services/getData";
import ChatlistCard, { chatlistAttribute } from "../Chatlist/Chatlist";
import firebase from "../../utils/firebase";
import { appState } from "../../store/Index";

export enum shadowcontchatAttribute {
  "thetitle" = "thetitle",
}

class MyShadowContChat extends HTMLElement {
  thetitle: string = "";
  chats: ChatlistCard[] = [];

  static get observedAttributes() {
    const shadowattrs: Record<shadowcontchatAttribute, null> = {
      thetitle: null,
    };

    return Object.keys(shadowattrs);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    dataChatlist.forEach((chat) => {
      const chatlistContainer = this.ownerDocument.createElement(
        "chat-list"
      ) as ChatlistCard;
      chatlistContainer.setAttribute(
        chatlistAttribute.chatlistimage,
        chat.chatlistimage
      );
      chatlistContainer.setAttribute(
        chatlistAttribute.chatlistname,
        chat.chatlistname
      );
      chatlistContainer.setAttribute(
        chatlistAttribute.chatlisttext,
        chat.chatlisttext
      );
      chatlistContainer.setAttribute(
        chatlistAttribute.chatlistwhen,
        chat.chatlistwhen
      );
      this.chats.push(chatlistContainer);
    });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(
    propName: shadowcontchatAttribute,
    _: string | undefined,
    newValue: string
  ) {
    this[propName] = newValue;

    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ``;

      const section = this.ownerDocument.createElement("section");
      section.className = "shadowcont";

      const p = this.ownerDocument.createElement("p");
      p.className = "thetitlee";
      p.innerText = this.thetitle;

      const article = this.ownerDocument.createElement("article");
      article.className = "mychats";

      loadCss(this, styles);
      this.chats.forEach((chat) => {
        article.appendChild(chat);
      });

      section.appendChild(p);
      section.appendChild(article);

      this.shadowRoot.appendChild(section);
    }
  }
}

customElements.define("shadow-container-chats", MyShadowContChat);
export default MyShadowContChat;
