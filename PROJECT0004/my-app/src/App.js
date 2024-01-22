import React, { useState, useEffect } from "react"; // useEffect lets use run code or functions at certain times in react life cycle
import ContactCard from "./ContactCard";
import "./App.css";

const App = () => {
  // const contacts = [
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     email: "ram@gmail.com",
  //     name: "Ram Thapa",
  //     age: 24,
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     email: "lagan@gmail.com",
  //     name: "Lagan Thapa",
  //     age: 44,
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     email: "top@gmail.com",
  //     name: "Top Thapa",
  //     age: 24,
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     email: "jamal@gmail.com",
  //     name: "Jamal Thapa",
  //     age: 40,
  //   },
  // ];

  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
      });
  }, []); // useEffect 2nd parameter: dependency array, an empty array will let it run only one time when the component loads

  return (
    <div>
      {results.map((result, index) => {
        return (
          <ContactCard
            key={index}
            // a key helps react to find changes to a specific object or component and only rerender that component, hence more resource efficient
            avatarUrl={result.picture.large} // these are props
            name={result.name.first}
            email={result.email}
            age={result.dob.age}
            //or {24} since {inside everything is js code}
          />
        );
      })}
      {/* <ContactCard
        avatarUrl="https://via.placeholder.com/150" // these are props
        name="Ram Thapa"
        email="ram@gmail.com"
        age="24"
        //or {24} since {inside everything is js code}
      />
      <ContactCard
        avatarUrl="https://via.placeholder.com/150" // these are props
        name="Lagan Thapa"
        email="lagan@gmail.com"
        age="44"
        //or {44} since {inside everything is js code}
      />
      <ContactCard
        avatarUrl="https://via.placeholder.com/150" // these are props
        name="Top Thapa"
        email="top@gmail.com"
        age="24"
        //or {24} since {inside everything is js code}
      /> */}
    </div>
  );
};

export default App;
