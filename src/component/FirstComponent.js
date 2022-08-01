import React, { useContext } from "react";
import { AgeContext } from "../context/AgeContext";
import { Link } from "react-router-dom";

const FirstComponent = () => {
  const ageContext = useContext(AgeContext);

  return (
    <div className="container">
      <h1 className="title"> First Component </h1>
      <h3> AGE [state] -- {ageContext.myAge} </h3>
      <h3> Name [object] -- {ageContext.dummyObject["name"]}</h3>
      <br />
      <button className="btn" onClick={() => ageContext.setAge()}>Hit ME !!!!!!</button>
      <button className="btn btn-blue">
        <Link to="/second_component">Change Route</Link>{" "}
      </button>
    </div>
  );
};

export default FirstComponent;
