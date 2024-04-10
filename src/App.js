import React from 'react';
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="App">
      <Toaster richColors position="top-center"/>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
   </div>
  );
}

export default App;
