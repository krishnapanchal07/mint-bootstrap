const PhotoBanner = () => {
  return (
    <>
      <div className="photobanner">
        <div className="page-width">
          <div className="row photosection photos">
            <div className="col-md-6">
              <div className="position-relative">
                <img
                  src="/leftbannerphoto.png"
                  alt=""
                  className="img-fluid photos"
                />
                <div className="lilu-banner-photu">
                  <div className="img-group">
                    <img src="/greenRec.png" />
                  </div>

                  <div className="img-group">
                    <img src="/greenRec.png" />
                    <img src="/greenRec.png" />
                  </div>
                </div>
                <p className="position-absolute ">Products for photographers</p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img src="/rightbannerphoto.png" alt="" className="img-fluid photos" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoBanner;
