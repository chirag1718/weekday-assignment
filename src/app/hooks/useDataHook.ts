import { batch, useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
    setIsLoading,
    setPosts,
    setHasMorePosts,
    setOffset,
} from "@/app/redux/features/jobPostSlice";
import { PostsArray } from "../types/types";

/**
 * Custom hook to manage data fetching and filtering
 * @returns handleFetchJobPosts, filteredPosts and isLoading state
 */
//
export const useDataHook = () => {
    const dispatch = useDispatch();
    const { posts, isLoading, limit, offset, filters } = useSelector(
        (state: RootState) => ({
            posts: state.jobPosts.posts,
            isLoading: state.jobPosts.isLoading,
            limit: state.jobPosts.limit,
            offset: state.jobPosts.offset,
            filters: state.filters,
        })
    );
    const { companyName, jobType, location, minBasePay, minExperience, role } =
        filters;

    // Function to fetch job posts from the API
    const handleFetchJobPosts = async () => {
        // Request body with limit and offset
        const body = JSON.stringify({
            limit: limit,
            offset: offset,
        });

        // Options for the fetch request
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body,
        };

        try {
            dispatch(setIsLoading(true)); // Set loading state to true
            const response = await fetch(
                "https://api.weekday.technology/adhoc/getSampleJdJSON",
                requestOptions
            );
            const result = await response.json(); // Parse response
            dispatch(setPosts(result.jdList)); // Update posts in Redux store
            dispatch(setOffset(offset + result.jdList.length)); // Update offset by adding the number of new posts fetched
            dispatch(setIsLoading(false)); // Set loading state to false
            // Check if there are more posts to fetch
            if (result.length > 0) {
                dispatch(setHasMorePosts(true));
            } else {
                dispatch(setHasMorePosts(false));
            }
        } catch (error) {
            console.error(error);
        }
    };

    // Filter job posts based on filter criteria
    const filteredPosts = posts?.filter((post: PostsArray) => {
        const roleMatch =
            !role || post.jobRole.toLowerCase().includes(role.toLowerCase()); // Filter for job role
        const locationMatch =
            !location ||
            post.location.toLowerCase().includes(location.toLowerCase()); // Filter for locations
        const companyNameMatch =
            !companyName ||
            post.companyName.toLowerCase().includes(companyName.toLowerCase()); // Instant search filter for company names
        const jobTypeMatch =
            !jobType ||
            post.location.toLowerCase().includes(jobType.toLowerCase()); // Filter for job type
        const minExpMatch =
            minExperience === "" ||
            (post.minExp !== null && post.minExp === parseInt(minExperience)); // Exactly filter out for specific year
        const minSalaryMatch =
            minBasePay === "" ||
            (post.minJdSalary !== null &&
                post.minJdSalary >= parseInt(minBasePay)); // Filter salary from X LPA and above for better rendering of results
        return (
            roleMatch &&
            locationMatch &&
            companyNameMatch &&
            jobTypeMatch &&
            minExpMatch &&
            minSalaryMatch
        );
    });

    return { handleFetchJobPosts, filteredPosts, isLoading };
};
