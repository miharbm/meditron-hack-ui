import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {RootState} from "../../store";
import type {User} from "../../enteties/User.tsx";
// import {API_TAG_TYPES} from "./tags.ts";

export const BASE_URL = import.meta.env.VITE_API_URL;

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        // Вы можете добавить сюда глобальные заголовки, например, для авторизации
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token; // Если у вас есть редюсер авторизации
            console.log(token)
            if (token) {
                headers.set('Sessiontoken', `${token}`);
            }
return headers;
        },
    }),
    // tagTypes: API_TAG_TYPES,
    endpoints: (build) => ({
        me: build.query<User, void>({
            query: () => ({
                url: "/me",
                method: "GET",
            }),
        }),
        onboardingTest: build.mutation<void, boolean[]>({
            query: (results) => {
                const params = new URLSearchParams();
                results.forEach(val => params.append("test_result", String(val)));

                return {
                    url: `/onboarding_test?${params.toString()}`,
                    method: "POST",
                };
            },
        })

    }),
});


export const {
    useMeQuery,
    useOnboardingTestMutation,
} = baseApi;
