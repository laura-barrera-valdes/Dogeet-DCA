import { loadCss } from "../../utils/styles";
import styles from "./AddImage.css";

export enum addimageAttribute {
  "placeholder" = "placeholder",
}

class AddImage extends HTMLElement {
  placeholder?: string;

  static get observedAttributes() {
    const addattrs: Record<addimageAttribute, null> = {
      placeholder: null,
    };
    return Object.keys(addattrs);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(
    propName: addimageAttribute,
    _: string | undefined,
    newValue: string | undefined
  ) {
    this[propName] = newValue;

    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <section class="addinput">
            <p>${this.placeholder}</p>
            <placeholder class="placeholderimg">
                <img src="../dist/assets/icon/register-icons/image.png">
            </placeholder>
            <button class="addbtn">
                <img src="../dist/assets/icon/register-icons/add.png">
            </button>
        </section>
      `;
      loadCss(this, styles);
    }
  }
}

customElements.define("add-image", AddImage);
export default AddImage;
