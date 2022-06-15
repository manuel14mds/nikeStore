import { Button, Spinner } from 'react-bootstrap'

import './ItemDetail.css'

import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Interchange from '../Interchange/interchange'

import { useCartContext } from '../../Context/CartContext'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function concat(list){
    let string = ""
    for (const item of list) {
        string += `${item}, `;
    }
    return string
}


const ItemDetail = ({product}) => {

    const [loading, setLoading] = useState(true)
    const {addToCart} = useCartContext()

    function onAdd(count){        
        addToCart({...product, count})
    }

    setTimeout(()=>{
        setLoading(false)
    }, 2000)

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
                        <h1>{product.name}</h1>
                    </div>

                    <div className="item imgCont">

                        <div className="itemImgCont1 itemImgCont">
                            <img src={product.images[0]} alt="" />
                        </div>

                        <div className="itemImgCont2 itemImgCont">
                            <img src={product.images[1]} alt="" />
                        </div>

                        <div className="itemImgCont3 itemImgCont">
                            <img src={product.images[2]} alt="" />
                        </div>

                    </div>

                    <div className="item info">
                        <h2>Product Detail</h2>
                        <h3>{product.name}</h3>
                        <h4>{product.price} €</h4>

                        <div className="colors infoclass">
                            <p className='title infoclassTittle'>colors:</p>
                            <p className='listColor infoclassValues'>{concat(product.colors)}</p>
                        </div>

                        <div className="sizes infoclass">
                            <p className='title infoclassTittle'>sizes:</p>
                            <p className='listSizes infoclassValues'>{concat(product.sizes)}</p>
                        </div>

                        <div className="Infocategory infoclass">
                            <p className='title infoclassTittle'>category:</p>
                            <p className='listCategory infoclassValues'>{product.category}</p>
                        </div>
                        
                        <div className="gender infoclass">
                            <p className='title infoclassTittle'>gender:</p>
                            <p className='listGender infoclassValues'>{product.gender}</p>
                        </div>
                        
                        <Interchange product={product} onAdd = {onAdd} />

                        <div className='overView'>
                            <h2>overview</h2>
                            <p>{product.description}</p>
                        </div>

                    </div>
                    <ToastContainer />
                </div>
            }
        </>
    )
}

export default ItemDetail
