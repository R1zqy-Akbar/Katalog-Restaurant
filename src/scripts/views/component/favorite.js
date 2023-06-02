class Favorite extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
      }
    </style>
    <h2 class="title" id="title">Your Liked Restaurant</h2>
    <div id="restaurants"></div>`;
  }
}

customElements.define('favorite-section', Favorite);
