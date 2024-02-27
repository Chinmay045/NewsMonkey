import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
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
                                <li className='nav-item'><Link className="nav-link" to="/">Home</Link></li>
                                <li className='nav-item'> <Link className="nav-link" to="/business"> Business </Link></li>
                                <li className='nav-item'> <Link className="nav-link" to="/entertainment"> Entertainment</Link> </li>
                                <li className='nav-item'> <Link className="nav-link" to="/health"> Health </Link></li>
                                <li className='nav-item'> <Link className="nav-link" to="/science"> Science</Link> </li>
                                <li className='nav-item'>  <Link className="nav-link" to="/sports">Sports</Link> </li>
                                <li className='nav-item'> <Link className="nav-link" to="/technology"> Technology </Link></li>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default NavBar
