import { ADD_CUSTOMER, GET_ALL_CUSTOMERS } from "./Constants";

export const addCustomer = data => ({
    type:ADD_CUSTOMER,
    payload:data
})

export const getAllCustomers = data =>({
    type:GET_ALL_CUSTOMERS,
    payload:data
})