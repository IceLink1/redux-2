import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AddCustomersAction, DeleteCustomersAction } from "./store/customerReduser";

export default function App() {
  const dispatch = useDispatch();

  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };
  const addCustomers = (name) => {
    const customers= {
      name,
      id:Date.now()
    }
    dispatch(AddCustomersAction(customers));
  };
  const deleteCustomer = (customers) => {
    dispatch(DeleteCustomersAction(customers.id));
  };

  return (
    <main>
      <section>
        <div className="App">
          <h1 className="h1">{cash}</h1>
          <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
          <button
            onClick={() => getCash(Number(prompt()))}
            style={{ marginLeft: "10px" }}
          >
            Get cash
          </button>
          <button onClick={() => addCustomers(prompt())}>Add customers</button>
        </div>
        <div className="App">
          {customers.length > 0  
          ?<div>
              {customers.map(customers =>
                  <div onClick={()=> deleteCustomer(customers)}>{customers.name}</div>
              )}
          </div> 
          : <h3>We dont have any clients!</h3>}
        </div>
      </section>
    </main>
  );
}
