import CardItem from "../../Components/CardItem/CardItem"

import "./CardHomeContainer.css"

const CardHomeContainer = () => {
    return (
        <div className="cardHomeContainer">
            <div className="new">
                <h2>New Products</h2>
                
            </div>
            <div className="cardContainer">
                <CardItem />
            </div>
        </div>
    )
}

export default CardHomeContainer
