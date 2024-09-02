import { Link } from "react-router-dom";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
import "./ProductItem.scss";

const ProductItem = ({ id, rating, price, thumbnail, title }) => {
    //console.log({ id, rating, price, thumbnail, title })
    return (
        <article className="productItem__card">
            <img src={thumbnail} alt={title} className="productItem__card__img" />
            <p className="productItem__card__rating">⭐️ {rating.toFixed(1)}</p>
            <h3 className="productItem__card__title">{title.slice(0, 10).concat("...")}</h3>
            <p className="productItem__card__price">${price}</p>
            <Link
                to={`/product/${id}`}
                className="productItem__card__icon"
            >
                <PlusCircleIcon width={"20px"} color="#364FD4" />
            </Link>
        </article>
    );
}

export default ProductItem;