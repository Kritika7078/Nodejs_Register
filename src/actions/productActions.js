import { ActionTypes } from "../contants/action-type";

export const setProducts=(products)=>{
    console.log("setProducts");
    console.log(products)
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    }
}

export const selectedProduct = (product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product,
    }
}

export const removeSelectedProduct = (product)=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}

export const removeSelectedCartItem = (product)=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_CARTITEM,
    }
}


export const addToCart = (product)=>{
    console.log(ActionTypes.ADD_TO_CART,product)
    return {
        type: ActionTypes.ADD_TO_CART,
        payload:product
    }
}