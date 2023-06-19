import React from "react";
import Header from "./Header";
import { setd, getd } from "./hweb3";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  function callget() {
    console.log("****");
    getd()
      .then((result) => {
        console.log("called 2");
        sety(result);
      })
      .catch((er) => {
        console.log("error");
      });
  }
  const [y, sety] = React.useState(0);
  const [data, setdata] = React.useState();
  function changedata(event) {
    console.log(event.target.value);
    setdata(event.target.value);
  }
  function register(event) {
    console.log("*****");
    let n = Number(data);
    setd(n);
    event.preventDefault();
  }
  return (
    <div>
      <header>
        <div>
          <h1>SimpleStorage-Web3</h1>
          <button>
            <Link to="/set">
              <strong>Add Data</strong>
            </Link>
          </button>
          <button>
            <Link to="/view">
              <strong>View Data</strong>
            </Link>
          </button>
          <button>
            <Link to="/">
              <strong>Home</strong>
            </Link>
          </button>
        </div>
      </header>
      <br></br>
      <Routes>
        <Route
          path="/set"
          element={
            <div>
              <label className="lab">Enter Data </label>
              <input onChange={changedata}></input>
              <button className="hy" onClick={register}>
                {" "}
                <strong>Sumbit</strong>
              </button>
            </div>
          }
        ></Route>
        <Route
          path="/view"
          element={
            <div>
              <h3>{y}</h3>
              <button className="hy" onClick={callget}>
                {" "}
                <strong>View Data</strong>
              </button>
            </div>
          }
        ></Route>
        <Route path="/"></Route>
      </Routes>
    </div>
  );
}
export default App;
