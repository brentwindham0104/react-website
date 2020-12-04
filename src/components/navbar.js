import React, {useState} from 'react'

function Navbar() {
    return (
        
            <nav className="nav-links" >
                
                    <h3 >Nav</h3>
                        <ul>
                            <li>
                                Home
                            </li>
                            <li>
                                Resume
                            </li>
                            <li>
                                Projects
                            </li>
                        </ul>


                    {/* <Link to="/" className="navbar-logo">
                        <h1>HOME</h1> 
                    </Link> */}
                
            </nav>
        
    )
}
export default Navbar