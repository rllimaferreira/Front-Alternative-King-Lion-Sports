import React from "react";
import Form from 'react-bootstrap/Form'
import 'react-bootstrap/'
import { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import Container from "react-bootstrap/Container";
import Modal from 'react-bootstrap/Modal'
import { ProductsContext } from "../Contexts/ProductsContext";

export default function AddProductModal (props) {
  const { products, setProducts } = useContext(ProductsContext)
  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ brand, setBrand ] = useState("")
  const [ image, setImage ] = useState("")
  const [ price, setPrice ] = useState(0)
  const [ categories, setCategories ] = useState([]) 
  const [ selectedCategories, setSelectedCategories ] = useState([])
  const handleCategories = (category) => {
    if (category.checked == true) {
      setSelectedCategories([...selectedCategories, {"id": category.id}])
    }
    else {
      setSelectedCategories(selectedCategories.filter(element => {
        return category.id !== element.id
      }))
    }
  }
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const req = await fetch(`http://52.53.150.144:8081/categories`)
        const res = await req.json()
        setCategories(res)
      } catch (error) {
        console.error(error)
      }
    }
    fetchCategories()
  }, [])
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
       price: price,
       categories: selectedCategories
     }
   )
 }
 try {
   const request = await fetch('http://52.53.150.144:8081/products', reqParams)
   const response = await request.json()
   if (request.status == 201) {
     Swal.fire({
       icon: 'success',
       title: 'Product added successfully',
       showConfirmButton: false,
       timer: 1500
     })
     .then(() => {
      props.onHide()
      setProducts([...products, response])
    })
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
 <Form.Group className="mb-3" controlId="productTitle">
   <Form.Label>Título</Form.Label>
   <Form.Control type="text" required onChange={(a) => {
     setTitle(a.target.value)
   }} ></Form.Control>
 </Form.Group>
 <Form.Group className="mb-3" required controlId="productDesc">
   <Form.Label>Descrição</Form.Label>
   <Form.Control type="text" onChange={(b) => {
     setDescription(b.target.value)
   }} ></Form.Control>
 </Form.Group>
 <Form.Group className="mb-3" required controlId="productBrand">
   <Form.Label>Marca</Form.Label>
   <Form.Control type="text" onChange={(c) => {
     setBrand(c.target.value)
   }} ></Form.Control>
 </Form.Group>
 <Form.Group className="mb-3" required controlId="productImage">
   <Form.Label>Imagem</Form.Label>
   <Form.Control type="text" onChange={(d) => {
     setImage(d.target.value)
   }} ></Form.Control>
 </Form.Group>
 <Form.Group className="mb-3" required controlId="productPrice">
   <Form.Label>Preço</Form.Label>
   <Form.Control type="number" onChange={(e) => {
     setPrice(e.target.value)
   }} ></Form.Control>
 </Form.Group>  
 <Form.Group className="mb-3" required controlId="productCategories">
   <Form.Label>Categorias</Form.Label>
   {/* <Form.Control type="text" onChange={(e) => {
     setCategories(e.target.value)
   }} ></Form.Control> */}
   {categories && categories.map((category, index) => {
    return (
       ['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-1">
      <Form.Check 
        inline
        label={category.name}
        name="categoriesCheckbox"
        type={type}
        id={category.id}
        onChange={(input) => {
          handleCategories(input.target)
        }}
      />
    </div>
   ))
    )
   
   })}
   
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