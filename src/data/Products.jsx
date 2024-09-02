import { useEffect, useContext } from "react";
import { ProductsFetch } from "../context/Context";

const Products = () => {
    const dataFetch = useContext(ProductsFetch);
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=0')
            .then(res => res.json())
            .then(json => dataFetch.setProducts(json.products))
            .catch(error => console.log(error))
    }, [])
}

export default Products;