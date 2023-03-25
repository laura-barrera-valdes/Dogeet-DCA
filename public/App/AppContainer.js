import "./components/import.js";
import { dataProfile, dataCommunity, dataChatlist, dataMyprofile, dataNavbar } from "./data.js";
import { profileAttribute } from "./components/Profile/Profile.js";
import { communityAttribute } from "./components/community/community.js";
import { chatlistAttribute } from "./components/chatlist/chatlist.js";
import { myprofileAttribute } from "./components/MyProfile/MyProfile.js";
import { navbarAttribute } from "./components/navbar/navbar.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.profiles = [];
        this.friends = [];
        this.chats = [];
        this.myprofiles = [];
        this.navbars = [];
        this.attachShadow({ mode: "open" });
        dataProfile.forEach((user) => {
            const profileContainer = this.ownerDocument.createElement("profile-card");
            profileContainer.setAttribute(profileAttribute.profileimage, user.profileimage);
            profileContainer.setAttribute(profileAttribute.name, user.name);
            profileContainer.setAttribute(profileAttribute.gender, user.gender);
            profileContainer.setAttribute(profileAttribute.breed, user.breed);
            profileContainer.setAttribute(profileAttribute.age, user.age);
            profileContainer.setAttribute(profileAttribute.activity, user.activity);
            profileContainer.setAttribute(profileAttribute.location, user.location);
            this.profiles.push(profileContainer);
        });
        dataCommunity.forEach((friend) => {
            const communityContainer = this.ownerDocument.createElement("my-community");
            communityContainer.setAttribute(communityAttribute.communityimage, friend.communityimage);
            communityContainer.setAttribute(communityAttribute.communityname, friend.communityname);
            communityContainer.setAttribute(communityAttribute.communitybreed, friend.commmunitybreed);
            this.friends.push(communityContainer);
        });
        dataChatlist.forEach((chat) => {
            const chatlistContainer = this.ownerDocument.createElement("chat-list");
            chatlistContainer.setAttribute(chatlistAttribute.chatlistimage, chat.chatlistimage);
            chatlistContainer.setAttribute(chatlistAttribute.chatlistname, chat.chatlistname);
            chatlistContainer.setAttribute(chatlistAttribute.chatlisttext, chat.chatlisttext);
            chatlistContainer.setAttribute(chatlistAttribute.chatlistwhen, chat.chatlistwhen);
            this.chats.push(chatlistContainer);
        });
        dataMyprofile.forEach((me) => {
            const myprofileContainer = this.ownerDocument.createElement("myprofile-card");
            myprofileContainer.setAttribute(myprofileAttribute.mybackground, me.mybackground);
            myprofileContainer.setAttribute(myprofileAttribute.myprofileimage, me.myprofileimage);
            myprofileContainer.setAttribute(myprofileAttribute.myname, me.myname);
            myprofileContainer.setAttribute(myprofileAttribute.mygender, me.mygender);
            myprofileContainer.setAttribute(myprofileAttribute.mybreed, me.mybreed);
            myprofileContainer.setAttribute(myprofileAttribute.myage, me.myage);
            myprofileContainer.setAttribute(myprofileAttribute.mydescription, me.mydescription);
            myprofileContainer.setAttribute(myprofileAttribute.myactivity, me.myactivity);
            myprofileContainer.setAttribute(myprofileAttribute.mylocation, me.mylocation);
            this.myprofiles.push(myprofileContainer);
        });
        dataNavbar.forEach((nav) => {
            const navbarContainer = this.ownerDocument.createElement("nav-bar");
            navbarContainer.setAttribute(navbarAttribute.navbarlogo, nav.navbarlogo);
            navbarContainer.setAttribute(navbarAttribute.navbarhome, nav.navbarhome);
            navbarContainer.setAttribute(navbarAttribute.navbarcommunity, nav.navbarcommunity);
            navbarContainer.setAttribute(navbarAttribute.navbarchat, nav.navbarchat);
            navbarContainer.setAttribute(navbarAttribute.navbarnotifications, nav.navbarnotifications);
            navbarContainer.setAttribute(navbarAttribute.navbarnameprofile, nav.navbarnameprofile);
            navbarContainer.setAttribute(navbarAttribute.navbarprofile, nav.navbarprofile);
            this.navbars.push(navbarContainer);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
            this.profiles.forEach((profile) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
            });
            this.friends.forEach((friend) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(friend);
            });
            this.chats.forEach((chat) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(chat);
            });
            this.myprofiles.forEach((me) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(me);
            });
            this.navbars.forEach((nav) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(nav);
            });
        }
    }
}
customElements.define("app-container", AppContainer);
