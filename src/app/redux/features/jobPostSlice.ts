import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface JobPostState {
    posts: any[];
    isLoading: boolean;
    hasMorePosts: boolean;
}
const initialState: JobPostState = {
    posts: [],
    isLoading: false,
    hasMorePosts: false,
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
    },
});

export const { setPosts, setIsLoading, setHasMorePosts } = jobPostSlice.actions;
export default jobPostSlice.reducer;
