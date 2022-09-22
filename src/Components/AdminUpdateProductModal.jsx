import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import 'react-bootstrap/'
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import Container from "react-bootstrap/Container";
import Modal from 'react-bootstrap/Modal'



export default function UpdateProductModal (props) {
  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ brand, setBrand ] = useState("")
  const [ image, setImage ] = useState("")
  const [ price, setPrice ] = useState("")
  const [ categories, setCategories ] = useState([])
  

    useEffect(() => {
   
      const fetchProduct = async () => {
        try {
          const req = await fetch (`http://localhost:8080/products/${props.id}`)
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
    }, [props.id])
  
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
    method: 'PUT',
    headers: { Accept: '*/*',
    'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: title,
      description: description,
      brand: brand,
      price: price,
      image: image,
      categories: categories
    })
 }
 try {
   const response = await fetch(`http://localhost:8080/products/${props.id}`, reqParams)
   console.log(response)
   if (response.status == 200) {
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
   <Form.Control value={title || ""} type="text" required onChange={(e) => {
     setTitle(e.target.value)
   }} ></Form.Control>
 </Form.Group>
 <Form.Group className="mb-3" required controlId="product">
   <Form.Label>Descrição</Form.Label>
   <Form.Control value={description || ""} type="text" onChange={(e) => {
     setDescription(e.target.value)
   }} ></Form.Control>
 </Form.Group>
 <Form.Group className="mb-3" required controlId="product">
   <Form.Label>Marca</Form.Label>
   <Form.Control value={brand || ""} type="text" onChange={(e) => {
     setBrand(e.target.value)
   }} ></Form.Control>
 </Form.Group>
 <Form.Group className="mb-3" required controlId="product">
   <Form.Label>Imagem</Form.Label>
   <Form.Control value={image || ""} type="text" onChange={(e) => {
     setImage(e.target.value)
   }} ></Form.Control>
 </Form.Group>
 <Form.Group className="mb-3" required controlId="product">
   <Form.Label>Preço</Form.Label>
   <Form.Control value={price || ""}  type="number" onChange={(e) => {
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