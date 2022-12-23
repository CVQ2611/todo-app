import { CaseReducer, createSlice } from "@reduxjs/toolkit";
type Sucess = boolean;
const SET_SUCCESS: CaseReducer<Sucess> = (state) => state = !state

export const succesSlice = createSlice({
    name: 'succes',
    initialState: false,
    reducers: {
        SET_SUCCESS,
    },
})


export default succesSlice.reducer