import React from "react";
import Auth from "./components/auth/Auth";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Employees from "./components/employees/Employees";
import Rating from "./components/rating/Rating";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/rating" element={<Rating />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
