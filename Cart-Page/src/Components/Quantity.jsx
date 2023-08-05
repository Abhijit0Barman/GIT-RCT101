import React, { useState } from 'react'
import Button from './Button';

let css = { backgroundColor: 'pink', display: 'flex', justifyContent: 'center' }

const Quantity = ({ id, quantity, incresed, decresed }) => {

    return (
        <div style={css}>

            <Button handleClick={() => { decresed(id) }}> - </Button>       {/* <Button /> */}

            <div>{quantity}</div>

            <Button handleClick={() => { incresed(id) }} children="+" />  {/* <button>+</button> */}

        </div>
    )
}

export default Quantity
