import React from "react";
import "./App.css";
import Header from "./Header";
import DittoCards from "./DittoCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="app">
      <h1></h1>

      <Header />
      <DittoCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
