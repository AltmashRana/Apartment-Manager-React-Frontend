import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themeMode/themeSlice";


export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
})