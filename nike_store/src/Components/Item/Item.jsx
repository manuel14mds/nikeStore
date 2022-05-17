import { NavLink } from 'react-router-dom'
import './Item.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faHeart } from '@fortawesome/free-solid-svg-icons'

const heartIco = <FontAwesomeIcon icon={faHeart} />
const cartIco = <FontAwesomeIcon icon={faBagShopping} />

const Item = ({product}) => {

    return (

        <div className="cardItem text-white bg-dark mb-3">
            <img src={product.imagenes[0]} className="card-img-top" alt="img" />
            <div className="card-body fw-bold">
                <h5 className="card-title text-start">{product.nombre}</h5>
                <p className="card-text text-start">{product.precio} €</p>
                <div className="botones d-flex flex-row">
                    <NavLink to={`/itemDetailContainer/${product.id}`} className="btn btn-light">See</NavLink>
                    <NavLink to={`/itemDetailContainer/${product.id}`}className="icon">{heartIco}</NavLink>
                    <NavLink to={`/itemDetailContainer/${product.id}`} className="icon">{cartIco}</NavLink>
                </div>
            </div>
        </div>

    )
}

export default Item
