import { loadCss } from "../../utils/styles";
import styles from "./MyProfile.css";

export enum myprofileAttribute {
  "mybackground" = "mybackground",
  "myprofileimage" = "myprofileimage",
  "myname" = "myname",
  "mygender" = "mygender",
  "myage" = "myage",
  "mydescription" = "mydescription",
  "mybreed" = "mybreed",
  "myactivity" = "myactivity",
  "mylocation" = "mylocation",
}

class MyprofileCard extends HTMLElement {
  mybackground?: string;
  myprofileimage?: string;
  myname?: string;
  mygender?: string;
  myage?: string;
  mydescription?: string;
  mybreed?: string;
  myactivity?: string;
  mylocation?: string;

  static get observedAttributes() {
    const myattrs: Record<myprofileAttribute, null> = {
      mybackground: null,
      myprofileimage: null,
      myname: null,
      mygender: null,
      myage: null,
      mydescription: null,
      mybreed: null,
      myactivity: null,
      mylocation: null,
    };
    return Object.keys(myattrs);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
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
        <section class="myprofilecard">
            <article class="">
                <img src="${this.mybackground}">
            </article>
            <article class="">
                <img class="imgmyprof" src="${this.myprofileimage}">
            </article>
            <article class="">
                <p class="mydescription">${this.myname}</p>
                <p class="mydescription">${this.mydescription}</p>
            </article>


            <article class="mygender">
                <img class="iconmyprof" src="./assets/icon/my_profile/gender.png">
                 <p>${this.mygender}</p>
            </article>

            <article class="myage">
                <img class="iconmyprof" src="./assets/icon/my_profile/age.png">
                <p>${this.myage}</p>
            </article>
        
                <section class="myinfo">
                    <article class="myactivity">
                        <img class="iconmyprof" src="./assets/icon/my_profile/activity.png">
                        <p>${this.myactivity}</p>
                    </article>

                    <article class="mylocation">
                        <img class="iconmyprof" src="./assets/icon/my_profile/location.png">
                        <p>${this.mylocation}</p>
                    </article>
                </section>

                <button class="editprofile">Edit Profile</button>
        </section>
        `;
      loadCss(this, styles);
    }
  }
}

customElements.define("myprofile-card", MyprofileCard);
export default MyprofileCard;
