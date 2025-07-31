import { Link } from "react-router-dom";
import circle from "../assets/circle.png";
import "../style/banner.css";

const BlackBanner = () => {
  return (
    <>
      <div className="page-width mt-5">
        <div className="banner-section rounded-5">
          <div className="row">
            <div className="col-lg-8 text-light ">
              <h3>Trade In & Cash Out — Instantly.</h3>
              <p>
                Get up to 15% extra back when you trade your device for <br />
                something fresh
              </p>

              <div className="d-flex justify-content-between">
                <div>
                  <img src="medal.svg" />
                  <p>Get Instant Quote</p>
                </div>
                <div>
                  <img src="box.png" />
                  <p> Free Pickup and Shipping</p>
                </div>
                <div>
                  <img src="cash.png" />
                  <p>Get Cash or Store Credit</p>
                </div>
              </div>

              <div>
                <Link to="" className="trade-btn">
                  <img src={circle} alt="trade icon" />
                  Trade your device
                </Link>
                <Link to="">See how it works</Link>
              </div>
            </div>

            <div className="col-lg-4">
              <img src="bannerphone.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlackBanner;
