import React from 'react';
import { Link } from 'react-router-dom'
import { Nav, Navbar } from "react-bootstrap";
import Logo from '../assets/logo.png'
import { useContext } from "react";
import { userContext } from "../context/userCtx";
import { useHistory } from 'react-router-dom'

const Header = () => {

    const {user, setUser} = useContext(userContext);
    const history = useHistory()

    const logout = () => {
        setUser(null)
        history.push("/login");
    }
    
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="" variant="dark" className="nav-bar fixed-top">
                <Navbar.Brand href="#sneakers">
                    
                    <Link to="/sneakers">
                        <img className="logo" src={Logo} alt='logo' />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto text-right">
                       
                        <Link to="/mylot"><Nav.Link href="#MyLot" className="text-white">My Lot</Nav.Link></Link>
                        <Link to="/gallery"><Nav.Link href="#Gallery" className="text-white">Gallery</Nav.Link></Link>
                        <Link to="/aboutus"><Nav.Link href="#AboutUs" className="text-white">About Us</Nav.Link></Link>
                        {user ? <Link onClick={logout}><Nav.Link href="#signup">Log Out</Nav.Link></Link> : <Link to="/signup"><Nav.Link href="#signup">Sign Up</Nav.Link></Link>}

                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        </>
    );
};

export default Header;