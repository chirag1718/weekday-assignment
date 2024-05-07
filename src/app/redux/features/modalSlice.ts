import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
    isOpen: boolean;
}

const initialState: ModalState = {
    isOpen: false,
};

const modalState = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggleModal(state) {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { toggleModal } = modalState.actions;
export default modalState.reducer;
