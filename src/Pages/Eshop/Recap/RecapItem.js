import React from 'react';


const RecapItem = (props) => {
    const { id, index, title, price2, productImage } = props.data;

    const cartItems = JSON.parse(sessionStorage.getItem('cart')) || {};

    const addToCart = (id) => {
        if (cartItems[id]) {
            cartItems[id] += 1;
        } else {
            cartItems[id] = 1;
        }

        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    };

    const removeFromCart = (id) => {
        if (cartItems[id] && cartItems[id] > 0) {
            cartItems[id] -= 1;
        }

        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    };

    const updateCart = (count, id) => {
        if (count >= 0) {
            cartItems[id] = count;
        }

        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    };

    return (
        <div className="recapItems mb-3">
            <div className='cartItem'>
                <div className="ProductImage">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/article_${index}.png`}
                         className="card-img-top" alt="..."/>
                </div>
                <div className="description">
                    <div className="productDescription">
                        <p className="goodies">Goodies</p>
                        <p>
                            <b>{title}</b>
                        </p>
                        <p className="price">${price2}</p>
                    </div>
                </div>
                <div className="countArticle">
                    <p>1</p>
                </div>
            </div>
        </div>
    );
};

export default RecapItem;
