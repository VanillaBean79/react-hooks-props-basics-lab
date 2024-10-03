import React from "react";

function Links(props){

    return(
          <h3>Links
            <a href={props.github}>{props.github}</a>
            <br></br>
            <a href={props.linkedin}>{props.linkedin}  
            </a>
          </h3>
            
    )
}

export default Links

