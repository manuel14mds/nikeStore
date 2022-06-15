
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useHelperContext } from '../../Context/HelperContext'
import ItemDetail from '../../Components/ItemDetail/ItemDetail'
import CardHomeContainer from '../CardHomeContainer/CardHomeContainer'

import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const { findProduct, product} = useHelperContext()
    const {itemId} = useParams()

    useEffect(() => {
        findProduct(itemId)
    }, [itemId])

    return (
        <div className='itemDetailContainer '>
            <div className='d-flex justify-content-center'>
                <ItemDetail product={product}/>
            </div>
            <CardHomeContainer />
        </div>
    )
}

export default ItemDetailContainer
