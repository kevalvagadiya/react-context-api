import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AgeContext } from "../context/AgeContext";
const SecondComponent = () => {
  const ageContext = useContext(AgeContext);

  const [name, setName] = useState("");
  const [bookName, setBookName] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (name !== "") {
      ageContext.setDummyObject({
        ...ageContext.dummyObject,
        name: name,
      });
      setName("");
    }
  };

  const handleBookChange = (e) => {
    e.preventDefault();
    if (bookName !== "") {
      ageContext.setDummyObject({
        ...ageContext.dummyObject,
        readedBook: {
          ...ageContext.dummyObject.readedBook,
          english: {
            bookName,
          },
        },
      });
      setBookName("");
    }
  };

  return (
    <div className="container">
      <h1 className="title"> Second Component </h1>

      <h3> AGE(State) -- {ageContext.myAge} </h3>
      <h3> Name -- {ageContext.dummyObject["name"]}</h3>

      <button className="btn" onClick={() => ageContext.setAge()}>
        Hit ME!!!!!!
      </button>

      <h3>Enter a Name Which you want to change</h3>

      <form>
        <input
          className="input-ele"
          placeholder="enter name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="btn-submit"
          type="submit"
          onClick={(e) => handleSubmitForm(e)}
        />
      </form>

      <button className="btn btn-blue">
        <Link to="/">Back TO Home Page</Link>
      </button>
    </div>
  );
};

export default SecondComponent;
