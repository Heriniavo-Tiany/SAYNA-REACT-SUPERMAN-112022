import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home/Home";
import MonCompte from "./Pages/MonCompte/MonCompte";
import Eshop from "./Pages/Eshop";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='/eshop' element={<Eshop/>}/>
                <Route path='/MonCompte' element={<MonCompte/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
