import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Eshop from "./Pages/Eshop/Eshop";
import MonCompte from "./Pages/MonCompte/MonCompte";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route path='/Eshop' element={<Eshop/>}>
                        {/*<Route path="/" index element={<Catalogue/>}/>*/}
                        {/*<Route path='cart' element={<Cart/>}/>*/}
                        {/*<Route path='OrderHistory' element={<OrderHistory/>}/>*/}
                    </Route>
                    <Route path='/MonCompte' element={<MonCompte/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
