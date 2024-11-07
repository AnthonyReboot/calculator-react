import Button from "./components/button";
import "./css/global.css";

export default function App() {
  const numberButtons = () => {
    const buttons = [];
    for (let i = 9; i > -1; i--) {
      buttons.push(<Button key={i} value={i} />);
    }
    return <div className="number-buttons">{buttons}</div>;
  };

  return (
    <>
      <div className="container">
        <div className="calculator">
          <input type="text" readOnly />
          <div className="wrapper-buttons">
            {numberButtons()}
            <div className="operator-buttons">
              <Button value="/"></Button>
              <Button value="x"></Button>
              <Button value="-"></Button>
              <Button value="+"></Button>
              <Button value="="></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
