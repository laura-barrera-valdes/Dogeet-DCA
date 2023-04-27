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
            <h2 class="title" >My community</h2>
            <article class="left">
                <img class="imgprofcommunity" src="${this.communityimage}">
            </article>
            <article class="center">
                <p class="communityname">${this.communityname}</p>
                <p class="communitybreed">${this.communitybreed}</p>
            </article>
            <article class="right">
                <button class="communitybtn">2</button>
            </article>
            
            
        </section>
        `;
      loadCss(this, styles);
    }
  }
}

customElements.define("my-community", CommunityCard);
export default CommunityCard;
