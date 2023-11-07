import React, { useEffect, useState } from "react";
// import SHOP_DATA from "../shopdata"
import {
  getCategoriesAndDocuments,
} from "../util/firebase/firebase.utils";

export const CategoriesContext = React.createContext({
    categoriesMap: {},
    setCategoriesMap: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    // addCollectionAndDocuments('categories', SHOP_DATA)
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap)
    };
    getCategoriesMap()
  }, []);

  const state = { categoriesMap, setCategoriesMap };
  return (
    <CategoriesContext.Provider value={state}>
      {children}
    </CategoriesContext.Provider>
  );
};
