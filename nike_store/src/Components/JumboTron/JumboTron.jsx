import Button from 'react-bootstrap/Button'

import "./JumboTron.css"
const JumboTron = () => {
    return (
        <div className='jumbo row flex-column flex-column-reverse flex-sm-row '>
            <div className="tittle container-fluid col-sm-6">
                <h1>NIKE STORE</h1>
                <Button className='btn-dark'>All store</Button>
            </div>
            <div className="img container-fluid col-sm-6 bg-primary"></div>
        </div>
        
    )
}

export default JumboTron
