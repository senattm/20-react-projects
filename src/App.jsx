
import "./App.css";
import Accordion from "./components/accordion";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";

function App() {
 return (
  <>
    <LoadMoreData />
   {/* <RandomColor/> */} 
    </>
  );
}

/*  return (
    <ImageSlider
      url={"https://picsum.photos/v2/list"}
      limit={"8"}
    />
  );

  image slider açmak için
  */
export default App;
