
import { NavLink } from 'react-router-dom'

import "./JumboTron.css"
const JumboTron = () => {
    return (
        <div className='jumbo row flex-column flex-column-reverse flex-sm-row '>
            <div className="tittle container-fluid col-sm-6">
                <h1>NIKE STORE</h1>
                <NavLink to='/itemListCont/all' className="btn btn-dark">All Store</NavLink>
            </div>
            <div className="img container-fluid col-sm-6 bg-primary"></div>
        </div>
    )
}

export default JumboTron
