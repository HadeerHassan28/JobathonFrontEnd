import React from "react";
import styles from "./Home.module.css";
import { TasksInfo } from "../TaskInfo/TaskInfo";
import { Link } from "react-router-dom";
const Home = () => {
  // console.log(TasksInfo);
  return (
    <>
      <h2 className="title mb-2">
        <strong>List of Tasks</strong>
      </h2>
      <div className="row my-4">
        {TasksInfo.map((ele) => (
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

            <button className="btn  btn-pirmery m-3">Edite</button>
            <button className="btn  btn-pirmery ">Delate</button>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
