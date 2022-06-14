import { faV } from '@fortawesome/free-solid-svg-icons'
import React, { memo, useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFavContext } from '../../Context/FavContext'
import CategoryHome from '../CategoryHome/CategoryHome'
import ItemFavorite from '../ItemFavorite/ItemFavorite'
import './Favorite.css'
const Favorite = () => {
    const {deleteFavorite, favList, updateFavList, emptyFavList} = useFavContext()
    const [render, setRender] = useState(false)

    useEffect(() => {
        
    }, [favList])
    return (

        <div>
            <div>
                <div className='containerFavorite container'>
                    <h1>FAVORITES</h1>
                    <div className='containerList container-fluid'>
                        <button className='btn btn-outline-dark btnDelete' onClick={() => emptyFavList()}>delete all</button>
                        <div className='listFavorite'>
                        {
                            favList.length===0?
                            <>
                                <h2>Empty Cart</h2>
                                <Link to='/itemListCont/all'>See All Products</Link>
                            </>
                            :
                            favList.map((item) => <ItemFavorite key={item.id} item={item} />)
                        }

                        </div>
                    </div>

                    <CategoryHome/>
                </div>
            </div>

        </div>
    )
}

export default Favorite
