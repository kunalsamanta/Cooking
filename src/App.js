import { useState } from "react";
import "./styles.css";

export default function App() {
  const [subitem, setSubItem] = useState({});
  const foodMenu = {
    dessert: { cheesecake: "4/5", "ice cream": "5/5" },
    drinks: { "virgin mojito": "4/5", "KFC Krusher": "5/5" },
    fastfood: { burger: "4/5", "French Fries": "5/5" }
  };
  const cuisines = Object.keys(foodMenu);

  const getSubMenu = (list) => {
    setSubItem(foodMenu[list]);
  };

  //console.log(subitem);
  return (
    <div className="App">
      <h1>👩‍🍳👨‍🍳What's Cooking ?</h1>
      <hr />
      <br />
      {cuisines.map((cuisine) => (
        <span key={cuisine} onClick={() => getSubMenu(cuisine)}>
          {cuisine}{" "}
        </span>
      ))}
      <div className="app-items">
        {Object.keys(subitem).map((key, i) => (
          <div className="app-item" key={i}>
            <p>{key}</p>
            <small>Rating : {subitem[key]}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
