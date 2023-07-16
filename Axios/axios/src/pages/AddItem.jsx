import { useReducer } from "react"
import axios from "axios"

const initState = {
    name: "",
    type: '',
    rating: "",
    number_of_votes: "",
    image: "",
    price_starts_from: "",
}
const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_FORM_FIELD": {
            return {
                ...state,
                [action.payload.key]: action.payload.value
            }
        }
        case "RESET_FORM_FIELD": {
            return { ...initState }
        }
        default: { throw new Error(`invalid action type`) }
    }
}
const AddItem = () => {
    const [state, dispatch] = useReducer(reducer, initState)
    const handleSubmit = (e) => {
        e.preventDefault()
        //post request using axios
        // axios.post(`http://localhost:8080/restaurants`, state)
        // OR
        axios.post(`http://localhost:8080/restaurants`, { ...state }).then((res) => {
            dispatch({
                type: "RESET_FORM_FIELD"
            })
        }).catch(err => { console.log(err); })
    }
    const handleChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        // console.log(typeof e.target.value);
        // const val = typeof e.target.value === "number" ? Number(e.target.value) : e.target.value
        const val = e.target.type === "number" ? Number(e.target.value) : e.target.value
        dispatch({
            type: "UPDATE_FORM_FIELD",
            payload: {
                key: e.target.name,
                value: val
                // value: e.target.value
            }
        })
    }
    console.log(state);
    const { name, type, rating, number_of_votes, image, price_starts_from, } = state

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Add Name'
                    value={name}
                    onChange={handleChange}
                    name="name"
                />
                <br />
                <br />
                <select
                    value={type}
                    onChange={handleChange}
                    name="type"
                >
                    <option value="">Select Restaurant Type</option>
                    <option value="cafe">Cafe</option>
                    <option value="ethnic">Ethnic</option>
                    <option value="fast_food">Fast Food</option>
                    <option value="fine_dining">Fine Dining</option>
                    <option value="casual_dining">Casual Dining</option>
                </select>
                <br />
                <br />
                <input
                    type="text"
                    placeholder='Add Image URL'
                    value={image}
                    onChange={handleChange}
                    name="image"
                />
                <br />
                <br />
                <input
                    type="number"
                    placeholder='Add Rating'
                    value={rating}
                    onChange={handleChange}
                    name="rating"
                />
                <br />
                <br />
                <input
                    type="number"
                    placeholder='Add Votes'
                    value={number_of_votes}
                    onChange={handleChange}
                    name="number_of_votes"
                />
                <br />
                <br />
                <input
                    type="number"
                    placeholder='Add Price'
                    value={price_starts_from}
                    onChange={handleChange}
                    name="price_starts_from"
                />
                <br />
                <br />
                <input
                    type="submit"
                    value="Add Item"
                />
            </form>
        </>
    )
}
export default AddItem

/*
id:1
image:"https://picsum.photos/200"------text
rating:4.5-----------------------------number
number_of_votes:588--------------------number
name:"Shute"---------------------------text
price_starts_from:925------------------number

type:"fine_dining"---------------------text==(fine_dining  /  ethnic  /  fast_food  /  cafe  /  casual_dining)
*/