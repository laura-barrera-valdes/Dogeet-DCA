import { loadCss } from "../../utils/styles";
import styles from "./MyProfile.css";
import { buttonAttribute } from "../Button/Button";
import { Observer } from "../../types/Store";
import { addObserver, dispatch } from "../../store/Index";
import { Screens } from "../../types/Navigation";
import { navigatet } from "../../store/Actions";


export enum myprofileAttribute {
  "mybackground" = "mybackground",
  "myprofileimage" = "myprofileimage",
  "myname" = "myname",
  "mygender" = "mygender",
  "mybirthdate" = "mybirthdate",
  "mydescription" = "mydescription",
  "mylookingfor" = "mylookingfor",
  "mycity" = "mycity",
}

class MyprofileCard extends HTMLElement {
  mybackground?: string;
  myprofileimage?: string;
  myname?: string;
  mygender?: string;
  mybirthdate?: string;
  mydescription?: string;
  mylookingfor?: string;
  mycity?: string;

  static get observedAttributes() {
    const myattrs: Record<myprofileAttribute, null> = {
      mybackground: null,
      myprofileimage: null,
      myname: null,
      mygender: null,
      mybirthdate: null,
      mydescription: null,
      mylookingfor: null,
      mycity: null,
    };
    return Object.keys(myattrs);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(
    propName: myprofileAttribute,
    _: string | undefined,
    newValue: string | undefined
  ) {
    this[propName] = newValue;

    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
      <section class="myproffixed">
        <section class="myprofilecard">
          <article class="background">
          <article class="colorimage"></article>
          <img class="backgroundimg" src="${this.mybackground}" />
          </article>
          <article class="image">
            <img class="imgmyprof" src="${this.myprofileimage}" />
          </article>
          <section class="paddingsection">
            <article class="namedescrip">
              <h3 class="myname">${this.myname}</h3>
              <p class="mydescription">${this.mydescription}</p>
            </article>

            <section class="textizq">
              <article class="imgtextrow">
                <img class="iconmyprof" src="./assets/icon/my_profile/gender.png" />
                <p class="infotext">${this.mygender}</p>
              </article>

              <article class="imgtextrow">
                <img class="iconmyprof" src="./assets/icon/my_profile/birthdate.png" />
                <p class="infotext">${this.mybirthdate}</p>
              </article>

              <article class="imgtextrow">
                <img class="iconmyprof" src="./assets/icon/my_profile/lookingfor.png" />
                <p class="infotext">${this.mylookingfor}</p>
              </article>

              <article class="imgtextrow">
                <img class="iconmyprof" src="./assets/icon/my_profile/city.png" />
                <p class="infotext">${this.mycity}</p>
              </article>
            
            </section>
          </section>

          <button class="editprofile">Edit Profile</button>

          <button class="LogOut">Log Out</button>
          
        </section>
      </section>
      `;
      loadCss(this, styles);

      
    }
  }
}

customElements.define("myprofile-card", MyprofileCard);
export default MyprofileCard;
