import React, { useState, useEffect, createContext } from 'react'

export const ProductsContext = createContext()

export const ProductsContextProvider = props => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const request = await fetch('http://localhost:8080/products')
        const response = await request.json()
        setProducts(response)
      } catch (error) {
        console.error(error.message)
      }
    }
    fetchProducts()
  }, [])

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {props.children}
    </ProductsContext.Provider>
  )
}
