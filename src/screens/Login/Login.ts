import Headerpre from "../../components/Header-pre/Header-pre";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const credentials = { email: "", password:""};

class Login extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback(){
    this.render();
  }

  render(){

    
   
  }
}

