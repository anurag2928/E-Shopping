import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom'


function App() {
  

  return (

    <>
      
      {/* <Header />
      <Main_content />
      <Products />
        <hr />
      <Keypoints /> */}
        
    
        {/* <div className="testi">
            <h2>Our Clients</h2>
      
            <div className="testi_container">
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                    
                    <ol className="carousel-indicators">
                      <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                      <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                      <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    </ol>
                  
                   
                    <div className="carousel-inner" role="listbox">
                      <div className="item active">
                        <div className="item_img"><img src="customer2.png" alt=" "/></div>
                          <div className="item_content"><h3>Swathi Hariharan</h3>
                            <p>
                              Im a lover of wow E-shopping. I m using this face wash from few months back seriously this is very amazing product. I recommend this for sensitive skin who really needs less fragrance, less foam, healthy and effective.
                            </p>
                        </div>
                      </div>
                      <div className="item">
                        <div className="item_img"><img src="customer1.png" alt="" /></div>
                        <div className="item_content"><h3>Sohail Khan</h3>
                          <p>
                              Again a superbb product. I have used many products of E-shopping,all are free from harmful chemicals.The packing of product was too good.The facewash tube is seal packed.Best facewash for all skin types and deep cleaning.👌👌😉
                          </p>
                      </div>
                      </div>
                      <div className="item">
                        <div className="item_img"><img src="customer3.png" alt=""/></div>
                        <div className="item_content"><h3>Neha Sharma</h3>
                          <p>
                              Got this amazing face wash after reading so many reviews on different platforms and I am honestly saying this is one of the best face wash.
                         It really helps to cleanse my skin and hydrates it. I am using it from more than a week and I can already feel a difference in my skin texture.
                         It has a very nice fragrance, the best part is it is Sulphate, Parabens, Silicones & Color free.
                          </p>
                      </div>
                  </div>
                    </div>
      
                   
                    <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
            </div>
        </div> */}
    
      {/* <Footer /> */}
      
    <Header/>
    <Outlet />
    <Footer />
    </ >
   )
    
}

export default App
