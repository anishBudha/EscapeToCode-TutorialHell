import React, { useState } from "react";
// { useState } is a react hook
const ContactCard = (props) => {
  //   console.log(props);
  // data are passed from props
  const [showAge, setShowAge] = useState(false);
  //   showAge a state hook or a variable, to hold our state
  //   setShowAge a function, to change the state
  return (
    <div className="contact-card">
      <img src={props.avatarUrl} alt="profile"></img>
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={() => setShowAge(!showAge)}>Show Age</button>
        {/* {showAge ? <p>Age: 21</p> : null} long form if else  */}
        {showAge && <p>Age: {props.age}</p>}
        {/* if show is true display p tag else nothing, hence a short form */}
        {/* ? is a turnary operator */}
      </div>
    </div>
  );
};

export default ContactCard;
