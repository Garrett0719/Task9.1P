import React from 'react';
import '../css/Navbar.css'
import { Button } from 'semantic-ui-react'

function NavBar(props) {
    return(
        <nav className="NavbarBody">
            <div className="Navbartitle">
            <h1 className="NavbarLogo">ICrowdTask</h1>
            </div>
            <div className="NavbarItem">
                <ul>
                    <li><a id="How" href="#How it works">How it works</a></li>
                    <li><a id="Requesters" href="#Requesters">Requesters</a></li>
                    <li><a id="Workers" href="#Workers">Workers</a></li>
                    <li><a id="Pricing" href="#Pricing">Pricing</a></li>
                    <li><a id="About" href="#About">About</a></li>
                </ul>
            </div>
            <div className='Button'>
            <Button>Sign in</Button>
            </div>
        </nav>
    );
}
export default NavBar