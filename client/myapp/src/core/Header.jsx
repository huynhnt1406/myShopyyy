import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div>
            <Navbar bg="primary" variant="dark" >
                <Container>
                    <Link style={{color:'white', fontSize:25}} to="/">myShopyyy</Link>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                    <NavDropdown title="My Account" id="collasible-nav-dropdown">
                        <Link style={{padding:5}} to="/additem">Add items</Link>
                        <Link style={{padding:5}} to="/mybasket">Basket</Link>
                    </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
