import React from "react";
import Form from 'react-bootstrap/Form'
import 'react-bootstrap/'
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import Container from "react-bootstrap/Container";
import Modal from 'react-bootstrap/Modal'

export default function AddProductModal (props) {
  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ brand, setBrand ] = useState("")
  const [ image, setImage ] = useState("")
  const [ price, setPrice ] = useState(0)
  return (
    <>
<Modal {...props} size="lg" centered>
  <Modal.Header>
    <Modal.Title>
      Adicionar produto
    </Modal.Title>
  </Modal.Header>
<Modal.Body>
  <Container className="mt-3 mb-3">
  <Form onSubmit={ async (event) => {
    event.preventDefault()
    const reqParams = {
    method: 'POST',
    headers: { Accept: '*/*',
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(
     {
       title: title,
       description: description,
       brand: brand,
       image: image,
       price: price
     }
   )
 }
 try {
   const response = await fetch('http://localhost:9000/products', reqParams)
   if (response.status == 201) {
     Swal.fire({
       icon: 'success',
       title: 'Product added successfully',
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
       showConfirmButton: true
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
   <Form.Control type="text" required onChange={(a) => {
     setTitle(a.target.value)
   }} ></Form.Control>
 </Form.Group>
 <Form.Group className="mb-3" required controlId="product">
   <Form.Label>Descrição</Form.Label>
   <Form.Control type="text" onChange={(b) => {
     setDescription(b.target.value)
   }} ></Form.Control>
 </Form.Group>
 <Form.Group className="mb-3" required controlId="product">
   <Form.Label>Marca</Form.Label>
   <Form.Control type="text" onChange={(c) => {
     setBrand(c.target.value)
   }} ></Form.Control>
 </Form.Group>
 <Form.Group className="mb-3" required controlId="product">
   <Form.Label>Imagem</Form.Label>
   <Form.Control type="text" onChange={(d) => {
     setImage(d.target.value)
   }} ></Form.Control>
 </Form.Group>
 <Form.Group className="mb-3" required controlId="product">
   <Form.Label>Preço</Form.Label>
   <Form.Control type="double" onChange={(e) => {
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
   <Button variant="secondary" onClick={props.onHide}>Fechar</Button>
 </Modal.Footer>
</Modal>
    </>
  )
}