import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "./index.css";

function Body() {

  const [finput, setFinput] = useState();
  const [sinput, setSinput] = useState();
  const [result, setResult] = useState();
  const blank1 = useRef('');
  const blank2 = useRef('');
  
  function add(){
    setResult(Number(finput) + Number(sinput));
  }
  function sub(){
    setResult(Number(finput) - Number(sinput));
  }
  function mul(){
    setResult(Number(finput) * Number(sinput));
  }
  function div(){
    setResult(Number(finput) / Number(sinput));
  }
  const clear = () => {
    // setFinput('');
    // setSinput('');
    setResult('');
    blank1.current.value = '';
    blank2.current.value = '';
  }

  return (
    <div>
      <div className="calculator">
        <label htmlFor="finput">
          <b>Enter 1st Number:</b>&nbsp;&nbsp;
          <input type="number" ref={blank1} name="finput" id="finput" required autoComplete="off" onChange={
            (event) => {
              setFinput(event.target.value)
            }
          } />
        </label>
        <br />
        <br />
        <label htmlFor="sinput">
          <b>Enter 2nd Number:</b>&nbsp;
          <input type="number" ref={blank2} name="sinput" id="sinput" required autoComplete="off" onChange={
            (event) => {
              setSinput(event.target.value)
            }
          }/>
        </label>
        <br />
        <br />
        <label htmlFor="result">
          <b>Result: </b>&nbsp;{result}
        </label>
        <br />
        <br />

        <center>
          <button type="button" onClick={add}>Addition</button>&nbsp;
          <button type="button" onClick={sub}>Substraction</button>&nbsp;
          <button type="button" onClick={mul}>Multiplication</button>&nbsp;
          <button type="button" onClick={div}>Division</button>&nbsp;
          <br /><br />
          <input type="button" name="clear" value="REFRESH" className="clear" onClick={clear} />
        </center>
      </div>
    </div>
  );
}

export default Body;
