 import React ,{useEffect,useState}from 'react'
 import { useParams } from 'react-router-dom'
 import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"
import { useNavigate } from "react-router-dom";


  
 function Edit({data,setData}) {
  const params=useParams()
  let [name,setName]=useState("")
  let [age,setAge]=useState("")
  let navigate=useNavigate()
   let getData=(index)=>{
    setName(data[index].name)
    setAge(data[index].age)
  }
   useEffect(()=>{
    if(Number(params.id)<data.length){
      getData(Number(params.id))
    }
    else{
      navigate('/Dasboard')
    }
  },[])
  let handleSubmit=()=>{
    let newArray=[...data]
    newArray.splice(Number(params.id),1,{
     name,
     age
   })
   setData(newArray)
   navigate("/Dasboard")
 }
   return     <>
   <div className="container-fluid">
     <div className="d-sm-flex align-items-center justify-content-between mb-4">
       <h1 className="h3 mb-0 text-gray-800">User create</h1>
     </div>
     <div className="row">
       <form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Name</Form.Label>
           <Form.Control type="text" value={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
           <Form.Label>Age</Form.Label>
           <Form.Control type="number" value={age} placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)}/>
         </Form.Group>
         <Button variant="primary" onClick={handleSubmit}>submit</Button>
       </form>
     </div>
   </div>
 </>
 }
 
 export default Edit