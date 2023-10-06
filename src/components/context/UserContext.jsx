import React from 'react'
import { useState } from 'react'
export const UserDataContext = React.createContext(null)

function UserContext({children}) {
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
  return <UserDataContext.Provider value={{data,setData}}>
    {children}
  </UserDataContext.Provider>
}

export default UserContext