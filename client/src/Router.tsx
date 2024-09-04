import { useRoutes } from 'react-router-dom'
import Header from './layout/Header';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import Contact from './pages/Contact';

const Router = () => {
    const routingConfig = [
        {
            path: "/",
            element: <Header />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/mypage",
                    element: <MyPage />
                },
                {
                    path: "/contact",
                    element: <Contact />
                }
            ]
        }
    ];


    const routing = useRoutes(routingConfig);
    return routing;
}

export default Router
