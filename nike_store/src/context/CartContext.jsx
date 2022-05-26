import { createContext, useContext, useState } from 'react'
import ItemCount from '../Components/ItemCount/ItemCount'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    //crear estados y funciones  globales
    const [cartList, setCartList] = useState([])
    const [prodUnits, setProdUnits] = useState(0)

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

    /* function deleteItem(id) {
        console.log("entro a deleteItem")
        let newArray = []
        for(const item of cartList){
            if (item.id === id) {
                setProdUnits(prodUnits-item.count)//descuento los productos del contador de productos
                continue
            }
            newArray.push(item)
        }
        setCartList(newArray)
    } */

    function emptyCart() {
        setCartList([])
        setProdUnits(0)
    }
    /* 
        function unitsCounter(){
            let count =0
            if(cartList.length==0){
                setProdUnits(0)
            }else{
                cartList.forEach(e=>{
                    count += e.count
                })
                setProdUnits(count)
            }
            console.log(`contador: ${prodUnits}`)
        } */

    return (
        <CartContext.Provider value={
            {
                cartList, addToCart, emptyCart, prodUnits, deleteItem
            }}>

            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider