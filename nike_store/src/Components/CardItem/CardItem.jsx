import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"

import { useHelperContext } from "../../Context/HelperContext"
import Item from "../Item/Item"

import "./CardItem.css"

const CardItem = () => {
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
        <div className="cardItemContainer">
            {
                loading ?
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    :
                    listProduct.map((item) => <Item key={item.id} product={item}/>)
            }
        </div>

    )
}

export default CardItem
