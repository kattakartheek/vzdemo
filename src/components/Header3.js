import { faFontAwesome } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import './style.css'
// import { Link } from 'react-router-dom'

function Header3() {
    return (
        <>
            <Navbar className='text-center justify-content-center' style={{height:'30px'}} bg="dark" variant="dark">
                <p>Have a phone you love ? Get upto $500 when you <a className='text-decoration-none text-light' href="#">bring your phone</a></p>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Navbar>
        </>
    )
}

export default Header3