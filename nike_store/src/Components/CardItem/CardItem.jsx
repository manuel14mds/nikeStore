import "./CardItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { useEffect } from "react"
import { Spinner } from "react-bootstrap"
import { NavLink } from "react-router-dom"


const CardItem = () => {
    const heartIco = <FontAwesomeIcon icon={faHeart} />
    const [newItems, setNewItems] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        setTimeout(()=>{
            fetch('../../assets/data/data.json')
            .then(response => response.json())
            .then(data => {
                setNewItems(
                    data.filter(item => item.new === 'True')
                )
            })
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false)) 
        }, 500)

    }, [])


    return (
        <>
            {
                loading ?
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    :
                    newItems.map((item) => <div key={item.id} className="cardItem text-white bg-dark mb-3">
                                                <img src={item.imagenes[0]} className="card-img-top" alt="img" />
                                                <div className="card-body fw-bold">
                                                    <h5 className="card-title text-start">{item.nombre}</h5>
                                                    <p className="card-text text-start">{item.precio} €</p>
                                                    <div className="botones d-flex flex-row">

                                                        <NavLink to={`/itemDetailContainer/${item.id}`} className="btn btn-light">See</NavLink>
                                                        <a className="icon" href="">{heartIco}</a>
                                                    </div>
                                                </div>
                                            </div>

                    )
            }

        </>

    )
}

export default CardItem
