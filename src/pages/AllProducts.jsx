import SearchAndFilterBtn from "../components/SearchAndFilterBtn";
import { useContext, useState, useEffect } from "react"
import { ProductsFetch } from "../context/Context";
import ProductItem from "../components/ProductItem";
import NavBar from "../components/NavBar";
import "./AllProducts.scss";

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
            <section className="all__products__grid">
                {productsFetch.products?.map((singleProducts) => <ProductItem
                    key={singleProducts.id}
                    id={singleProducts.id}
                    price={singleProducts.price}
                    rating={singleProducts.rating}
                    thumbnail={singleProducts.thumbnail}
                    title={singleProducts.title}
                />)}
            </section>
            <NavBar />
        </section>
    );
}

export default allProducts;