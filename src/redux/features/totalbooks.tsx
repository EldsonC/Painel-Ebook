import { createSlice } from "@reduxjs/toolkit";

interface SearchProps {
    totalbooks: {
        total: string;
    }
}

export const slice = createSlice({
    name: "totalbooks",
    initialState: {
        total: 0
    },

    reducers: {
        totalbook(state, {payload}) {
            return {
                ...state,
                total: payload
            }
        }
    }
})

export const { totalbook } = slice.actions
export const bookTotal = (state:SearchProps) => state.totalbooks.total

export default slice.reducer