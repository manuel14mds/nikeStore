import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from "react-bootstrap"
import ItemDetail from '../../Components/ItemDetail/ItemDetail'
import CardHomeContainer from '../CardHomeContainer/CardHomeContainer'

const ItemDetailContainer = () => {

    return (
        <div>
            <ItemDetail/>
            <CardHomeContainer />
        </div>
    )
}

export default ItemDetailContainer
