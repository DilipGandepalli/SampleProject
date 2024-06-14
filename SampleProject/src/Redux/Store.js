import { combineReducers, createStore } from "redux";
import CustomerList from "./Reducer";


const rootReducer = combineReducers({
    CustomerList :CustomerList
})

const configueStore = ()=>{
    return createStore(rootReducer)
}

export default configueStore;