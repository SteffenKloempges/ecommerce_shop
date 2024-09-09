import './FilterSite.scss';
import { useContext, useEffect, useState } from 'react';
import { ProductsFetch, CategoriesFetch } from '../context/Context';
import { Link } from 'react-router-dom';
import NavBar from "./NavBar";

const FilterSite = () => {
    const { products, setProducts } = useContext(ProductsFetch);
    const { categories, setCategories } = useContext(CategoriesFetch);
    const [allBrands, setAllBrands] = useState([]);
    const [filteredCategory, setFilteredCategory] = useState("");
    const [filteredPrice, setFilteredPrice] = useState([]);
    const [filteredBrand, setFilteredBrand] = useState("");

    useEffect(() => {
        //hiermit erstelle ich ein array mit allen brands (auch doppelt) von den producten mit der filter funktion lasse ich alle falsy werte raus filtern
        const filter = products.map(elt => elt.brand).filter(brand => brand);
        // hiermit mache ich aus dem array ein array mit nur unique values
        const unique = Array.from(new Set(filter)).sort();
        setAllBrands(unique);
    }, [])

    // console.log(allBrands)

    const setCategory = (category) => {
        console.log(category)
    };

    return (
        <section className="filterSite__wrapper">
            <article>
                <h3>Categories</h3>
                <div className="filterSite__choices--grid">
                    {categories.map((singleCategory) => <label>
                        {singleCategory.name}
                        <input
                            type="checkbox"
                            // style={{
                            //     "backgroundColor": event.target.checked ? "blue" : "none"
                            // }}
                            onClick={() => setCategory(singleCategory.name)} />
                    </label>)}
                    {/* {categories.map((singleCategory) => <button
                        onClick={() => setFilterProperties([...filterProperties, { "category": singleCategory.name.toLowerCase() }])}
                    >
                        {singleCategory.name}
                    </button>)} */}
                </div>
            </article>
            <article>
                <form className="test">
                    <label htmlFor="">
                        Test
                        <input type="checkbox" name="" id="" onClick={() => console.log(event.target.checked)} />
                    </label>
                </form>
                <h3>Price</h3>
                <div className="filterSite__choices--grid">
                    {/* <button onClick={() => setFilterProperties([...filterProperties, { "priceMax": 20, "priceLow": 0 }])}>0 - 20€</button>
                    <button onClick={() => setFilterProperties([...filterProperties, { "priceMax": 50, "priceLow": 20 }])}>20 - 50€</button>
                    <button onClick={() => setFilterProperties([...filterProperties, { "priceMax": 100, "priceLow": 50 }])}>50 - 100€</button>
                    <button onClick={() => setFilterProperties([...filterProperties, { "priceMax": 100000, "priceLow": 101 }])}>über 100€</button> */}
                </div>
            </article>
            <article>
                <h3>Brands</h3>
                <div className="filterSite__choices--grid">
                    {allBrands.map((elt) => <button
                    // onClick={() => setFilterProperties([...filterProperties, { "brand": elt }])}
                    >{elt}</button>)}
                </div>
            </article>
            <Link to="/allProducts/filter/active" state={"filterProperties"}>
                <button className="filterSite--search--btn">Apply Filter</button>
            </Link>
            <NavBar />
        </section>
    );
}

export default FilterSite;