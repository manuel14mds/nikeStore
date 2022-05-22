import { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer';
import HomeContentContainer from './Container/HomeContentContainer/HomeContentContainer';
import Cart from './Components/Cart/Cart';
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate } from 'react-router-dom';
import { CartContext } from './context/CartContext'

export const contexApp = createContext()


function App() {
    let string='ropa'

    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                
                    <Routes>
                        <Route path='/' element={<HomeContentContainer />}/>
                        <Route path='/cart' element={<Cart />}/>
                        <Route path='/itemListCont/:filter' element={<ItemListContainer />}/>
                        <Route path='/itemDetailContainer/:itemId' element={<ItemDetailContainer />}/>

                        <Route path='/*' element={<Navigate to='/' replace/> }/>
                        
                    </Routes>
                

                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
