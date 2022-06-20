import { useEffect, useState} from 'react'

import { useCartContext } from '../../Context/CartContext'

import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./CartWidget.css"

const CartWidget = () => {
    const cartIco = <FontAwesomeIcon icon={faBagShopping} />
    const{prodUnits, updateProductUnit, cartList, updateCartLocalStorage} = useCartContext()
    const [render, setRender] = useState(false)

    useEffect(() => {
        if(!render){
            updateCartLocalStorage()
            setRender(true)
        }
        updateProductUnit()
    }, [cartList])

    return (
        <>
            {
                prodUnits ?
                    <div className='cardWidget'>
                        <p className='WidgetIco'>{cartIco}</p>
                        <p className='WidgetNum'>{prodUnits}</p>
                    </div>
                    :
                    <div className='cardWidget'>
                        <p className='WidgetIco'>{cartIco}</p>
                    </div>

            }
        </>
    )
}

export default CartWidget
