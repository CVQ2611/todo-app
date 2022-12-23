import { CaseReducer, createSlice } from "@reduxjs/toolkit";
type Loading = boolean;
const SET_LOADING: CaseReducer<Loading> = (state) => state = !state

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: false,
    reducers: {
        SET_LOADING,
    },
})


export default loadingSlice.reducer