import styles from "./Login.css";
import "../../components/export";
import { inputAttribute } from "../../components/Input-type1/Input";
import InputEdit, { inputeditAttribute } from "../../components/imput-edit/InputEdit";
import { buttonAttribute } from "../../components/Button/Button";
import { loadCss } from "../../utils/styles";
import { Screens } from "../../types/Navigation";
import { addObserver, dispatch } from "../../store/Index";
import { checkNewPet, getMyProfileData, getNewPetCommunity, getPetsData, navigatet } from "../../store/Actions";
import { appState } from "../../store/Index";
import MyprofileCard from "../../components/MyProfile/MyProfile";
import { myprofileAttribute } from "../../components/MyProfile/MyProfile";




class EditMyProfile extends HTMLElement {
    myprofiles: MyprofileCard[] = [];
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this)
  

//   const editback = this.ownerDocument.createElement("input-edit") as InputEdit;
//   editback.className = "editback";
//   editback.setAttribute(
//     myprofileAttribute.placeholder,
//     appState.myprofiledata.background
//   );
//   myprofileContainer.setAttribute(
//     myprofileAttribute.myprofileimage,
//     appState.myprofiledata.image
//   );
//   myprofileContainer.setAttribute(myprofileAttribute.myname,
//     appState.myprofiledata.name);
//   myprofileContainer.setAttribute(myprofileAttribute.mygender,
//     appState.myprofiledata.gender);
//   myprofileContainer.setAttribute(
//     myprofileAttribute.mybirthdate,
//     appState.myprofiledata.birth
//   );
//   myprofileContainer.setAttribute(
//     myprofileAttribute.mydescription,
//     appState.myprofiledata.description
//   );
//   myprofileContainer.setAttribute(
//     myprofileAttribute.mylookingfor,
//     appState.myprofiledata.interest
//   );
//   myprofileContainer.setAttribute(myprofileAttribute.mycity, appState.myprofiledata.city);
//   this.myprofiles.push(myprofileContainer);

}

  async connectedCallback() {

    if(appState.myprofiledata.name === ''){
     const action = await getMyProfileData();
     dispatch(action);
     console.log(appState)
   } else{
     this.render();
   }
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
    section.className = "article";
    this.shadowRoot?.appendChild(article);

    const navbar = this.ownerDocument.createElement("nav-bar");
    navbar.className = "NavbarEdit";
    this.shadowRoot?.appendChild(navbar);

    // const isotipo = this.ownerDocument.createElement("img");
    // isotipo.className = "isotipo";
    // isotipo.src = "../../../dist/assets/logo/isotipo.png";
    // section.appendChild(isotipo);

    const edittitle = this.ownerDocument.createElement("h3");
    edittitle.className = "editTitle";
    edittitle.innerHTML = "Edit Profile";
    section.appendChild(edittitle);

    const editname = this.ownerDocument.createElement("input-edit");
    editname.className = "editname";
    editname.setAttribute(inputeditAttribute.placeholder, "Name");
    editname.setAttribute(inputeditAttribute.info, appState.myprofiledata.name);
    section.appendChild(editname);

    const editdescription = this.ownerDocument.createElement("input-edit");
    editdescription.className = "editdescription";
    editdescription.setAttribute(inputeditAttribute.placeholder, "Description");
    editdescription.setAttribute(inputeditAttribute.info, appState.myprofiledata.description);
    section.appendChild(editdescription);

    const editgender = this.ownerDocument.createElement("input-edit");
    editgender.className = "editgender";
    editgender.setAttribute(inputeditAttribute.placeholder, "Gender");
    editgender.setAttribute(inputeditAttribute.info, appState.myprofiledata.gender);
    section.appendChild(editgender);

    // const password = this.ownerDocument.createElement("input-component");
    // password.className = "inputpassword";
    // password.setAttribute(inputAttribute.placeholder, "Password");
    // password.className = "input-password";
    // section.appendChild(password);

    // const loginoption = this.ownerDocument.createElement("p");
    // loginoption.className = "logintext";
    // loginoption.innerHTML = "If you don't have an account, please Register";
    // section.appendChild(loginoption);

    const loginbtn = this.ownerDocument.createElement("button-component");
    loginbtn.className = "loginbtn";
    loginbtn.setAttribute(buttonAttribute.button, "Login");
    loginbtn.addEventListener("click", () => {
      dispatch(navigatet(Screens.DASHBOARD))
    })
    section.appendChild(loginbtn);

   
}
}

customElements.define("edit-profile", EditMyProfile);
console.log(EditMyProfile)