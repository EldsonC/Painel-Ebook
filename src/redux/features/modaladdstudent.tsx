import { createSlice } from "@reduxjs/toolkit";

interface StudentProps {
    modaladdstudent: {
        show: boolean;
    }
}

export const slice = createSlice({
    name: "modaladdstudent",
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
export const stateModal = (state:StudentProps) => state.modaladdstudent.show

export default slice.reducer