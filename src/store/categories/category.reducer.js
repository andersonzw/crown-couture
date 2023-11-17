import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../util/firebase/firebase.utils";

 const CATEGORIES_INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null
}
export const categorySlice = createSlice({
    name:'category',
    initialState: CATEGORIES_INITIAL_STATE,
    reducers:{
        fetchCategoriesStart: (state) => {
            state.isLoading = true
        },
        fetchCategoriesSuccess: (state, action) => {
            state.isLoading = false
            state.categories = action.payload
        },
        fetchCategoriesFailed: (state, action ) =>{
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const categoriesReducer = categorySlice.reducer
export const {fetchCategoriesFailed, fetchCategoriesStart, fetchCategoriesSuccess} = categorySlice.actions

// utilises thunk
export const fetchCategoriesAsync = () => {
    return async (dispatch) => {
      dispatch(fetchCategoriesStart());
      try {
        const categoriesArray = await getCategoriesAndDocuments("categories");
        dispatch(fetchCategoriesSuccess(categoriesArray));
      } catch (error) {
        dispatch(fetchCategoriesFailed(error));
      }
    };
  };
  