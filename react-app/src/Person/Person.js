import React from 'react';

import './Person.css';

// this is a functional component
const person = (props) => {
    // return jsx
    return <div className="Person"><p onClick={props.click}>I'm  a person,
        and I am {Math.floor(Math.random() * 30)} years old!
        My name is {props.name} and my age is {props.age}!
        The props children is {props.children}</p>
        <input type="text" onChange={props.changed}/>
        </div>
};

export default person;