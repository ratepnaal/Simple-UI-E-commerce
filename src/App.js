import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "../src/images/Katie.png";
import "../src/images/Star 1.png";
import "../src/images/wedding-photography 1.png";
import "../src/images/mountain-bike 1.png";
import Data from "./components/Data";
function App() {
  const card = Data.map((crd) => {
    return (
      <Card
        key={crd.id}
        {...crd}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <div className="cards-container">{card}</div>
    </>
  );
}

export default App;
