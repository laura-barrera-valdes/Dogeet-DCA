import "./components/import.js";
import {dataProfile, dataCommunity, dataChatlist} from "./data.js";
import ProfileCard, { profileAttribute } from "./components/Profile/Profile.js";
import CommunityCard, { communityAttribute } from "./components/community/community.js";
import chatlistCard, { chatlistAttribute } from "./components/chatlist/chatlist.js";

class AppContainer extends HTMLElement{
    profiles: ProfileCard[] = [];
    friends: CommunityCard[] = [];
    chats: chatlistCard [] = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"});

        dataProfile.forEach((user) => {
            const profileContainer = this.ownerDocument.createElement(
                "profile-card"
            ) as ProfileCard;
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
            const communityContainer = this.ownerDocument.createElement(
                "my-community"
            ) as CommunityCard;
            communityContainer.setAttribute(communityAttribute.communityimage, friend.communityimage);
            communityContainer.setAttribute(communityAttribute.communityname, friend.communityname);
            communityContainer.setAttribute(communityAttribute.communitybreed, friend.commmunitybreed);
            this.friends.push(communityContainer);
        });

        dataChatlist.forEach((chat) => {
            const chatlistContainer = this.ownerDocument.createElement(
                "chat-list"
            ) as chatlistCard;
            chatlistContainer.setAttribute(chatlistAttribute.chatlistimage, chat.chatlistimage);
            chatlistContainer.setAttribute(chatlistAttribute.chatlistname, chat.chatlistname);
            chatlistContainer.setAttribute(chatlistAttribute.chatlisttext, chat.chatlisttext);
            chatlistContainer.setAttribute(chatlistAttribute.chatlistwhen, chat.chatlistwhen);
            this.chats.push(chatlistContainer);
        });
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = ``;

            this.profiles.forEach((profile) => {
                this.shadowRoot?.appendChild(profile);
                
            });

            this.friends.forEach((friend) => {
                this.shadowRoot?.appendChild(friend);
                
            });

            this.chats.forEach((chat) => {
                this.shadowRoot?.appendChild(chat);
                
            });
        }
    }
}

customElements.define("app-container", AppContainer);