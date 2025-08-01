import "../style/topbrands.css";
import useFetchProducts from "../utils/useFetchProducts";

const TopBrands = () => {
  const TopBrands = ["i Phone", "Android", "MacBook", "Laptops", "SmartWatch"];

  const { products, loading, error } = useFetchProducts();
  return (
    <>
      <div className="top-brands my-5">
        <h2 className="mb-2">Top brands, refurbished, with best deals</h2>
        <div className="row mt-4 align-items-end">
          <div className="col-md-7">
            <div>
              <ul className="d-flex align-content-center list-unstyled">
                {TopBrands.map((brand) => {
                  return (
                    <li
                      key={brand}
                      className="p-2 brand-list mx-2 rounded-pill px-3"
                    >
                      {brand}
                    </li>
                  );
                })}
              </ul>

              <div className="row mt-3 align-items-end gy-3">
                {!loading &&
                  !error &&
                  products.slice(0, 4).map((product) => (
                    <div key={product.id} className="col-md-6 text-left">
                      <div className="topbrands-product">
                        <span className="badge bg-dark">Best seller</span>
                        <img
                          src={
                            product.images && product.images.length > 0
                              ? product.images[0]
                              : "fallback-image-url.jpg"
                          }
                          alt={product.title}
                          className="product_img"
                        />
                        <p className="my-0">{product.title}</p>
                        <span>${product.price}</span>
                        <p className="">
                          total Discount : {product.discountPercentage}%
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="topBrandRightImg">
              <div className="img-group">
                <img src="/greenRec.png" />
                <img src="/greenRec.png" />
                </div>
                  <div className="img-group">
                <img src="/greenRec.png" />
                <img src="/greenRec.png" />
                </div>
                  <div className="img-group">
                <img src="/greenRec.png" />
                <img src="/greenRec.png" />
                </div>
                  <div className="img-group">
                <img src="/greenRec.png" />
                </div>
              
              <img src="selfie.png" alt="" className="img" />
              <div className="content">
                <p>Deals made just for<br/> you — too good to miss</p>
              </div>
              </div>
            </div>
            </div>
          </div>
    </>
  );
};

export default TopBrands;
