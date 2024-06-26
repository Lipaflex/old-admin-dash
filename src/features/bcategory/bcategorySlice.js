import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bCategoryService from "./bcategoryService";

export const getCategories = createAsyncThunk
('productCategory/get-categories', 
async(thunkAPI) => {
    try {
        return await bCategoryService.getBlogCategories();
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}
);
const initialState = {
    bCategories: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ""
}

export const bCategorySlice = createSlice({
    name: 'bcategories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getCategories.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.bCategories = action.payload;
        })
        .addCase(getCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
    }
})

export default bCategorySlice.reducer;