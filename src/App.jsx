  import Sidebar from "./components/sidebar"
  import Dasboard from "./components/Dasboard"
  import {BrowserRouter,Routes,Route} from"react-router-dom"
  import Create from "./components/Create"
  import Edit from "./components/Edit"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import NestedComponents from "./components/NestedComponents"
import Mobile from "./components/NestedComponents/mobile"
import Brand from "./components/NestedComponents/brand"
import Rate from "./components/NestedComponents/Rate"
 import UseRef from "./components/hooks/UseRef"
 import UseReducer from "./components/hooks/UseReducer"
   function App() {
    let [data,setData]= useState([
    {
      name:"Adarsh",
      age:"23"
    },
    {
      name:"Janu",
      age:"19"
    }

    ])
  return  <>
  <div id="wrapper">
    <BrowserRouter>
    <Sidebar/>
     <Routes>
      <Route path="/Dasboard" element={<Dasboard data={data} setData={setData}/>}/>
      <Route path="/Edit/:id" element={<Edit data={data} setData={setData}/>}/>
      <Route path="/Create" element={<Create  data={data} setData={setData}/>}/>
      
      <Route path="/NestedComponents" element={<NestedComponents/>}>
        <Route path="mobile" element={<Mobile/>}/>
        <Route path="brand" element={<Brand/>}/>
        <Route path="rate" element={<Rate/>}/>
      </Route>
      <Route path="/useref" element={<UseRef/>}/>
      <Route path="/usereducer" element={<UseReducer/>}/>
      <Route path="*"  element={<Navigate to='/Dasboard'/>}/>
      
     </Routes>
    </BrowserRouter>
  </div>
  </>
}

export default App
