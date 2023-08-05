import React, { useEffect, useState } from 'react'
import CartItem from './CartItem';
import Total from './Total';

const cartItem = [
    { id: 1, name: 'Laptop', price: 50, quantity: 1 },
    { id: 2, name: 'Mobile', price: 10, quantity: 5 },
    { id: 3, name: 'Bike', price: 100, quantity: 9 },
]

const CartContainer = () => {
    const [cart, setCart] = useState(cartItem)

    const incresed = (id) => {
        const updatedCart = cart.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCart(updatedCart);
    };
    
    const decresed = (id) => {
        const updatedCart = cart.map((item) => {
            if (item.id === id && item.quantity > 0) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCart(updatedCart);
    };
    return (
        <div style={{ border: '2px dashed red', margin: '40px' }}>
            {cart.map((item) => (
                <CartItem key={item.id} {...item} incresed={incresed} decresed={decresed} />
            ))}
            <Total cart={cart} />
        </div>
    )
}
export default CartContainer

/*
        one cart item
        id
        name
        price
        quantity
*/