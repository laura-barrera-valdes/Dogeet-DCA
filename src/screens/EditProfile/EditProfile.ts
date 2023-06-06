import styles from "./Register-last.css";
import { loadCss } from "../../utils/styles";
import { Firestore } from "firebase/firestore";
import "../../components/export";
import { inputAttribute } from "../../components/Input-type1/Input";
import { buttonAttribute } from "../../components/Button/Button";
import { appState, dispatch } from "../../store/Index";
import { navigatet } from "../../store/Actions";
import { Screens } from "../../types/Navigation";
import firebase from "../../utils/firebase";
import { inputeditAttribute } from "../../components/Input-edit/InputEdit";

class EditProfile extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  
  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ``;
      loadCss(this, styles);
    }

    const div = this.ownerDocument.createElement("div");
    div.className = "divcenter";
    this.shadowRoot?.appendChild(div);

    const section = this.ownerDocument.createElement("section");
    section.className = "centersection";
    div.appendChild(section);

    const article = this.ownerDocument.createElement("article");
    section.className = "articleedit";
    this.shadowRoot?.appendChild(article);

    const navbar = this.ownerDocument.createElement("nav-bar");
    navbar.className = "Loginheader";
    this.shadowRoot?.appendChild(navbar);

    const profileimage = this.ownerDocument.createElement("img");
    profileimage.className = "profile-img";
    profileimage.src =
      "gs://dogeet-dca.appspot.com/Assets/image/my_profile/Kathia.png";
    section.appendChild(profileimage);

    const edittitle = this.ownerDocument.createElement("h3");
    edittitle.className = "EditTitle";
    edittitle.innerHTML = "Edit Profile";
    article.appendChild(edittitle);

    const editbackground = this.ownerDocument.createElement("input-edit");
    editbackground.className = "inputeditback";
    editbackground.setAttribute(
      inputeditAttribute.info,
      appState.myprofiledata.background
    );
    article.appendChild(editbackground);

  }
}

customElements.define("edit-profile", EditProfile);
