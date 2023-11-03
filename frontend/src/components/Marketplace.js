import "./navbar.css"
import "./aboutview.css"
import { Link } from 'react-router-dom'

const getData = () => {
    fetch('http://127.0.0.1:8000/marketplace/get_products', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
    }


const Marketplace = () => {
    
    const databa = getData();
    return (
        <div className="container-fluid">
            <div className="abo1 ">
                <div className="leadtext text-center pt-3">Marketplace</div>
            <div class="container text-center pt-5 pb-5">
  <div class="row">
    <div class="col">
    <div class="card">
  <img src="https://cdn.discordapp.com/attachments/1169346758636224614/1169349058062733332/IMG-20231101-WA0076.jpg?ex=6555142c&is=65429f2c&hm=cd00e1d8471b4d2c2eaf69d75888447ee3c9997914b139ba996c303ca867f9e8&" class="card-img-top" alt="" />
  <div class="card-body">
    <h5 class="card-title">Teracotta Bag</h5>
    <p class="card-text">₹ 49.00</p>
    <Link to="/" class="button-87">Buy Now</Link>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card">
  <img src="https://cdn.discordapp.com/attachments/1169346758636224614/1169347125780434994/IMG-20231101-WA0074.jpg?ex=65551260&is=65429d60&hm=c5979a4a9844ca3f4724407d08b4234cb5c660daec3e2193ac66fddbf0c03af8&" class="card-img-top" alt="" />
  <div class="card-body">
    <h5 class="card-title">Blue Vase Set</h5>
    <p class="card-text">₹ 199.00</p>
    <Link to="/" class="button-87">Buy Now</Link>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card">
  <img src="https://cdn.discordapp.com/attachments/1169346758636224614/1169349058792542389/IMG-20231102-WA0006.jpg?ex=6555142d&is=65429f2d&hm=9e522ae041fb04a1b628607273414b580483ddd22ecab13f823002c56cb4a3f9&" class="card-img-top" alt="" />
  <div class="card-body">
    <h5 class="card-title">Saree</h5>
    <p class="card-text">₹ 169.00</p>
    <Link to="/" class="button-87">Buy Now</Link>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card">
  <img src="https://cdn.discordapp.com/attachments/1169346758636224614/1169349059144855672/IMG-20231102-WA0003.jpg?ex=6555142d&is=65429f2d&hm=611cfbf808ad241a73ba08538a6c11b4a5240d9170c3941e9ba3138b97887c46&" class="card-img-top" alt="" />
  <div class="card-body">
    <h5 class="card-title">Bedsheet</h5>
    <p class="card-text">₹ 129.00</p>
    <Link to="/" class="button-87">Buy Now</Link>
  </div>
</div>
        </div>
    </div>
    
  </div>
</div>
</div>
          



    );
};

export default Marketplace;
