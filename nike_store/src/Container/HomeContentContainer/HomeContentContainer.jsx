import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import CategoryHome from "../../Components/CategoryHome/CategoryHome"
import JumboTron from "../../Components/JumboTron/JumboTron"
import CardHomeContainer from "../CardHomeContainer/CardHomeContainer"




const HomeContentContainer = () => {
  /* const [lista, setLista]= useState([])


  function subirProductos(){
    
  
    fetch('../../assets/data/data.json')
              .then(response => response.json())
              .then(data => {
                setLista(data)
              })
              .catch((err)=> console.log(err))


    let newObj ={}
    for(const item of lista){

      newObj = {
        category: item.category, stock: parseInt(item.stock), new: item.new ,
            gender: item.gender, sizes:item. sizes, price: parseFloat(item.price),
            colors:item.colors, name:item.name, 
            images:item.images, description: item.description
      }
    
      const db = getFirestore()
            const queryCollection = collection(db, 'products')
            addDoc(queryCollection, newObj)
            .then(resp => console.log(resp))
            .catch(err =>console.log(err))
            .finally(console.log('subido'))
    }
  } */

  return (
    <>
      <JumboTron />
      {/* <button onClick={()=>(subirProductos())} >Subir productos</button> */}
      <CardHomeContainer />
      <CategoryHome/>
    </>
  )
}

export default HomeContentContainer
