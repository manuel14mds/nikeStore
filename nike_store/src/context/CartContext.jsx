import { collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import { createContext, useContext, useState } from 'react'
import ItemCount from '../Components/ItemCount/ItemCount'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    const [prodUnits, setProdUnits] = useState(0)
    const [totalCart, setTotalCart] = useState(0.0)

    function total() {
        let total = 0.0
        for (const item of cartList) {
            total += (item.price * item.count)
        }
        setTotalCart(total)

    }

    function addToCart(item) {
        if (cartList.length == 0) {
            setCartList([
                ...cartList,
                item
            ])
            setProdUnits(prodUnits + item.count)

        } else {
            let inCart = false
            cartList.forEach(e => {
                if (e.id === item.id) {
                    inCart = true
                }
            })
            if (!inCart) {
                setCartList([
                    ...cartList,
                    item
                ])
                setProdUnits(prodUnits + item.count)

            } else {
                let newArray = cartList
                newArray.forEach(e => {
                    if (e.id === item.id) {
                        e.count += item.count
                    }
                })
                setCartList(newArray)
                setProdUnits(prodUnits + item.count)

            }
        }
    }

    function deleteItem(id) {
        const newCart = [...cartList]
        let index = newCart.findIndex((el) => el.id === id)

        setProdUnits(prodUnits - newCart[index].count)//descuento los productos del contador de productos

        newCart.splice(index, 1)

        setCartList([...newCart])
    }

    function emptyCart() {
        setCartList([])
        setProdUnits(0)
        setTotalCart(0.0)
    }

    async function stockDecrease() {
        // actualizar el stock
        const db = getFirestore()
        const queryCollectionStock = collection(db, 'products')

        const queryActulizarStock = await query(
            queryCollectionStock, //                   ['jlksjfdgl','asljdfks'] -> ejemplo del map ,  
            where(documentId(), 'in', cartList.map(it => it.id)) // in es que estén en ..         
        )

        const batch = writeBatch(db)

        await getDocs(queryActulizarStock)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(item => item.id === res.id).count
            })))
            .finally(() => console.log('actulalizado'))

        batch.commit()

    }

    return (
        <CartContext.Provider value={
            {
                cartList, addToCart, emptyCart, prodUnits, deleteItem, totalCart, total, stockDecrease
            }}>

            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider