import Favorites from '../views/pages/favorites';
import Detail from '../views/pages/detail';
import Home from '../views/pages/home';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorites': Favorites,
  '/detail/:id': Detail,
};

export default routes;
