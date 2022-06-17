import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"

import { useHelperContext } from "../../Context/HelperContext"
import Item from "../Item/Item"
import ItemLoading from "../Item/ItemLoading"

import "./CardItem.css"

const CardItem = () => {
    const [loading, setLoading] = useState(true)
    const {listProduct, updateProductList} = useHelperContext()
    const list_2 = [...Array(15).keys()]
    
    useEffect(() => {
        if(!loading){
            setLoading(true)
        }
        
        const db = getFirestore()
        const quieryCollection = collection(db, "products")
        const quieryCollectionFilter =  query(quieryCollection, where('new', '==', 'true'))
        getDocs(quieryCollectionFilter)
        .then(resp => updateProductList(resp.docs.map(item =>({ id: item.id, ... item.data() }) )))
        .catch((err)=> console.log(err))
        .finally(()=>{setLoading(false)})
    },[])


    return (
        <div className="cardItemContainer">
            {
                loading ?
                    list_2.map((item) => <ItemLoading key={item}/>)

                    :
                    listProduct.map((item) => <Item key={item.id} product={item}/>)
            }
        </div>

    )
}

export default CardItem
