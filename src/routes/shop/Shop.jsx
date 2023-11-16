import { getCategoriesAndDocuments } from "../../util/firebase/firebase.utils";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Category from "../category/Category";
import { fetchCategoriesAsync } from "../../store/categories/category.action";
import CategoryAll from "../category-all/CategoryAll";
const Shop = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <Routes>
      {/* default page */}
      <Route index element={<CategoryAll />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
