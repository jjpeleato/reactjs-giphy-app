import PropTypes from 'prop-types';
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    isLoading && <p>Cargando...</p>
                }
                {
                    images.map((item) => (
                        <GifItem key={item.id} {...item} />
                    ))
                }
            </div>
        </>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
