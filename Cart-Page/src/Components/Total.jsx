import React from 'react';

const Total = ({ cart }) => {
    const totalPrice = cart.reduce((total, item) => {
        return total + item.quantity * item.price;
    }, 0);

    return <div style={css}>Total: {totalPrice}</div>;
};

export default Total;

let css = {
    backgroundColor: 'yellow',
    fontSize: '30px',
    fontWeight: '900',
    color: 'green',
    border: "2px dashed black",
    margin: '0px 15px 20px 15px'
}