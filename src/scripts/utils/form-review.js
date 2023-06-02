import RestaurantSource from '../data/RestaurantSource';
import { createReviewTemplate } from '../views/templates/template-creator';

const addReview = {
  async send(url) {
    const submit = document.querySelector('#submit');
    const name = document.querySelector('#name');
    const text = document.querySelector('#text');

    submit.addEventListener('click', async () => {
      const review = {
        id: url.id,
        name: name.value,
        review: text.value,
      };

      if (review.name && review.review) {
        const reviewContainer = document.querySelector('#review');

        try {
          const response = await RestaurantSource.addReview(review);
          RestaurantSource.getDetailRestaurant(url.id);
          reviewContainer.innerHTML = createReviewTemplate(response.customerReviews);
        } catch (error) {
          reviewContainer.innerHTML = `<p>${error.message}</p>`;
        }
      }
      this._resetForm();
    });
  },

  async _resetForm() {
    const name = document.querySelector('#name');
    const text = document.querySelector('#text');
    name.value = '';
    text.value = '';
  },
};

export default addReview;
