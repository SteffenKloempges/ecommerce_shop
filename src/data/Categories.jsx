import { useEffect, useContext } from "react";
import { CategoriesFetch } from "../context/Context";

const Categories = () => {
    const dataFetch = useContext(CategoriesFetch)

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(json => dataFetch.setCategories(json));
    }, [])
}

export default Categories;