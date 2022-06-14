
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'

import './FavWidget.css'
import { useEffect, useState } from 'react'
import { useFavContext } from '../../Context/FavContext'

const heartIco = <FontAwesomeIcon icon={faHeart} />
const FavWidget = () => {
    const{favList} = useFavContext()
    const [render, setRender] = useState(false)
    const [quantity, setquanty] = useState(0)

    useEffect(() => {
        setRender(false)
        setquanty(favList.length)
        setRender(true)
    },[favList])
    
    return (
        <>
            {
                favList.length===0?
                    <div className='favWidget'>
                        <p className='WidgetIco'>{heartIco}</p>
                    </div>
                :
                    <div className='favWidget'>
                        <p className='WidgetIco'>{heartIco}</p>
                        <p className='WidgetNum'>{quantity}</p>
                    </div>


            }
        </>
    )
}

export default FavWidget
