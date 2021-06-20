import axios from 'axios'
export const addProduct = (newProduct) => async dispatch => {

    try {
        await axios.post('http://localhost:3333/products/add', newProduct)
        dispatch({
            type:'ADD_PRODUCT',
            payload:newProduct
        })
    } catch (error) {
        console.log(error)
    }
}