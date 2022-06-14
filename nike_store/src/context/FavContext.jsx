import { createContext, memo, useContext, useState } from "react"

const FavContext = createContext([])

export const useFavContext = () => useContext(FavContext)

const FavContextProvider = ({ children }) => {
    const [favList, setFavList] = useState([])


    function setFavStorage(list){
        localStorage.setItem("listFavorites", JSON.stringify(list))
    }

    function getFavStorage(){
        let listStorage=JSON.parse(localStorage.getItem("listFavorites"))

        //Si no hay secuencia, que la inicialice en 100
        if(listStorage == null){
            return []

        }
        return listStorage

    }

    function addFavorite(item){

        let listStorage = getFavStorage()

        if(listStorage.length === 0){
            listStorage.push(item)
            setFavStorage(listStorage)
            setFavList(listStorage)
            
        }else if(!listStorage.some( product => product.id === item.id )){
            listStorage.push(item)
            setFavStorage(listStorage)
            setFavList(listStorage)
        }
    }

    function deleteFavorite(id){
        let listStorage = getFavStorage()
        let newArray=[]
        for(const product of listStorage){
            if(product.id === id){
                continue
            }
            newArray.push(product)
        }
        setFavStorage(newArray)
        setFavList(newArray)
    }

    function updateFavList(){
        setFavList( getFavStorage())
    }

    function emptyFavList(){
        setFavStorage([])
        setFavList([])
    }

    return (
        <FavContext.Provider value={
            {
                favList, setFavStorage, getFavStorage, addFavorite, deleteFavorite, updateFavList, emptyFavList
            }}>

            {children}
        </FavContext.Provider>
    )

}

export default FavContextProvider