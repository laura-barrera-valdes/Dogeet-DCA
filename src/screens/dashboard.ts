import styles from "./dashboard.css";
import "../components/export";
import {
  dataProfile,
  dataMyprofile,
  dataNavbar,
} from "../services/getData";
import NavbarCard, { navbarAttribute } from "../components/Navbar/Navbar";
import ProfileCard, { profileAttribute } from "../components/Profile/Profile";
import MyShadowCont, {
  shadowcontAttribute,
} from "../components/ShadowContainer/ShadowContainer";
import MyShadowContChat, {
  shadowcontchatAttribute,
} from "../components/ShadowContainerChat/ShadowContainerChat";
// import CommunityCard, {
//   communityAttribute,
// } from "../components/Community/Community";
// import ChatlistCard, {
//   chatlistAttribute,
// } from "../components/Chatlist/Chatlist";
import MyprofileCard, {
  myprofileAttribute,
} from "../components/MyProfile/MyProfile";
import { loadCss } from "../utils/styles";

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

    dataProfile.forEach((user) => {
      const profileContainer = this.ownerDocument.createElement(
        "profile-card"
      ) as ProfileCard;
      profileContainer.setAttribute(
        profileAttribute.profileimage,
        user.profileimage
      );
      profileContainer.setAttribute(profileAttribute.name, user.name);
      profileContainer.setAttribute(profileAttribute.gender, user.gender);
      profileContainer.setAttribute(profileAttribute.birthdate, user.birthdate);
      profileContainer.setAttribute(
        profileAttribute.lookingfor,
        user.lookingfor
      );
      profileContainer.setAttribute(profileAttribute.city, user.city);
      this.profiles.push(profileContainer);
    });

      const shadowcontContainer = this.ownerDocument.createElement(
        "shadow-container"
      ) as MyShadowCont;
      shadowcontContainer.setAttribute(
        shadowcontAttribute.thetitle,
        'My Community'
      );
      this.shadowconts.push(shadowcontContainer);

      const shadowcontchatContainer = this.ownerDocument.createElement(
        "shadow-container-chats"
      ) as MyShadowContChat;
      shadowcontchatContainer.setAttribute(
        shadowcontchatAttribute.thetitle,
        'Chats'
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

    dataMyprofile.forEach((me) => {
      const myprofileContainer = this.ownerDocument.createElement(
        "myprofile-card"
      ) as MyprofileCard;
      myprofileContainer.setAttribute(
        myprofileAttribute.mybackground,
        me.mybackground
      );
      myprofileContainer.setAttribute(
        myprofileAttribute.myprofileimage,
        me.myprofileimage
      );
      myprofileContainer.setAttribute(myprofileAttribute.myname, me.myname);
      myprofileContainer.setAttribute(myprofileAttribute.mygender, me.mygender);
      myprofileContainer.setAttribute(
        myprofileAttribute.mybirthdate,
        me.mybirthdate
      );
      myprofileContainer.setAttribute(
        myprofileAttribute.mydescription,
        me.mydescription
      );
      myprofileContainer.setAttribute(
        myprofileAttribute.mylookingfor,
        me.mylookingfor
      );
      myprofileContainer.setAttribute(myprofileAttribute.mycity, me.mylocation);
      this.myprofiles.push(myprofileContainer);
    });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ``;
      loadCss(this, styles);
      const section = this.ownerDocument.createElement("section");
      section.className = "myProfiles";

      this.navbars.forEach((nav) => {
        this.shadowRoot?.appendChild(nav);
      });
      
      this.shadowconts.forEach((shadowcont) => {
        this.shadowRoot?.appendChild(shadowcont);
      });

      this.shadowcontchats.forEach((shadowcontchat) => {
        this.shadowRoot?.appendChild(shadowcontchat);
      });

      // this.friends.forEach((friend) => {
      //   this.shadowRoot?.appendChild(friend);
      // });

      // this.chats.forEach((chat) => {
      //   this.shadowRoot?.appendChild(chat);
      // });

      this.profiles.forEach((profile) => {
        section.appendChild(profile);
      });

      this.shadowRoot?.appendChild(section);

      this.myprofiles.forEach((me) => {
        this.shadowRoot?.appendChild(me);
      });
    }
  }
}

customElements.define("app-dashboard", Dashboard);
