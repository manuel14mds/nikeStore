import {createContext} from 'react'

export const CartContext = createContext([])

const CartContextProvider =({children})=>{
    //crear estados y funciones 
    const [cartList, setCartList]=useState([])
    return(
        <CartContext.Provider value={
            {cartList}
        }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider