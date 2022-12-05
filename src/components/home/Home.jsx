import React from "react";
import SHOP_DATA from "../../../shop-data";

export default function Home() {
  return (
    <div className="itemsContainer">
      {SHOP_DATA.map(({ id, title, items }) => (
        <div key={id}>
          <h1>{title}</h1>
          <div>
            {items.map(({ id, name, imageUrl, price }) => (
              <div key={id}>
                <img src={imageUrl} alt={name} />
                <h2>{name}</h2>
                <p>{price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
