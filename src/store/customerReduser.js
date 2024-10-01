import { type } from "@testing-library/user-event/dist/type"

const defualtState = {
    customers :[]
}

export const customerReducer = (state = defualtState,action)=>{
    switch (action.type) {
        case "ADD_CUSTOMER":
            return {...state,customers:[...state.customers,action.payload]}
        case "DELETE_CUSTOMER":
            return {...state,customers:state.customers.filter(customers => customers.id !== action.payload)}
        
        default:
            return state
    }
}

export const AddCustomersAction = (payload)=>({type:"ADD_CUSTOMER",payload})
export const DeleteCustomersAction = (payload)=>({type:"DELETE_CUSTOMER",payload})