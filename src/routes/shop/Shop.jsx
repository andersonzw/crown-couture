

import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/CategoriePreview";
import Category from "../category/Category";
const Shop = () => {

  return (
    <Routes>
      {/* default page */}
      <Route index element={<CategoriesPreview/>}/>
      <Route path=":category" element = {<Category/>}/>
    </Routes>

  );
};

export default Shop;
