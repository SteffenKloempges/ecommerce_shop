import SearchAndFilterBtn from "../components/SearchAndFilterBtn";
import { useContext, useState, useMemo } from "react";
import { ProductsFetch } from "../context/Context";
import ProductItem from "../components/ProductItem";

const AllProducts = () => {
    const productsFetch = useContext(ProductsFetch);
    const [sortBy, setSortBy] = useState("");

    const sortedProducts = useMemo(() => {
        if (!productsFetch?.products?.products) return [];

        let newSortedArr = [...productsFetch.products.products];
        if (sortBy === "desc") {
            newSortedArr.sort((a, b) => b.price - a.price);
        } else if (sortBy === "asc") {
            newSortedArr.sort((a, b) => a.price - b.price);
        } else if (sortBy === "pop") {
            newSortedArr.sort((a, b) => b.rating - a.rating);
        }
        return newSortedArr;
    }, [sortBy, productsFetch.products.products]);

    const sortedBy = (event) => {
        setSortBy(event.target.value);
    };

    return (
        <section>
            <SearchAndFilterBtn />
            <form>
                <label>
                    Sort by:
                    <select name="" id="" onChange={sortedBy}>
                        <option value="">Select Filter</option>
                        <option value="asc">Lowest Price</option>
                        <option value="desc">Highest Price</option>
                        <option value="pop">Popular</option>
                    </select>
                </label>
            </form>
            {sortedProducts.map((singleProducts) => (
                <ProductItem
                    key={singleProducts.id}
                    id={singleProducts.id}
                    price={singleProducts.price}
                    rating={singleProducts.rating}
                    thumbnail={singleProducts.thumbnail}
                    title={singleProducts.title}
                />
            ))}
        </section>
    );
};

export default AllProducts;
