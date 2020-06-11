import React from 'react'
import GavelIcon from '@material-ui/icons/Gavel';
import {Link} from 'react-router-dom';

function Header() {
    return(
        <div className="totalheader">
            <header className="titleheader"><GavelIcon />Brutality Scanner</header>
            <header className="navheader">
                <Link to='/'><div class='routinglinks'>Home</div></Link>
                <Link to='/upload'><div class='routinglinks'>Upload</div></Link>
                <Link to='/stats'><div class='routinglinks'>Stats</div></Link>
                <Link to='/about'><div class='routinglinks'>About</div></Link>
            </header>
        </div>
    );
}

export default Header;