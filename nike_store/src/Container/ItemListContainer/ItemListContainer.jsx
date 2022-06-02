import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Itemlist from '../../Components/ItemList/Itemlist'
import TitleList from '../../Components/TitleList/TitleList'


import { useCartContext } from '../../Context/CartContext'
import { useHelperContext }  from '../../Context/HelperContext'

import {getFirestore, doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore'

import CardHomeContainer from '../CardHomeContainer/CardHomeContainer'
import './ItemListContainer.css'


const ItemListContainer = () => {
    const{filter} = useParams()
    const {listProduct, updateProductList} = useHelperContext()


    const [listItem, setListItem] = useState([])
    const [loading, setLoading] = useState(true)

    
    //++++++++++++++++++++++++++++ traer un producto de fireStore ++++++++++++++++++++++++++++++++++++++++++
    /* const [product, setProduct]=useState({})

    useEffect(() => {
        const db = getFirestore()
        const dbQuery = doc(db, "productos", "HIL5cg457lxUnix7aYrd")
        getDoc(dbQuery)
        .then(resp => setProduct({ id: resp.id, ... resp.data() }))
    }, [filter])
    
    */
    


    //++++++++++++++++++++++++++++ traer Todos los productos de fireStore ++++++++++++++++++++++++++++++++++++++++++
    /* const [products, setProducts]=useState([])

    useEffect(() => {
        const db = getFirestore()
        const quieryCollection = collection(db, "productos")
        getDocs(quieryCollection)
        .then(resp => setProducts(resp.docs.map(item =>({ id: item.id, ... item.data() }) )))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false)) 
    }, [filter]) */
    



    
    /* const [products, setProducts]=useState([])

    useEffect(() => {
        const db = getFirestore()
        const quieryCollection = collection(db, "productos")
        const quieryCollectionFilter =  query(quieryCollection, where('categoria', '==', 'accessory'))
        getDocs(quieryCollectionFilter)
        .then(resp => setProducts(resp.docs.map(item =>({ id: item.id, ... item.data() }) )))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false)) 
    }, [filter])
     */



    /* useEffect(() => {

        setTimeout(()=>{
            fetch('../../assets/data/data.json')
            .then(response => response.json())
            .then(data => {
                setListItem(
                    arrayFilter(data, filter)
                )
            })
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false)) 
        }, 500)

    }, [filter]) */

    useEffect(() => {
        updateProductList(filter)
    }, [filter])

    return (
        <div className="ItemListContainer">
            <TitleList filter={filter}/>
            <Itemlist list={listProduct}/>
            <CardHomeContainer/>

        </div>
    )
}

export default ItemListContainer
