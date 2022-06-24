import React from "react";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Users from "./components/pages/Users";
import Navbar from "./components/layout/Navbar";

const Page404 = () => {
  return <h1>404</h1>;
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/users" element={<Users />}></Route>

        {/* When no route matches we use path="*" which means that this will be rendered */}
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
