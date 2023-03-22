import { createSlice } from "@reduxjs/toolkit";

interface SearchProps {
    modaladdbook: {
        show: boolean;
    }
}

export const slice = createSlice({
    name: "modaladdbook",
    initialState: {
        show: false
    },

    reducers: {
        show(state) {
            return {
                ...state,
                show: true
            }
        },

        hide(state) {
            return {
                ...state,
                show: false
            }
        }
    }
})

export const { show, hide } = slice.actions
export const stateModal = (state:SearchProps) => state.modaladdbook.show

export default slice.reducer