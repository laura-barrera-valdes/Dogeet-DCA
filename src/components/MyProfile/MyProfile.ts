export enum myprofileAttribute {
    "mybackground" = "mybackground",
    "myprofileimage" = "myprofileimage",
    "myname" = "myname",
    "mygender" = "mygender",
    "myage" = "myage",
    "mydescription" = "mydescription",
    "mybreed" = "mybreed",
    "myactivity" = "myactivity",
    "mylocation" = "mylocation"
}

class MyprofileCard extends HTMLElement{
    mybackground?:string;
    myprofileimage?: string;
    myname?: string;
    mygender?: string;
    myage?: string;
    mydescription?:string;
    mybreed?: string;
    myactivity?: string;
    mylocation?: string;
    

    static get observedAttributes(){
        const myattrs: Record<myprofileAttribute, null> = {
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

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: myprofileAttribute,
        _: string | undefined,
        newValue: string | undefined
){
    
   this[propName] = newValue;

    this.render();
}

render(){
    if (this.shadowRoot){
        this.shadowRoot.innerHTML = `
        <section class="myprofilecard">
            <img src="${this.mybackground}">
            <img src="${this.myprofileimage}">
            <article class="mygender">
                <img src="./assets/icon/my_profile/gender.png">
                 <p>${this.mygender}</p>
            </article>

            <article class="myage">
                <img src="./assets/icon/my_profile/age.png">
                <p>${this.myage}</p>
            </article>
            
            
                <section class="myinfo">
                    <p class="mydescription">${this.mydescription}</p>

                    <article class="mybreed">
                        <img src="./assets/icon/my_profile/breed.png">
                        <p>${this.mybreed}</p>
                    </article>

                    <article class="myactivity">
                        <img src="./assets/icon/my_profile/activity.png">
                        <p>${this.myactivity}</p>
                    </article>

                    <article class="mylocation">
                        <img src="./assets/icon/my_profile/location.png">
                        <p>${this.mylocation}</p>
                    </article>
                </section>

                <button class="editprofile">Edit Profile</button>
        </section>
        `;
    }
}

}

customElements.define("myprofile-card", MyprofileCard);
export default MyprofileCard;