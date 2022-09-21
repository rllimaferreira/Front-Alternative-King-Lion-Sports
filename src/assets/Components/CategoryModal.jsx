import React from "react";
import Form from 'react-bootstrap/Form'
import 'react-bootstrap/'
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import Container from "react-bootstrap/Container";
import Modal from 'react-bootstrap/Modal'

export default function AddCategoryModal (props) {
  const [ name, setName ] = useState("")
  return (
    <>
<Modal {...props} size="lg" centered>
  <Modal.Header>
    <Modal.Title>
      Adicionar categoria
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
       name: name
     }
   )
 }
 try {
   const response = await fetch('http://localhost:9000/categories', reqParams)
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
   <Form.Label>Nome</Form.Label>
   <Form.Control type="text" required onChange={(a) => {
     setName(a.target.value)     
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