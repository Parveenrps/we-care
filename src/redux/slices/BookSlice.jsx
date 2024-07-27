import { createSlice } from "@reduxjs/toolkit";

export const BookSlice = createSlice( {
    name: "bookings",
    initialState : [],
    reducers: {
        book : (state, action)=>{
            state.push(action.payload);
        },

    }
})

export const {book} = BookSlice.actions;
export default BookSlice.reducer;