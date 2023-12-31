import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home/Home";
import MonCompte from "./Pages/MonCompte";
import Eshop from "./Pages/Eshop";
import Cart from "./Pages/Eshop/Cart/Cart";
import Recap from "./Pages/Eshop/Recap/Recap";
import Paiement from "./Pages/Eshop/Paiement/Paiement";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='/eshop' element={<Eshop/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/recap' element={<Recap/>}/>
                <Route path='/paiement' element={<Paiement/>}/>
                <Route path='/MonCompte' element={<MonCompte/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
