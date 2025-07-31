import useFetchProducts from "../utils/useFetchProducts";
import "../style/category.css";
import Slider from "react-slick";

function CategorySlider() {
  const { products, loading, error } = useFetchProducts();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="Category-Section">
      <div className="Product-slider pt-5">
        <h2>Most wanted products</h2>
        <p>Get exactly what you need</p>

        {/* Loading State */}
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
                  <div className="product-details">
                    <img
                      src={
                        product.images && product.images.length > 0
                          ? product.images[0]
                          : "fallback-image-url.jpg"
                      }
                      alt={product.title}
                      className="product_img"
                    />
                    <p> {product.title} </p>
                  </div>
                </li>
              ))}
            </Slider>
          </ul>
        )}
      </div>
    </div>
  );
}

export default CategorySlider;
