import './navbar.css'



const Navbar = () =>{
    return(

<nav className="navbar navbar-expand-lg sticky-top border-bottom border-4 border-danger nav-background navbar-dark">
  <div className="container-fluid">
    
    <img className="loga" src="https://cdn.discordapp.com/attachments/903660417073680394/1168117852662943804/redcross.png?ex=65509986&is=653e2486&hm=4be0223da626325458a0f21187450397f474677568c96f0af4237e4953c0b464&" alt="" />
    <a className="navbar-brand " href="cringe">
        <div className='tra'>helth.</div></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="vr ms-2"></div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ms-2 me-4">
          <a className="nav-link" aria-current="page" href="cringe">Marketplace</a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link" href="cringe">Subsidiaries</a>
        </li>
        
        <li className="nav-item me-4">
          <a className="nav-link" href="cringeowards">Mentorship</a>
        </li>
        <li className='nav-item me-4'>
            <a className="nav-link" href="cringe">About</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-warning" type="submit">Search</button>
      </form> */}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-4">
          <a className="nav-link fon" aria-current="page" href="cringe">
            <img className='resibag ktt' src="https://cdn.discordapp.com/attachments/903660417073680394/1168633846502264994/image.png?ex=65527a15&is=65400515&hm=083425350473a801489fe2b4355b04e7cf3e6a8e9fe31db851ae94eab0927afb&" alt="" />
            <span className='po'>Wishlist</span>
            </a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link fon" href="cringe">
            <img className="resi ktt" src="https://cdn.discordapp.com/attachments/903660417073680394/1168633846225453178/image1.png?ex=65527a15&is=65400515&hm=9b569dd2a8d66abee789eb8d960310743029fad878747080ed08505cd4afb8cf&" alt="" />
            <span className='po'>Cart</span>
            </a>
        </li>
        
        <li className="nav-item me-4">
          <a className="nav-link fon" href="cringeowards">
            <img className='resi ktt' src="https://cdn.discordapp.com/attachments/903660417073680394/1168634166720594032/nd2m6os0tmc9env4gc8jh3er0j.png?ex=65527a61&is=65400561&hm=ed6bb816e75bbdf4b39ca5c652874031a279cac1715f621e6f3a79eb942f73d9&" alt="" />
            <span className='po'>Login</span>
            </a>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;