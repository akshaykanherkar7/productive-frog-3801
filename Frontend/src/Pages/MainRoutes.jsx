import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage1 from "./Homepage1";


const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage1 />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
