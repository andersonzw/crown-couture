import React, { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/ProductCard";
import "./CategoriesPreview.scss";
import { Link, Routes } from "react-router-dom";
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <div className="paddings innerWidth" key={title}>
          <span className="innerWidth header">
            <h2>{title}</h2>
            <Link to={`/shop/${title}`} className="more">...more</Link>
          </span>
          <div className="shop-container innerWidth">
            {categoriesMap[title].slice(0, 4).map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoriesPreview;
