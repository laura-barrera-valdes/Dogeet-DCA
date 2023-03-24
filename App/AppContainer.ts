import * as components from "./components/import.js";
import dataProfile from "./data.js";
import ProfileCard, { profileAttribute } from "./components/Profile/Profile.js";

class AppContainer extends HTMLElement{
    profiles: ProfileCard[] = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"});

        dataProfile.forEach((user) => {
            const ProfileCard = this.ownerDocument.createElement(
                "profile-card"
            ) as ProfileCard;
            ProfileCard.setAttribute(profileAttribute.profileimage, user.profileimage);
            ProfileCard.setAttribute(profileAttribute.name, user.name);
            ProfileCard.setAttribute(profileAttribute.gender, user.gender);
            ProfileCard.setAttribute(profileAttribute.breed, user.breed);
            ProfileCard.setAttribute(profileAttribute.age, user.age);
            ProfileCard.setAttribute(profileAttribute.activity, user.activity);
            ProfileCard.setAttribute(profileAttribute.location, user.location);
            this.profiles.push(ProfileCard);    
            
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
        }
    }
}

customElements.define("app-container", AppContainer);