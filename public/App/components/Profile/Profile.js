export var profileAttribute;
(function (profileAttribute) {
    profileAttribute["profileimage"] = "profileimage";
    profileAttribute["name"] = "name";
    profileAttribute["icon"] = "icon";
    profileAttribute["gender"] = "gender";
    profileAttribute["breed"] = "breed";
    profileAttribute["age"] = "age";
    profileAttribute["activity"] = "activity";
    profileAttribute["location"] = "location";
})(profileAttribute || (profileAttribute = {}));
class ProfileCard extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            profileimage: null,
            name: null,
            icon: null,
            gender: null,
            breed: null,
            age: null,
            activity: null,
            location: null,
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, _, newValue) {
        // switch (propName) {
        //     case profileAttribute.age:
        //     this.age = newValue ? Number(newValue) : undefined;
        //     break;
        //     default:
        //     this[propName] = newValue;
        //     break;
        // }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
        <link rel= "stylesheet" href="./App/components/Profile/Profile.css">
        <section class="fullcard">
            <img src= "${this.profileimage}">
            <h3 class="name">${this.name}</h3>
                <section class= "info">
                    <section class="pairs1">
                        <article class="icontext1">
                            <img src= "./assets">
                            <p>${this.gender}</p>
                        </article>
                        <article class="icontext2">
                            <img src= "./assets">
                            <p>${this.breed}</p>
                        </article>
                    </section>

                    <section class="pairs2">
                        <article class="icontext3">
                            <img src= "./assets">
                            <p>${this.age}</p>
                        </article>
                        <article class="icontext4">
                            <img src= "./assets">
                            <p>${this.activity}</p>
                        </article>
                    </section>
                        <article class="icontext5">
                                <img src= "./assets">
                                <p>${this.location}</p>
                        </article>
                </section>
        </section>
        `;
        }
    }
}
customElements.define("profile-card", ProfileCard);
export default ProfileCard;
