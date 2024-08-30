import { useParams, useNavigate } from "react-router-dom"
import { ChevronLeftIcon, PlusIcon, MinusIcon } from "@heroicons/react/16/solid"
import { ProductsFetch } from "../context/Context"
import { useContext, useState } from "react"

const ProductDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const allProducts = useContext(ProductsFetch)

    const singleProductFilter = allProducts.products.products?.filter((elt) => {
        if (elt.id === Number(id)) {
            console.log(elt)
            return elt
        }
    })

    return (
        <section className="product__detail">
            <ChevronLeftIcon width="30px" onClick={() => navigate(-1)} />
            {singleProductFilter?.map((elt) =>
                <>
                    <article>
                        <h3>{elt.title}</h3>
                        <img src={elt.thumbnail} alt={elt.description} />
                        <div>
                            <h3>{elt.title}</h3>
                            <p>⭐️ {elt.rating.toFixed(1)}</p>
                            <p>{elt.stock} pieces in stock</p>
                        </div>
                        <div>
                            <MinusIcon width={"20px"} />
                            <p>1</p>
                            <PlusIcon width={"20px"} />
                            <h4>${elt.price}</h4>
                        </div>
                    </article>
                    <h3>Description</h3>
                    <p>{elt.description}</p>
                    <button>Add to Cart</button>
                </>)}
        </section>

    );
}

export default ProductDetail;