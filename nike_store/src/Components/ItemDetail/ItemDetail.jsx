import { Button, Spinner } from 'react-bootstrap'

import './ItemDetail.css'

import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Interchange from '../Interchange/interchange'

import { useCartContext } from '../../Context/CartContext'
import { useHelperContext } from '../../Context/HelperContext'


function concat(list){
    let string = ""
    for (const item of list) {
        string += `${item}, `;
    }
    return string
}


const ItemDetail = ({product}) => {
    
/*     
    const [product, setProduct] = useState({}) */
    
    const [loading, setLoading] = useState(true)
    
    const {addToCart} = useCartContext()

    
    function onAdd(count){        
        addToCart({...product, count})
    }

    /* useEffect(() => {
        setLoading(true)
        setProduct(findProduct(itemId))
        console.log('holaaaaaaaaaaaa')
        console.log(findProduct(itemId)) */
        
        /* setTimeout(()=>{

            fetch('../../assets/data/data.json')
            .then(response => response.json())
            .then(data => {
                
                setProduct(data.find(element => element.id === itemId))
                
            })
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))
        }, 2000) */

        /* setTimeout(()=>{
            setLoading(false)
        }, 2000)

    },[itemId]) */



    /* useEffect(() => {
        setLoading(true)
        const db = getFirestore()
        const dbQuery = doc(db, "productos", "HIL5cg457lxUnix7aYrd")
        getDoc(dbQuery)
        .then(resp => setProduct({ id: resp.id, ... resp.data() }))
        .finally(setLoading(false))
    }, [itemId])
    console.log(product)  */



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

                        <div className="colors">
                            <p className='title'>colors:</p>
                            <p className='listColor'>{concat(product.colors)}</p>
                        </div>

                        <div className="sizes">
                            <p className='title'>sizes:</p>
                            <p className='listSizes'>{concat(product.sizes)}</p>
                        </div>

                        <div className="Infocategory">
                            <p className='title'>category:</p>
                            <p className='listCategory'>{product.category}</p>
                        </div>
                        
                        <div className="gender">
                            <p className='title'>gender:</p>
                            <p className='listGender'>{product.gender}</p>
                        </div>

                        {/* <ItemCount stock={product.stock} onAdd={cart}  /> */}

                        <Interchange product={product} onAdd = {onAdd}/>

                        <div className='overView'>
                            <h2>overview</h2>
                            <p>{product.description}</p>
                        </div>

                    </div>

                </div>
            }
        </>
    )
}

export default ItemDetail
