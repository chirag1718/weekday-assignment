import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modalSlice";
import jobPostSlice from "./features/jobPostSlice";
import fliterSlice from "./features/fliterSlice";

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        jobPosts: jobPostSlice,
        filters: fliterSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
