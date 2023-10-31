import "./navbar.css"

const Home = () => {
    return(
        <div>

        <div className="bgkaimg">

        <div className="container-fluid">
            <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner ">
    <div className="carousel-item active">
    <div class="d-flex justify-content-center">
      <img src="https://media.istockphoto.com/id/1092520698/photo/indian-farmer-at-onion-field.jpg?b=1&s=170667a&w=0&k=20&c=pGCpSylCt1jR82BrJxM-9aEwklSsVzK2MvXNfCic1EA=" className="d-block img-fluid" alt="..." />
    </div>
    </div>
    <div className="carousel-item">
    <div class="d-flex justify-content-center">
      <img src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/Agricultural-Subsidies2--1-.jpeg" className="d-block img-fluid" alt="..." />
    </div>
    </div>
    <div className="carousel-item">
    <div class="d-flex justify-content-center">
      <img src="https://www.chalgenius.com/wp-content/uploads/2020/05/mentormain.jpg" className="d-block img-fluid" alt="..." />
    </div>
    </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
        </div>
        </div>
        
        </div>

    )
}
export default Home;