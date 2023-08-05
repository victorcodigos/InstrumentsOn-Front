import { createContext, useReducer } from "react";
import axios from "axios";
import ProductsReducer from "./ProductsReducer"

const initialState = {
    products: [],
    product:{},
};

const API_URL = "http://localhost:3000";
export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ProductsReducer, initialState);
    const getProducts = async () => {
        const res = await axios.get(API_URL + "/products/all");
        dispatch({
            type: "GET_PRODUCTS",
            payload: res.data.products,
        });
        console.log(res)
        return res;

    };
    return (

        <ProductsContext.Provider
            value={{
                products: state.products,
                getProducts
            }}
        >
            {children}
        </ProductsContext.Provider>
    );

}; 
