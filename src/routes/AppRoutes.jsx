import React from "react";
import { Route, Router, Routes } from "react-router";
// import Hero from "../pages/Hero";
import App from "../App";
// import Home from "../component/Home";
// import { BrowserRouter } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  );
};

export default AppRoutes;
