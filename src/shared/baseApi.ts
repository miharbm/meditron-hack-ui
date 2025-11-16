import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import {API_TAG_TYPES} from "./tags.ts";

export const BASE_URL = 'http:/';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        // Вы можете добавить сюда глобальные заголовки, например, для авторизации
        // prepareHeaders: (headers, { getState }) => {
        //   const token = (getState() as RootState).auth.token; // Если у вас есть редюсер авторизации
        //   if (token) {
        //     headers.set('authorization', `Bearer ${token}`);
        //   }
        //   return headers;
        // },
    }),
    // tagTypes: API_TAG_TYPES,
    endpoints: () => ({}),
});
