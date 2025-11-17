import { configureStore } from '@reduxjs/toolkit';
import {baseApi} from "../shared/api/baseApi.ts";
import authReducer from '../reducers/authSlice';
import {authApi} from "../shared/api/authApi.ts";


export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware, authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
