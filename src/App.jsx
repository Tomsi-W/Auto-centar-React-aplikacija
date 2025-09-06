import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default App;