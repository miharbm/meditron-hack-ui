import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {RootState} from "../store";
import type {User} from "../enteties/User.tsx";

const LOCAL_STORAGE_ITEM = 'auth'

interface AuthState {
    token: string | null;
    user: User | null;
}

const loadAuthFromStorage = (): AuthState => {
    try {
        const data = localStorage.getItem(LOCAL_STORAGE_ITEM);
        if (data) {
            console.log(data)
            return JSON.parse(data);
        }
    } catch (e) {
        console.error('Failed to load auth from localStorage', e);
    }
    return { token: null, user: null };
};

const saveAuthToStorage = (data: AuthState) => {
    try {
        localStorage.setItem(LOCAL_STORAGE_ITEM, JSON.stringify(data));
    } catch (e) {
        console.error('Failed to save auth to localStorage', e);
    }
};

const clearAuthFromStorage = () => {
    try {
        localStorage.removeItem(LOCAL_STORAGE_ITEM);
    } catch (e) {
        console.error('Failed to clear auth from localStorage', e);
    }
};

const initialState: AuthState = {
    ...loadAuthFromStorage(),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ token: string; user: User }>) {
            const { token, user } = action.payload;
            state.token = token;
            state.user = user;
            saveAuthToStorage(state);
        },

        logout(state) {
            state.token = null;
            state.user = null;
            clearAuthFromStorage();
        },

    },
});


export const {
    logout,
    login
} = authSlice.actions;


export const selectToken = (state: RootState) => state.auth.token;
export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export const selectIsLoggedIn = (state: { auth: AuthState }) => !!state.auth.token;


export default authSlice.reducer;
