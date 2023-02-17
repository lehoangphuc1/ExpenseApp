import "./App.css";
import React, { useState } from "react";
import List from "./component/List.jsx";

const App = (props) => {
  // const [name, setName] = useState("");
  // const [amount, setAmount] = useState("");
  const [inputParams, setInputParams] = useState({
    name: "",
    amount: "",
    date_time: new Date(),
  });
  const [listSelected, setListSelected] = useState([]);

  const handleName = (event) => {
    console.log("Name ", event.target.value);
    setInputParams({
      ...inputParams,
      name: event.target.value,
    });
  };
  const handleAmount = (event) => {
    console.log("Amount ", event.target.value);
    setInputParams({
      ...inputParams,
      amount: event.target.value,
    });
  };
  const handleDate = (event) => {
    console.log("Datetime", event.target.value);
    setInputParams({
      ...inputParams,
      date_time: event.target.value,
    });
  };
  const handleSubmitForm = (event) => {
    event.preventDefault();
    //validate

    setListSelected([...listSelected, inputParams]);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-md-8 col-12 pt-2">
                  <h6 className="m-0">
                    <strong>Expense App</strong>
                  </h6>
                </div>
              </div>
            </div>
            <div className="card-body">
              <form id="expense-app" onSubmit={handleSubmitForm}>
                <div className="row">
                  <div className="col-md-8 col-12">
                    <div className="form-group">
                      <label htmlFor="exampleInputTitle">
                        <strong>Title</strong>
                      </label>
                      <input
                        type="text"
                        value={inputParams.name}
                        className="form-control"
                        id="exampleInputTitle"
                        placeholder="Title"
                        onChange={handleName}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-12">
                    <div className="form-group">
                      <label htmlFor="exampleInputAmount">
                        <strong>Amount</strong>
                      </label>
                      <input
                        type="text"
                        value={inputParams.amount}
                        className="form-control"
                        id="exampleInputAmount"
                        placeholder="Amount"
                        onChange={handleAmount}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="exampleInputDate">
                    <strong>Date</strong>
                  </label>
                  <input
                    type="date"
                    value={inputParams.date_time}
                    className="form-control"
                    id="exampleInputDate"
                    placeholder=""
                    onChange={handleDate}
                  />
                </div>
                <button className="btn btn-info w-100 pb-2 pt-2">
                  Add Expense
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
      <List list={listSelected}></List>
    </div>
  );
};

export default App;
