
import { useEffect, useState } from 'react'

import { useFavContext } from '../../Context/FavContext'

import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './FavWidget.css'

const heartIco = <FontAwesomeIcon icon={faHeart} />
const FavWidget = () => {
    const{favList, updateFavList} = useFavContext()
    const [quantity, setquanty] = useState(0)
    const [render, setRender] = useState(true)

    useEffect(() => {
        if(render){
            updateFavList()
            setRender(false)
        }
        setquanty(favList.length)
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
