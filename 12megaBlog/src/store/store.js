/* eslint-disable no-unused-vars */
import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
    reducer: {
        auth : authSlice,
        // reducers go here
    }
});

export default store;
