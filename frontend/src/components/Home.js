import "./navbar.css"

const Home = () => {
    return(
        <div>

        <div className="bgkaimg">

        <div className="container-fluid">
            <div id="carouselExample" className="carousel slide pt-5" data-bs-ride="carousel">
  <div className="carousel-inner ">
    <div className="carousel-item active" data-bs-interval="5000">
    <div class="d-flex">
      <img src="https://media.istockphoto.com/id/1092520698/photo/indian-farmer-at-onion-field.jpg?b=1&s=170667a&w=0&k=20&c=pGCpSylCt1jR82BrJxM-9aEwklSsVzK2MvXNfCic1EA=" className="d-block img-fluid" alt="..." />
      <div className="align-self-center flex-fill text-center">
        
        <div className="leadtext">Utkarsh</div>
        <div className="captext">Our Ecom Eco-Friendly Product Store operates on the principles of maintaining the quality that customers expect in each product and promoting environmental care. Check out our product list and start shopping sustainably.</div>
        
        </div>
    </div>
    </div>
    <div className="carousel-item" data-bs-interval="5000">
    <div class="d-flex">
      <img src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/Agricultural-Subsidies2--1-.jpeg" className="d-block img-fluid" alt="..." />
      
    </div>
    </div>
    <div className="carousel-item" data-bs-interval="5000">
    <div class="d-flex">
      <img src="https://www.chalgenius.com/wp-content/uploads/2020/05/mentormain.jpg" className="d-block img-fluid" alt="..." />
    </div>
    </div>
  
  <button className="carousel-control-prev d-lg-none" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next d-lg-none" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
        </div>
        </div>
          <div className="bgkaimg2">
  <div class="container text-center padtop">
  <div class="row gx-1 gx-lg-5">
    <div class="col">
      <div className="img1 imagrezi"></div>
    </div>
    <div class="col">
    <div className="img2 imagrezi"></div>
    </div>
    <div class="col">
    <div className="img3 imagrezi"></div>
    </div>
    <div class="col">
    <div className="img4 imagrezi"></div>
    </div>
  </div>
</div>
          </div>
          <div className="bgkaimg2">
            <div className="leadtext d-flex justify-content-center">Our Mentors</div>
          <div class="container text-center padtop">
  <div class="row gx-1 gx-lg-5">
    <div class="col">
      <div className="imagrezi men1"></div>
    </div>
    <div class="col">
    <div className="imagrezi men2"></div>
    </div>
    <div class="col">
    <div className="imagrezi men3"></div>
    </div>
    </div>
    </div>
          </div>
          <div className="bgkaimg2 pt-5 pb-5">
          
          <div className="aboimg">
          <div className="leadtext d-flex justify-content-center ">About Us</div>
          <div className="captext2 d-flex justify-content-center">
            <div className="w-60 text-center">The basis for the concept of sustainability in the world of consumerism is buying items produced efficiently, using minimal amounts of raw materials, water and energy. We here at utkarsh follow this philosophy. The selection of recycled and ethically sourced products available at our Ecom Eco-Friendly Product Store is extremely varied and of the highest quality.</div>
            </div>
            </div>
          </div>
        </div>

    )
}
export default Home;