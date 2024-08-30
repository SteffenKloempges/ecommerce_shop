import { useNavigate } from "react-router-dom";
import { ProductsFetch } from "../context/Context"
import logo from "../assets/img/loading_logo.png"
import "./LoadingScreen.scss";
import { useContext, useEffect } from "react";

const LoadingScreen = () => {
    const productFetch = useContext(ProductsFetch)
    const navigate = useNavigate()

    useEffect(() => {
        if (productFetch) {
            setTimeout(() => {
                navigate("./home")
            }, 1500)
        }
    }, [productFetch])

    return (
        <section className="loading">
            <img src={logo} alt="" />
            <h1>e-shop</h1>
        </section>
    );
}

export default LoadingScreen;