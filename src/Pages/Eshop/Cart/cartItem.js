import React from 'react';

const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;

    // Define cartItems here or import it from your context
    const cartItems = JSON.parse(sessionStorage.getItem('cart')) || {};

    const addToCart = (id) => {
        // Increment the count for the specified product ID
        cartItems[id] = (cartItems[id] || 0) + 1;

        // Update the cart items in sessionStorage
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    };

    const removeFromCart = (id) => {
        if (cartItems[id] > 0) {
            // Decrement the count for the specified product ID
            cartItems[id] -= 1;

            // Update the cart items in sessionStorage
            sessionStorage.setItem('cart', JSON.stringify(cartItems));
        }
    };

    const updateCart = (count, id) => {
        // Update the count for the specified product ID
        cartItems[id] = count;

        // Update the cart items in sessionStorage
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    };

    return (
        <div className="cartItems">
            <div className='cartItem'>
                <div className="ProductImage">
                    <img className="imageCarte" src={productImage} alt="Produit" />
                </div>
                <div className="description">
                    <div className="productDescription">
                        <p>
                            <b>{productName}</b>
                        </p>
                    </div>
                    <div className="productPrice">
                        <p>${price}</p>
                    </div>
                </div>
                <div className="countArticle">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input
                        className="inputCount"
                        value={cartItems[id] || 0}
                        onChange={(e) => updateCart(Number(e.target.value), id)}
                    />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
                <div className="delBtn">
                    <p> x </p>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
