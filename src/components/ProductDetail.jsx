import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeftIcon, PlusIcon, MinusIcon } from "@heroicons/react/16/solid";
import { ProductsFetch } from "../context/Context";
import { useContext, useState } from "react";
import NavBar from "./NavBar";
import "./ProductDetail.scss";

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const allProducts = useContext(ProductsFetch);
    const [productCounter, setProductCounter] = useState(1);

    const singleProductFilter = allProducts.products.filter((elt) => {
        if (elt.id === Number(id)) {
            console.log(elt);
            return elt;
        }
    });

    const counter = (upOrDown) => {
        if (upOrDown === "+") {
            setProductCounter(productCounter + 1);
        } else {
            setProductCounter(productCounter - 1);
        };
    };

    return (
        <section className="product__detail__wrapper">
            <ChevronLeftIcon width="30px" onClick={() => navigate(-1)} className="product__detail__arrow--btn" />
            {singleProductFilter?.map((elt) =>
                <section key={id} className="product__detail__infos">
                    <h3>{elt.title}</h3>
                    <article className="product__detail__card">
                        <img src={elt.thumbnail} alt={elt.description} />
                        <div>
                            <h3>{elt.title}</h3>
                            <p>⭐️ {elt.rating.toFixed(1)}</p>
                            <p>{elt.stock} pieces in stock</p>
                        </div>
                        <div>
                            <div className="product__detail__counter">
                                <MinusIcon width={"20px"} className="product__detail__counter--minus"
                                    onClick={() => counter("-")} />
                                <p>{productCounter}</p>
                                <PlusIcon width={"20px"} className="product__detail__counter--plus"
                                    onClick={() => counter("+")} />
                            </div>
                            <h4>${elt.price}</h4>
                        </div>
                    </article>
                    <article className="product__detail__description">
                        <h3>Description</h3>
                        <p>{elt.description}</p>
                    </article>
                    <button>Add to Cart</button>
                </section>)
            }
            <NavBar />
        </section >

    );
}

export default ProductDetail;