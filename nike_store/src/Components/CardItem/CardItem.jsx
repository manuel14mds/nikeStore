import "./CardItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { useEffect } from "react"
import { Spinner } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import Item from "../Item/Item"
import { useHelperContext } from "../../Context/HelperContext"


const CardItem = () => {
    const heartIco = <FontAwesomeIcon icon={faHeart} />
    const [loading, setLoading] = useState(true)
    const { updateNewlistProducts, listProduct} = useHelperContext()
    

    useEffect(() => {
        setLoading(true)
        updateNewlistProducts()
        setTimeout(()=>{
            setLoading(false)
        }, 500)

    },[])


    return (
        <>
            {
                loading ?
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    :
                    listProduct.map((item) => <Item key={item.id} product={item}/>)

                    
            }

        </>

    )
}

export default CardItem
