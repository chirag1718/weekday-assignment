import { createSlice } from "@reduxjs/toolkit";

interface FilterState {
    role: string;
    location: string;
    minExperience: string;
    companyName: string;
    jobType: string;
    minBasePay: string;
}

const initialState: FilterState = {
    role: "",
    location: "",
    minExperience: "",
    companyName: "",
    jobType: "",
    minBasePay: "",
};

const filterSlice = createSlice({
    name: "filters",
    initialState: initialState,
    reducers: {
        setRole(state, action) {
            state.role = action.payload;
        },
        setLocation(state, action) {
            state.location = action.payload;
        },
        setMinExperience(state, action) {
            state.minExperience = action.payload;
        },
        setCompanyName(state, action) {
            state.companyName = action.payload;
        },
        setJobType(state, action) {
            state.jobType = action.payload;
        },
        setMinBasePay(state, action) {
            state.minBasePay = action.payload;
        },
        filterReset(state) {
            return initialState;
        },
    },
});

export const {
    setRole,
    setLocation,
    setCompanyName,
    setJobType,
    setMinBasePay,
    setMinExperience,
    filterReset
} = filterSlice.actions;

export default filterSlice.reducer;
