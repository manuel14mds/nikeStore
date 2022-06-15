
import { useState } from "react"
import { Button } from "react-bootstrap"

import { useFavContext } from '../../Context/FavContext'

import { toast } from 'react-toastify'
import { faBagShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import 'react-toastify/dist/ReactToastify.css'
import './ItemCount.css'

const heartIco = <FontAwesomeIcon icon={faHeart} />
const cartIco = <FontAwesomeIcon icon={faBagShopping} />

const ItemCount = ({ handleInter, onAdd, product }) => {
    const [count, setCount] = useState(1)

    const {addFavorite} = useFavContext()

    function add() {
        if (count < product.stock) {
            setCount(count + 1)
        }
    }

    function sub() {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const favNotify = () => toast.info('Added to Favorite!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })


    return (
        <>
            <div className='quantCont'>
                <div className="title">quantity</div>
                <div className="counter">
                    <Button onClick={sub} className='bg-dark'>-</Button>
                    <div>{count}</div>
                    <Button onClick={add} className='bg-dark'>+</Button>
                </div>
                <div className="title">stock: {product.stock}</div>
            </div>

            <div className='detailButton'>
                {
                    product.stock===0?
                    <Button className='btnCart' variant="dark" disabled>Add Cart {cartIco}</Button>
                    :
                    <Button className='btnCart' variant="dark" onClick={() => {onAdd(count); handleInter()}}>Add Cart {cartIco}</Button>
                }
                
                
                <Button className='btnFav' variant="light" onClick={() => {addFavorite(product); favNotify()}}>Add Favorite {heartIco}</Button>
            </div>
        </>
    )
}

export default ItemCount
