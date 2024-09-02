import { Link } from "react-router-dom";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/16/solid";
import "./SearchAndFilterBtn.scss";

const SearchAndFilterBtn = () => {
    return (
        <form className="searchAndFilterForm">
            <input
                type="text"
                name=""
                id=""
                className="searchAndFilterForm__input"
                placeholder={`🔍 Search`}
            />
            <Link
                to=""
                className="searchAndFilterForm__filterLink"
            >
                <AdjustmentsHorizontalIcon width={"20px"} />
            </Link>
        </form>
    );
}

export default SearchAndFilterBtn;