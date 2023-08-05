import React from 'react'
import LabelPrice from './LabelPrice'
import Quantity from './Quantity'

const CartItem = ({ id, name, price, quantity, incresed, decresed }) => {
    return (
        <div style={{ border: '1px dashed black', margin: '15px', padding: '15px' }}>
            Cart Item Containes
            <LabelPrice name={name} price={price} />
            <Quantity id={id} quantity={quantity} incresed={incresed} decresed={decresed} />
        </div>
    )
}

export default CartItem