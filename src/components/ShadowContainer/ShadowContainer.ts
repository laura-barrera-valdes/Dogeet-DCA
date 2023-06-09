import { loadCss } from "../../utils/styles";
import styles from "./ShadowContainer.css";
import { dataCommunity } from "../../services/getData";
import CommunityCard, { communityAttribute } from "../Community/Community";
import { appState } from "../../store/Index";
import { addObserver } from "../../store/Index";

export enum shadowcontAttribute {
  "thetitle" = "thetitle",
}

class MyShadowCont extends HTMLElement {
  thetitle: string = "";
  friends: CommunityCard[] = [];

  static get observedAttributes() {
    const shadowattrs: Record<shadowcontAttribute, null> = {
      thetitle: null,
    };

    return Object.keys(shadowattrs);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this)

    appState.community.forEach((pet: any) => {
      const communityContainer = this.ownerDocument.createElement(
        "my-community"
      ) as CommunityCard;
      communityContainer.setAttribute(
        communityAttribute.communityimage,
        pet.image
      );
      communityContainer.setAttribute(
        communityAttribute.communityname,
        pet.name
      );
      communityContainer.setAttribute(
        communityAttribute.commmunitylookingfor,
        pet.interest
      );
      this.friends.push(communityContainer);
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
      loadCss(this, styles);

      const section = this.ownerDocument.createElement("section");
      section.className = "shadowcont";

      const p = this.ownerDocument.createElement("p");
      p.className = "thetitlee";
      p.innerText = this.thetitle;

      const article = this.ownerDocument.createElement("article");
      article.className = "myfriends";

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
