import "../style/marquee.css";
import stars from "../assets/stars.png";

function Marquee() {
  const repeatCount = 8;
  const items = Array.from({ length: repeatCount });

  return (
    <header className="container-fluid p-0 text-dark">
        <div className="scroll-container d-flex align-items-center">
          <div className="scroll-wrapper">
            {/* First copy */}
            <div className="scroll-text">
              {items.map((_, index) => (
                <span key={`first-${index}`} className="d-inline-flex align-items-center me-5">
                  <img src={stars} alt="Vector" className="me-2" />
                  All devices like new
                </span>
              ))}
            </div>
            {/* Second copy */}
            <div className="scroll-text">
              {items.map((_, index) => (
                <span key={`second-${index}`} className="d-inline-flex align-items-center me-5">
                  <img src={stars} alt="Vector" className="me-2" />
                  All devices like new
                </span>
              ))}
            </div>
          </div>
        </div>
    </header>
  );
}

export default Marquee;
