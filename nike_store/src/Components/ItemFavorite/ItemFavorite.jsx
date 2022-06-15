import React from 'react'
import { NavLink } from 'react-router-dom'

import { useFavContext } from '../../Context/FavContext'

import './ItemFavorite.css'

const ItemFavorite = ({item}) => {
    const {deleteFavorite} = useFavContext()
    return (
        <>
            <div className="item row">
                <div className='itemDetail col-sm-8 row'>
                    <div className="img">
                        <img src={item.images[0]} style={{width:'70px', height:'70px'}} alt="product_image" />
                    </div>
                    <div className='col info'>
                        <p>{item.name}</p>
                        <p>{item.price} €</p>
                    </div>
                </div>

                <div className="itemBtns col-sm-4">
                    <NavLink to={`/itemDetailContainer/${item.id}`} className="btn bg-dark text-light">Product Detail</NavLink>
                    <button onClick={() => deleteFavorite(item.id)} className='btn btn-light'>Delete Product</button>
                </div>
            </div>
        </>
    )
}

export default ItemFavorite
