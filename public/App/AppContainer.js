import dataProfile from "./data.js";
import { profileAttribute } from "./components/Profile/Profile.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.profiles = [];
        this.attachShadow({ mode: "open" });
        dataProfile.forEach((user) => {
            const ProfileCard = this.ownerDocument.createElement("profile-card");
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
        }
    }
}
customElements.define("app-container", AppContainer);
