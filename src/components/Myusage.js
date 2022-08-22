import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './SearchBar.css'

function Myusage() {
    return (
        <div classNameName='container'>
            <h1>Quick updates</h1>
<div className='card'>
            <div className='row'>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5>talk & text</h5>
                            <h3 className="card-title">You've used 0 minutes and 0 messages.</h3>
                            {/* <p style={{Color:"green"}}>With supporting text below as a natural lead-in to additional content.</p> */}

                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5>data</h5>
                            <h3 className="card-title">You have unlimited data.</h3>
                            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}

                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5>data</h5>
                            <h3 className="card-title">Get the most out of your Verizon plan with add-ons.</h3>
                            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}

                        </div>
                    </div>
                </div>
            </div>

        </div>


</div>
    )
}

export default Myusage