import React from 'react';

// this is a functional component
const person = (props) => {
    // return jsx
    return <p>I'm  a person,
        and I am {Math.floor(Math.random() * 30)} years old!
        My name is {props.name} and my age is {props.age}!
        The props children is {props.children}</p>
};

export default person;