import './Nav.css'
import SearchBar from "../SearchBar/SearchBar";
import { Link, useNavigate } from 'react-router-dom';

const Nav = ({ onSearch, setAccess}) => {
    
const navigate = useNavigate();

    const handleLogUot = () =>{
        setAccess(false);
        navigate('/');
    }
    
    return (
    
        <nav className='nav'>

            <button className='boton'>
                <Link className='btntext' to='/about'> About </Link>
            </button>

            <button className='boton'>
                <Link className='btntext' to='/home'> Home </Link>
            </button>

            <SearchBar onSearch={onSearch} />

            <button className='boton'>
                <Link className='btntext' to='/favoritos'> Favoritos </Link>
            </button>

            <button className='boton btntext logout' onClick={handleLogUot}> Log Out </button>
        </nav>
    )
}
export default Nav;