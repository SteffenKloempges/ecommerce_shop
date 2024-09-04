import { Link } from "react-router-dom";
import { ShowFilterOverlay } from "../context/Context";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/16/solid";
import { useContext } from "react";
import "./SearchAndFilterBtn.scss";

const SearchAndFilterBtn = () => {
    const { showFilter, setShowFilter } = useContext(ShowFilterOverlay);

    console.log(showFilter);

    const changeShowFilter = (event) => {
        event.preventDefault();
        setShowFilter(!showFilter);
    }

    return (
        <form className="searchAndFilterForm" onSubmit={"return false"}>
            <input
                type="text"
                name=""
                id=""
                className="searchAndFilterForm__input"
                placeholder={`🔍 Search`}
            />
            <button
                className="searchAndFilterForm__filter--btn"
                onClick={changeShowFilter}
            >
                <AdjustmentsHorizontalIcon width={"20px"} />
            </button>
        </form>
    );
}

export default SearchAndFilterBtn;