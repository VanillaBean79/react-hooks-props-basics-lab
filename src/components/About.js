import React from "react";

function About(props) {
  console.log(props.snakeJuice)
  return (
    <div id="about">
      <h2>About Me</h2>
       {/* <p>{props.bio}</p> */}
       { props.bio === undefined || props.bio === "" ? (
        null
      ) : (
        <p>{props.bio}</p>
      )}
       <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>Links</h3>
      <br></br>
      <a>{props.github}</a>
      <a>{props.linkedin}</a>

    </div>
  );
}

export default About;
