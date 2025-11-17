import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {RootState} from "../../store";
// import {API_TAG_TYPES} from "./tags.ts";

export const BASE_URL = import.meta.env.VITE_API_URL;

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        // Вы можете добавить сюда глобальные заголовки, например, для авторизации
        prepareHeaders: (headers, { getState }) => {
          const token = (getState() as RootState).auth.token; // Если у вас есть редюсер авторизации
          if (token) {
            headers.set('authorization', `${token}`);
          }
          return headers;
        },
    }),
    // tagTypes: API_TAG_TYPES,
    endpoints: () => ({}),
});
