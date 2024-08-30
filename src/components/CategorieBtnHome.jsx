import { Link } from "react-router-dom";
import { CategoriesFetch } from "../context/Context";
import { useContext } from "react";
import "./CategorieBtnHome.scss";

const CategorieBtnHome = () => {
    const categoryFetch = useContext(CategoriesFetch);

    return (
        <div className="categorie__btn__home">
            {categoryFetch.categories.map((elt) => <Link key={elt.slug}>{elt.name}</Link>)}
        </div>
    );
}

export default CategorieBtnHome;