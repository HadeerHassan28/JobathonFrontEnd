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
        </div>
        <div>
          {TasksInfo.map((ele) => {
            <div className="card" style="width: 18rem; key={ele.id}">
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>

                <p className="card-text">{ele.description}</p>
                <Link to="" className="card-link">
                  Edite
                </Link>
                <Link to="" className="card-link">
                  Delate
                </Link>
              </div>
            </div>;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
