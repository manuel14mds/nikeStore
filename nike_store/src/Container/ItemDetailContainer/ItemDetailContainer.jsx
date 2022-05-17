import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from "react-bootstrap"
import ItemDetail from '../../Components/ItemDetail/ItemDetail'
import CardHomeContainer from '../CardHomeContainer/CardHomeContainer'
import './ItemDetailContainer.css'
const ItemDetailContainer = () => {

    return (
        <div className='itemDetailContainer '>
            <div className='d-flex justify-content-center'>
                <ItemDetail/>

            </div>
            <CardHomeContainer />
        </div>
    )
}

export default ItemDetailContainer
