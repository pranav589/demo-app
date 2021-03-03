import React, { useEffect, useState } from "react";
import Card from "./Card/index";
import "./styles.css";
import graphic from "../../assets/interface.png";
import axios from "axios";

function Listings() {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => setLists(res.data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="listings">
      <div className="listings__header">
        <h5>Welcome</h5>
      </div>
      <div className="listings__content">
        <div className="listings__content__left">
          <img src={graphic} alt="graphic" />
        </div>
        <div className="listings__content__right">
          <Card listsProp={lists} />
        </div>
      </div>
    </div>
  );
}

export default Listings;
