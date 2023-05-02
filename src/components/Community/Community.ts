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
            <section class="row">
                <section class="betweenleft">
                    <article class="left">
                        <img class="imgprofcommunity" src="${this.communityimage}">
                    </article>
                    <article class="center">
                        <p class="communityname">${this.communityname}</p>
                        <p class="communitybreed">${this.communitybreed}</p>
                    </article>
                </section>
                <article class="right">
                    <p class="communitynum">2</p>
                </article>
            </section>
            
            
        </section>
        `;
      loadCss(this, styles);
    }
  }
}

customElements.define("my-community", CommunityCard);
export default CommunityCard;
