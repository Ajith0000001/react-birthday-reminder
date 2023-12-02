import React, { useState } from "react";
import List from "./list";
import data from "./data";
const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <div className="title">{people.length} birthdays</div>
        <List people={people} />

        <div>
          <button
            onClick={() => {
              setPeople([]);
            }}
          >
            clear all
          </button>
        </div>
      </section>
    </main>
  );
};

export default App;
