import React from "react";
import Form from 'react-bootstrap/Form'
import 'react-bootstrap/'
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Admin () {
  const [ modal, setModal ] = useState(false)

  return (
    <>
    <Container className="mt-3">
    <h1>Admin</h1>
    <hr/>
   <Button variant="primary" className="gap-2">Adicionar produto</Button>
   <Button variant="primary" className="gap-2">Adicionar categoria</Button>
   </Container>
    </>
  )
}