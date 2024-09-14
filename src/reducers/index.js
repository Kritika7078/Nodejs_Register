import { combineReducers } from "redux";
import { addToCartReducer, productReducer ,selectedProductReducer} from "./productReducer";

 const reducers = combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer,
    cart:addToCartReducer
});

export default reducers;