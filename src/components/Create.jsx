import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Formik } from 'formik'
import { useContext } from "react";
import { UserDataContext } from "./context/UserContext";
import * as Yup from "yup";
function Create() {
  let navigate = useNavigate();
  let {data,setData}=useContext(UserDataContext)
  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .required("*required")
      .min(4,"name should be 4 character"),
    age: Yup.string().required('required').max(2,"enter valid age"),
  });
  
  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">User create</h1>
        </div>
        <div className="row">
          <Formik
            initialValues={{
              name: "",
              age: "",
            }}
            validationSchema={UserSchema}
            onSubmit={(values) => {
              let newArray = [...data];
            newArray.push(values);
            setData(newArray);
            navigate("/Dasboard");
            }}
          >
            {({ errors, touched, handleBlur, handleSubmit ,handleChange}) =>
            (
              <form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name='name' placeholder="Enter Name" onBlur={handleBlur} onChange={handleChange}/>
                  {errors.name&&touched.name ?<div style={{color:"red"}}>{errors.name}</div>:null}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="number" name="age" placeholder="Enter Age" onBlur={handleBlur} onChange={handleChange}/>
                  {errors.age&&touched.age ?<div style={{color:"red"}}>{errors.age}</div>:null}

                </Form.Group>
                <Button variant="primary" type="submit">
                  submit
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Create;
