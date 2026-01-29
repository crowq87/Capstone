import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';

function Navbar() {
    return (
        <header className="p-3 mb-3 border-bottom bg-primary"> 
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"> 
                     <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none"> 
                        <img src={logo} alt="AutoHub Logo" width="40" height="40" className="me-2"/> 
                        <span className="fs-4 fw-bold text-light">AutoHub</span>
                    </Link>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"> 
                        <li><Link to="/" className="nav-link px-2 link-light">Overview</Link></li> 
                        <li><Link to="/inventory" className="nav-link px-2 link-light">Inventory</Link></li> 
                        <li><Link to="/customers" className="nav-link px-2 link-light">Customers</Link></li> 
                        <li><Link to="/products" className="nav-link px-2 link-light">Products</Link></li> 
                    </ul> 
                    
                
                    <Link to="/login" className="btn btn-primary me-3">
                        Login
                    </Link>
                    
                    <div className="dropdown text-end"> 
                        <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> 
                            <img src="./src/assets/react.svg" alt="mdo" width="32" height="32" className="rounded-circle"/> 
                        </a> 
                        <ul className="dropdown-menu text-small"> 
                            <li><Link className="dropdown-item" to="/new-project">New project...</Link></li> 
                            <li><Link className="dropdown-item" to="/settings">Settings</Link></li> 
                            <li><Link className="dropdown-item" to="/profile">Profile</Link></li> 
                            <li><hr className="dropdown-divider"/></li> 
                            <li><Link className="dropdown-item" to="/logout">Sign out</Link></li> 
                        </ul> 
                    </div> 
                </div> 
            </div> 
        </header>
    )
}

export default Navbar;