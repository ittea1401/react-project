// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Main from "./components/Main/Main";

const App = ()=> {
  return (
    <BrowserRouter className="w-1/2">
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main/*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;