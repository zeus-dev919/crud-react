import axios from 'axios'
import Swal from 'sweetalert2';


export const getProduct = (formData) => async (dispatch) => {
    await axios.post('http://localhost:8000/api/products', formData).then(({ data }) => {
        Swal.fire({
            icon: "success",
            text: data.message
        })
        dispatch({
            type: "CREATE_PRODUCT",
            payload: "OK"
        })
    }).catch(({ response }) => {
        if (response.status === 422) {
            dispatch({
                type: "POST_ERROR",
                payload: response.data.errors
            })
        } else {
            Swal.fire({
                text: response.data.message,
                icon: "error"
            })
        }
    })
};
export const clear = () => async (dispatch) => {
    dispatch({
        type: 'CLEAR_CACHE',
        payload: ""
    })
};



