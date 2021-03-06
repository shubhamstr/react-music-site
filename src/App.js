/* eslint-disable no-unused-vars */
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";
import Dashboard from "./Dashboard";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route exact path="/register" element={<Register isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route exact path="/login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route exact path="/dashboard" element={<Dashboard isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route exact path="/logout" element={<Logout isAuth={isAuth} setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
