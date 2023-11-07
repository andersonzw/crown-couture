import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/ProductCard";
const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  // products will not update on each re-render unless categories changes
  useEffect(() => {
    // this may run before we get categories from database, it is runnning synchronously, need a safeguard
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="wrapper paddings innerWidth">
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
