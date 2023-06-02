import RestaurantSource from '../../data/RestaurantSource';
import {
  createRestoItemTemplate, createMealItemTemplate, loader, failedLoad,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <jumbotron-section></jumbotron-section>
    <div class="loading"></div>
    <h2 class="title" id="title">Explore Restaurant</h2>
    <restaurants-section></restaurants-section>
    <food-section></food-section>
    `;
  },

  async afterRender() {
    const load = document.querySelector('.loading');
    try {
      load.innerHTML = loader();
      const restaurants = await RestaurantSource.getAllRestaurants();
      const restoContainer = document.querySelector('#restaurants');
      restaurants.forEach((restaurant) => {
        restoContainer.innerHTML += createRestoItemTemplate(restaurant);
      });

      
      load.style.display = 'none';
    } catch (error) {
      load.innerHTML = failedLoad();
    }
  },
};

export default Home;
