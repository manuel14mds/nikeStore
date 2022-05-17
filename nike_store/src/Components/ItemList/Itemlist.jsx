import { useEffect, useState } from "react"
import Item from "../Item/Item"
import './ItemList.css'

const Itemlist = ({list}) => {

    return (
        <div className="itemList">
            {list.map((item) => <Item key={item.id} product={item}/>)}
        </div>
    )
}

export default Itemlist
