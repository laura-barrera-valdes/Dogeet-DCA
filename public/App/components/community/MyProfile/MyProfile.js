export var myprofileAttribute;
(function (myprofileAttribute) {
    myprofileAttribute["mybackground"] = "mybackground";
    myprofileAttribute["myprofileimage"] = "myprofileimage";
    myprofileAttribute["myname"] = "myname";
    myprofileAttribute["mygender"] = "mygender";
    myprofileAttribute["myage"] = "myage";
    myprofileAttribute["mydescription"] = "mydescription";
    myprofileAttribute["mybreed"] = "mybreed";
    myprofileAttribute["myactivity"] = "myactivity";
    myprofileAttribute["mylocation"] = "mylocation";
})(myprofileAttribute || (myprofileAttribute = {}));
class MyprofileCard extends HTMLElement {
    static get observedAttributes() {
        const myattrs = {
            mybackground: null,
            myprofileimage: null,
            myname: null,
            mygender: null,
            myage: null,
            mydescription: null,
            mybreed: null,
            myactivity: null,
            mylocation: null,
        };
        return Object.keys(myattrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, _, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
        <link rel= "stylesheet" href="./App/components/MyProfile/MyProfile.css">
        <section class="fullcard">
            <article class="left">
                <img src= "${this.profileimage}">
            </article>
            <article class="right">
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
            </article>
        </section>
        `;
        }
    }
}
customElements.define("profile-card", ProfileCard);
export default ProfileCard;
