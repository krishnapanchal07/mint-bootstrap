import { Link } from "react-router-dom";
import circle from "../assets/circle.png";
import "../style/banner.css";
import { IoStar } from "react-icons/io5";

const BlackBanner = () => {
  return (
    <>
      <div className="page-width mt-5">
        <div className="banner-section rounded-5">
          <div className="row">
            <div className="col-lg-8 text-light banner-description">
              <h3 className="banner-title">Trade In & Cash Out — Instantly.</h3>
              <p className="banner-text">
                Get up to 15% extra back when you trade your device for <br />
                something fresh
              </p>
              <div className="feature-row d-flex justify-content-between align-items-center my-4">
                <div className="feature-item d-flex align-items-center">
                  <div className="icon-box">
                    <img src="medal.svg" alt="medal" />
                  </div>
                  <span>Get Instant Quote</span>
                </div>

                <div className="feature-item d-flex align-items-center">
                  <div className="icon-box">
                    <img src="box.png" alt="box" />
                  </div>
                  <span>Free Pickup and Shipping</span>
                </div>

                <div className="feature-item d-flex align-items-center">
                  <div className="icon-box">
                    <img src="cash.png" alt="cash" />
                  </div>
                  <span>Get Cash or Store Credit</span>
                </div>
              </div>

              <div className="d-flex banner-button  align-items-center">
                <Link to="" className="btn btn-primary rounded-pill d-flex align-items-center me-2">
                  <img src={circle} alt="trade icon" className="svg-black me-2" style={{ height:"20px" , width: "20px"}} />
                  <span>Trade your device Now</span>
                </Link>
                <Link
                  to=""
                  className="btn btn-secondary text-decoration-none border border-white ms-2 p-2 text-light px-3 rounded-pill"
                >
                  See how it works
                </Link>
              </div>

              <div className="mt-5">
                <p className="bottom-text">
                  <span className="icon">
                    <IoStar className="icon" /> <IoStar className="icon" />{" "}
                    <IoStar className="icon" /> <IoStar className="icon" />{" "}
                    <IoStar className="icon" />
                  </span>
                  “Super easy trade-in — got my money fast.”
                  <br />
                  Trusted by over 20,000 smart upgraders
                </p>
              </div>
            </div>
            <div className="col-md-3 banner-image">
              <img src="bannerphone.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlackBanner;
