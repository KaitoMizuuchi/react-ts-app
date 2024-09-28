import { useRoutes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Contact from "./pages/Contact";
import Form from "./pages/Form";
import BookDetail from "./pages/BookDetail";

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
                    path: "/:id",
                    element: <BookDetail />,
                },
                {
                    path: "/mypage",
                    element: <MyPage />,
                },
                {
                    path: "/contact",
                    element: <Contact />,
                },
                {
                    path: "/form",
                    element: <Form />,
                },
            ],
        },
    ];

    const routing = useRoutes(routingConfig);
    return routing;
};

export default Router;
