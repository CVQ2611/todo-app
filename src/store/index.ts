import { configureStore } from "@reduxjs/toolkit";
import setLoadingReducer from './reducers/loading';
import setSuccessReducer from './reducers/succes';

export const store = configureStore({
    reducer: {
        loading: setLoadingReducer,
        succes: setSuccessReducer,
    }
})