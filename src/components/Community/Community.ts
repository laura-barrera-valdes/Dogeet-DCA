import { loadCss } from "../../utils/styles";
import styles from "./Community.css";

export enum communityAttribute {
  "communityimage" = "communityimage",
  "communityname" = "communityname",
  "communitybreed" = "communitybreed",
}

class CommunityCard extends HTMLElement {
  communityimage?: string;
  communityname?: string;
  communitybreed?: string;

  static get observedAttributes() {
    const comattrs: Record<communityAttribute, null> = {
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

  attributeChangedCallback(
    propName: communityAttribute,
    _: string | undefined,
    newValue: string | undefined
  ) {
    this[propName] = newValue;

    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <section class="communityCard">
            <h2>My community</h2>
            <img class="imgprofcommunity" src="${this.communityimage}">
            <h4 class="communityname">${this.communityname}</h4>
            <p class="communitybreed">${this.communitybreed}</p>
            <button class="communitybtn">2</button>
        </section>
        `;
      loadCss(this, styles);
    }
  }
}

customElements.define("my-community", CommunityCard);
export default CommunityCard;
