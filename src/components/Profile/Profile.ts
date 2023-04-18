export enum profileAttribute {
    "profileimage" = "profileimage",
    "name" = "name",
    "icon" = "icon",
    "gender" = "gender",
    "breed" = "breed",
    "age" = "age",
    "activity" = "activity",
    "location" = "location"
}

class ProfileCard extends HTMLElement{
    profileimage?: string;
    name?: string;
    icon?: string;
    gender?: string;
    breed?: string;
    age?: string;
    activity?: string;
    location?: string;
    

    static get observedAttributes(){
        const attrs: Record<profileAttribute, null> = {
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

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: profileAttribute,
        _: string | undefined,
        newValue: string | undefined
){
    // switch (propName) {
    //     case profileAttribute.age:
    //     this.age = newValue ? Number(newValue) : undefined;
    //     break;
        
    //     default:
   this[propName] = newValue;
    //     break;
    // }

    this.render();
}

render(){
    if (this.shadowRoot){
        this.shadowRoot.innerHTML = `
        <img class="accept" src="./assets/icon/profile/accept_profile.png">
        <img class="delete" src="./assets/icon/profile/delete_profile.png">
        <section class="fullcard">
        
            <article class="left">
                <img src= "${this.profileimage}">
            </article>
            <article class="right">
                <section class= "nametitle">
                    <h3 class="name">${this.name}</h3>
                </section>
                <section class= "info">
                    <section class="pairs1">
                        <article class="icontext1">
                            <img src= "./assets/icon/profile/gender.png">
                            <p>${this.gender}</p>
                        </article>
                        <article class="icontext2">
                            <img src= "./assets/icon/profile/breed.png">
                            <p>${this.breed}</p>
                        </article>
                    </section>
                    <section class="pairs2">
                        <article class="icontext3">
                            <img src= "./assets/icon/profile/age.png">
                            <p>${this.age}</p>
                        </article>
                        <article class="icontext4">
                            <img src= "./assets/icon/profile/activity.png">
                            <p>${this.activity}</p>
                        </article>
                    </section>
                        <article class="icontext5">
                            <img src= "./assets/icon/profile/location.png">
                            <p>${this.location}</p>
                        </article>
                </section>
            </article>
        </section>
        `;
    }
}

}

customElements.define("profile-card", ProfileCard);
export default ProfileCard;