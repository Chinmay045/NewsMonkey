import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar className="navbar navbar-expand-lg  navbar-light bg-light">
                    <Container>
                        <Navbar.Brand href="#home">NewsMonkey</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <li className='nav-item'> <Nav.Link href="#link">About</Nav.Link> </li>
                                    <li className='nav-item'> <Nav.Link href="#link"> business </Nav.Link></li>
                                    <li className='nav-item'> <Nav.Link href="#link"> entertainment</Nav.Link> </li>
                                    <li className='nav-item'> <Nav.Link href="#link"> generalhealth </Nav.Link></li>
                                    <li className='nav-item'> <Nav.Link href="#link"> science</Nav.Link> </li>
                                    <li className='nav-item'>  <Nav.Link href="#link">sports</Nav.Link> </li>
                                    <li className='nav-item'> <Nav.Link href="#link"> technology </Nav.Link></li>
                               
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default NavBar
