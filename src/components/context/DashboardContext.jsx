import React from 'react'
export const DashboardData=React.createContext(null)

function DashboardContext({children}) {
    let dasboardData = [
        {
          color: "primary",
          icons: "fa-calender",
          title: "Earnings (Monthly)",
          value: "$40,000",
        },
        {
          color: "success",
          icons: "fa-dollar-sign",
          title: "Earnings (Annual)",
          value: "$80,000",
        },
        {
          isProgress: true,
          color: "info",
          icons: "fa-clipboard-list",
          title: "Tasks",
          value: "50",
        },
        {
          color: "warning",
          icons: "fa-comments",
          title: "Pending Request",
          value: "18",
        },
      ];
  return  <DashboardData.Provider value={{dasboardData}}>
    {children}
  </DashboardData.Provider>
}

export default DashboardContext