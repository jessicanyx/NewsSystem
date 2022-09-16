import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../page/login/Login";
import NewsSandBox from "../page/newsbox/NewsSandBox";

export default function IndexRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsSandBox />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
