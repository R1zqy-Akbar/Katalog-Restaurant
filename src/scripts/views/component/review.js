class Review extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="add-review">
    
    </div>
  `;
  }
}

customElements.define('review-section', Review);
