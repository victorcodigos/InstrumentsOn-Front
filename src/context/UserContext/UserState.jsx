import axios from "axios";
import { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  token: token ? token : null,
  user: null,
};

const API_URL = "http://localhost:3000";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);
  
    const login = async (user) => {
      const res = await axios.post(API_URL + "/users/login", user);
      dispatch({
        type: "LOGIN",
        payload: res.data,
      });
      if (res.data) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
      }
    };
    const getUserInfo = async () => {
     const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.get(API_URL + "/users/getInfo",
        {
          headers: {
            authorization: token,
          },
        }
        );
        dispatch({
          type: "GET_USER_INFO",
          payload: res.data,
        })
    };
    const logout = async () => {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.delete(API_URL + "/users/logout",  
      {
        headers: {
          authorization: token,
        },
      });
      dispatch({
        type: "LOGOUT",
        payload: res.data,
      });
      if (res.data) {
        localStorage.removeItem("token");
      }
    };

    const register = async (user) => {
      const res = await axios.post(API_URL + "/users", user);
      dispatch({
        type: "REGISTER",
        payload: res.data,
      });
    };
  
  
    return (
        <UserContext.Provider
          value={{
            register,
            token: state.token,
            user: state.user,
            login,
            getUserInfo,
            logout
            
          }}
        >
          {children}
        </UserContext.Provider>
      );
    };
    