import {createBrowserRouter, Navigate} from 'react-router-dom';


import {PrivateRoute, PublicRoute} from "./routes.tsx";
import {MainLayout} from "../widgets/MainLayout";
import {LoginPage} from "../pages/LoginPage.tsx";
import {FirstQuizPage} from "../pages/FirstQuizPage.tsx";
import {MainPage} from "../pages/MainPage.tsx";


export const appRouter = createBrowserRouter([
    {
        element: <PublicRoute/>,
        children: [
            {
                path: '/login',
                element: <LoginPage/>,
            },
        ],
    },
    {
        element: <PrivateRoute/>,
        children: [
            {
                path: '/',
                element: <MainLayout/>,
                children: [
                    {index: true, element: <Navigate to="/home" replace/>},
                    {path: "first-quiz", element: <FirstQuizPage/>},
                    {path: "home", element: <MainPage/>},
                ]
            },
        ],
    },
    {
        path: '*',
        element: <div>404: Страница не найдена</div>,
    },
]);
