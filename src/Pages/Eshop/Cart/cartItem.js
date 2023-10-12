import React from 'react';


const CartItem = (props) => {
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
        <div className="cartItems mb-3">
            <div className='cartItem'>
                <div className="ProductImage">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/article_${index}.png`}
                         className="card-img-top" alt="..."/>
                </div>
                <div className="description">
                    <div className="productDescription">
                        <p>
                            <b>{title}</b>
                        </p>
                    </div>
                    <div className="productPrice">
                        <p>${price2}</p>
                    </div>
                </div>
                <div className="countArticle">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input
                        className="inputCount"
                        value={cartItems[id] || 1}
                        onChange={(e) => updateCart(Number(e.target.value), id)}
                    />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                    <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                </svg>
            </div>
        </div>
    );
};

export default CartItem;
