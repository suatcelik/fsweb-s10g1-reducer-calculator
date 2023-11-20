import React, { useReducer } from "react";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers";
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  memoryClean,
  memoryPlus,
  memoryRight,
} from "./actions";

function App() {
  const [calculator, calculatorDispatch] = useReducer(reducer, initialState);
  const eventHandler = (e) => {
    calculatorDispatch(applyNumber(Number(e.target.value)));
  };
  const operationHandler = (event) => {
    calculatorDispatch(changeOperation(event.target.value));
  };

  const reset = () => {
    calculatorDispatch(clearDisplay());
  };
  const memoryPlusHandler = () => {
    calculatorDispatch(memoryPlus());
  };

  const mcHandler = () => {
    calculatorDispatch(memoryClean());
  };

  const mRhandler = () => {
    calculatorDispatch(memoryRight());
  };
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={calculator.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {calculator.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {calculator.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={memoryPlusHandler} />
              <CalcButton value={"MR"} onClick={mRhandler} />
              <CalcButton value={"MC"} onClick={mcHandler} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={eventHandler} />
              <CalcButton value={2} onClick={eventHandler} />
              <CalcButton value={3} onClick={eventHandler} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={eventHandler} />
              <CalcButton value={5} onClick={eventHandler} />
              <CalcButton value={6} onClick={eventHandler} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={eventHandler} />
              <CalcButton value={8} onClick={eventHandler} />
              <CalcButton value={9} onClick={eventHandler} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={operationHandler} />
              <CalcButton value={"*"} onClick={operationHandler} />
              <CalcButton value={"-"} onClick={operationHandler} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={reset} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
