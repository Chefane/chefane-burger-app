import React, { useState } from "react";

import "./App.css";

function App() {
  const [displayLettuce, setLettuce] = useState(true);
  const [displayTomato, setTomato] = useState(true);
  const [displayCheese, setCheese] = useState(true);
  const [displayMeat, setMeat] = useState(true);

  return (
    <>
      <div className="burgerIngridients">
        <div className="topside"></div>

        {displayLettuce && <div className="lettuceSide"></div>}
        {displayTomato && <div className="tomatoSide"></div>}
        {displayCheese && <div className="cheeseSide"></div>}
        {displayMeat && <div className="meatSide"></div>}
    

        <div className="bottomSide"></div>
      </div>
      <div className="ingridientsBlock">

        <p>Lettuce</p>
        <div className="ingrBtns">
          <button onClick={() => setLettuce(true)} className="ingrBtn">Add Lettuce</button>
          <button onClick={() => setLettuce(false)} className="ingrBtn">Remove</button>
        </div>

        <p>Tomato</p>
        <div className="ingrBtns">
          <button onClick={() => setTomato(true)} className="ingrBtn">Add Tomato</button>
          <button  onClick={() => setTomato(false)}  className="ingrBtn">Remove</button>
        </div>

        <p>Cheese</p>
        <div className="ingrBtns">
          <button onClick={() => setCheese(true)} className="ingrBtn">Add Cheese</button>
          <button onClick={() => setCheese(false)} className="ingrBtn">Remove</button>
        </div>
        <p>Meat</p>
        <div className="ingrBtns">
          <button onClick={() => setMeat(true)} className="ingrBtn">Add Meat</button>
          <button onClick={() => setMeat(false)}className="ingrBtn">Remove</button>
        </div>
      </div>
    </>
  );
}

export default App;
