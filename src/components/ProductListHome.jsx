import ProductItem from "./ProductItem";
import { ProductsFetch } from "../context/Context";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductListHome.scss";


const ProductListHome = () => {
    const productsContext = useContext(ProductsFetch);
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        let sortByPopular = [...productsContext.products];
        sortByPopular.sort((a, b) => b.rating - a.rating);
        setProductList(sortByPopular);
    }, [productsContext]);


    return (
        <section>
            <div className="schnick__schnack">
                <h2>Popular</h2>
                <Link to="/allProducts">View all</Link>
            </div>
            <section className="product__list__grid">
                {productList?.map((singleProducts) => <ProductItem
                    key={singleProducts.id}
                    id={singleProducts.id}
                    price={singleProducts.price}
                    rating={singleProducts.rating}
                    thumbnail={singleProducts.thumbnail}
                    title={singleProducts.title}
                />)}
            </section>
        </section>
    );
}

export default ProductListHome;