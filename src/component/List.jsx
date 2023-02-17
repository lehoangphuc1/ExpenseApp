import React from "react";
const options = ["2020", "2021", "2022", "2023", "2024"];
const onOptionChangeHandler = (event) => {
  console.log("Your select is ", event.target.value);
};
const List = ({ list }) => {
  // console.log(list);
  return (
    <div className="row pt-5">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <div className="bg-dark card" style={{ color: "white" }}>
          <div className="card-body">
            <div className="row">
              <div className="col-md-9 col-12">
                <div className="form-group">
                  <label htmlFor="exampleInputTitle">
                    <strong>Filter by year</strong>
                  </label>
                </div>
              </div>
              <div className="col-md-3 col-12">
                <div className="form-group row">
                  <>
                    <center>
                      <select
                        className="form-select"
                        onChange={onOptionChangeHandler}
                      >
                        <option>Please choose one option</option>
                        {options.map((option, index) => {
                          return <option key={index}>{option}</option>;
                        })}
                      </select>
                    </center>
                  </>
                </div>
              </div>
            </div>
            {list &&
              list.map((listSelected) => (
                <div className="row item-block">
                  <div className="col-md-2 daytime-block">
                    <div>
                      <strong>{listSelected.date_time}</strong>
                    </div>
                  </div>
                  <div className="col-md-8 title-name">
                    <strong>{listSelected.name}</strong>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group block-price">
                      <label htmlFor="exampleInputTitle">
                        <strong className="price">{listSelected.amount}</strong>
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            {/* <div className="row item-block">
              <div className="col-md-2 daytime-block">
                <div>
                  <span className="month-card"> March</span>
                  <br />
                  <span className="year-card">2021</span>
                  <br />
                  <strong className="date-block">12</strong>
                </div>
              </div>
              <div className="col-md-8 title-name">
                <strong>New Desk</strong>
              </div>
              <div className="col-md-2">
                <div className="form-group block-price">
                  <label htmlFor="exampleInputTitle">
                    <strong className="price">$799.49</strong>
                  </label>
                </div>
              </div>
            </div>
            <div className="row item-block">
              <div className="col-md-2 daytime-block">
                <div>
                  <span className="month-card"> March</span>
                  <br />
                  <span className="year-card">2021</span>
                  <br />
                  <strong className="date-block">12</strong>
                </div>
              </div>
              <div className="col-md-8 title-name">
                <strong>New TV</strong>
              </div>
              <div className="col-md-2">
                <div className="form-group block-price">
                  <label htmlFor="exampleInputTitle">
                    <strong className="price">$294.67</strong>
                  </label>
                </div>
              </div>
            </div>
            <div className="row item-block">
              <div className="col-md-2 daytime-block">
                <div>
                  <span className="month-card">January</span>
                  <br />
                  <span className="year-card">2021</span>
                  <br />
                  <strong className="date-block">04</strong>
                </div>
              </div>
              <div className="col-md-8 title-name">
                <strong>Car Insurance</strong>
              </div>
              <div className="col-md-2">
                <div className="form-group block-price">
                  <label htmlFor="exampleInputTitle">
                    <strong className="price">$400</strong>
                  </label>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
};

export default List;
