const products = (state, action) => {

    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };
        case "ADD_CART":
            return {
                ...state,
                cart: [action.payload, ...state.cart],
            };
        case "CLEAR_CART":
            return {
                ...state,
                cart: []
            }
        case "REMOVE_PRODUCT":
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload.id)
            };
        case "SET_CART":
            return {
                ...state,
                cart: action.payload,
            };
        default:
            return state;
    }
};


export default products;