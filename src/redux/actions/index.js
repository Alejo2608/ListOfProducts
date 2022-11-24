import axios from "axios";
import { GET_PRODUCTS, GET_CARRITO } from "../constants";

export function getProducts(){
    return async function(dispatch){
        const info=await axios.get("https://dummyjson.com/products")
        return dispatch({
            type:GET_PRODUCTS,
            payload:info.data
        })
    }
}

