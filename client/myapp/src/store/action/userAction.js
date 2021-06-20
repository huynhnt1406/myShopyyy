

export const addToCart = (product) => dispatch => {
    dispatch({
        type:'ADD_TO_CART',
        payload:product
    })
}

export const removeItem = (id) => dispatch => {
    dispatch({
        type:'REMOVE_ITEM',
        payload:id
    })
}