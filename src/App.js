import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [inputLeft, setInputLeft] = useState("");
  const [inputRight, setInputRight] = useState("");
  const [currInputValue, setCurrInputValue] = useState("");
  const [operation, setOperation] = useState("Operasi");
  const [currInput, setCurrInput] = useState("left");

  const handleClear = () => {
    setOperation("Operasi");
    setInputLeft();
    setInputRight();
    setCurrInput("left");
    setCurrInputValue("");
  };

  const handleChangeOperation = (operation) => {
    setOperation(operation);
    setCurrInputValue("");
    setCurrInput("right");
  };

  const factorial = (n) => {
    return n <= 1 ? 1 : n * factorial(n - 1);
  };

  const handleCalculate = () => {
    if (inputLeft === undefined || inputRight === undefined) return;
    let value = 0;
    switch (operation) {
      case "+":
        value = Number(inputLeft) + Number(inputRight);
        break;
      case "-":
        value = Number(inputLeft) - Number(inputRight);
        break;
      case "/":
        value = Number(inputLeft) / Number(inputRight);
        break;
      case "x":
        value = Number(inputLeft) * Number(inputRight);
        break;
      case "^":
        value = Math.pow(Number(inputLeft), Number(inputRight));
        break;
      case "%":
        value = Number(inputLeft) % Number(inputRight);
        break;
      default:
        break;
    }
    setCurrInputValue(isFloat(value) ? value.toFixed(2) : value);
    setCurrInput("left");
    setInputRight("");
    setOperation("Operasi");
  };
  function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
  }
  const handleDelete = () => {
    setCurrInputValue((prev) => {
      if (prev.length === 1) {
        if (currInput === "left") {
          setInputLeft("");
        } else {
          setInputRight("");
        }
      }
      return prev ? prev.substring(0, prev.length - 1) : "";
    });
  };

  useEffect(() => {
    if (currInputValue) {
      if (currInput === "left") {
        setInputLeft(currInputValue);
      } else {
        setInputRight(currInputValue);
      }
    }
  }, [currInput, currInputValue]);

  return (
    <div id="Kalkulator">
      <div id="judul">Kalkulator Rafly Adrian Firmansyah</div>
      <div class="wrapper" id="operasi-temporer">
        <div class="tombol tombol-nonaktif" id="input1">
          {inputLeft || "0"}
        </div>
        <div
          class="tombol tombol-nonaktif"
          id="operasi-selected"
          style={{ fontSize: 10, fontStyle: "italic" }}
        >
          {operation}
        </div>
        <div class="tombol tombol-nonaktif" id="input2">
          {inputRight || "0"}
        </div>
      </div>
      <div class="wrapper">
        <div id="hasil" class="tombol tombol-nonaktif tombol-aktif">
          {currInputValue || "0"}
        </div>
      </div>
      <div id="blok-tombol">
        <div class="wrapper">
          <div
            class="tombol tombol-aktif tombol-clear tombol-c"
            id="btn-clear"
            onClick={() => handleClear()}
          >
            C
          </div>
          <div
            class="tombol tombol-aktif toggle-negatif tombol-plus-minus"
            onClick={() => setCurrInputValue((prev) => Number(prev) * -1)}
          >
            ±
          </div>
          <div
            class="tombol tombol-aktif tombol-faktorial tombol-fact"
            onClick={() => setCurrInputValue((prev) => factorial(Number(prev)))}
          >
            !
          </div>
          <div
            class="tombol tombol-aktif tombol-operasi tombol-power"
            onClick={() => handleChangeOperation("^")}
          >
            ^
          </div>
        </div>
        <div class="wrapper">
          <div
            class="tombol tombol-aktif tombol-angka"
            onClick={() => setCurrInputValue((prev) => prev + "7")}
          >
            7
          </div>
          <div
            class="tombol tombol-aktif tombol-angka"
            onClick={() => setCurrInputValue((prev) => prev + "8")}
          >
            8
          </div>
          <div
            class="tombol tombol-aktif tombol-angka"
            onClick={() => setCurrInputValue((prev) => prev + "9")}
          >
            9
          </div>
          <div
            class="tombol tombol-aktif tombol-operasi tombol-percent"
            // onClick={() =>
            //   currInputValue && setCurrInputValue(Number(currInputValue) / 100)
            // }
            onClick={() => handleChangeOperation("%")}
          >
            %
          </div>
        </div>
        <div class="wrapper">
          <div
            class="tombol tombol-aktif tombol-angka"
            onClick={() => setCurrInputValue((prev) => prev + "4")}
          >
            4
          </div>
          <div
            class="tombol tombol-aktif tombol-angka"
            onClick={() => setCurrInputValue((prev) => prev + "5")}
          >
            5
          </div>
          <div
            class="tombol tombol-aktif tombol-angka"
            onClick={() => setCurrInputValue((prev) => prev + "6")}
          >
            6
          </div>
          <div
            class="tombol tombol-aktif tombol-operasi tombol-divide"
            onClick={() => handleChangeOperation("/")}
          >
            /
          </div>
        </div>
        <div class="wrapper">
          <div
            class="tombol tombol-aktif tombol-angka"
            onClick={() => setCurrInputValue((prev) => prev + "1")}
          >
            1
          </div>
          <div
            class="tombol tombol-aktif tombol-angka"
            onClick={() => setCurrInputValue((prev) => prev + "2")}
          >
            2
          </div>
          <div
            class="tombol tombol-aktif tombol-angka"
            onClick={() => setCurrInputValue((prev) => prev + "3")}
          >
            3
          </div>
          <div
            class="tombol tombol-aktif tombol-operasi tombol-mult"
            onClick={() => handleChangeOperation("x")}
          >
            x
          </div>
        </div>
        <div class="wrapper">
          <div
            class="tombol tombol-aktif tombol-angka"
            onClick={() => setCurrInputValue((prev) => prev + "0")}
          >
            0
          </div>
          <div
            class="tombol tombol-aktif tombol-dot"
            onClick={() => setCurrInputValue((prev) => prev + ".")}
          >
            .
          </div>
          <div
            class="tombol tombol-aktif tombol-operasi tombol-add"
            onClick={() => handleChangeOperation("+")}
          >
            +
          </div>
          <div
            class="tombol tombol-aktif tombol-operasi tombol-sub"
            onClick={() => handleChangeOperation("-")}
          >
            -
          </div>
        </div>
        <div class="wrapper">
          <div
            class="tombol tombol-aktif tombol-angka"
            style={{ fontWeight: "bold", fontSize: "1.5em" }}
            onClick={() => handleCalculate()}
          >
            =
          </div>
          <div
            class="tombol tombol-aktif tombol-operasi tombol-sub"
            onClick={() => handleDelete()}
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
