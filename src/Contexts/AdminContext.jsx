import React, { useState, createContext } from "react"

export const AdminPageContext = createContext()

export const AdminPageContextProvider = props => {
  const [ products, setProducts ] = useState([])
  return (
    <AdminPageContext.Provider value={{products, setProducts}}>
      {props.children}
    </AdminPageContext.Provider>
  )
}
