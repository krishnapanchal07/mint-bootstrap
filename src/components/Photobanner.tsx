const PhotoBanner = () => {
  return (
    <>
      <div className="photobanner">
        <div className="page-width">
          <div className="row photosection photos text-light ">
            <div className="col-md-6">
              <div className="position-relative">
                <img
                  src="/leftbannerphoto.png"
                  alt=""
                  className="img-fluid photos rounded-4"
                />
                <p className="position-absolute ">Products for photographers</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="position-relative">
                <img
                  src="/rightbannerphoto.png"
                  alt=""
                  className="img-fluid photos rounded-4"
                />
                <p className="position-absolute">Budget friendly Products</p>
              </div>
            </div>
          </div>

          {/* trande section */}

          <div className="trade-section my-5">
            <div>
              <h2 className="text-center text-dark trade-title">Trade-in</h2>

              <p className="typegraphy my-2">
                Get up tp <b>35,000EGP</b> when you trade your old devices with
                us
              </p>

              <div className="d-flex align-items-center justify-content-evenly my-3">
                <div className="d-flex align-items-center">
                  <div className="trade-icon">
                    <img src="medal.svg" alt="medal" />
                  </div>
                  <span>Highest offer out off 20+ Refurbishers</span>
                </div>

                <div className="d-flex align-items-center">
                  <div className="trade-icon">
                    <img src="/truck.png" className="object-fit-contain" alt="truck" />
                  </div>
                  <span>Free shipping</span>
                </div>

                <div className="d-flex align-items-center">
                  <div className="trade-icon">
                    <img src="cash.png" alt="cash" />
                  </div>
                  <span>Fast cash payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoBanner;
