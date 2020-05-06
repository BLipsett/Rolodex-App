import React from "react";
import './card-list.style.css';



function CardList(props) {
  return <div className="card-list">{props.children}</div>;

  
};

export default CardList;
