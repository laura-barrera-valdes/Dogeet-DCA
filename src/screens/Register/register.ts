import "../../components/export";
import {inputAttribute} from "../../components/Input-type1/Input";
import  {buttonAttribute} from "../../components/Button/Button";
import { addimageAttribute } from "../../components/Add image/AddImage";
import { secondinputAttribute } from "../../components/input-type2/Input2";

class Register extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({ mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if (this.shadowRoot) this.shadowRoot.innerHTML = "";

    const header = this.ownerDocument.createElement("header-pre");
    header.className = "headerregister";
    this.shadowRoot?.appendChild(header);

    const titleregister = this.ownerDocument.createElement("p");
    titleregister.className = "registertitle";
    titleregister.innerHTML = "Dog Ingormation";
    this.shadowRoot?.appendChild(titleregister);

    const dogname = this.ownerDocument.createElement("input-component");
    dogname.className = "inputdogname";
    dogname.setAttribute(inputAttribute.placeholder, "What's your dog's name?");
    this.shadowRoot?.appendChild(dogname);

    const description = this.ownerDocument.createElement("input-component");
    description.className = "inputdescription";
    description.setAttribute(inputAttribute.placeholder, "Description");
    this.shadowRoot?.appendChild(description);

    const gender = this.ownerDocument.createElement("secinput-component");
    gender.className = "inputgender";
    gender.setAttribute(secondinputAttribute.icon, "../../../dist/assets/icon/register-icons/gender.png");
    gender.setAttribute(secondinputAttribute.placeholder, "Gender");
    this.shadowRoot?.appendChild(gender);

    const birthdate = this.ownerDocument.createElement("secinput-component");
    birthdate.className = "inputbirthdate";
    birthdate.setAttribute(secondinputAttribute.icon, "../../../dist/assets/icon/register-icons/birth-date.png");
    birthdate.setAttribute(secondinputAttribute.placeholder, "Birthdate");
    this.shadowRoot?.appendChild(birthdate);

    const city = this.ownerDocument.createElement("secinput-component");
    city.className = "inputcity";
    city.setAttribute(secondinputAttribute.icon, "../../../dist/assets/icon/register-icons/city.png");
    city.setAttribute(secondinputAttribute.placeholder, "City");
    this.shadowRoot?.appendChild(city);

    const look = this.ownerDocument.createElement("secinput-component");
    look.className = "inputlook";
    look.setAttribute(secondinputAttribute.icon, "../../../dist/assets/icon/register-icons/looking-for.png");
    look.setAttribute(secondinputAttribute.placeholder, "Look a date for...")
    this.shadowRoot?.appendChild(look);

    const addphoto = this.ownerDocument.createElement("add-image");
    addphoto.className = "inputadd";
    addphoto.setAttribute(addimageAttribute.placeholder,"Please add some photos");
    this.shadowRoot?.appendChild(addphoto);

    const registerbtn = this.ownerDocument.createElement("button-component");
    registerbtn.className = "registerbtn";
    registerbtn.setAttribute(buttonAttribute.button, "Continue");
    this.shadowRoot?.appendChild(registerbtn);
    
    const registeroption = this.ownerDocument.createElement("p");
    registeroption.className = "registertext";
    registeroption.innerHTML = "If you already have an account, please Login";
    this.shadowRoot?.appendChild(registeroption);

    }
}

customElements.define("app-register", Register);