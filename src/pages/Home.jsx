import CategorieBtnHome from "../components/CategorieBtnHome";
import NavBar from "../components/NavBar";
import ProductListHome from "../components/ProductListHome";
import SearchAndFilterBtn from "../components/SearchAndFilterBtn";
import "./Home.scss";

const home = () => {
    return (
        <>
            <section className="home">
                <h1 className="home__headline">Find your favourite Product</h1>
                <SearchAndFilterBtn />
                <CategorieBtnHome />
                <ProductListHome />
                <NavBar />
            </section>
        </>
    );
}

export default home;