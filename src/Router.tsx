import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import MyPage from './pages/MyPage'

const Router = () => {
    const routingConfig = [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/mypage",
            element: <MyPage />
        }
    ];


    const routing = useRoutes(routingConfig);
    return routing;
}

export default Router
