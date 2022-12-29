import axios from 'axios'

export const fetchProducts = () => async(dispatch) => {
    await axios.get(`http://localhost:8000/api/products`).then(({data})=>{
        dispatch({
            type: "FETCH_PRODUCTS",
            payload: data
        })
    })
}
