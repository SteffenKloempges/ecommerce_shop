import { Link } from "react-router-dom";
import { CategoriesFetch } from "../context/Context";
import { useContext } from "react";
import "./CategorieBtnHome.scss";

const CategorieBtnHome = () => {
    const categoryFetch = useContext(CategoriesFetch);

    const icons = [
        "./category-icons/icons8-skin-care-48.png",
        "./category-icons/icons8-feminine-parfuem-flasche-48.png",
        "./category-icons/icons8-sofa-48.png",
        "./category-icons/icons8-einkaufsbeutel-48.png",
        "./category-icons/icons8-klinggloeckchen-48.png",
        "./category-icons/icons8-kochtopf-48.png",
        "./category-icons/icons8-laptops-48.png",
        "./category-icons/icons8-t-shirt-64.png",
        "./category-icons/icons8-sportschuhe-48.png",
        "./category-icons/icons8-watches-50.png",
        "./category-icons/icons8-zwei-smartphones-48.png",
        "./category-icons/icons8-motorrad-emoji-48.png",
        "./category-icons/icons8-foundation-make-up-48.png",
        "./category-icons/icons8-training-48.png",
        "./category-icons/icons8-sonnenbrille-48.png",
        "./category-icons/icons8-tablets-48.png",
        "./category-icons/icons8-t-shirt-64.png",
        "./category-icons/icons8-sport-utility-fahrzeug-48.png",
        "./category-icons/icons8-bags-48.png",
        "./category-icons/icons8-kleid-48.png",
        "./category-icons/icons8-ring-und-ohrringe-48.png",
        "./category-icons/icons8-damenschuhe-50.png",
        "./category-icons/icons8-watches-50.png",
    ];

    return (
        <div className="categorie__home">
            {categoryFetch.categories.map((elt, index) =>
                <Link key={elt.slug}>
                    <div className="categorie__home__btn">
                        <img src={icons[index]} alt="" />
                        <p>{elt.name}</p>
                    </div>
                </Link>)}
        </div>
    );
}

export default CategorieBtnHome;