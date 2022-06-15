
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import HomeContentContainer from './Container/HomeContentContainer/HomeContentContainer';
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';
import Favorite from './Components/Favorite/Favorite';
import CartContextProvider from './Context/CartContext';
import FavContextProvider from './Context/FavContext';
import HelperContextProvider from './Context/HelperContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

    return (
        <CartContextProvider >
            <FavContextProvider>
                <BrowserRouter>
                    <div className="App">
                        <NavBar />
                        
                            <HelperContextProvider>
                                <Routes>
                                    <Route path='/' element={<HomeContentContainer />}/>
                                    <Route path='/cart' element={<Cart />}/>
                                    <Route path='/fav' element={<Favorite />}/>
                                    <Route path='/itemListCont/:filter' element={<ItemListContainer />}/>
                                    <Route path='/itemDetailContainer/:itemId' element={<ItemDetailContainer />}/>

                                    <Route path='/*' element={<Navigate to='/' replace/> }/>
                                </Routes>
                            </HelperContextProvider>
                        
                        <Footer />
                    </div>
                </BrowserRouter>
            </FavContextProvider>
        </CartContextProvider>
    )
}

export default App
