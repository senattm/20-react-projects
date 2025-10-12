
import "./App.css";
import Accordion from "./components/accordion";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";


function App() {
 return (
  <>
    <TreeView menus={menus} />
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

