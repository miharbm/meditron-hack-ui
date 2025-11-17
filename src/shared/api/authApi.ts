import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { LoginForm } from "./types";

import {login} from "../../reducers/authSlice"
import type {User} from "../../enteties/User.tsx";


export const BASE_URL = import.meta.env.VITE_API_URL;


export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (build) => ({
        login: build.mutation<string, LoginForm>({
            query: (body) => ({
                url: "/login",
                method: "POST",
                body,
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(login({ token: data, user: {"email": " ",
                            "password": " ",
                            "first_name": " ",
                            "second_name": " ",
                            "description": " "} }));
                } catch { /* empty */ }
            },
        }),

        register: build.mutation<{}, User>({
            query: (body) => ({
                url: "/register",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useRegisterMutation
} = authApi;
