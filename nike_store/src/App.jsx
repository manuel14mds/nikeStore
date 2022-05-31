
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
import CartContextProvider from './Context/CartContext';
import HelperContextProvider from './Context/HelperContext';





function App() {

    return (
        <CartContextProvider >
            <BrowserRouter>
                <div className="App">
                    <NavBar />
                    
                        <HelperContextProvider>
                            <Routes>
                                <Route path='/' element={<HomeContentContainer />}/>
                                <Route path='/cart' element={<Cart />}/>
                                <Route path='/itemListCont/:filter' element={<ItemListContainer />}/>
                                <Route path='/itemDetailContainer/:itemId' element={<ItemDetailContainer />}/>

                                <Route path='/*' element={<Navigate to='/' replace/> }/>
                                
                            </Routes>

                        </HelperContextProvider>
                    

                    <Footer />
                </div>
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App
