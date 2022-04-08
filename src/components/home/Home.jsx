import Cards from "../card/Cards";
import Slide from "../slider/Slides.jsx";
import slidesData from "../../services/slideData.js";
import "../home/home.css";

function Home() {
  return (
    <div className="home ui container">
      <Slide slides={slidesData()} />
      <Cards />
    </div>
  );
}
export default Home;
