import React from 'react'

const DataCard = (props) => {
    const {
        id,
        name,
        type,
        rating,
        number_of_votes,
        price_starts_from,
        image } = props;
    return (
        <div style={{border:"1px solid black", margin:"20px", padding:"10px"}}>
            <img src={image} alt={name} />
            <p>Name: {name}</p>
            <p>Rating: {rating}</p>
            <p>Votes: {number_of_votes}</p>
            <p>Type: {type}</p>
            <p>Price Starts From: {price_starts_from}</p>
        </div>
    )
}
export default DataCard

/*
id:1
name:"Shute"
type:"fine_dining"
rating:4.5
number_of_votes:588
price_starts_from:925
image:"https://picsum.photos/200"
*/