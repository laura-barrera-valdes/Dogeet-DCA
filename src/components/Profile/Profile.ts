import { checkNewPet } from "../../store/Actions";
import { dispatch } from "../../store/Index";
import { communityProduct } from "../../types/CommunityProduct";
import firebase from "../../utils/firebase";
import { loadCss } from "../../utils/styles";
import styles from "./Profile.css";

export enum profileAttribute {
  "profileimage" = "profileimage",
  "name" = "name",
  "icon" = "icon",
  "gender" = "gender",
  "birthdate" = "birthdate",
  "lookingfor" = "lookingfor",
  "city" = "city",
}

class ProfileCard extends HTMLElement {
  profileimage?: string;
  name?: string;
  icon?: string;
  gender?: string;
  birthdate?: string;
  lookingfor?: string;
  city?: string;

  static get observedAttributes() {
    const attrs: Record<profileAttribute, null> = {
      profileimage: null,
      name: null,
      icon: null,
      gender: null,
      birthdate: null,
      lookingfor: null,
      city: null,
    };
    return Object.keys(attrs);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(
    propName: profileAttribute,
    _: string | undefined,
    newValue: string | undefined
  ) {
    // switch (propName) {
    //     case profileAttribute.age:
    //     this.age = newValue ? Number(newValue) : undefined;
    //     break;

    //     default:
    this[propName] = newValue;
    //     break;
    // }

    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <div class="buttonsmatch">
            <button class="deletebutton">
                <img class="delete" src="./assets/icon/profile/delete_profile.png">
            </button>
            <button class="acceptbutton">
                <img class="accept" src="./assets/icon/profile/accept_profile.png">
            </button>
        </div>
        <section class="fullcard">
        
            <article class="left">
                <img class="imgprofmatch" src= "${this.profileimage}">
            </article>
            <article class="right">
                <section class= "nametitle">
                    <h3 class="name">${this.name}</h3>
                </section>
                <section class= "info">
                    <section class="pairs1">
                        <article class="icontext icontext1">
                            <img class="iconprof" src= "./assets/icon/profile/gender.png">
                            <p class="infotext">${this.gender}</p>
                        </article>
                        <article class="icontext icontext2">
                            <img class="iconprof" src= "./assets/icon/profile/age.png">
                            <p class="infotext">${this.birthdate}</p>
                        </article>
                    </section>
                    <section class="pairs2">
                        <article class="icontext icontext3">
                            <img class="iconprof" src= "./assets/icon/profile/activity.png">
                            <p class="infotext">${this.lookingfor}</p>
                        </article>
                        <article class="icontext icontext4">
                        <img class="iconprof" src= "./assets/icon/profile/location.png">
                        <p class="infotext">${this.city}</p>
                        </article>
                    </section>
                </section>
            </article>
        </section>
        `;
      loadCss(this, styles);

      const checkBtn = this.shadowRoot.querySelector(".acceptbutton");
      checkBtn?.addEventListener("click", async () => {
        const petUser: communityProduct = {
          name: this.name,
          interest: this.lookingfor,
        };
        await firebase.checkNewPet(petUser);
        dispatch(checkNewPet({ payload: petUser }));
      });
    }
  }
}

customElements.define("profile-card", ProfileCard);
export default ProfileCard;
