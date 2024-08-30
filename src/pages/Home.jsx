import CategorieBtnHome from "../components/CategorieBtnHome";
import FilterBtnHome from "../components/FilterBtnHome";
import ProductListHome from "../components/ProductListHome";
import SearchAndFilterBtn from "../components/SearchAndFilterBtn";
import { CategoriesFetch } from "../context/Context";

const home = () => {
    return (
        <>
            <header>
                <h1>Find your favourite Product</h1>
                <SearchAndFilterBtn />
                <CategorieBtnHome />
                <ProductListHome />
            </header>
        </>
    );
}

export default home;