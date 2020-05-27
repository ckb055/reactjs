import React from 'react';
import './UserOutput.css';

// ES6 Arrow function
const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.userName}</p>
            <p>Some random text!</p>
            <p>Some more random text (2nd paragraph)</p>
        </div>
    );
};

export default userOutput;