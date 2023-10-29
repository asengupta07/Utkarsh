import './navbar.css'



const Navbar = () =>{
    return(

<nav className="navbar navbar-expand-lg sticky-top border-bottom border-4 border-danger nav-background navbar-dark">
  <div className="container-fluid">
    
    <img className="loga" src="https://cdn.discordapp.com/attachments/903660417073680394/1168117852662943804/redcross.png?ex=65509986&is=653e2486&hm=4be0223da626325458a0f21187450397f474677568c96f0af4237e4953c0b464&" alt="" />
    <a className="navbar-brand " href="#">
        <div className='tra'>helth.</div></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto nas">
        <li className="nav-item me-4">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown me-4">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link" href="towards">Place</a>
        </li>
        <li className='nav-item me-4'>
            <a className="nav-link" href="#">About</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-warning" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    )
}

export default Navbar;