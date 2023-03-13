import React, {useState} from "react";

const App = () =>{
  const [Counter, setCounter] = useState(0);
  const handleIncrement = () =>{
    setCounter(Counter + 1)
  };
  const handleDecrement = () =>{
    setCounter(Counter -1)
  };
  const handleRest = () =>{
    setCounter(0)
  };
  return(
    <div className="container">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter Application</h1>
          <div className="my-5">
           <p className="my-5"> {Counter} </p>
           <button className="btn btn-success mx-3" onClick={handleIncrement}> increment</button>
           <button className="btn btn-danger mx-3" onClick={handleDecrement} disabled={Counter === 0 ? true: false}>Decrement</button>
           <button className="btn btn-secondary mx-3" onClick={handleRest}disabled={Counter === 0 ? true: false}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default App;