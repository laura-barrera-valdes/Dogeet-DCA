import "../../components/export";
import Headerpre from "../../components/Header-pre/Header-pre";
import {inputAttribute} from "../../components/Input/Input";
import  {buttonAttribute} from "../../components/Button/Button";

class Register extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({ mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        
    }
}