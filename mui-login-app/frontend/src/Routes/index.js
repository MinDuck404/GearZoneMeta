import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import Home from '../Pages/Home';
import Orders from '../Pages/Home/Orders/Orders';
import Products from '../Pages/Home/Products/Products';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';
export const routes = [
{
    path: '/',
    page: Home,
    isShowHeader: true
},

{
    path: '/orders',
    page: Orders,
    isShowHeader: true
},

{
    path: '/products',
    page: Products,
    isShowHeader: true
},

{
    path: '/login',
    page: Login,
    isShowHeader: true
},

{
    path: '/register',
    page: Register,
    isShowHeader: true
},

{
    path: '*',
    page: NotFoundPage
}
]