export enum headerpreAttribute {
  
}

class Headerpre extends HTMLElement {
 


    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }

  render(){
    if(this.shadowRoot) {
        this.shadowRoot.innerHTML = `
        <section class="headerpre">
            <section class= "logo">
                <a href="#!" class="brand-logo 2botonlogo">
                    <img class="logoDogeet2" src="../../../dist/assets/logo/Dogeet.png">
                </a>
            </section>
            <section class="login">
                <button class"loginbtn">Login</button>
            </section>
        </section>
        `
    }
  }
}

customElements.define("header-pre", Headerpre);
export default Headerpre;