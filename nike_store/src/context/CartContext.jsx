import { createContext, useContext, useState } from 'react'
import ItemCount from '../Components/ItemCount/ItemCount'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    //crear estados y funciones  globales
    const [cartList, setCartList] = useState([])
    const [prodUnits, setProdUnits] = useState(0)
    const [totalCart, setTotalCart] = useState(0.0)

    function total(){
        let total= 0.0
        for(const item of cartList){
            total += (parseFloat(item.precio) * item.count)
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

        setProdUnits(prodUnits-newCart[index].count)//descuento los productos del contador de productos

        newCart.splice(index, 1)

        setCartList([...newCart])
    }

    function emptyCart() {
        setCartList([])
        setProdUnits(0)
        setTotalCart(0.0)
    }

    return (
        <CartContext.Provider value={
            {
                cartList, addToCart, emptyCart, prodUnits, deleteItem, totalCart, total
            }}>

            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider