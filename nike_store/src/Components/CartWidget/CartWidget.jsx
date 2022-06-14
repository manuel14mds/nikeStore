
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

import "./CartWidget.css"
import { useCartContext } from '../../Context/CartContext'
import { useEffect, useState } from 'react'

const CartWidget = () => {
    const cartIco = <FontAwesomeIcon icon={faBagShopping} />
    const{prodUnits, updateProductUnit, cartList} = useCartContext()

    useEffect(() => {
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
