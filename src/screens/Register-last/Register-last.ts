import "../../components/export";
import {inputAttribute} from "../../components/Input-type1/Input";
import  {buttonAttribute} from "../../components/Button/Button";


class RegisterLast extends HTMLElement {


  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }


  render(){

    const title = this.ownerDocument.createElement("p");
    title.className ="Registertitle2";
    title.innerHTML= "Register";
    this.shadowRoot?.appendChild(title);

    const username = this.ownerDocument.createElement("input-component");
    username.className = "inputusername";
    username.setAttribute(inputAttribute.placeholder, "Enter your username");
    this.shadowRoot?.appendChild(username);
    
    const email = this.ownerDocument.createElement("input-component");
    username.className = "emailregister";
    username.setAttribute(inputAttribute.placeholder, "E-mail");
    this.shadowRoot?.appendChild(email);

    const password = this.ownerDocument.createElement("input-component");
    username.className = "passwordregister";
    username.setAttribute(inputAttribute.placeholder, "Password");
    this.shadowRoot?.appendChild(password);

    const confirmpassword = this.ownerDocument.createElement("input-component");
    username.className = "confirmpassword";
    username.setAttribute(inputAttribute.placeholder, "Confirm your password");
    this.shadowRoot?.appendChild(confirmpassword);

    const registerbtn = this.ownerDocument.createElement("button-component");
    registerbtn.className = "registerbtnlast";
    registerbtn.setAttribute(buttonAttribute.button, "Register");
    this.shadowRoot?.appendChild(registerbtn);

    const imgback = this.ownerDocument.createElement("img");
    imgback.className = "imgbackground";
    imgback.src= "../../../dist/assets/image/backgrounds/dog.png";
    this.shadowRoot?.appendChild(imgback);
  }

}

customElements.define("registerlast-screen", RegisterLast);