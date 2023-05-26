import React from "react";
import "./Procedure.css";
const Procedure = ({img,heading,details}) => {
  return (
    <div className="image-data">
      <div className="image">
        <img src={img} alt="not available" />
        
      </div>
      <div className="info">
        <h5>{heading}</h5>
        <p>{details}</p>
      </div>
    </div>
  );
};


export default Procedure;
