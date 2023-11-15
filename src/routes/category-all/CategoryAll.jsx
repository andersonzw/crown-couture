
import ProductCard from "../../components/product-card/ProductCard";
import "./CategoryAll.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
const CategoryAll = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  return (
    <div className="paddings innerWidth mobile-padding-container category-preview-section">
      {Object.keys(categoriesMap).map((title) => (
        <div className="category-section" key={title}>
          <span className="innerWidth header">
            <h2 className="title">{title}</h2>
            <Link to={`/shop/${title}`} className="more">...more</Link>
          </span>
          <div className="shop-container innerWidth">
            {categoriesMap[title].slice(0, 4).map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryAll;
