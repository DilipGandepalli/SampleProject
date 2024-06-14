import { ADD_CUSTOMER,GET_ALL_CUSTOMERS } from "./Constants";

const initialState = {
    CustomerList :[]
}

const CustomerList = (state = initialState,action) =>{
    switch(action.type){
        case ADD_CUSTOMER:
            console.log(action,'action in reducer')
            return{
                ...state,
                CustomerList:[...state.CustomerList,action.payload]
            };y

        default:
            return state
    }
}

export default CustomerList;

