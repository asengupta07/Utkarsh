import './navbar.css'



const Navbar = () =>{
    return(

<nav className="navbar navbar-expand-lg sticky-top border-bottom border-4 border-black nav-background ">
  <div className="container-fluid">
  <a className="" href="/">
    <img className="loga" src="https://cdn.discordapp.com/attachments/903660417073680394/1168960385295061102/U__2_-removebg-preview.png?ex=6553aa32&is=65413532&hm=39aafc920ef5dab8712141e394567fd0b66cbd38be8629c8a844d3b9918271df&" alt="" />
    </a>
    <a className="navbar-brand " href="/">
        <div className='tra'>Utkarsh</div></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="vr ms-2 d-none d-lg-block"></div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ms-2 me-4">
          <a className="nav-link" aria-current="page" href="cringe">Marketplace</a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link" href="cringe">Subsidies</a>
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
            <img className='resibag ktt' src="https://cdn.discordapp.com/attachments/903660417073680394/1168980192765689938/pngwing.com.png?ex=6553bca4&is=654147a4&hm=1f0b9c6149076e4fa35f949ce5f241a506c20f03c0c99817349c86b3b9efb852&" alt="" />
            <span className='po'>Wishlist</span>
            </a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link fon" href="cringe">
            <img className="resi ktt" src="https://cdn.discordapp.com/attachments/903660417073680394/1168980192467886271/pngwing.com1.png?ex=6553bca4&is=654147a4&hm=e990d79a4ce4f01c1233051a9ae108d6217b88cc1e089eb3a42c822f2c2bbf39&" alt="" />
            <span className='po'>Cart</span>
            </a>
        </li>
        
        <li className="nav-item me-4">
          <a className="nav-link fon" href="cringeowards">
            <img className='resi ktt' src="https://cdn.discordapp.com/attachments/903660417073680394/1168980192212037733/image2.png?ex=6553bca4&is=654147a4&hm=a4af7335ec801520b386c41cb373278e121427ab243db23b8b4f965d4c3d5150&" alt="" />
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