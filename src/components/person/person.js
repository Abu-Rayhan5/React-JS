import React from "react";
// import "./style.css";
const Person = (props) =>{
    const {name, country, children} = props;
    return(
        <div className="container" style={styleSheet}>
            <h1>I am {name} </h1>
            <p>I am from {country} </p>
            <p> {children} </p>
        </div>
    )
}

const styleSheet = {
    margin: '10px',
    padding: '10px',
    backgroundColor: 'green',
    color: 'white',
}

export default Person;