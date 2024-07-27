import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "./slices/BookSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
    reducer : {
        bookings : BookSlice,
        user : userSlice
    }
})