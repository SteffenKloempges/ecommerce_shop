import './FilterOverlay.scss';
import { useContext } from 'react';
import { ShowFilterOverlay } from '../context/Context';

const FilterOverlay = () => {
    const { showFilter, setShowFilter } = useContext(ShowFilterOverlay);

    console.log(showFilter);
    return (
        <section className="filterOverlay__wrapper" style={{
            left: showFilter ? "0" : "100%",
            right: showFilter ? "0" : "-100%",
            trasition: "right linear 1s, left linear 1s"
        }}>
            <article>
                <h3>Categories</h3>
                <div className="filterOverlay__choices--grid">

                </div>
            </article>
            <article>
                <h3>Price</h3>
                <div className="filterOverlay__choices--grid">

                </div>
            </article>
            <article>
                <h3>Brands</h3>
                <div className="filterOverlay__choices--grid">

                </div>
            </article>
            <button onClick={() => setShowFilter(!showFilter)}>Search</button>
        </section>
    );
}

export default FilterOverlay;