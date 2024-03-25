import Home from '~/pages/Home';
import ShopCategory from '~/pages/ShopCategory';
import Loginsignup from '~/pages/LoginSignup';
import { ShopLayout } from '~/layouts';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/shopcategory', component: ShopCategory, layout: ShopLayout },
    { path: '/loginsignup', component: Loginsignup, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
