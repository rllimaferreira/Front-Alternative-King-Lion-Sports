import React from "react";
import 'react-bootstrap/'
import { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import AddProductModal from "../../Components/ProductModal";
import AddCategoryModal from "../../Components/CategoryModal";
import Table from 'react-bootstrap/Table'
import { AdminPageContext } from "../../Contexts/AdminContext";


export default function Admin (props) {
  const { products, setProducts } = useContext(AdminPageContext)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const request = await fetch('http://localhost:9000/products')
        const response = await request.json()
        setProducts(response)
      } catch (error) {
        console.error(error.message)
      }      
    }
    fetchProducts()
  }, [])
  const [ productModal, setProductModal ] = useState(false)
  const [ categoryModal, setCategoryModal ] = useState(false)

  return (
    <>   
    <Container className="mt-3">
    <h1>Admin Page</h1>
    <hr/>
    <Container className="d-flex justify-content-start gap-4">
      <Button onClick={() => {setProductModal(true)}} variant="primary">Adicionar produto</Button>
      <Button onClick={() => {setCategoryModal(true)}} variant="primary">Adicionar categoria</Button>
    <AddProductModal show={productModal} onHide={() => setProductModal(false)}/>
    <AddCategoryModal show={categoryModal} onHide={() => setCategoryModal(false)}/>
    </Container>
   <hr/>
    <Table responsive striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>id</th>
          <th>Título</th>
          <th>Descrição</th>
          <th>Marca</th>
          <th>Imagem</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {products && products.map((element) => {
          return (
          <tr key={element.id}>
          <td>{element.id}</td>
          <td>{element.title}</td>
          <td>{element.description}</td>
          <td>{element.brand}</td>
          <td>{element.image}</td>
          <td>{element.price}</td>
        </tr>
          )
        })}
      </tbody>
    </Table>
   </Container>
    </>
  )
}