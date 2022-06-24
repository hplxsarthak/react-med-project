import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Users from "./components/pages/Users";
import Navbar from "./components/layout/Navbar";

function App() {
  return(
    <div className="App">
      <h1>Hello World!</h1>
      <Navbar />
      <Home />
      <Login />
      <Users />
    </div>
  );
}

export default App;
