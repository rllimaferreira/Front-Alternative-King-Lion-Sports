import React, { useContext, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import 'react-bootstrap/'
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import Container from "react-bootstrap/Container";
import Modal from 'react-bootstrap/Modal'
import Products from "./Products";


export default function UpdateProductModal (props) {
  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ brand, setBrand ] = useState("")
  const [ image, setImage ] = useState("")
  const [ price, setPrice ] = useState(null)
  const [ categories, setCategories ] = useState([])
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const req = await fetch (`http://localhost:9000/products/${props.id}`)
        const res = await req.json()
        setTitle(res.title)
        setDescription(res.description)
        setBrand(res.brand)
        setPrice(res.price)
        setImage(res.image)
        setCategories(res.categories)
      } catch (error) {
        console.error(error)
      }
    }
    fetchProduct()
  }, [])
  return (
    <>
    <Modal {...props} size="lg" centered>
  <Modal.Header>
    <Modal.Title>
      Atualizar produto
    </Modal.Title>
  </Modal.Header>
<Modal.Body>
  <Container className="mt-3 mb-3">
  <Form onSubmit={ async (event) => {
    event.preventDefault()
    const reqParams = {
    method: 'UPDATE'
 }
 try {
   const request = await fetch('http://localhost:9000/categories', reqParams)
   const response = await request.json()
   console.log(request)
   if (request.ok) {
     Swal.fire({
       icon: 'success',
       title: 'Product updated successfully',
       showConfirmButton: false,
       timer: 1500
     })
     .then(() => props.onHide())
   }
   else {
     Swal.fire({
       icon: 'error',
       title: 'Oops...',
       text: 'This action could not be done',
       footer: `Error code ${response.status}: ${response.message}`,
       timer: 1500
     })
     .then(() => props.onHide())
   }
 } catch (error) {
   Swal.fire({
     icon: 'error',
     title: 'Oops...',
     text: 'Something went wrong',
     footer: `${error.message}`
   })
 }
 
}}>
 <Form.Group className="mb-3" controlId="product">
   <Form.Label>Título</Form.Label>
   <Form.Control type="text" required onChange={(e) => {
     setTitle(e.target.value)
   }} ></Form.Control>
 </Form.Group>
 <Form.Group className="mb-3" required controlId="product">
   <Form.Label>Descrição</Form.Label>
   <Form.Control type="text" onChange={(e) => {
     setDescription(e.target.value)
   }} ></Form.Control>
 </Form.Group>
 <Form.Group className="mb-3" required controlId="product">
   <Form.Label>Marca</Form.Label>
   <Form.Control type="text" onChange={(e) => {
     setBrand(e.target.value)
   }} ></Form.Control>
 </Form.Group>
 <Form.Group className="mb-3" required controlId="product">
   <Form.Label>Imagem</Form.Label>
   <Form.Control type="text" onChange={(e) => {
     setImage(e.target.value)
   }} ></Form.Control>
 </Form.Group>
 <Form.Group className="mb-3" required controlId="product">
   <Form.Label>Preço</Form.Label>
   <Form.Control type="number" onChange={(e) => {
     setPrice(e.target.value)
   }} ></Form.Control>
 </Form.Group>    

 <Button type="submit" variant="success">
   Enviar
 </Button>
</Form>
 </Container>
</Modal.Body>
 <Modal.Footer>
   <Button variant="secondary" onClick={props.onHide()}>Fechar</Button>
 </Modal.Footer>
</Modal>
    </>
   
  )
}