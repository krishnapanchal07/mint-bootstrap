import useFetchProducts from "../utils/useFetchProducts";
import "../style/recommend.css";
import Slider from "react-slick";
import { IoStar, IoStarOutline } from "react-icons/io5";

function Recommend() {
  const { products, loading, error } = useFetchProducts();
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200, // large desktops
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992, // tablets
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768, // small tablets
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576, // phones
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


  console.log("recommend", products);
  return (
    <div className="recommend-section">
      <div className="recommend-slider">
        <h3>Recommended for you</h3>
        <div>
          {loading && (
            <div className="pt-3">
              <p>Loading products...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="pt-3">
              <p style={{ color: "red" }}>{error}</p>
            </div>
          )}

          {!loading && !error && (
            <ul className="pt-3">
              <Slider {...settings}>
                {products.map((product) => (
                  <li key={product.id} className="">
                    <div className="recommend-details position-relative">
                      <p className="position-absolute top-0 bg-dark text-white rounded-2 px-2">
                        {product.brand}
                      </p>
                      <img
                        src={
                          product.images && product.images.length > 0
                            ? product.images[0]
                            : "fallback-image-url.jpg"
                        }
                        alt={product.title}
                        className="product_img"
                      />
                      <div className="recommended-description text-start">
                        <p className="m-0">{product.title} </p>
                        <span>${product.price}</span>
                        <p className="m-0">
                          total Discount : {product.discountPercentage}%
                        </p>
                        <div className="rating-stars ">
                          <IoStar className="icon" />
                          <IoStar className="icon" />
                          <IoStar className="icon" />
                          <IoStar className="icon" />
                          <IoStarOutline className="icon" />
                        </div>
                        <span>Rating : {product.rating}/5</span>
                      </div>
                    </div>
                  </li>
                ))}
              </Slider>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Recommend;
