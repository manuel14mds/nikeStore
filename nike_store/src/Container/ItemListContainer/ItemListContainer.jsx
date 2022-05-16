import { useParams } from 'react-router-dom'
import './ItemListContainer.css'


const ItemListContainer = () => {
    const{filter} = useParams()
    return (
        <div className="container-fluid ItemListContainer">
            ItemListContainer {filter}

        </div>
    )
}

export default ItemListContainer
