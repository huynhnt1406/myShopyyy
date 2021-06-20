const initialState = {
    carts : []
}

const addItem = (state = initialState , action) =>{
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                carts:[
                    ...state.carts,
                    action.payload
                ]
            }
        case 'REMOVE_ITEM':
            return{
                ...state,
                carts : state.carts.map(item => item.id !== action.payload)
            }
        default:
            return state
    }
}


export default addItem