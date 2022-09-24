import React from 'react'
import 'react-bootstrap/'
import { useState, useContext } from 'react'
import { ProductsContext } from '../../Contexts/ProductsContext'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Accordion from 'react-bootstrap/Accordion'
import { BiPencil } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import Swal from 'sweetalert2'
import AddProductModal from '../../Components/ProductModal'
import AddCategoryModal from '../../Components/CategoryModal'
import UpdateProductModal from '../../Components/AdminUpdateProductModal'

export default function Admin() {
  const { products, setProducts } = useContext(ProductsContext)
   const [productModal, setProductModal] = useState(false)
  const [categoryModal, setCategoryModal] = useState(false)
  const [updateProductModal, setUpdateProductModal] = useState(undefined)

  const handleDelete = async id => {
    const reqParams = {
      method: 'DELETE'
    }
    try {
      const req = await fetch(
        `http://52.53.150.144:8081/products/${id}`,
        reqParams
      )
      if (req.status == 204) {
        Swal.fire({
          icon: 'success',
          title: 'Product deleted successfully',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          setProducts(
            products.filter(product => {
              console.log(product)
              return product.id !== id
            })
          )
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'This action coult not be completed',
          footer: `Error code ${response.status}: ${response.message}`
        })
      }
    } catch (error) {
      console.error(error.message)
    }
  }
  return (
    <>
      <Container className="mt-3">
        <h1>Admin Page</h1>
        <hr />
        <Container className="d-flex justify-content-start gap-4">
          <Button
            onClick={() => {
              setProductModal(true)
            }}
            variant="primary"
          >
            Adicionar produto
          </Button>
          <Button
            onClick={() => {
              setCategoryModal(true)
            }}
            variant="primary"
          >
            Adicionar categoria
          </Button>
          <AddProductModal
            show={productModal}
            onHide={() => setProductModal(false)}
          />
          <AddCategoryModal
            show={categoryModal}
            onHide={() => setCategoryModal(false)}
          />
          <UpdateProductModal
            show={updateProductModal}
            id={updateProductModal}
            onHide={() => {
              setUpdateProductModal(undefined)
            }}
          />
        </Container>
        <hr />
        <Table
          className="text-center"
          responsive
          striped
          bordered
          hover
          variant="dark"
        >
          <thead>
            <tr>
              <th>id</th>
              <th>Título</th>
              <th>Descrição</th>
              <th>Marca</th>
              <th>Imagem</th>
              <th>Preço</th>
              <th>Categorias</th>
              <th>Editar</th>
              <th>Deletar</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map(element => {
                return (
                  <tr key={element.id}>
                    <td>{element.id}</td>
                    <td>{element.title}</td>
                    <td>{element.description}</td>
                    <td>{element.brand}</td>
                    <td>{element.image}</td>
                    <td>{element.price}</td>
                    <td>
                      <Accordion className="text-center">
                        <Accordion.Item key={element.id} eventKey="0">
                          <Accordion.Header></Accordion.Header>
                          {element.categories.map((category, index) => {
                            return (
                              <Accordion.Body key={index}>
                                {category.name}
                              </Accordion.Body>
                            )
                          })}
                        </Accordion.Item>
                      </Accordion>
                    </td>
                    <td>
                      <Button
                        onClick={() => {
                          setUpdateProductModal(element.id)
                        }}
                        variant="warning"
                      >
                        <BiPencil />
                      </Button>
                    </td>
                    <td>
                      <Button
                        onClick={() => {
                          handleDelete(element.id)
                        }}
                        variant="danger"
                      >
                        <AiOutlineDelete />
                      </Button>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </Table>
      </Container>
    </>
  )
}
