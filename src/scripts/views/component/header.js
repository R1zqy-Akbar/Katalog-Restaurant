class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="app-bar">
    <div class="menu">
      <button id="hamburgerButton">☰</button>
    </div>
    <div class="brand">      
      <h1 class="brand-title">Hunger Apps</h1>
    </div>
    <nav id="navigationDrawer" class="navigation">
      <ul>
        <li><a class="page" href="#/">HOME</a></li>
        <li><a class="page" href="#/favorites">FAVORITE</a></li>
        <li><a class="page" href="https://www.linkedin.com/in/muhammad-rizqy-akbar-1580b8234/" target="_blank">ABOUT US</a></li>
      </ul>
    </nav>
  </header>`;
  }
}

customElements.define('header-section', Header);
