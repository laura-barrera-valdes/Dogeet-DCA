import "./components/import.js";
import dataProfile from "./data.js";
import ProfileCard, { profileAttribute } from "./components/Profile/Profile.js";

class AppContainer extends HTMLElement{
    profiles: ProfileCard[] = [];

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