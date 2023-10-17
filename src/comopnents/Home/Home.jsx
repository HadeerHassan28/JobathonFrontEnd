import React from "react";
import styles from "./Home.module.css";
import { TasksInfo } from "../TaskInfo/TaskInfo";
import { Link } from "react-router-dom";
const Home = () => {
  // console.log(TasksInfo);
  return (
    <>
      <h2 className="title mb-2">List of Tasks </h2>
      <div className="row bg-main">
        {TasksInfo.map((ele) => {
          <div className="col-md-6">
            <h4 className="h4 title">{ele.name}</h4>
            {/* {console.log(ele.name)} */}
            <p className="description">{ele.description}</p>
            <button className="btn  btn-pirmery ">Edite</button>
            <button className="btn  btn-pirmery ">Delate</button>
          </div>;
        })}
      </div>
    </>
  );
};

export default Home;
