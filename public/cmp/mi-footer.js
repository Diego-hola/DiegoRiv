class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
           
            `<footer style=" background: linear-gradient(to bottom, white,#44411b); 
            padding: 4rem;
             margin-top: 3rem; 
             text-align: center; 
             font-size: 1rem; 
             width: 100%; bottom: 0;">
             Copyright &copy; 2020 Rivera Gonzalez Diego .</footer>`;
            
    }
}
customElements.define("mi-footer", MiFooter);