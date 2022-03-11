import React from "react";
import './Topbar.css';
import {Link} from 'react-scroll';

function Topbar() {
    return (
        <div>
                <div className="topbar-container">                    
                        <div className="Container">
                            <div className="row container_nav">
                                <div className="col-7 Icone" id="Home">Sami Z</div>
                                <div className="col-5 row topbar-links">
                                    <div className="col-3 ">
                                        <Link className="link" to="Home" smooth={true} duration ={3000}>
                                            Home
                                        </Link>
                                    </div>
                                    <div className="col-3 ">
                                        <Link className="link" to="About" smooth={true} duration ={3000}>
                                            About
                                        </Link>
                                    </div>
                                    <div className="col-3 ">
                                        <Link className="link" to="Testemonial" smooth={true} duration ={3000}>
                                            My Work
                                        </Link>
                                    </div>
                                    <div className="col-3 ">
                                        <Link className="link" to="Contact" smooth={true} duration ={3000}>
                                            Contact
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                </div>
        </div>
    );
}

export default Topbar;
