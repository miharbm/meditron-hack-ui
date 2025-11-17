import {Navigate, Outlet} from 'react-router-dom';
import {useSelector} from "react-redux";
import {selectIsLoggedIn} from "../reducers/authSlice.ts";

const enabledAuth = import.meta.env.VITE_ENABLED_AUTH === "true"

/**
 * PrivateRoute - Компонент-обертка для защищенных маршрутов.
 * Если пользователь не аутентифицирован, перенаправляет на страницу логина.
 */
export const PrivateRoute = () => {
    const isAuthenticatedStore = useSelector(selectIsLoggedIn);
    if (!enabledAuth) {
        return <Outlet />
    }
    return isAuthenticatedStore ? <Outlet /> : <Navigate to="/login" replace />;
};

/**
 * PublicRoute - Компонент-обертка для публичных маршрутов (например, логина).
 * Если пользователь уже аутентифицирован, перенаправляет на главную страницу.
 */
export const PublicRoute = () => {
    const isAuthenticated = useSelector(selectIsLoggedIn);
    return isAuthenticated ? <Navigate to="/login" replace /> : <Outlet />;
};
