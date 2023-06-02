class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
      <p class="copyright">Made with <span>&#10084;</span> by Hunger Apps</p>
    </footer>
    `;
  }
}

customElements.define('footer-section', Footer);
