import React from "react";
import styles from "./Home.module.css";
import { TasksInfo } from "../TaskInfo/TaskInfo";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="contaier mt-5">
        <div className="col-md-6 d-flex  justify-content-start align-self-center">
          <h2 className="title h2 mx-5">
            <strong>List of Tasks</strong>
          </h2>
          <Link to="add">
            <button className="btn  btn-pirmery ">Add </button>
          </Link>
        </div>
        <div className="row bg-main">
          {TasksInfo.map((ele) => {
            <div className="col-md-6 ">
              <h2>{ele.name}</h2>
              <span>{ele.description}</span>
              <button className="btn  btn-pirmery ">Edite</button>
              <button className="btn  btn-pirmery ">Delate</button>
            </div>;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
