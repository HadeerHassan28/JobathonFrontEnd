import React, { useState } from "react";
import styles from "./EditeTask.module.css";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { TasksInfo } from "../TaskInfo/TaskInfo";

const EditeTask = () => {
  const [setError, setsetError] = useState(false);
  const [items, setItems] = useState(TasksInfo);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      status: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(6, "Name must be at least 6 characters")
        .required("Name is Required!"),
      description: Yup.string()
        .min(6, "Description must be at least 6 characters")
        .required("Description is Required!"),
      status: Yup.string().min(3, "The status").required("Status is Required!"),
    }),
    onSubmit: async () => {
      //search by id and compare it with the id in the array to find the element using find method of the array and get the id using useParams
      toast.success("Successfully Edited!", { duration: "2000" });
      navigate("/");
    },
  });
  return (
    <>
      <div className="contanier mt-2">
        <div className="row justify-content-center align-items-start bg-weather p-2">
          <div className="col-md-6">
            <h2 className="h2 text-danger">Edite Task</h2>
            <form className="form" onSubmit={formik.handleSubmit}>
              {/* name */}
              <div>
                <label htmlFor="name" className="form-label mt-4">
                  Name:
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="form-control mb-3"
                ></input>
                {formik.touched.name && formik.errors.name && (
                  <div className="alert alert-danger">{formik.errors.name}</div>
                )}
              </div>
              {/* description */}
              <div>
                <label htmlFor="description" className="form-label">
                  Description:
                </label>
                <input
                  type="description"
                  name="description"
                  id="description"
                  placeholder="Enter your description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                  className="form-control mb-3"
                ></input>
                {formik.touched.description && formik.errors.description && (
                  <div className="alert alert-danger">
                    {formik.errors.description}
                  </div>
                )}
                {setError && (
                  <div className="alert alert-danger">{setError}</div>
                )}
              </div>
              {/* status */}
              <div>
                <label htmlFor="status " className="form-label">
                  Description:
                </label>
                <input
                  type="status "
                  name="status "
                  id="status "
                  placeholder="Enter your status "
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.status}
                  className="form-control mb-3"
                ></input>
                {formik.touched.status && formik.errors.status && (
                  <div className="alert alert-danger">
                    {formik.errors.status}
                  </div>
                )}
                {setError && (
                  <div className="alert alert-danger">{setError}</div>
                )}
                <button
                  className="btn btn-pirmery w-100 p-2"
                  type="submit"
                  onSubmit={formik.handleSubmit}
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Edite
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditeTask;
