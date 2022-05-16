import { Button, Spinner } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faHeart } from '@fortawesome/free-solid-svg-icons'

import './ItemDetail.css'
import '../../DataBase/filter.js'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'


const heartIco = <FontAwesomeIcon icon={faHeart} />
const cartIco = <FontAwesomeIcon icon={faBagShopping} />

function concat(list){
    let string = ""
    for (const item of list) {
        string += `${item}, `;
    }
    return string
}




const ItemDetail = () => {
    
    const{itemId} = useParams()
    const [product, setProduct] = useState({})
    //let product={}
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(true)
        setTimeout(()=>{
            fetch('../../assets/data/data.json')
            .then(response => response.json())
            .then(data => {
                
                //product = data.find(element => element.id === itemId)
                //console.log(product)
                setProduct(data.find(element => element.id === itemId))
                
            })
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))
        }, 2000)

    },[itemId])


    return (
        <>
        {
            loading ?
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                :
                <div className="itemDetail">

                    <div className="item head">
                        <h1>{product.nombre}</h1>
                    </div>

                    <div className="item imgCont">

                        <div className="itemImgCont1 itemImgCont">
                            <img src={product.imagenes[0]} alt="" />
                        </div>

                        <div className="itemImgCont2 itemImgCont">
                            <img src={product.imagenes[1]} alt="" />
                        </div>

                        <div className="itemImgCont3 itemImgCont">
                            <img src={product.imagenes[2]} alt="" />
                        </div>

                    </div>

                    <div className="item info">
                        <h2>Product Detail</h2>
                        <h3>{product.nombre}</h3>
                        <h4>{product.precio} €</h4>

                        <div className="colors">
                            <p className='title'>colors:</p>
                            <p className='listColor'>{concat(product.colores)}</p>
                        </div>

                        <div className="sizes">
                            <p className='title'>sizes:</p>
                            <p className='listSizes'>{concat(product.tallas)}</p>
                        </div>

                        <div className="Infocategory">
                            <p className='title'>category:</p>
                            <p className='listCategory'>{product.categoria}</p>
                        </div>
                        
                        <div className="gender">
                            <p className='title'>gender:</p>
                            <p className='listGender'>{product.genero}</p>
                        </div>

                        <div className='quantCont'>
                            <div className="title">quantity</div>
                            <div className="counter">
                                <Button className='bg-dark' href="">-</Button>
                                <div>1</div>
                                <Button className='bg-dark' href="">+</Button>
                            </div>
                            <div className="title">stock: {product.stock}</div>
                        </div>

                        <div className='detailButton'>
                            <Button className='btnCart' variant="dark">Add Cart {cartIco}</Button>
                            <Button className='btnFav' variant="light">Add Favorite {heartIco}</Button>
                        </div>

                        <div className='overView'>
                            <h2>overview</h2>
                            <p>{product.descripcion}</p>
                        </div>

                    </div>

                </div>
            }
        </>
    )
}

export default ItemDetail
