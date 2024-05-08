import { ModalState } from "@/app/types/types";
import { createSlice } from "@reduxjs/toolkit";
const initialState: ModalState = {
    isOpen: false,
    jobId: null,
};

const modalState = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggleModal(state, action) {
            state.isOpen = !state.isOpen;
            state.jobId = action.payload;
        },
    },
});

export const { toggleModal } = modalState.actions;
export default modalState.reducer;
