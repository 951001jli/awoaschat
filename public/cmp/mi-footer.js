class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */ 
           `Copyright &copy; 2020 - Garcia Serna Gerardo
            - Hernandez Izquierdo Jose Luis
            - Meza Castro Jazmin Ivonne
            - Morales Jimenez Monserrat
            - Palma Perez Leonardo Vicente
            - Sanchez Sanchez Andrea Abigail`;
    }
}
customElements.define("mi-footer", MiFooter);