import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

// memoized selector
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);
// as long as selectCategories does not change, reduce code does not rerun; reuse the previous output
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>{
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})}
);

// transform the base data into the shape you want it in using the selector
// export const selectCategoriesMap = (state) =>
//   state.categories.categories.reduce((acc, category) => {
//     const { title, items } = category;
//     acc[title.toLowerCase()] = items;
//     return acc;
//   }, {});
