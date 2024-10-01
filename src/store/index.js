import { createStore ,combineReducers} from "redux"
import { cashReducer } from "./cashReduser"
import { customerReducer } from "./customerReduser"
import { composeWithDevTools } from "redux-devtools-extension"

const rootReduser = combineReducers({
    cash:cashReducer,
    customers:customerReducer,
})

export const store = createStore(rootReduser,composeWithDevTools())