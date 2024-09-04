import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductItem from "../components/ProductItem";

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
        <section>

            {productByCategoryState.map((elt) => {
                console.log(elt)
                return <ProductItem
                    key={elt.id}
                    id={elt.id}
                    price={elt.price}
                    rating={elt.rating}
                    thumbnail={elt.thumbnail}
                    title={elt.title}
                />
            })}
        </section>
    );
}

export default ProductByCategory;