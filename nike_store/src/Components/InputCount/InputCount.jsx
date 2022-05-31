import { Button } from "bootstrap"
import { NavLink } from "react-router-dom"

import './InputCount.css'

const InputCount = () => {

    return (
        <>
            <NavLink to='/cart'>
                <button className="btn confirm">Go Cart</button>
            </NavLink>
            
            <NavLink to='/itemListCont/all'>
                <button className="btn bg-light">Keep Shopping</button>
            </NavLink>   
        </>
    )
}

export default InputCount
