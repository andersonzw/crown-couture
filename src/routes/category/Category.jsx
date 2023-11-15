import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import "./Category.scss"
const Category = () => {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoriesMap)
  const [products, setProducts] = useState(categoriesMap[category]);

  // products will not update on each re-render unless categories changes
  useEffect(() => {
    // this may run before we get categories from database, it is runnning synchronously, need a safeguard
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="shop-wrapper paddings innerWidth mobile-padding-container">
      <h2 className="title">{category}</h2>
      <div className="shop-container innerWidth ">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Category;
