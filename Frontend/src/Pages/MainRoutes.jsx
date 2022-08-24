import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage1/>}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
