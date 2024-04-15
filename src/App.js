import React from 'react';
import { Signup, Login,Navbar, Dashboard,Footer } from "./components";

import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Toaster richColors position="top-center"/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
   </div>
  );
}

export default App;
