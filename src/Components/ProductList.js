import React, {Component, useEffect, useState} from "react";
import allProducts from "../Data/allProducts"
import ProductItem from "./ProductItem";
import categories from "../Data/categories";


const ProductList = (props) => {

    const [currentProductList, setCurrentProductList] = useState(allProducts);
    const [currentCategory, setCurrentCategory] = useState("All Products");

    const clickHandler = (categoryArg) => {


      setCurrentCategory(categoryArg);
      
      if(categoryArg == "All Products")
      {
        
        setCurrentProductList(allProducts);
      }
      else {
        
        setCurrentProductList(allProducts.filter(product=>product.category == categoryArg));  
      }
       
    }

   
    return (
        <div id = "productListWrapper">
        
              <div id ="productSideBar">
                <h4>Sort by</h4>
                    <li onClick={e=>clickHandler("All Products")}>All Products</li>
                    <li onClick={e=>clickHandler("Consoles")}>Consoles</li>
                    <li onClick={e=>clickHandler("Games")}>Games</li>
                    <li onClick={e=>clickHandler("Merch")}>Merchandise</li>
                 </div>
                 <h2 id = "productListCategoryHeader">{currentCategory}</h2>

                <div id = "product-list">
                
                    {currentProductList.map((product ) => {

                        return (
                            <ProductItem 
                            name = {product.name}
                            price = {product.price}
                            image = {product.prevImage}
                            />

                        );
                    })}
                
            </div>
       </div>
    );


};



export default ProductList;