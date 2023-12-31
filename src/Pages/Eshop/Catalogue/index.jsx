import './styles.css';
import Filter from "../Filter";
import {Link} from "react-router-dom";

const Catalogue = () => {
    const items = [
        {title: "Sweat “why so serious”", price: "55€", price2: "32€"},
        {title: "Horloge", price: "16€", price2: "8€"},
        {title: "Mug", price: "126€", price2: "9€"},
        {title: "Mug voyage", price: "39€", price2: "25€"},
        {title: "T Shirt batmobile", price: "", price2: "25€"},
        {title: "Horloge", price: "", price2: "8€"},
        {title: "SAc a dos", price: "", price2: "25€"},
        {title: "poster batman (2022)", price: "", price2: "32€"},
        {title: "Mug", price: "", price2: "16€"},
    ];

    const addItemToCart = (item, index) => {
        // Retrieve the cart from sessionStorage or initialize an empty array
        const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        item.index = index;
        // Add the selected item to the cart
        cart.push(item);

        // Update the cart in sessionStorage
        sessionStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <div id="divGame">
            <img id="arrowDown" src="/assets/icones/flèche_down_header.png" alt=""/>
            <div className="d-flex justify-content-end">
                <Link to="/cart" className="ml-auto">
                    <img src='/assets/icones/icone_1.png' alt="icone caddy" />
                </Link>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-3">
                   <Filter/>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        {items.map((item, index) => (
                            <div className="col-md-4">
                                <div className="card position-relative">
                                    <div className="icon-wrapper">
                                        <img src='/assets/icones/coeur.svg' alt="icone caddy" />
                                    </div>
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/article_${index}.png`}
                                         className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">
                                            <strike>{item.price}</strike> <strong>{item.price2}</strong>
                                        </p>
                                    </div>
                                </div>
                                <button
                                    className="demarrer adventure"
                                    onClick={() => addItemToCart(item, index)} // Add item to cart on button click
                                >
                                    AJOUTER AU PANIER
                                </button>
                            </div>

                        ))}
                        {items.map((item, index) => (
                            <div className="col-md-4">
                                <div className="card position-relative">
                                    <div className="icon-wrapper">
                                        <img src='/assets/icones/coeur.svg' alt="icone caddy" />
                                    </div>
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/article_${index}.png`}
                                         className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">
                                            <strike>{item.price}</strike> <strong>{item.price2}</strong>
                                        </p>
                                    </div>
                                </div>
                                <button
                                    className="demarrer adventure"
                                    onClick={() => addItemToCart(item, index)} // Add item to cart on button click
                                >
                                    AJOUTER AU PANIER
                                </button>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Catalogue;