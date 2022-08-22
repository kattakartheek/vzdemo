import { faFontAwesome } from '@fortawesome/free-regular-svg-icons';
import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar'
import './style.css';
import './SearchBar.css';
import { Link } from "react-router-dom";
import SearchBar from './SearchBar'
import data from '../Data.json'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function Header2() {
    return (
        <>
            <Navbar className='text-center justify-content-center' style={{ height: '100px' }} bg="black" variant="dark">
                <div className='logo'>
                    <Link to="/"><img src="verizon_logo.jpg" alt=" " /></Link>
                </div>
                <div className='d-flex' style={{ paddingRight: "10px" }}>
                    <Link className='mouse' style={{ paddingRight: '30px' }} to="/shop">Shop  </Link>
                    <Link className='mouse' style={{ paddingRight: '30px' }} to="/why_verizon">Why Verizon  </Link>
                    <Link className='mouse' style={{ paddingRight: '30px' }} to="/support">Support</Link>
                </div>
                    <div className='search_icon'>
                        <Link to='search'><i className="fa fa-search" style={{ color: 'white' }}></i></Link>
                    </div>
                    <div className='search_bag'>
                        <Link to="/cart"><i className="fa-solid fa-bag-shopping" style={{ color: 'white' }}></i></Link>
                    </div>
            </Navbar>
        </>
    )
}

export default Header2