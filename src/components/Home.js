import React, { useState } from "react";
import { Function } from "./Function";
import "./home.css";
export default function Home() {
  const [num, setNum] = useState("");
  // var succ,prev;
  function inputNum(e) {
    var input = e.target.value;
    if (num == "" || num==="Error") {
      setNum(input);
    } else setNum(num + input);
  }
  function clear() {
    setNum("");
  }

  const calculate = () => {
    // var current_string=num;
    // var ans = Function(num);
    
    // setNum(ans);
  };

  return (
    <>
      <div className="wrapper">
        <div className="result">
          <h1>{num ? num : "enter number"}</h1>
        </div>
        <div>
          <button onClick={clear} data-tid="C" className="gray2">
            C
          </button>

          <button onClick={inputNum} data-tid="%" className="gray" value="%">
            %
          </button>
          <button data-tid="divide" className="orange" onClick={inputNum} value="/">
            /
          </button>
        </div>
        <div>
          <button data-tid="7" className="gray" onClick={inputNum} value="7">
            7
          </button>
          <button data-tid="8" className="gray" onClick={inputNum} value="8">
            8
          </button>
          <button data-tid="9" className="gray" onClick={inputNum} value="9">
            9
          </button>
          <button data-tid="X"className="orange" onClick={inputNum} value="X">
            X
          </button>
        </div>
        <div>
          <button data-tid="4" className="gray" onClick={inputNum} value="4">
            4
          </button>
          <button data-tid="5" className="gray" onClick={inputNum} value="5">
            5
          </button>
          <button data-tid="6"className="gray" onClick={inputNum} value="6">
            6
          </button>
          <button data-tid="-" className="orange" onClick={inputNum} value="-">
            -
          </button>
        </div>
        <div>
          <button data-tid="1" className="gray" onClick={inputNum} value="1">
            1
          </button>
          <button data-tid="2" className="gray" onClick={inputNum} value="2">
            2
          </button>
          <button data-tid="3" className="gray" onClick={inputNum} value="3">
            3
          </button>
          <button data-tid="+" className="orange" onClick={inputNum} value="+">
            +
          </button>
        </div>
        <div>
          <button data-tid="0" className="gray2" onClick={inputNum} value="0">
            0
          </button>
          <button data-tid="dot" className="gray" onClick={inputNum} value=".">
            .
          </button>
          <button data-tid="equal" className="orange" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </>
  );
}
