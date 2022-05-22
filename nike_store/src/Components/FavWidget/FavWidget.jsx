
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'

import './FavWidget.css'
import { useEffect, useState } from 'react'

const heartIco = <FontAwesomeIcon icon={faHeart} />
const FavWidget = () => {
    const [classname, setClassname] = useState('WidgetNum')
    const quanty = 6

    useEffect(() => {
        if(quanty>=1){
            setClassname('WidgetNum d-none')
        }

    },[quanty])
    
    return (
        <div className='favWidget'>
            <p className='WidgetIco'>{heartIco}</p>
            <p className={classname}>15</p>
        </div>
    )
}

export default FavWidget
