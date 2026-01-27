import { Link } from "react-router-dom"

function Navbar(){

return(

<nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="homepage">GamePlus+</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/home" class="nav-link">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/vehicle" class="nav-link">Browse</Link>
        </li>
        <li class="nav-item">
          <Link to="/about" class="nav-link">About</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
<form class="sbtn container-fluid justify-content-end ">
    <button class="btn btn-sm btn-outline-light m-2" type="button"><Link to="/signin" class="nav-link">Sign in</Link></button>
    <button class="btn btn-sm btn-danger" type="button"><Link to="/signup" class="nav-link">Sign up</Link></button>
    
  </form>

</nav>

)
}

export default Navbar