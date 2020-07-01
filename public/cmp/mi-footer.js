class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2020 Rivera Gonzalez Diego.`;
    }
}
customElements.define("mi-footer", MiFooter);