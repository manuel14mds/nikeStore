import NavDropdown from "react-bootstrap/NavDropdown"
import { NavLink } from "react-router-dom"

import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import CartWidget from "../CartWidget/CartWidget"
import FavWidget from "../FavWidget/FavWidget"

const NavBar = () => {
    const style_brand = {fontFamily: "sans-serif", fontWeight: "bold", textDecoration:"none"}
    const style_category = {fontFamily: "sans-serif", textDecoration:"none"}
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <NavLink to='/' activeclassname='currentCategory' className='text-white' style={style_brand}>NIKE</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link as={NavLink} to='/itemListCont/men' activeclassname='currentCategory' className='text-white' style={style_category}>Men</Nav.Link>
                        <Nav.Link as={NavLink} to='/itemListCont/women' activeclassname='currentCategory' className='text-white' style={style_category}>Women</Nav.Link>    
                        <Nav.Link as={NavLink} to='/itemListCont/children' activeclassname='currentCategory' className='text-white' style={style_category}>Children</Nav.Link>    
                        
                        <NavDropdown title="Categories" id="collasible-nav-dropdown">

                            <NavDropdown.Item as={NavLink} to='/itemListCont/shoes'>Shoes</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/itemListCont/clothing'>Clothing</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/itemListCont/accessory'>Accessories</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to='/itemListCont/all'>All</NavDropdown.Item>
                            
                        </NavDropdown>
                    </Nav>
                    <Nav>
                            <Nav.Link as={NavLink} to='/fav'  activeclassname='currentCategory' className='text-white'><FavWidget/></Nav.Link>
                            <Nav.Link as={NavLink} to='/cart' activeclassname='currentCategory' className='text-white'><CartWidget/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
