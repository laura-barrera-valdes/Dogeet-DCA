import { loadCss } from "../../utils/styles";
import styles from "./ShadowContainer.css";
import { dataCommunity, dataChatlist } from "../../services/getData";
import CommunityCard, { communityAttribute } from "../Community/Community";
import ChatlistCard, { chatlistAttribute } from "../Chatlist/Chatlist";

export enum shadowcontAttribute {
  "thetitle" = "thetitle",
}

class MyShadowCont extends HTMLElement {
  thetitle: string = "";
  friends: CommunityCard[] = [];
  chats: ChatlistCard[] = [];

  static get observedAttributes() {
    const shadowattrs: Record<shadowcontAttribute, null> = {
      thetitle: null,
    };

    return Object.keys(shadowattrs);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    dataCommunity.forEach((friend) => {
      const communityContainer = this.ownerDocument.createElement(
        "my-community"
      ) as CommunityCard;
      communityContainer.setAttribute(
        communityAttribute.communityimage,
        friend.communityimage
      );
      communityContainer.setAttribute(
        communityAttribute.communityname,
        friend.communityname
      );
      communityContainer.setAttribute(
        communityAttribute.communitybreed,
        friend.commmunitybreed
      );
      this.friends.push(communityContainer);
    });

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
    propName: shadowcontAttribute,
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
      article.className = 'myfriends';
      
      loadCss(this, styles);
      this.friends.forEach((friend) => {
        article.appendChild(friend);
      });

      section.appendChild(p);
      section.appendChild(article);

      this.shadowRoot.appendChild(section);
    }
  }
}

customElements.define("shadow-container", MyShadowCont);
export default MyShadowCont;
