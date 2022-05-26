
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

import "./CartWidget.css"
import { useCartContext } from '../../Context/CartContext'

const CartWidget = () => {
    const cartIco = <FontAwesomeIcon icon={faBagShopping} />
    const{prodUnits}=useCartContext()
    return (
        <div className='cardWidget'>
            <p className='WidgetIco'>{cartIco}</p>
            <p className='WidgetNum'>{prodUnits}</p>
        </div>
    )
}

export default CartWidget
