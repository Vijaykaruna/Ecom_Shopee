import logo from '../assets/EA-logos.png';
import wishlist from "../assets/heart-icon.png";
import user from "../assets/user-icon.png";
import cart from "../assets/cart-icon.png";
import search from "../assets/search.png";
import track from "../assets/tracking.png";
import offer from "../assets/offer-cgy.jpg";
import image1 from "../assets/BIG SALE.png";
import image2 from "../assets/JUST CLICK.png";
import image3 from "../assets/EASY TO BUY.png";
import '../index.css';

function HomePage() {

    const navication = [
        {img: track, title: 'Track Order', style:'img-fluid track-top-1'},
        {img: wishlist, title: 'Wishlist', style:'img-fluid'},
        {img: cart, title: 'Cart', style:'img-fluid'},
        {img: user, title: 'Profile', style:'img-fluid'},
      ];
    const menuItems = [
        {title: "SEEDS", herf: "seeds"},
        {title: "EQUIPMENTS", herf: "equipments"},
        {title: "CROP PROTECTION", herf: "cropProtection"},
        {title: "CROP NUTRITION", herf: "cropNutrition"},
        {title: "ANIMAL HUSBANDARY", herf: "animalHusbandary"},
    ]  
    
    return (
     <div> 
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
        <div className="container-fluid">
           <a href="#"><img src={logo} alt="logo" className="img-fluid" /></a>
           <div className="input-group w-25">
              <input type="text" className="form-control d-none d-lg-block" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
              <button className="btn btn-outline-success d-none d-lg-block" type="button" id="button-addon2" data-mdb-ripple-init data-mdb-ripple-color="dar"><img src={search} alt="" /></button>
          </div>
           <div className="d-none d-lg-block">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center my-3 gap-2">
               {navication.map(({title, img, style}) => (
                   <li className="nav-item">
                   <a className="nav-link" href="#"><img src={img} alt={title} className={style} /> {title}</a>
                  </li>
                ))}
              </ul>
           </div>
            <div className="d-block d-lg-none d-flex gap-3">
            <a className="nav-link" aria-current="page" href="#"><img src={wishlist} alt="wishlisit" className="img-fluid"/></a>
            <a className="nav-link" aria-current="page" href="#"><img src={cart} alt="Shopping cart" className="img-fluid" /></a>
            <a className="nav-link" aria-current="page" href="#"><img src={user} alt="user" className="img-fluid "/></a>
            </div>
        </div>
      </nav>
      <div className="navbar navbar-expand-lg bg-body-secondary d-lg-none">
         <div className="container-fluid">
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
               </button>
               <div className="input-group w-50">
                 <input type="text" className="form-control d-lg-none d-block" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                 <button className="btn btn-outline-success d-lg-none d-block" type="button" id="button-addon2" data-mdb-ripple-init data-mdb-ripple-color="dar"><img src={search} alt="" /></button>
               </div>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0 text-center d-lg-none d-block">
                    {menuItems.map(({title, herf}) => (
                        <li className="nav-item">
                        <a href={`# ${herf}`} className="nav-link">{title}</a>
                    </li>
                    ))}
                </ul>
               </div>
         </div>
      </div>
        <div id="carouselExampleCaptions" className="carousel slide carousel-dark mx-1 bg-dark-subtle" data-bs-ride="carousel-item">
          <div className="carousel-indicators">
           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
         <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={image1} className="img-fluid" alt="image"/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={image2} className="img-fluid" alt="image"/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={image3} className="img-fluid" alt="image"/>
          </div>
         </div>
       </div>

      <div className="container-fluid bg-body-secondary py-3">
         <div className="container border-bottom border-dark-subtle">
           <p className="fs-4 text-center">Categories</p>
         </div>
         <div className="container my-4 row row-cols-3 row-cols-lg-6 g-2 g-lg-4 mx-auto">

            <a href="#" className="text-decoration-none text-dark text-center col">
              <img src={offer} alt="offer" className="img-fluid border rounded-circle p-2 bg-light"/>
              <p className="h5">Offers</p>
            </a>
            <a href="#" className="text-decoration-none text-dark text-center col">
              <img src={offer} alt="offer" className="img-fluid border rounded-circle p-2 bg-light"/>
              <p className="h5">Offers</p>
            </a>
            <a href="#" className="text-decoration-none text-dark text-center col">
              <img src={offer} alt="offer" className="img-fluid border rounded-circle p-2 bg-light"/>
              <p className="h5">Offers</p>
            </a>
            <a href="#" className="text-decoration-none text-dark text-center col">
              <img src={offer} alt="offer" className="img-fluid border rounded-circle p-2 bg-light"/>
              <p className="h5">Offers</p>
            </a>
            <a href="#" className="text-decoration-none text-dark text-center col">
              <img src={offer} alt="offer" className="img-fluid border rounded-circle p-2 bg-light"/>
              <p className="h5">Offers</p>
            </a>
            <a href="#" className="text-decoration-none text-dark text-center col">
              <img src={offer} alt="offer" className="img-fluid border rounded-circle p-2 bg-light"/>
              <p className="h5">Offers</p>
            </a>
            <a href="#" className="text-decoration-none text-dark text-center col">
              <img src={offer} alt="offer" className="img-fluid border rounded-circle p-2 bg-light"/>
              <p className="h5">Offers</p>
            </a>
            <a href="#" className="text-decoration-none text-dark text-center col">
              <img src={offer} alt="offer" className="img-fluid border rounded-circle p-2 bg-light"/>
              <p className="h5">Offers</p>
            </a>

         </div>
      </div>
     
     </div>
    );
  }
  
  export default HomePage;