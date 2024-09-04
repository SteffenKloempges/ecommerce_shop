import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductList from "../components/ProductList";
import NavBar from "../components/NavBar";
import SearchAndFilterBtn from "../components/SearchAndFilterBtn";

const ProductByCategory = () => {
    const url = useLocation();
    const [productByCategoryState, setProductByCategoryState] = useState([]);
    console.log(url)

    useEffect(() => {
        fetch("https://dummyjson.com/products/category/fragrances")
            .then(res => res.json())
            .then(json => {
                setProductByCategoryState(json.products);
            });
    }, []);

    return (
        <section className="product__category">
            <SearchAndFilterBtn />
            <ProductList
                productData={productByCategoryState}
            />
            <NavBar />
        </section>
    );
}

export default ProductByCategory;