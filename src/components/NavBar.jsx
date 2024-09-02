import { HomeIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import "./NavBar.scss";


const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/home"><HomeIcon width={"24px"} /></Link>
        </div>
    );
}

export default NavBar;