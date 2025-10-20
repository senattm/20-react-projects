import "./App.css";
import Accordion from "./components/accordion";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";

function App() {
  return (
    <>
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>
      {/*<LightDarkMode /> */}
      {/*<QRCodeGenerator/> */}
      {/* <TreeView menus={menus} /> */}
      {/* <RandomColor/> */}
      {/*  <ImageSlider
      url={"https://picsum.photos/v2/list"}
      limit={"8"}
    />*/}
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
