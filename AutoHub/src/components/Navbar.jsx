import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getCurrentUser, logoutUser } from '../supabase/auth'
import logo from '../assets/Logo.png'
import '../css/Navbar.css'

function Navbar() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const currentUser = await getCurrentUser()
    setUser(currentUser)
  }

  const handleLogout = async () => {
    try {
      await logoutUser()
      setUser(null)
      navigate('/login', { replace: true })
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const closeMenu = () => setExpanded(false)

  return (
    <header className="autohub-navbar navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid navbar-container">
        <Link to="/" className="navbar-brand d-flex align-items-center" onClick={closeMenu}>
          <img src={logo} alt="AutoHub" width="40" height="40" className="navbar-logo me-2" />
          <span className="navbar-title">AutoHub</span>
        </Link>

        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-nav"
          aria-controls="navbar-nav"
          aria-expanded={expanded}
          aria-label="Toggle menu"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbar-nav">
          {user ? (
            <>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-links">
                <li className="nav-item">
                  <Link to="/" className="nav-link link-light" onClick={closeMenu}>Overview</Link>
                </li>
                <li className="nav-item">
                  <Link to="/inventory" className="nav-link link-light" onClick={closeMenu}>Inventory</Link>
                </li>
                <li className="nav-item">
                  <Link to="/customers" className="nav-link link-light" onClick={closeMenu}>Customers</Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link link-light" onClick={closeMenu}>Products</Link>
                </li>
              </ul>

              <div className="d-flex align-items-center gap-2 navbar-actions">
                <Link 
                  to="/add-vehicle" 
                  className="btn btn-link text-light p-2 d-flex align-items-center"
                  aria-label="Add vehicle"
                  onClick={closeMenu}
                >
                  <i className="bi bi-plus-circle" style={{ fontSize: '1.75rem' }} aria-hidden="true" />
                </Link>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-link text-light p-2 dropdown-toggle d-flex align-items-center"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    aria-label="Account menu"
                  >
                    <i className="bi bi-person-circle" style={{ fontSize: '1.75rem' }} aria-hidden="true" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><Link className="dropdown-item" to="/profile" onClick={closeMenu}><i className="bi bi-person me-2" />Profile</Link></li>
                    <li><Link className="dropdown-item" to="/settings" onClick={closeMenu}><i className="bi bi-gear me-2" />Settings</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><button className="dropdown-item text-danger" onClick={() => { closeMenu(); handleLogout(); }}><i className="bi bi-box-arrow-right me-2" />Sign out</button></li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <div className="d-flex align-items-center navbar-actions">
              <Link to="/login" className="btn btn-light text-primary fw-bold btn-login" onClick={closeMenu}>
                Sign in
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
