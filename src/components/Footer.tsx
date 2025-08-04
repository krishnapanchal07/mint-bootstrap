
import "bootstrap/dist/css/bootstrap.min.css";

const footerData = [
  {
    title: "About",
    links: ["About us", "Our impact", "Blog", "Hiring"],
  },
  {
    title: "Products",
    links: ["i phone", "MacBook", "Android", "Windows Laptops", "Audio", "Gamin Consoles"],
  },
  {
    title: "Services",
    links: ["1-Year Warranty", "Trade-In", "Students Offer", "Payment Methods"],
  },
  {
    title: "Support",
    links: ["Contact Us", "Help Center", "Shipping"],
  },
  {
    title: "Help",
    links: ["Contact Us", "Help Center", "Shipping"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-white border-top pt-4 pb-5">
      <div className="page-width">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
          {footerData.map((section, index) => (
            <div key={index} className="col">
              <h6 className="fw-semibold mb-3">{section.title}</h6>
              <ul className="list-unstyled">
                {section.links.map((link, i) => (
                  <li key={i} className="mb-2">
                    <a href="#" className="text-decoration-none text-dark">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
