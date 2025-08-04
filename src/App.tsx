import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CategorySlider from "./components/CategorySlider";
import Recommend from "./components/Recommend";
import BlackBanner from "./components/BlackBanner";
import TopBrands from "./components/TopBrands";
import PhotoBanner from "./components/Photobanner";
import Accrodion from "./components/Accordion";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <CategorySlider />
      <Recommend />
      <BlackBanner/>
      <TopBrands/>
      <PhotoBanner/>
      <Accrodion/>
      <Footer />
      {/* <ChoiceSlider /> */}
    </>
  );
}

export default App;
