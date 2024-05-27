import React, { useState } from "react";
import { Button, Container, Form, Modal, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";



const Styles = styled.div `
a, .navbar-brand, .navbar-nav .nav-link {
  color: #adb1b8;
  &:hover {
    color: white
  }
}
`


export default function NaviBar() {

   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);


    return(
  <>
    <Styles>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
      <Navbar.Brand>SavellaFish</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/users">User</Link></Nav.Link>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
        </Nav>
        <Nav>
            <Button variant="primary" className="mr-2" onClick={handleShow}>Long in</Button>
            <Button variant="primary" onClick={handleShow}> Sing out</Button>
        </Nav>

      </Navbar.Collapse>
      </Container>
      </Navbar>
      </Styles>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Войти</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="fromBasicEmail">
                <Form.Label>Адрес электроной почты</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">Мы не когда не передаем ваш адрес электроной почты</Form.Text>
            </Form.Group>
            <Form.Group controlId="fromBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Enter pasword"/>
            </Form.Group>
            <Form.Group controlId="fromBasicCheckbox">
                <Form.Control type="checkbox" Label="Remeber me" />
            </Form.Group>

          </Form>
        </Modal.Body>
      </Modal>
    </>
    )
  }

