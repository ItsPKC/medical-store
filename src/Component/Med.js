import React, { useContext } from "react";
import { Contex } from "../App";
import "./Med.css";

const Med = () => {
  const { med, setmed, cart, setcart } = useContext(Contex);
  const addToCart = (i) => {
    if (+med[i]["quantity"] === 0) {
      return;
    }

    const currentMedID = med[i]["id"];
    // console.log(cart[currentMedID] === undefined);

    if (cart[currentMedID] === undefined) {
      const temp = { ...med[i] };
      temp["quantity"] = 1;
      setcart({ ...cart, [currentMedID]: temp });
    } else {
      const temp = { ...cart[currentMedID] };
      temp["quantity"] = temp["quantity"] + 1;
      setcart({ ...cart, [currentMedID]: temp });
    }

    const temp2 = [...med]; // To create new ref other wise it will not update
    temp2[i]["quantity"] = +med[i]["quantity"] - 1;
    setmed(temp2);

    // console.log(cart);
  };

  return (
    <div className="med">
      {" "}
      <div>
        <div>Name</div>
        <div>Description</div>
        <div>Price</div>
        <div>Quantity</div>
      </div>
      {med.map((m, i) => {
        return (
          <div key={i.toString()}>
            <div>{m["name"]}</div>
            <div>{m["des"]}</div>
            <div>{m["price"]}</div>
            <div>{+m["quantity"]}</div>
            <div
              className="addToCart"
              onClick={() => addToCart(i)}
              style={{ opacity: +m["quantity"] === 0 ? 0.5 : 1 }}
            >
              Add
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Med;
