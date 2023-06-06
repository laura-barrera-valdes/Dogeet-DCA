import styles from "./Register-last.css";
import { loadCss } from "../../utils/styles";
import { Firestore } from "firebase/firestore";
import "../../components/export";
import { inputAttribute } from "../../components/Input-type1/Input";
import { buttonAttribute } from "../../components/Button/Button";
import { dispatch } from "../../store/Index";
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
      profileimage.src = "gs://dogeet-dca.appspot.com/Assets/image/my_profile/Kathia.png";
      section.appendChild(profileimage);
  
      const edittitle = this.ownerDocument.createElement("h3");
      edittitle.className = "EditTitle";
      edittitle.innerHTML = "Edit Profile";
      article.appendChild(edittitle);
  

      
      const editname = this.ownerDocument.createElement("input-edit");
      editname.className = "inputeditname";
      editname.setAttribute(inputeditAttribute.placeholder, "Name");
      editname.setAttribute(inputeditAttribute.info, "Kathia");
      article.appendChild(editname);

      const editname = this.ownerDocument.createElement("input-edit");
      editname.className = "inputeditname";
      editname.setAttribute(inputeditAttribute.placeholder, "Name");
      editname.setAttribute(inputeditAttribute.info, );
      article.appendChild(editname);
  
      const password = this.ownerDocument.createElement("input-edit");
      password.className = "inputpassword";
      password.setAttribute(inputeditAttribute.placeholder, "Password");
      password.className = "input-password";
      section.appendChild(password);


   

    //   ledataProfi.forEach((user: any) => {
    //     const profileContainer = this.ownerDocument.createElement("profile-card") as ProfileCard;
    //     profileContainer.setAttribute(profileAttribute.profileimage, user.profileimage);
    //     profileContainer.setAttribute(profileAttribute.name, user.name); //el primeratributo es de la card y el segundo se trae como esta en firebase//
    //     profileContainer.setAttribute(profileAttribute.gender, user.gender);
    //     profileContainer.setAttribute(profileAttribute.birthdate, user.birth);
    //     profileContainer.setAttribute(profileAttribute.lookingfor,user.interest);
    //     profileContainer.setAttribute(profileAttribute.city, user.city);
    //     this.profiles.push(profileContainer);
    //   });
  
      const loginoption = this.ownerDocument.createElement("p");
      loginoption.className = "logintext";
      loginoption.innerHTML = "If you don't have an account, please Register";
      section.appendChild(loginoption);
  
      const loginbtn = this.ownerDocument.createElement("button-component");
      loginbtn.className = "loginbtn";
      loginbtn.setAttribute(buttonAttribute.button, "Login");
      loginbtn.addEventListener("click", () => {
        dispatch(navigatet(Screens.DASHBOARD))
      })
      section.appendChild(loginbtn);
    }
  }
  
  customElements.define("login-screen", Login);
  