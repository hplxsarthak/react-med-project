import React from "react";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Users from "./components/pages/Users";
import Navbar from "./components/layout/Navbar";
import Notfound from "./components/pages/Notfound";
import AddMed from "./components/Catalog/AddMed";
import EditMed from "./components/Catalog/EditMed";
import AddUser from "./components/Catalog/AddUser";
import EditUser from "./components/Catalog/EditUser";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/home/add" element={<AddMed />}></Route>
        <Route path="/home/edit/:id" element={<EditMed />}></Route>

        <Route path="/users/add" element={<AddUser />}></Route>
        <Route path="/users/edit/:id" element={<EditUser />}></Route>

        {/* When no route matches we use path="*" which means that this will be rendered */}
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
