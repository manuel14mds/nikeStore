import { useState } from 'react'
import { Link} from 'react-router-dom'

import Interchange from '../Interchange/interchange'
import { useCartContext } from '../../Context/CartContext'
import { useHelperContext } from '../../Context/HelperContext'


import { Spinner } from 'react-bootstrap'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './ItemDetail.css'

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
    const {notFound} = useHelperContext()

    function onAdd(count){        
        addToCart({...product, count})
    }

    setTimeout(()=>{
        setLoading(false)
        console.log(notFound)
        

    }, 2000)

    return (
        <>
        {
            loading?
                <>
                    <div className='container loading_container'>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                </>
            :
                <>
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
                            {product.id==='nf'?
                            <Link className='btn btn-primary' to='/itemListCont/all'>See All Products</Link>
                            :
                            <Interchange product={product} onAdd = {onAdd} />
                            }

                            <div className='overView'>
                                <h2>overview</h2>
                                <p>{product.description}</p>
                            </div>

                        </div>
                        <ToastContainer />
                    </div>
                </>
            

            }
        </>
    )
}

export default ItemDetail
