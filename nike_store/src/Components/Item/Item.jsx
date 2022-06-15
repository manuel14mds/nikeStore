import { NavLink } from 'react-router-dom';

import { useFavContext } from '../../Context/FavContext';
import { useCartContext } from '../../Context/CartContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './Item.css';

const heartIco = <FontAwesomeIcon icon={faHeart} />
const cartIco = <FontAwesomeIcon icon={faBagShopping} />

const Item = ({product}) => {
    const {addToCart} = useCartContext()
    const {addFavorite} = useFavContext()

    const cardNotify = () => toast.success('Added to cart!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })

    const favNotify = () => toast.info('Added to Favorite!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })

    function onAdd(count){        
        addToCart({...product, count})
    }

    return (
        
        product.stock===0?
        <div className="cardItem text-white bg-dark mb-3">
            <img src={product.images[0]} className="card-img-top" alt="img" />
            <div className="card-body fw-bold">
                <h5 className="card-title text-start">{product.name}</h5>
                <p className="card-text text-start">OUT STOCK</p>
                <div className="buttons d-flex flex-row">
                    <NavLink to={`/itemDetailContainer/${product.id}`} className="btn btn-light see" >See</NavLink>
                    <button onClick={() => {addFavorite(product); favNotify()}} className="icon btn">{heartIco}</button>
                    <button className="icon btn" disabled>{cartIco}</button>
                </div>
            </div>
            <ToastContainer />
        </div>
        :
        <div className="cardItem text-white bg-dark mb-3">
            <img src={product.images[0]} className="card-img-top" alt="img" />
            <div className="card-body fw-bold">
                <h5 className="card-title text-start">{product.name}</h5>
                <p className="card-text text-start">{product.price} €</p>
                <div className="buttons d-flex flex-row">
                    <NavLink to={`/itemDetailContainer/${product.id}`} className="btn btn-light see">See</NavLink>
                    <button onClick={() => {addFavorite(product); favNotify()}} className="icon btn">{heartIco}</button>
                    <button onClick={() => {onAdd(1); cardNotify()}} className="icon btn ">{cartIco}</button>
                </div>
            </div>
            <ToastContainer />
        </div>

    )
}

export default Item
