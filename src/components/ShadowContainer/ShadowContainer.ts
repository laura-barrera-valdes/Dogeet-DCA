export enum shadowAttribute{
    "Title" = "Title",
}

class Myshadow extends HTMLElement{
    Title?: string;


    static get observedAttributes() {
      const shadowattrs: Record<shadowAttribute, null> = {

        Title: null,
      };

      return Object.keys(shadowattrs);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
    
      connectedCallback() {
        this.render();
      }

      attributeChangedCallback(
        propName: shadowAttribute,
        _: string | undefined,
        newValue: string | undefined
      ) {
        this[propName] = newValue;
    
        this.render();
      }

      render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=`
            <p class"Thitlecontainer">${this.Title}</p>
            `
        }
      }

}    

customElements.define("shadow-container", Myshadow );
export default Myshadow;
    