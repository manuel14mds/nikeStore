import { memo, useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from "firebase/firestore"

import { useHelperContext } from "../../Context/HelperContext"
import Item from "../Item/Item"
import ItemLoading from "../Item/ItemLoading"

import './ItemList.css'

const Itemlist = ({filter}) => {
    const {listProduct, arrayFilter, updateProductList} = useHelperContext()
    const [loading, setLoading] = useState(true)
    const list_2 = [...Array(10).keys()]

    useEffect(() => {
        if(!loading){
            setLoading(true)
        }

        const db = getFirestore()
        const queryCollection = collection(db, "products")
        getDocs(arrayFilter(queryCollection, filter))
        .then(resp => updateProductList(resp.docs.map(item =>({ id: item.id, ... item.data() }) )))
        .catch((err)=> console.log(err))
        .finally(() =>{ 
            setLoading(false)
        })

    }, [filter])

    return (
        <>
            {
                loading ?
                <div className="itemList">
                    {list_2.map((e) => <ItemLoading key={e}/>)}
                    
                </div>
                
                :
                    <div className="itemList">
                        {listProduct.map((item) => <Item key={item.id} product={item}/>)}
                    </div>
            }
        </>
    )
}

export default memo(Itemlist)
