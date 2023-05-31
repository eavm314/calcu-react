import { useEffect, useState } from "react";
import { Button } from "./Button";
import { evaluateOperation, removeLeadingZeros } from "../helpers/evaluations"

export const Calculator = ({resultsList, setResultsList}) => {
  const [operation, setOperation] = 
    useState(localStorage.getItem("operation")?
    localStorage.getItem("operation"):"0");

  const textButtons = ["(", ")", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", ".", "0"];

  const concatSimbol = (e, text) => {
    e.preventDefault();
    if (operation==="Syntax Error" || operation[0]==='='){
      setOperation(removeLeadingZeros(text));
    } else {
      setOperation(removeLeadingZeros(operation+text));
    }
  };

  const deleteSymbol = (e) => {
    e.preventDefault();
    if (operation==="Syntax Error" || operation[0]==='=' || operation.length === 1){
      setOperation("0");
    } else {
      setOperation(operation.slice(0,-1));
    }
  };

  const clearInput = (e) => {
    e.preventDefault();
    setOperation("0");
  };

  const evaluateResult = (e) => {
    e.preventDefault();
    if(operation==="Syntax Error" || operation[0]==="="){
      return;
    }
    
    const result = String(evaluateOperation(operation));
    if (result!=="Syntax Error" && operation!==result){
      setResultsList([...resultsList, {operation,result}])
    }
    setOperation((result==="Syntax Error"? "":"=")+result);
  };

  useEffect(() => {
    localStorage.setItem("operation", operation);
  },[operation]);

  return (
    <div className="max-w-xs w-full mb-5 p-4 bg-cyan-800">
      <form onSubmit={evaluateResult}>

        <input
          id="operation"
          type="text"
          value={operation}
          readOnly
          className="outline-none
        w-full py-1 px-2 mb-4
        border-2 border-black 
        text-right text-2xl" />

        <Button text={"D"} handler={deleteSymbol}/>

        <div className="grid grid-cols-4 grid-rows-5">

          <Button text="C" handler={clearInput} />
          {
            textButtons.map((b, i) =>
              <Button key={i} text={b} handler={concatSimbol} />
            )
          }
          <input
            type="submit"
            value="="
            className="cursor-pointer col-span-2
              bg-cyan-500 m-1 rounded-full pb-2
              text-4xl font-bold text-white
              active:bg-cyan-200 active:text-black"
          />
        </div>
      </form>
    </div >
  )
}
