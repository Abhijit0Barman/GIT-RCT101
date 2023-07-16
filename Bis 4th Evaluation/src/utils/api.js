import axios from 'axios'

export const getBooksData=(filter,sortBy,order)=>{
    const queryParams={};

    if(filter)
    {
        queryParams.category=filter
    }
    if(sortBy)
    {
        queryParams._sort=sortBy
    }
    if(order)
    {
        queryParams._order=order
    }

    return axios({
        method:'get',
        url:`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`,
        params:queryParams
    })
}