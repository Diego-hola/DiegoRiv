class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2020 Rivera Gonzalez Diego.`;
            `<footer style=" background-color: orange; padding: 4rem; margin-top: 3rem; text-align: center; font-size: 1rem; width: 100%; bottom: 0;">Copyright &copy; 2020 Rivera Gonzalez Diego .</footer>`;
            
        }
    }
    customElements.define("mi-footer", MiFooter);
    
    }
}
customElements.define("mi-footer", MiFooter);