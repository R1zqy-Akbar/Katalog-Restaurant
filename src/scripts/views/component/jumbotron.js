class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="jumbotron">
      <div class="container">
        <h1>Hunger Apps</h1>
        <p>Temukan restoran favoritmu hanya diwebsite ini</p><br>        
      </div>
    </div>`;
  }
}

customElements.define('jumbotron-section', Jumbotron);
