
import { createContext, useContext, useState } from "react";
import { getFirestore, doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore'

import image from '../../assets/images/No_Product_Found.png'

const HelperContext = createContext([])

export const useHelperContext = () => useContext(HelperContext)

const HelperContextProvider = ({ children }) => {
    const [product, setProduct] = useState({})
    const [listProduct, setListProduct] = useState([])

    //product when it dont get any product from firebase
    const pnf=({
        "id":"nf", "category":"not found", "stock":"not found", "new":"not found",
        "gender":"not found", "sizes":["not found" ], "price":"not found",
        "colors":["not found"], "name":"product not found", 
        "images":[
            image,
            image,
            image
        ], "description":"Your search did not match any product. Please try again!"
    })

    //it receives an array and a kind of cartegory
    //returns a list of products filtered out
    function arrayFilter(quieryCollection, filter) {

        if (filter === "all") {
            return(quieryCollection)

        } else if (filter === "men" || filter === "women") {
            return(query(quieryCollection, where('gender', 'in', [filter, 'unisex'])))
            
        } else if (filter === "children") {
            return(query(quieryCollection, where('gender', '==', filter)))

        } else{
            return(query(quieryCollection, where('category', '==', filter)))
        }
    }

    //receives an products array and updates the listProduct
    function updateProductList(list) {
        setListProduct(list)
    }

    //receives a category name
    //returns an object with title and url image
    function tittleResource(filter) { // list tittle resource
        let newObj = {}
        switch (filter) {
            case 'all':
                newObj = { title: " all products", img: "https://static.nike.com/a/images/w_960,c_limit,f_auto/a22e6fb8-1759-46ba-be84-80dd9296b855/give-fresh-air-air-max-day-2022.jpg" }
                break;
            case 'shoes':
                newObj = { title: "shoes", img: "https://static.nike.com/a/images/w_1920,c_limit/0c832e76-586f-455a-81cc-28ea1f0e707c/las-mejores-zapatillas-sin-cordones-para-hombre-y-mujer.jpg" }

                break;
            case 'accessory':
                newObj = { title: "accesories", img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3d94019-8e36-4fc9-8556-66a4f5aba156/esterilla-de-entrenamiento-2-cPjlB0.png" }

                break;
            case 'clothing':
                newObj = { title: "clothing", img: "https://static.nike.com/a/images/w_960,c_limit/dabbccc4-cfac-4831-a02a-b3a359ffb9b9/image.jpg" }

                break;
            case 'men':
                newObj = { title: "men", img: "https://static.nike.com/a/images/w_1920,c_limit/0754582c-d08f-4114-863a-e8d4cb401a90/los-mejores-pantalones-para-hacer-running.jpg" }

                break;
            case 'women':
                newObj = { title: "women", img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1920,c_limit/9b0e75e5-f7b3-41d6-b74b-c3112de5b7b2/comparar-sujetadores-deportivos.jpg" }

                break;
            case 'children':
                newObj = { title: "children", img: "https://static.nike.com/a/images/w_960,c_limit/88ac2e2a-0a13-49b7-bb55-f5a8510e96b7/modelos-a-juego.png" }

                break;
        }
        return newObj
    }

    //receives a product id 
    //returns the entire product object from FIREBASE
    function findProduct(id) {

        const db = getFirestore()
        const dbQuery = doc(db, "products", id)
        getDoc(dbQuery)
            .then(resp => {
                !resp.data()?
                setProduct(pnf)
                :
                setProduct({ id: resp.id, ...resp.data() })
            })
            .catch(err => console.log(err))
    }

    //update the list products when we wanna show only the new products
    function updateNewlistProducts(){
        const db = getFirestore()
        const quieryCollection = collection(db, "products")
        const quieryCollectionFilter =  query(quieryCollection, where('new', '==', 'true'))
        getDocs(quieryCollectionFilter)
        .then(resp => setListProduct(resp.docs.map(item =>({ id: item.id, ... item.data() }) )))
        .catch((err)=> console.log(err))
    }

    return (
        <HelperContext.Provider value={
            {
                tittleResource, findProduct, product, listProduct, updateProductList, arrayFilter
            }}>

            {children}
        </HelperContext.Provider>
    )

}

export default HelperContextProvider