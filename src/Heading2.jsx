import React from "react";
import "./index.css";

function Heading2() {
  const msgstyle = {};

  const heading = {
    fontFamily: ' "Josefin Sans", sans-serif ',
    textAlign: "center",
    textTransform: "capitalize",
    textShadow: "0px 1px 1px black",
    fontWeight: "bold",
    color: "orangered",
    fontStyle: "italic",
  };

  const sub_heading = {
    textAlign: "center",
    textTransform: "capitalize",
    textShadow: "0px 0px 1px black",
    fontWeight: "bold",
    color: "brown",
    margin: "10px",
  };

  let name = "jyoti narayan mishra"; // Your Name

  let msg = ""; //For greetings

  let currTime = new Date().getHours();
  if (currTime >= 1 && currTime < 12) {
    msg = "Good Morning, ";
    msgstyle.color = "cadetblue";
  } else if (currTime >= 12 && currTime < 16) {
    msg = "Good Afternoon, ";
    msgstyle.color = "gold";
  } else if (currTime >= 17 && currTime < 21) {
    msg = "Good Evening, ";
    msgstyle.color = "palevioletred";
    //const element = <div style={{ backgroundImage: currTime >= 17 && currTime < 21 ? './good-morning-sunshine.jpg' : 'image2.jpg' }}></div>;
  } else {
    msg = "Good Night, ";
    msgstyle.color = "blueviolet";
  }

  return (
    <>
      <div className="div-box">
        <h1 style={msgstyle}>{msg}</h1>
        <h1 style={sub_heading}>{name}</h1>
        <b>
          <i>(Pursuing MCA)</i>
        </b>
      </div>
    </>
  );
}

export default Heading2;
