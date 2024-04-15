import React, { useContext } from "react";
import "./AddMed.css";
import { Contex } from "../App";

const AddMed = () => {
  const { med, setmed } = useContext(Contex);

  const addNow = () => {
    if (
      document.getElementById("name").value.length === 0 ||
      document.getElementById("des").value.length === 0 ||
      document.getElementById("price").value.length === 0 ||
      document.getElementById("quantity").value.length === 0
    ) {
      alert("Add data properly !!!");
      return;
    }
    const temp = {
      name: document.getElementById("name").value,
      des: document.getElementById("des").value,
      price: document.getElementById("price").value,
      quantity: document.getElementById("quantity").value,
      id: Math.random(),
    };
    console.log(temp);

    // setmed(med);

    document.getElementById("name").value = "";
    document.getElementById("des").value = "";
    document.getElementById("price").value = 0;
    document.getElementById("quantity").value = 0;

    setmed([...med, temp]);
    console.log(med);
  };

  return (
    <div className="addMed">
      <div>
        <label htmlFor="name">Name : </label>
        <br></br>
        <input id="name" />
      </div>
      <div>
        <label htmlFor="des">Description : </label>
        <br></br>
        <input id="des" />
      </div>
      <div>
        <label htmlFor="price">Price : </label>
        <input type="number" id="price" />
      </div>
      <div>
        <label htmlFor="quantity">Quantity : </label>
        <input type="number" id="quantity" />
      </div>
      <div className="button" onClick={addNow}>
        Add Product
      </div>
    </div>
  );
};

export default AddMed;
