import { useState } from "react"
import InputCount from "../InputCount/InputCount"
import ItemCount from "../ItemCount/ItemCount"

const Interchange = ({product, onAdd}) => {
    const [inputType, setInputType] = useState('button')

    const handleInter = () => {
        setInputType('input')
        
    }
    return (
        <div>
            {
                inputType == "button" ? 
                    <ItemCount onAdd={onAdd} stock={product.stock} handleInter={handleInter}/>
                :
                    <InputCount  />
            }
        </div>
    )
}

export default Interchange
