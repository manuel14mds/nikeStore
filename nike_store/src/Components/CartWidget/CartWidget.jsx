
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

import "./CartWidget.css"

const CartWidget = () => {
    const cartIco = <FontAwesomeIcon icon={faBagShopping} />
    return (
        <div className='cardWidget'>
            <p className='WidgetIco'>{cartIco}</p>
            <p className='WidgetNum'>15</p>
        </div>
    )
}

export default CartWidget
