import { createContext, useReducer } from "react";
import axios from "axios";
import ProductsReducer from "./ProductsReducer"

const cart = JSON.parse(localStorage.getItem("cart")) || []

const initialState = {
    products: [],
    cart: cart,

};

const API_URL = "http://localhost:3000";
export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ProductsReducer, initialState);
    const getProducts = async () => {
        const res = await axios.get(API_URL + "/products/all");
        dispatch({
            type: "GET_PRODUCTS",
            payload: res.data,
        });
        console.log(res)
        return res;

    };
    const addCart = (product) => {
        dispatch({
            type: "ADD_CART",
            payload: product,
        });
    };
    const clearCart = (product) => {
        dispatch({
            type: "CLEAR_CART",

        });

    };
    const removeProduct = (product) => {
        dispatch({
            type: "REMOVE_PRODUCT",
            payload: product,
        });
    };
    
    const removeOneProduct = (index) => {
        const updatedCart = [...state.cart];
        updatedCart.splice(index, 1);
        dispatch({
            type: "SET_CART",
            payload: updatedCart,
        });
    };
    return (

        <ProductsContext.Provider
            value={{
                products: state.products,
                cart: state.cart,
                getProducts,
                addCart,
                clearCart,
                removeProduct,
                removeOneProduct

            }}
        >
            {children}
        </ProductsContext.Provider>
    );

}; 
