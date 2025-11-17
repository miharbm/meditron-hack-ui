import {createBrowserRouter, Navigate} from 'react-router-dom';


import {PrivateRoute, PublicRoute} from "./routes.tsx";
import {MainLayout} from "../widgets/MainLayout";
import {LoginPage} from "../pages/LoginPage.tsx";
import {FirstQuizPage} from "../pages/FirstQuizPage.tsx";
import {MainPage} from "../pages/MainPage.tsx";
import {UserPage} from "../pages/UserPage.tsx";
import {QuizPage} from "../pages/QuizPage.tsx";
import RegisterPage from "../pages/RegisterPage.tsx";


export const appRouter = createBrowserRouter([
    {
        element: <PublicRoute/>,
        children: [
            {
                path: '/login',
                element: <LoginPage/>,
            },
            {
                path: '/register',
                element: <RegisterPage/>,
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
                    {path: "user", element: <UserPage/>},
                    {path: "quiz", element: <QuizPage/>},
                ]
            },
        ],
    },
    {
        path: '*',
        element: <div>404: Страница не найдена</div>,
    },
]);
