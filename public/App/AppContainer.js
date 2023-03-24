import "./components/import.js";
import { dataProfile, dataCommunity, dataChatlist } from "./data.js";
import { profileAttribute } from "./components/Profile/Profile.js";
import { communityAttribute } from "./components/community/community.js";
import { chatlistAttribute } from "./components/chatlist/chatlist.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.profiles = [];
        this.friends = [];
        this.chats = [];
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
        }
    }
}
customElements.define("app-container", AppContainer);
