import { useState } from "react";
import Button from "./components/button";
import "./css/global.css";

export default function App() {
  const [data, setData] = useState({ operation: "", result: "" });

  const handleClick = (value: number | string) => {
    if (data.operation.length >= 14) return;
    setData({ ...data, operation: `${data.operation}` + value });
  };

  const handleEquals = () => {
    const value = data.operation.slice(-1);
    const verification =
      value === "+" || value === "-" || value === "*" || value === "/";
    if (verification) return;
    const result = eval(data.operation);
    setData({ operation: result, result: data.operation });
  };

  const clear = () => {
    setData({ operation: "", result: "" });
  };

  const deleteLast = () => {
    const operation = data.operation.slice(0, -1);
    setData({ ...data, operation });
  };

  const numberButtons = () => {
    const buttons = [];
    for (let i = 9; i > -1; i--) {
      buttons.push(
        <Button key={i} value={i} handleClick={() => handleClick(i)}></Button>
      );
    }
    return <div className="number-buttons">{buttons}</div>;
  };

  return (
    <>
      <div className="container">
        <div className="calculator">
          {/* <span className="result">{data.result}</span>
          <span className="display">{data.operation}</span> */}
          <input
            className="result"
            type="text"
            value={data.result}
            onChange={() => handleEquals()}
          />
          <input
            className="display"
            type="text"
            value={data.operation}
            readOnly
          />

          <div className="wrapper-buttons">
            <div>
              <div className="other-buttons">
                <Button value="◄" handleClick={deleteLast}></Button>
                <Button value="C" handleClick={clear}></Button>
              </div>
              {numberButtons()}
            </div>
            <div className="operator-buttons">
              <Button value="/" handleClick={() => handleClick("/")}></Button>
              <Button value="x" handleClick={() => handleClick("*")}></Button>
              <Button value="-" handleClick={() => handleClick("-")}></Button>
              <Button value="+" handleClick={() => handleClick("+")}></Button>
              <Button value="=" handleClick={handleEquals}></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
