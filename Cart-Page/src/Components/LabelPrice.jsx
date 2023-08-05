import React from 'react'

const LabelPrice = ({ name, price }) => {
    return (
        <div style={{
            backgroundColor: 'lightblue',
            display: 'flex',
            justifyContent: 'space-around'
        }}>
            <p>Name: {name}</p>
            <p>Price: ₹{price}</p>
        </div>
    )
}

export default LabelPrice;
