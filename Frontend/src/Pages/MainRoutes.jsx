import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Homepage1 from "./Homepage1";
import Client from "./Client";
import Project from "./Project";
import Invoice from "./Invoice";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage1 />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/client" element={<Client />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/invoice" element={<Invoice />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
