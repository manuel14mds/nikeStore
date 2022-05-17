import "./CardItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { useEffect } from "react"
import { Spinner } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import Item from "../Item/Item"


const CardItem = () => {
    const heartIco = <FontAwesomeIcon icon={faHeart} />
    const [newItems, setNewItems] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        setTimeout(()=>{
            fetch('../../assets/data/data.json')
            .then(response => response.json())
            .then(data => {
                setNewItems(
                    data.filter(item => item.new === 'True')
                )
            })
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false)) 
        }, 500)

    }, [])


    return (
        <>
            {
                loading ?
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    :
                    newItems.map((item) => <Item key={item.id} product={item}/>)

                    
            }

        </>

    )
}

export default CardItem
