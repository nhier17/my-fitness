import React from 'react';
import { Navbar, Footer, ScrollTop } from "./components";
import { Toaster } from "sonner";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="App">
      <Toaster richColors position="top-center"/>
      <Navbar />
      <ScrollTop />
      <Pages />
      <Footer />
   </div>
  );
}

export default App;
