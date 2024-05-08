import { JobPostState } from "@/app/types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: JobPostState = {
    posts: [],
    isLoading: false,
    hasMorePosts: false,
    limit: 10,
    offset: 0,
};

const jobPostSlice = createSlice({
    name: "jobPosts",
    initialState: initialState,
    reducers: {
        setPosts(state, action) {
            // state.posts = [...state.posts, ...action.payload];
            if (Array.isArray(action.payload)) {
                state.posts = [...state.posts, ...action.payload];
            } else {
                state.posts = [...state.posts, action.payload];
            }
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        },

        setHasMorePosts(state, action) {
            state.hasMorePosts = action.payload;
        },
        setOffset(state, action) {
            state.offset = action.payload;
        },
    },
});

export const { setPosts, setIsLoading, setHasMorePosts, setOffset } =
    jobPostSlice.actions;
export default jobPostSlice.reducer;
