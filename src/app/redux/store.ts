import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modalSlice";
import jobPostSlice from "./features/jobPostSlice";

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        jobPosts: jobPostSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
