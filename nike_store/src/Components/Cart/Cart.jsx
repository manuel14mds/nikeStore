import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { addDoc, collection, getFirestore } from 'firebase/firestore'


import { useCartContext } from '../../Context/CartContext'
import CartForm from '../CartForm/CartForm'
import CartFormOrderCode from '../CartForm/CartFormOrderCode'
import ItemCart from '../ItemCart/ItemCart'

import './Cart.css'

const Cart = () => {
    const { cartList, emptyCart, totalCart, total, stockDecrease } = useCartContext()
    const [empty, setEmpty] = useState(true)
    const [orderCode, setOrderCode] = useState('')

    useEffect(() => {
        total()
        cartList.length > 0 ? setEmpty(false) : setEmpty(true)
    }, [cartList])

    //creates a purchase order and save it in firebase
    function purchaseOrder(obj) {
        setOrderCode('')

        let total = totalCart.toFixed(2)
        let itemsCart = cartList.map((item) => ({ item: item.id, title: item.name, price: item.price }))
        let objOrder = {
            buyer: obj,
            items: itemsCart, total
        }

        console.log(objOrder)

        const db = getFirestore()
        const queryCollection = collection(db, 'purchase')
        addDoc(queryCollection, objOrder)
            .then(resp => {
                console.log('respuesta')
                console.log(resp)
                setOrderCode(resp.id)
            })
            .catch(err => console.log(err))
            .finally(() => {
                emptyCart()
                stockDecrease()
            }
            )
    }
    
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
                                cartList.map((item) => <ItemCart key={item.id} item={item} />)
                        }
                    </div>

                    <div className="total col-md-4">
                        <h3>total</h3>
                        <p>{totalCart.toFixed(2)} €</p>
                        <button className='btn btn-lg bg-primary' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Shop Now</button>
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
            {
                empty ?
                <></>
                :
                <CartForm purchaseOrder={purchaseOrder} />
            }
            <CartFormOrderCode orderCode={orderCode} />
        </>
    )
}

export default Cart