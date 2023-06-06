export enum largebuttonAttribute {
    "longbutton" = "longbutton",
  }
  
  class Largebutton extends HTMLElement {
    longbutton?: string;
  
  
    static get observedAttributes(){
      const longbuttonattrs: Record<largebuttonAttribute, null> ={
        longbutton: null,   
      };
      return Object.keys(longbuttonattrs);
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    attributeChangedCallback(
      propName: largebuttonAttribute,
      _: string | undefined,
      newValue: string | undefined
    ) {
      this[propName] = newValue;
  
      this.render();
    }
  
    render(){
      if(this.shadowRoot){
        this.shadowRoot.innerHTML = `
        <button ="${this.longbutton}"></button>
        `
      }
    }
  
  
  }
  
  customElements.define("longbutton-component", Largebutton);
  export default Largebutton;
  