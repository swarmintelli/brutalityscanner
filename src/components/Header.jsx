import React from 'react'
import GavelIcon from '@material-ui/icons/Gavel';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

function Header() {
    return(
        <div className="totalheader">
            <header className="titleheader">
                <GavelIcon />
                <div className='routinglinks'>Brutality Scanner</div>
            </header>
            <header className="navheader">
                <Link class="link opacity" to="/"><div className='routinglinks'>Home</div></Link>
                <Link class="link opacity" to="/upload"><div className='routinglinks'>Upload</div></Link>
                <Link class="link opacity" to="/stats"><div className='routinglinks'>Stats</div></Link>
                <Link class="link opacity" to="/about"><div className='routinglinks'>About</div></Link>
            </header>
        </div>
    );
}

export default Header;