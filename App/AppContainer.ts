import "./components/import.js";
import {dataProfile, dataCommunity} from "./data.js";
import ProfileCard, { profileAttribute } from "./components/Profile/Profile.js";
import CommunityCard, { communityAttribute } from "./components/community/community.js";

class AppContainer extends HTMLElement{
    profiles: ProfileCard[] = [];
    friends: CommunityCard[] = [];

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
        }
    }
}

customElements.define("app-container", AppContainer);