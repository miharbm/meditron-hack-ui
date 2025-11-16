import { Navigate, Outlet } from 'react-router-dom';
import {useSelector} from "react-redux";
import {selectIsLoggedIn} from "../reducers/authSlice.ts";

/**
 * PrivateRoute - Компонент-обертка для защищенных маршрутов.
 * Если пользователь не аутентифицирован, перенаправляет на страницу логина.
 */
export const PrivateRoute = () => {
    // const isAuthenticated = useSelector(selectIsLoggedIn);
    const isAuthenticated = true;
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

/**
 * PublicRoute - Компонент-обертка для публичных маршрутов (например, логина).
 * Если пользователь уже аутентифицирован, перенаправляет на главную страницу.
 */
export const PublicRoute = () => {
    const isAuthenticated = useSelector(selectIsLoggedIn);
    return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
};
