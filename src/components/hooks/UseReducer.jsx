import React from 'react'
import { useReducer } from 'react'
import { Button } from 'react-bootstrap'
import {Table} from 'react-bootstrap'
const data=
{count:0,
products:[{
  name:"apple",
  price:45
},{
  name:"orange",
  price:55
}
]}


function UseReducer() {
    const reducer=(state,action)=>{
        switch(action.type){
           case 'increment':return{...state,count:state.count+1 }
           case 'decrement':return{...state,count:state.count-1  }
        }

    }
    let [state,dispatch]=useReducer(reducer,data)
  return <>
        <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Use reducer</h1>
       </div>
        <Button variant='primary'  onClick={()=>(dispatch({type:'increment'}))}>incre</Button>
        <div>{state.count}</div>
        <Button onClick={()=>(dispatch({type:'decrement'}))}>decre</Button>
        <div>
          <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>brand</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody>
                {
                  state.products.map((e,i)=>{
                    return <tr key={i}>
                        <td>{e.name}</td>
                        <td>{e.price}</td>
                        <td>
                        <i class="fa-solid fa-pen-to-square"></i>
                        &nbsp;
                        <i class="fa-solid fa-trash"></i>
                        </td>
                    </tr>
                  })
                }
            </tbody>
          </Table>
        </div>
       </div>

  </>
}

export default UseReducer