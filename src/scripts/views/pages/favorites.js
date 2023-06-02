import FavoriteRestaurant from '../../data/FavoriteRestaurant';
import { createRestoItemTemplate, loader, failedLoad } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
    <div class="loading"></div>
    <jumbotron-section></jumbotron-section>  
    <favorite-section></favorite-section>
    `;
  },

  async afterRender() {
    const load = document.querySelector('.loading');
    try {
      load.innerHTML = loader();
      const restaurants = await FavoriteRestaurant.getAllRestaurants();
      const restoContainer = document.querySelector('#restaurants');

      if (restaurants.length !== 0) {
        restaurants.forEach((restaurant) => {
          restoContainer.innerHTML += createRestoItemTemplate(restaurant);
        });
        load.style.display = 'none';
      } else {
        const title = document.querySelector('.title');
        title.innerHTML = 'No Favorite Restaurant';
        load.style.display = 'none';
      }
    } catch (error) {
      load.innerHTML = failedLoad();
    }
  },
};

export default Favorites;
