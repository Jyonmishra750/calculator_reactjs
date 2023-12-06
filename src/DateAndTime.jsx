import React from "react";
import "./index.css";

function DateAndTime() {
  let cd = new Date().toLocaleDateString(); //Current Date
  let ct = new Date().toLocaleTimeString(); //Current Time

  return (
    <>
      <div>
        <center>
          <p>
            <b>Date: </b>
            {cd}
            &nbsp;&nbsp;
            <b> Time: </b>
            {ct}
          </p>
        </center>
      </div>
    </>
  );
}

export default DateAndTime;