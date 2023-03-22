import React from "react";
import './buttons.css'

const Buttons = ({data, result, setData, setResult}) => {

  const clickHandler = (value) => {
    if (data === "0") {
        setData("" + value);
        setResult("" + value);
    } else if (data.includes(".") && value === ".") {
        setData(data);
    } else if (
      value === "/" ||
      value === "*" ||
      value === "-" ||
      value === "+"
    ) {
      if (result.includes("=")) {
        setResult(data + value);
        setData(value);        
      } else {
        setResult(result + value);
        setData(value);
      }
    } else if (data === "/" || data === "*" || data === "-" || data === "+") {
        setResult(result + value);
        setData(value);
    } else {
        setResult(result + value);
        setData(data + value);
    }
  };

  const clearHandler = () => {
    setResult('0');
    setData('0');
  };

  const getResult = (value) => {
    let filtered = result.match(/(\*|\+|\/|-)?(\.|\-)?\d+/g).join('');
    let output = eval(filtered);
    if (data === 0){
        setData('0');
    }
    setResult(result + '=' + output);
    setData(output.toString());
  }

  return (
    <div id="buttons" className="grid">
      <button id="clear" onClick={clearHandler}>
        AC
      </button>
      <button id="divide" onClick={() => clickHandler("/")}>
        /
      </button>
      <button id="multiply" onClick={() => clickHandler("*")}>
        X
      </button>
      <button id="seven" onClick={() => clickHandler("7")}>
        7
      </button>
      <button id="eight" onClick={() => clickHandler("8")}>
        8
      </button>
      <button id="nine" onClick={() => clickHandler("9")}>
        9
      </button>
      <button id="subtract" onClick={() => clickHandler("-")}>
        -
      </button>
      <button id="four" onClick={() => clickHandler("4")}>
        4
      </button>
      <button id="five" onClick={() => clickHandler("5")}>
        5
      </button>
      <button id="six" onClick={() => clickHandler("6")}>
        6
      </button>
      <button id="add" onClick={() => clickHandler("+")}>
        +
      </button>
      <button id="one" onClick={() => clickHandler("1")}>
        1
      </button>
      <button id="two" onClick={() => clickHandler("2")}>
        2
      </button>
      <button id="three" onClick={() => clickHandler("3")}>
        3
      </button>
      <button id="zero" onClick={() => clickHandler("0")}>
        0
      </button>
      <button id="decimal" onClick={() => clickHandler(".")}>
        .
      </button>
      <button id="equals" onClick={getResult}>
        =
      </button>
    </div>
  );
};

export default Buttons;
