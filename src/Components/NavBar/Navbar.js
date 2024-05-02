
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";
// Importing Style for the CSS purpose
import Style from './Navbar.module.css';


function NavBar() {
    return (
        <>
            <nav >
                <Link className='link' to= '/'>
                    <h2 className= {Style.heading}>Contact List App</h2>
                </Link>
            </nav>

            <Outlet />
        </>
    )
}

export default NavBar;