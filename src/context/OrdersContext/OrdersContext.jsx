import { createContext } from "react";
import axios from "axios";
export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
    
    const API_URL = "http://localhost:3000";
    const createOrder = async (cart) => {
        const token = JSON.parse(localStorage.getItem("token"));
        const products = cart.map((product) =>{
            return product.id 
            
         }) 
         console.log(products)
        try {
            await axios.post(API_URL + "/ordens", { productIds:cart},
                {
                    headers: {
                        authorization: token,
                    },
                },);
        } catch (error) {
            console.error(error);
        }
    };


    return (

        <OrdersContext.Provider
            value={{
                createOrder,
            }}
        >
            {children}
        </OrdersContext.Provider>
    );
};

