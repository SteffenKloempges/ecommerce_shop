import CategorieBtnHome from "../components/CategorieBtnHome";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";
import SearchAndFilterBtn from "../components/SearchAndFilterBtn";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductsFetch } from "../context/Context";
import "./Home.scss";

const home = () => {

    const productsContext = useContext(ProductsFetch);
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        let sortByPopular = [...productsContext.products];
        sortByPopular.sort((a, b) => b.rating - a.rating);
        setProductList(sortByPopular);
    }, [productsContext]);

    return (
        <>
            <section className="home">
                <h1 className="home__headline">Find your favourite Product</h1>
                <SearchAndFilterBtn />
                <CategorieBtnHome />
                <div className="schnick__schnack">
                    <h2>Popular</h2>
                    <Link to="/allProducts">View all</Link>
                </div>
                <ProductList
                    productData={productList}
                />
                <NavBar />
            </section>
        </>
    );
}

export default home;