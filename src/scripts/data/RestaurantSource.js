import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async getAllRestaurants() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getDetailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async getListFood() {
    const response = await fetch(API_ENDPOINT.MEAL);
    const responseJson = await response.json();
    return responseJson.meals;
  }

  static async addReview(data) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantSource;
