import React, { useContext } from "react";
import Tile from "./Tile";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "./context/UserContext";
 import { DashboardData } from "./context/DashboardContext";
 function Dasboard() {
  let {dasboardData}=useContext(DashboardData)
  let {data,setData}= useContext(UserDataContext)
  let navigate=useNavigate()
  let handleDelete=(index)=>{
    let newArray=[...data]
    newArray.splice(index,1)
    setData(newArray)
  }
  
  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <a
            href="#"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-download fa-sm text-white-50"></i> Generate
            Report
          </a>
        </div>
        <div className="row">
          {dasboardData.map((e, i) => {
            return (
              <Tile
                color={e.color}
                icons={e.icons}
                title={e.title}
                value={e.value}
                isProgress={e.isProgress}
                key={i}
              />
            );
          })}
        </div>
        <div className="row">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
               </tr>
            </thead>
            <tbody>
              {
                data.map((e,i)=>{
                  return <tr key={i}>
                     <td>{i+1}</td>
                     <td>{e.name}</td>
                     <td>{e.age}</td>
                     <td>
                     <Button variant="primary" onClick={()=>{
                      navigate(`/Edit/${i}`)
                     }}>Edit</Button>
                       <Button variant='danger' onClick={()=>handleDelete(i)}  >Delete</Button>
                     </td>
                  </tr>
                })
              }
               
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Dasboard;
