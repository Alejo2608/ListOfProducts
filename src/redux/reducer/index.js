import { GET_PRODUCTS } from "../constants";
const initialState={
    info:[]
}

export default function rootReducer(state=initialState,action){
    switch (action.type) {
        case GET_PRODUCTS:
            const pro=action.payload.products
            console.log(pro)
            return{
                ...state,
                info:pro
            }
    
        default:
            return state
    }
}