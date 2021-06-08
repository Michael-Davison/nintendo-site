import React, { Component, useEffect, useState } from "react";
import allProducts from "../Data/allProducts"
import ProductItem from "./ProductItem";



const ProductList = (props) => {

  const [currentProductList, setCurrentProductList] = useState(allProducts);
  const [currentCategory, setCurrentCategory] = useState("All Products");



  const sortClickHandler = (categoryArg) => {


    setCurrentCategory(categoryArg);

    if (categoryArg == "All Products") {

      setCurrentProductList(allProducts);
    }
    else {

      setCurrentProductList(allProducts.filter(product => product.category == categoryArg));
    }

  }



  return (
    <div id="productListWrapper">

      <div id="productSideBar">
        <h4 id="sortByHeader">Sort by</h4>
        <li onClick={e => sortClickHandler("All Products")}>All Products</li>
        <li onClick={e => sortClickHandler("Consoles")}>Consoles</li>
        <li onClick={e => sortClickHandler("Games")}>Games</li>
        <li onClick={e => sortClickHandler("Merchandise")}>Merchandise</li>
      </div>
      <h2 id="productListCategoryHeader">{currentCategory}</h2>

      <div id="product-list">

        {currentProductList.map((product) => {

          return (
            <ProductItem
              name={product.name}
              price={product.price}
              image={product.prevImage}
              id={product.id}
              addToCart={e => props.addCartHandler(product.id)}
            />

          );
        })}

      </div>
    </div>
  );


};

export default ProductList;