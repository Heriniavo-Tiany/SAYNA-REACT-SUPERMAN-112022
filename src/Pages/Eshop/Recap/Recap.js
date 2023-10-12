import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import RecapItem from './RecapItem';
import './styles.css'

const Recap = () => {
    const retour = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Retrieve cart items from sessionStorage when the component mounts
        const storedCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
        setCartItems(storedCartItems);
    }, []);

    useEffect(() => {
        // Calculate the total when cartItems change
        const newTotal = cartItems.reduce((acc, item) => acc + parseFloat(item.price2), 0);
        setTotal(newTotal);
    }, [cartItems]);

    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src="/assets/logos/logo_blanc.png" width={90} alt="logo"/>
                </div>
                <ul>
                    <li><a href="/"><h1>HOME</h1></a></li>
                    <li><a href="#"><h1 id="game" className="inactive">GAME</h1></a></li>
                    <li><a href="#"><h1 id="game">E-SHOP</h1></a></li>
                    <li><a href="/MonCompte"><h1 id="game" className="inactive">Mon Compte</h1></a></li>
                </ul>
            </nav>
            <div className="cart">
                <nav style={{'--bs-breadcrumb-divider': '>'}} aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item white"><a href="/eshop">Eshop &#x203A; </a></li>
                        <li className="breadcrumb-item white" aria-current="page"><a href="/cart">Panier &#x203A; </a>
                        </li>
                        <li className="breadcrumb-item active white" aria-current="page">Récapitulatif de la commande
                        </li>
                    </ol>
                </nav>

                <h3 className="adventure">COMMANDE</h3>
                <div className="text-center center">
                    {cartItems.map((product, index) => (
                        <RecapItem data={product} key={index}/>
                    ))}
                </div>

                <div>
                    <input type="text" placeholder="Code Promo"/>
                    <button className="adventure mx-4 ajouter">Ajouter</button>
                </div>

                <hr className="hr"/>

                <div className="occupyAll row justify-content-between">
                    <div className="col">
                        <p><strong>Total</strong></p>
                    </div>
                    <div className="col text-end">
                        <p>{total} €</p>
                    </div>
                </div>

                <div className="occupyAll row justify-content-between">
                    <div className="col">
                        <p className="grey">Réduction</p>
                    </div>
                    <div className="col text-end">
                        <p>-</p>
                    </div>
                </div>

                <div className="occupyAll row justify-content-between">
                    <div className="col">
                        <p className="grey">Taxe</p>
                    </div>
                    <div className="col text-end">
                        <p>-</p>
                    </div>
                </div>

                <hr className="hr"/>

                <div className="occupyAll row justify-content-between">
                    <div className="col">
                        <p><strong>Total</strong></p>
                    </div>
                    <div className="col text-end">
                        <p><strong className="big">{total} €</strong></p>
                    </div>
                </div>

                <div className="cartButton">
                    <button className="purple-btn adventure" onClick={() => retour('/Eshop')}>Retourner au catalogue</button>
                    <button className="purple-btn adventure">
                        <Link to="/recap"><span className="passerCommande">Continuer vers le paiement</span></Link>
                    </button>
                </div>

            </div>
            <footer className="footer mt-5">
                <div className="flex-col flex">
                    <p className="white">
                        <img src="/assets/logos/logo_0.png" alt="warner-bros"/>
                        Ce projet respecte l’univers cinématographique des films Batman récents. Version
                        Nolan &amp; Snyder &amp;
                        Reeves
                    </p>
                    <div className="social-icons flex">
                        <img className="logo-sayna" src="/assets/logos/logo_1.png" alt="sayna"/>
                        <img className="x-white-3" src="/assets/logos/logo_2.png" alt="X white 3"/>
                        <img className="vector" src="/assets/logos/logo_3.png" alt="Vector"/>
                        <img className="icons logo-fb" src="/assets/logos/logo_4.1.png" alt="icons / facebook"/>
                        <img className="icons logo-ig" src="/assets/logos/logo_5.png" alt="icons / instagram"/>
                        <img className="logo-tw icons" src="/assets/logos/logo_6.png" alt="icons / twitter"/>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Recap;
