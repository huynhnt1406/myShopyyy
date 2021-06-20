const initialState = {
    products:[]
}

const postReducer = (state = initialState,action) => {
    switch(action.type){
        case 'ADD_PRODUCT':
            return{
                ...state,
                product:[
                    ...state.products,
                    action.payload
                ]
            }
        default:
            return state
    }
}

export default postReducer