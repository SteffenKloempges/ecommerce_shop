import SearchAndFilterBtn from "../components/SearchAndFilterBtn";
import { useContext, useState, useEffect } from "react"
import { ProductsFetch } from "../context/Context";

const allProducts = () => {
    const productsFetch = useContext(ProductsFetch);
    const [sortBy, setSortBy] = useState("");
    const [productState, setProductState] = useState([])

    useEffect(() => {

    })
    console.log(productsFetch.products.products);
    return (
        <section>
            <SearchAndFilterBtn />
            <form>
                <label>
                    Sort by:
                    <select name="" id="">
                        <option value="">Lowest Price</option>
                        <option value="">Highest Price</option>
                        <option value="">Popular</option>
                    </select>
                </label>
            </form>
            { }
        </section>
    );
}

export default allProducts;