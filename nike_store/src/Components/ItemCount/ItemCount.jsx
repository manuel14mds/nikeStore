
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faHeart } from '@fortawesome/free-solid-svg-icons'


import { useState } from "react"
import { Button } from "react-bootstrap"
import './ItemCount.css'

const heartIco = <FontAwesomeIcon icon={faHeart} />
const cartIco = <FontAwesomeIcon icon={faBagShopping} />

const ItemCount = ({ stock, handleInter, onAdd }) => {
    const [count, setCount] = useState(1)

    function add() {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    function sub() {
        if (count > 1) {
            setCount(count - 1)
        }
    }


    return (
        <>
            <div className='quantCont'>
                <div className="title">quantity</div>
                <div className="counter">
                    <Button onClick={sub} className='bg-dark'>-</Button>
                    <div>{count}</div>
                    <Button onClick={add} className='bg-dark'>+</Button>
                </div>
                <div className="title">stock: {stock}</div>
            </div>

            <div className='detailButton'>

                <Button className='btnCart' variant="dark" onClick={() => {onAdd(count); handleInter()}}>Add Cart {cartIco}</Button>
                {/* <Button className='btnCart' variant="dark" onClick={handleInter}>Add Cart {cartIco}</Button> */}
                <Button className='btnFav' variant="light">Add Favorite {heartIco}</Button>
            </div>

        </>
    )
}

export default ItemCount
