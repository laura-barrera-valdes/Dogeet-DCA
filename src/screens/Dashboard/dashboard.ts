import styles from "./dashboard.css";
import "../../components/export";
import { ledataProfi, dataMyprofile, dataNavbar } from "../../services/getData";
import NavbarCard, { navbarAttribute } from "../../components/Navbar/Navbar";
import ProfileCard, {
  profileAttribute,
} from "../../components/Profile/Profile";
import MyShadowCont, {
  shadowcontAttribute,
} from "../../components/ShadowContainer/ShadowContainer";
import MyShadowContChat, {
  shadowcontchatAttribute,
} from "../../components/ShadowContainerChat/ShadowContainerChat";
// import CommunityCard, {
//   communityAttribute,
// } from "../components/Community/Community";
// import ChatlistCard, {
//   chatlistAttribute,
// } from "../components/Chatlist/Chatlist";
import MyprofileCard, {
  myprofileAttribute,
} from "../../components/MyProfile/MyProfile";
import { loadCss } from "../../utils/styles";
import { buttonAttribute } from "../../components/Button/Button";
import { addObserver, dispatch } from "../../store/Index";
import { checkNewPet, getMyProfileData, getNewPetCommunity, getPetsData, navigatet } from "../../store/Actions";
import { Screens } from "../../types/Navigation";
import { AppState } from "../../types/Store";
import { appState } from "../../store/Index"
import { petProduct } from "../../types/PetProduct";
import { communityProduct } from "../../types/CommunityProduct";
import firebase from "../../utils/firebase";



class Dashboard extends HTMLElement {
  navbars: NavbarCard[] = [];
  profiles: ProfileCard[] = [];
  // friends: CommunityCard[] = [];
  // chats: ChatlistCard[] = [];
  myprofiles: MyprofileCard[] = [];
  shadowconts: MyShadowCont[] = [];
  shadowcontchats: MyShadowContChat[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);

    dataNavbar.forEach((nav) => {
      const navbarContainer = this.ownerDocument.createElement(
        "nav-bar"
      ) as NavbarCard;
      navbarContainer.setAttribute(navbarAttribute.navbarlogo, nav.navbarlogo);
      navbarContainer.setAttribute(navbarAttribute.navbarhome, nav.navbarhome);
      navbarContainer.setAttribute(
        navbarAttribute.navbarcommunity,
        nav.navbarcommunity
      );
      navbarContainer.setAttribute(navbarAttribute.navbarchat, nav.navbarchat);
      navbarContainer.setAttribute(
        navbarAttribute.navbarnotifications,
        nav.navbarnotifications
      );
      navbarContainer.setAttribute(
        navbarAttribute.navbarnameprofile,
        nav.navbarnameprofile
      );
      navbarContainer.setAttribute(
        navbarAttribute.navbarprofile,
        nav.navbarprofile
      );
      this.navbars.push(navbarContainer);
    });


    //appState.community.forEach((e)=>{})

    appState.petsdata.forEach((pet: any) => {
    const profileContainer = this.ownerDocument.createElement("profile-card") as ProfileCard;
     profileContainer.setAttribute(profileAttribute.profileimage, pet.image);
    profileContainer.setAttribute(profileAttribute.name, pet.name); //el primeratributo es de la card y el segundo se trae como esta en firebase//
    profileContainer.setAttribute(profileAttribute.gender, pet.gender);
    profileContainer.setAttribute(profileAttribute.birthdate, pet.birth);
    profileContainer.setAttribute(profileAttribute.lookingfor, pet.interest);
    profileContainer.setAttribute(profileAttribute.city, pet.city);
     this.profiles.push(profileContainer);
    });

    const shadowcontContainer = this.ownerDocument.createElement("shadow-container") as MyShadowCont;
    shadowcontContainer.setAttribute(shadowcontAttribute.thetitle,"My Community");
    this.shadowconts.push(shadowcontContainer);

    const shadowcontchatContainer = this.ownerDocument.createElement(
      "shadow-container-chats"
    ) as MyShadowContChat;
    shadowcontchatContainer.setAttribute(
      shadowcontchatAttribute.thetitle,
      "Chats"
    );
    this.shadowcontchats.push(shadowcontchatContainer);

    // dataCommunity.forEach((friend) => {
    //   const communityContainer = this.ownerDocument.createElement(
    //     "my-community"
    //   ) as CommunityCard;
    //   communityContainer.setAttribute(
    //     communityAttribute.communityimage,
    //     friend.communityimage
    //   );
    //   communityContainer.setAttribute(
    //     communityAttribute.communityname,
    //     friend.communityname
    //   );
    //   communityContainer.setAttribute(
    //     communityAttribute.communitybreed,
    //     friend.commmunitybreed
    //   );
    //   this.friends.push(communityContainer);
    // });

    // dataChatlist.forEach((chat) => {
    //   const chatlistContainer = this.ownerDocument.createElement(
    //     "chat-list"
    //   ) as ChatlistCard;
    //   chatlistContainer.setAttribute(
    //     chatlistAttribute.chatlistimage,
    //     chat.chatlistimage
    //   );
    //   chatlistContainer.setAttribute(
    //     chatlistAttribute.chatlistname,
    //     chat.chatlistname
    //   );
    //   chatlistContainer.setAttribute(
    //     chatlistAttribute.chatlisttext,
    //     chat.chatlisttext
    //   );
    //   chatlistContainer.setAttribute(
    //     chatlistAttribute.chatlistwhen,
    //     chat.chatlistwhen
    //   );
    //   this.chats.push(chatlistContainer);
    // });

   
      const myprofileContainer = this.ownerDocument.createElement("myprofile-card") as MyprofileCard;
      myprofileContainer.className = "profileCard";
      myprofileContainer.setAttribute(
        myprofileAttribute.mybackground,
        appState.myprofiledata.background
      );
      myprofileContainer.setAttribute(
        myprofileAttribute.myprofileimage,
        appState.myprofiledata.image
      );
      myprofileContainer.setAttribute(myprofileAttribute.myname,
        appState.myprofiledata.name);
      myprofileContainer.setAttribute(myprofileAttribute.mygender,
        appState.myprofiledata.gender);
      myprofileContainer.setAttribute(
        myprofileAttribute.mybirthdate,
        appState.myprofiledata.birth
      );
      myprofileContainer.setAttribute(
        myprofileAttribute.mydescription,
        appState.myprofiledata.description
      );
      myprofileContainer.setAttribute(
        myprofileAttribute.mylookingfor,
        appState.myprofiledata.interest
      );
      myprofileContainer.setAttribute(myprofileAttribute.mycity, appState.myprofiledata.city);
      this.myprofiles.push(myprofileContainer);
    };
  



// async checkPet(){
//   await firebase.checkNewPet(this.checkData)
// }

  async connectedCallback() {

     if(appState.myprofiledata.name === ''){
      const action = await getMyProfileData();
      dispatch(action);
      console.log(appState)
    } else{
      this.render();
    }
    
    if(appState.petsdata.length === 0){
      const action = await getPetsData();
      dispatch(action);
    } else{
      this.render();
    } 
  }
    // if(appState.community.length === 0){
    //   const action = await getNewPetCommunity();
    //   dispatch(action);
    //   console.log(action)
    // } else{
    //   this.render();
    // }

   
  



  // connectedCallback(){
  //   this.render();
  //   console.log(appState.community, appState.pets, appState.screen)
  // }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ``;
      loadCss(this, styles);

      const section = this.ownerDocument.createElement("section");
      section.className = "profilee";

      const aside = this.ownerDocument.createElement("aside");
      aside.className = "asideCommunityChat";

      const main = this.ownerDocument.createElement("main");
      main.className = "mainHome";

      this.navbars.forEach((nav) => {
        this.shadowRoot?.appendChild(nav);
      });

      main.appendChild(aside);

      this.shadowconts.forEach((shadowcont) => {
        aside.appendChild(shadowcont);
      });

      this.shadowcontchats.forEach((shadowcontchat) => {
        aside.appendChild(shadowcontchat);
      });


      this.profiles.forEach((profile) => {
        section.appendChild(profile);
      });

      main.appendChild(section);

      this.myprofiles.forEach((me) => {
        main.appendChild(me);
      });

      this.shadowRoot.appendChild(main);

      const dashboardbtn = this.ownerDocument.createElement("button-component");
      dashboardbtn.className = "dashbutton";
      dashboardbtn.setAttribute(buttonAttribute.button, "LogOut");
      dashboardbtn.addEventListener("click", () => {
        dispatch(navigatet(Screens.REGISTER));
      });
      this.shadowRoot?.appendChild(dashboardbtn);
    }
  }
}

customElements.define("app-dashboard", Dashboard);
