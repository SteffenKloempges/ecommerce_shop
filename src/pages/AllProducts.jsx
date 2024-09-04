import SearchAndFilterBtn from "../components/SearchAndFilterBtn";
import { useContext, useState, useEffect } from "react"
import { ProductsFetch } from "../context/Context";
import NavBar from "../components/NavBar";
import "./AllProducts.scss";
import ProductList from "../components/ProductList";

const allProducts = () => {
    const productsFetch = useContext(ProductsFetch);
    const [sortBy, setSortBy] = useState("");
    console.log(productsFetch);

    useEffect(() => {
        let newSortedArr = [...productsFetch.products];
        console.log(newSortedArr);
        if (sortBy === "desc") {
            console.log("a");
            console.log(newSortedArr)
            newSortedArr.sort((a, b) => b.price - a.price);
        } else if (sortBy === "asc") {
            console.log("b");
            newSortedArr.sort((a, b) => a.price - b.price);
        } else if (sortBy === "pop") {
            console.log("c");
            newSortedArr.sort((a, b) => b.rating - a.rating);
        } else {
            productsFetch.setProducts(newSortedArr);
        }
        productsFetch.setProducts(newSortedArr);
    }, [sortBy]);

    const sortedBy = (event) => {
        setSortBy(event.target.value);
    };

    return (
        <section className="all__products">
            <SearchAndFilterBtn />
            <form className="all__products__form">
                <label className="all__products__form-label">
                    Sort by:
                    <select
                        name="" id=""
                        onChange={sortedBy}
                        className="all__products__form-select">
                        <option value="pop">Popular</option>
                        <option value="asc">Lowest Price</option>
                        <option value="desc">Highest Price</option>
                    </select>
                </label>
            </form>
            <ProductList
                productData={productsFetch.products}
            />
            <NavBar />
        </section>
    );
}

export default allProducts;