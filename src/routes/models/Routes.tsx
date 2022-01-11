import homeIcon from '../../common/assets/icons/iconeHome.svg';
import RoutesEnum from '../../common/enum/Routes';
import { Routes } from './IRoutes';
import Bank from '../../features/BankExample';
import Posts from '../../features/PostsExample';
import Home from '../../features/Home';

const routes: Routes = {
  home: {
    routePath: RoutesEnum.HOME,
    component: Home,
    name: 'Home',
    icon: homeIcon,
    public: true,
  },
  bankExample: {
    routePath: RoutesEnum.BANK_EXAMPLE,
    component: Bank,
    name: 'Bank Example',
    icon: homeIcon,
    public: true,
  },
  postsExample: {
    routePath: RoutesEnum.POSTS_EXAMPLE,
    component: Posts,
    name: 'Posts Example',
    icon: homeIcon,
    public: true,
  },
};
export default routes;
