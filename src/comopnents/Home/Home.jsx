import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { TasksInfo } from "../TaskInfo/TaskInfo";
import { Link } from "react-router-dom";
const Home = ({ editedTask }) => {
  const [items, setItems] = useState(TasksInfo);

  const deleteItem = (index) => {
    const updatedItems = [...items];
    if (index) {
      updatedItems.splice(index, 1);
      setItems(updatedItems);
    }

    // console.log(items); //done without render
  };

  useEffect((index) => {
    deleteItem(index);
  }, []);
  return (
    <>
      <h2 className="title mb-2">
        <strong>List of Tasks</strong>
      </h2>
      <Link to="add">
        <button className="btn  btn-pirmery m-3">Add</button>
      </Link>
      <div className="row my-4">
        {items.map((ele) => (
          <>
            <div className="col-md-6" key={ele.id}>
              <h4 className="h4 title">{ele.name}</h4>

              <p className="description">{ele.description}</p>
              {ele.stauts === "Finished" ? (
                <p className="finished">{ele.stauts}</p>
              ) : ele.stauts === "inProg" ? (
                <p className="inProg">{ele.stauts}</p>
              ) : (
                <p className="description">{ele.stauts}</p>
              )}

              <Link to="edite">
                <button className="btn  btn-pirmery m-3">Edite</button>
              </Link>

              <button
                className="btn  btn-pirmery "
                onClick={() => {
                  deleteItem(ele.id);
                }}
              >
                Delate
              </button>
              <hr />
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Home;
