import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Itemlist from '../../Components/ItemList/Itemlist'
import TitleList from '../../Components/TitleList/TitleList'
import CategoryHome from '../../Components/CategoryHome/CategoryHome'
import { useHelperContext }  from '../../Context/HelperContext'

import './ItemListContainer.css'

const ItemListContainer = () => {
    const{filter} = useParams()


    return (
        <div className="ItemListContainer">
            <TitleList filter={filter}/>
            <Itemlist filter={filter}/>
            <CategoryHome/>
        </div>
    )
}

export default ItemListContainer
