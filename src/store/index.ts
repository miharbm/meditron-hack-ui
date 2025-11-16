import { configureStore } from '@reduxjs/toolkit';
import {baseApi} from "../shared/baseApi.ts";
import authReducer from '../reducers/authSlice'; // ← ваш редьюсер


export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
