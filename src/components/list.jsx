import React from "react";

const list = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div className="person" key={id}>
            <img src={image} alt="" className="list-image" />
            <div>
              <h1 className="list-name">{name}</h1>
              <h3 className="list-age">{age} years</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default list;
