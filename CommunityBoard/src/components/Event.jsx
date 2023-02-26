import React from "react";

const Event = (props) => {
  return (
    <div className="Card">
        <img src={props.image} alt={props.name} />
        <h3>{props.name}</h3>
        <h4>{props.location}</h4>
        <a href={props.url} target="blank" rel="Read more"><button>Learn more</button></a>
        
    </div>
  );
}

export default Event;