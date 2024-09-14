import { ActionTypes } from "../contants/action-type";

const initialState={
    products:[],


    addedItems:[]
}

export const productReducer = (state=initialState,{type,payload})=>{
    console.log("payload is ",payload)
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            console.log("case of setProducts");
            
           const arr= {...state,products:payload}
           console.log("arr is :",arr);
           console.log(state + "klhihohhubiubijgh")
            return {...state,products:payload};
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {},{type,payload})=>{
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            //console.log("productdetail arr ",{...state,...payload})
            return {...state,...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default: return state;
    }
}

export const addToCartReducer=(state=initialState,{type,payload})=>{
    
    switch(type){
        case ActionTypes.ADD_TO_CART:
            console.log("addToCartReducer",payload.id)
            //console.log("state",state);
            // let arr =[...state,...payload]
            // console.log("state",state);
            // const cartItem = arr.products.find((item)=>{
            //     return item.id===payload.id;
            // })
            console.log("cartItems",{...state.addedItems,payload})
            return{...state , addedItems:[...state.addedItems,payload]};
        case ActionTypes.REMOVE_SELECTED_CARTITEM:
            
        default: return state;
    }
}