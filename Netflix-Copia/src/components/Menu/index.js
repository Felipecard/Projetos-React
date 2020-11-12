import React from 'react';
import { Link } from 'react-router-dom';
import logoTV from '../../assets/img/logoTV.png';
import './Menu.css';
import Button from '../Button';


function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className='logo'src={logoTV} alt="BigodeTV logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu