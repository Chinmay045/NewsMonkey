import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar  className="navbar navbar-expand-lg  navbar-light bg-light">
                    <Container>
                        <Navbar.Brand href="#home">NewsMonkey</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default NavBar
