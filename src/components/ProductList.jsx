import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import './ProductList.scss';

const ProductList = ({ productData }) => {
    console.log(productData);

    return (
        <section className="product__list__grid">
            {productData?.map((singleProducts) => <ProductItem
                key={singleProducts.id}
                id={singleProducts.id}
                price={singleProducts.price}
                rating={singleProducts.rating}
                thumbnail={singleProducts.thumbnail}
                title={singleProducts.title}
            />)}
        </section>
    );
}

export default ProductList;