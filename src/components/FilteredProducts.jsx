import { useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ProductsFetch } from "../context/Context";
const FilteredProducts = () => {
    const { products, setProducts } = useContext(ProductsFetch);
    const filterSettings = useLocation().state;
    const [filteredProducts, setFilteredProducts] = useState([]);
    console.log(filterSettings)

    useEffect(() => {
        const allProducts = [...products];
        const productsAfterFilterSettings = allProducts.filter((item) => {
            if (
                filterSettings[0].category === item.category &&
                filterSettings[2].brand === item.brand &&
                filterSettings[1].priceMax <= item.price &&
                filterSettings[1].priceLow >= item.price
            ) {
                console.log("test")
                console.log(item)
            }
        })
        console.log(productsAfterFilterSettings);
    }, [])

    return (
        <section>

        </section>
    );
}

export default FilteredProducts;