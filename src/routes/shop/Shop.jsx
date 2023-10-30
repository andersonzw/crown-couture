import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/ProductCard";
import "./Shop.scss"
const Shop = () => {
    const {products} = useContext(ProductsContext)
  return (
    <div className="shop-container innerWidth paddings">
      {products.map((product) => (
        <ProductCard product = {product} key={product.id}/>

      ))}
    </div>
  );
};

export default Shop;
