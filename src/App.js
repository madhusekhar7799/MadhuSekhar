import Navbar from "./components/Navbar";
import "./App.css";
import { FaAngleLeft } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="container">
        <Navbar />


        <div className="hr">
        <hr />
        </div>
        
        <div className="heading">
          <div className="content">
            <h1>DISCOVER OUR PRODUCTS</h1>
            <h5>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
              debitis repudiandae? Eligendi esse, explicabo accusamus,
    .
            </h5>
          </div>
        </div>

        <div className="hr">
        <hr />
        </div>


        <div  className="three-sub">
        <div className="text">
          <h5>3425 ITEMS</h5>
          <h6><FaAngleLeft />HIDE FILTER</h6>
          </div>
          <div className="drop"><h6>RECOMMENDED<RiArrowDropDownLine /></h6></div>
        
        </div>


        <div className="hr">
        <hr />
        </div>

    <div className="both">
    <Sidebar />
    <Products/>
    </div>
<div className="last">
<Footer />
</div>
    
       

      </div>
    </>
  );
}

export default App;
