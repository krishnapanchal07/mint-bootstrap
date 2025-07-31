import "../style/header.css";
import Marquee from "./Marquee";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import circle from "../assets/circle.png";
import Vector from "../assets/Vector.svg";
import User_01 from "../assets/User_01.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
        <Marquee />
      <header className="main-header">
        <div className="page-width">
          <Navbar expand="lg" className="header-nav">
            {/* Logo */}
            <Navbar.Brand href="#">Black Mint</Navbar.Brand>

            {/* Search Bar */}
            <Form className="d-flex flex-fill px-3">
              <Form.Control
                type="search"
                placeholder="What are you looking for"
                aria-label="Search"
              />
            </Form>

            {/* Right Navigation */}
            <div className="nav-right">
              <Link to="" className="trade-btn">
                <img src={circle} alt="trade icon" />
                Trade your device
              </Link>
              <div className="help-section">
                Need Help?
                </div>
                <div className="Header_icons d-flex">
                <img src={Vector} alt="dropdown" />
              <img src={User_01} alt="User icon" className="user-icon" />
                </div>
              </div>
          </Navbar>
          <div>
             <div className="Header_categories">
                <ul className="list-unstyled d-flex justify-content-center mb-0">
                    <li>Good Deals</li>
                    <li>phones</li>
                    <li>Laptops</li>
                    <li>Tablets</li>
                    <li>Gaming consoles</li>
                    <li>More</li>
                </ul>
              </div>
          </div>
        </div>
      </header>

    </>
  );
}

export default Header;
