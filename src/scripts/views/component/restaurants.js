class Restaurants extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div id="restaurants"></div>`;
  }
}

customElements.define('restaurants-section', Restaurants);
