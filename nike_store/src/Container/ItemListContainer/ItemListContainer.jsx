import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Itemlist from '../../Components/ItemList/Itemlist'
import TitleList from '../../Components/TitleList/TitleList'
import CardHomeContainer from '../CardHomeContainer/CardHomeContainer'
import './ItemListContainer.css'


const ItemListContainer = () => {
    const{filter} = useParams()

    const [listItem, setListItem] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        setTimeout(()=>{
            fetch('../../assets/data/data.json')
            .then(response => response.json())
            .then(data => {
                setListItem(
                    data.filter(item => item.genero === filter || item.genero === 'unisex')
                )
            })
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false)) 
        }, 500)

    }, [filter])

    return (
        <div className="ItemListContainer">
            <TitleList filter={filter}/>
            <Itemlist list={listItem}/>
            <CardHomeContainer/>

        </div>
    )
}

export default ItemListContainer
