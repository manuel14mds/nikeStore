import { memo, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useHelperContext } from "../../Context/HelperContext"
import Item from "../Item/Item"
import ItemLoading from "../Item/ItemLoading"
import './ItemList.css'

const Itemlist = (filter) => {
    const {listProduct} = useHelperContext()


    const [loading, setLoading] = useState(true)
    const list_2 = [1,2,3,4,5]

    useEffect(() => {
        setTimeout(()=>{
            setLoading(false)
        }, 1000)
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
