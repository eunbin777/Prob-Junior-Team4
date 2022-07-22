import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TDhome from "../routes/TDhome";
import TDdetail from "../routes/TDdetail";
import MainPage from "../routes/MainPage";
import MapPage from "../routes/MapPage";
import LoginPage from "../routes/LoginPage";
import SignUpPage from "../routes/SignUpPage";
import MainPage2 from "../routes/MainPage2";


function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MainPage />}></Route>
        <Route path="/LoginPage" element={<LoginPage/>}></Route>
        <Route path="/SignUpPage" element={<SignUpPage/>}></Route>
        <Route path="/MainPage2" element={<MainPage2 />}></Route>
        <Route path="/MapPage" element={<MapPage />}></Route>
        <Route path="/TDhome" element={<TDhome />}></Route>
        <Route path="/TDdetail" element={<TDdetail />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter ;
