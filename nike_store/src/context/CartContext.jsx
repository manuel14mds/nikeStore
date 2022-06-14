import { collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import { createContext, useContext, useState } from 'react'
import ItemCount from '../Components/ItemCount/ItemCount'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    const [prodUnits, setProdUnits] = useState(0) // quantity of products in the cart
    const [totalCart, setTotalCart] = useState(0.0) // total amount

    function total() {
        let total = 0.0
        for (const item of cartList) {
            total += (item.price * item.count)
        }
        setTotalCart(total)

    }

    function updateProductUnit(){
        if(cartList.length !== 0){
            let count = 0
            for(const item of cartList){
                count += item.count
            }
            setProdUnits(count)
        }
    }

    function addToCart(item) {
        if (cartList.length == 0) {
            setCartList([
                ...cartList,
                item
            ])


        } else { // there are products in cartList

            if (!cartList.some( product => product.id === item.id )) { // the product is NOT in cartList
                setCartList([
                    ...cartList,
                    item
                ])

            } else { // the product IS in cartList

                let newArray = cartList
                newArray.forEach(e => {
                    if (e.id === item.id) {
                        if((item.count + e.count) > item.stock){
                            e.count = item.stock
                        }else{
                            e.count += item.count
                        }
                    }
                })
                setCartList(newArray)
            }
        }
    }

    function deleteItem(id) {
        const newCart = [...cartList]
        let index = newCart.findIndex((el) => el.id === id)

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

    //increase or decrease per one(1) the items quantity
    function counter(item, number){
        if((item.count === 1 && number === -1) || (item.count === item.stock && number === 1)){
            console.log('operacion invalida')
        }else{

            let newArray = cartList
                newArray.forEach(e => {
                    if (e.id === item.id) {
                            e.count += number
                    }
                })
                setCartList(newArray)
                updateProductUnit()
                total()
        }
    }
    return (
        <CartContext.Provider value={
            {
                cartList, addToCart, emptyCart, prodUnits, deleteItem, totalCart, total, stockDecrease, updateProductUnit, counter
            }}>

            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider