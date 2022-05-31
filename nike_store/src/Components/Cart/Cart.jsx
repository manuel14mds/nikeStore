
import './Cart.css'
import { useCartContext } from '../../Context/CartContext'

import ItemCart from '../ItemCart/ItemCart'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cartList, emptyCart, totalCart, total } = useCartContext()
    const [empty, setEmpty] = useState(true)

    useEffect(()=>{
        total()

        cartList.length>0 ? setEmpty(false) : setEmpty(true)

    }, [cartList])

    return (
        <>
            <div className='cartContainer container-fluid'>
                <h2>CART</h2>
                <div className='cart container-fluid row'>

                    <div className="itemContainer col-md-8">
                        {
                            empty ?
                            <>
                                <h2>Empty Cart</h2>
                                <Link to='/itemListCont/all'>See All Products</Link>
                            </>

                                :
                                cartList.map((item) => <ItemCart key={item.id} item={item}/>)
                        }
                            
                    </div>

                    <div className="total col-md-4">
                        <h3>total</h3>
                        <p>{totalCart.toFixed(2)} €</p>
                        <button className='btn btn-lg bg-primary'>Shop Now</button>
                        <button onClick={emptyCart} className='btn bg-secondary'>Delete All</button>
                    </div>
                </div>


                <div className='text container-fluid'>
                    <h1>NIKE</h1>
                </div>
                <div className='img container-fluid'>
                    <img src="http://www.latinspots.com/files/notas/GJustDoIt_Nike_web.jpg" alt="JustDoIt!IMG" />
                </div>
            </div>
        </>
    )
}

export default Cart
