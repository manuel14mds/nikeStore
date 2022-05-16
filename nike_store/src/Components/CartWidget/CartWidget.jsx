import {Link} from 'react-router-dom'
import {faBagShopping} from '@fortawesome/free-solid-svg-icons'
const CartWidget = () => {
    const cartIco = <FontAwesomeIcon icon={faBagShopping} />
    return (
        <>
            <p>{cartIco}</p>
        </>
    )
}

export default CartWidget
