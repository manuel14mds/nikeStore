
import { Card, Placeholder } from 'react-bootstrap'
import './Item.css'
import image from '../../../assets/images/white.jpg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faHeart } from '@fortawesome/free-solid-svg-icons'

const heartIco = <FontAwesomeIcon icon={faHeart} />
const cartIco = <FontAwesomeIcon icon={faBagShopping} />
const ItemLoading = () => {
    return (
        <div className="cardItem loading text-white bg-dark mb-3">
            <Card.Img variant="top" src={image} className="card-img-top"/>
            <div className="card-body fw-bold">
                <h5 className="card-title text-start placeholder-glow">
                    <span className="placeholder text-start col-8"></span>
                </h5>
                <p className="card-text text-start placeholder-glow">
                <span className="placeholder text-start col-6"></span>
                </p>
                <div className="botones d-flex flex-row">
                    <Placeholder.Button variant="light" xs={6} />
                    <a href=""className="icon">{heartIco}</a>
                    <a href=""className="icon">{cartIco}</a>
                </div>
            </div>
        </div>
    )
}

export default ItemLoading
