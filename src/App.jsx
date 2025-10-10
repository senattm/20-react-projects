import { useState } from "react";
import "./App.css";
import Accordion from "./components/accordion";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";

function App() {
 return (
    <ImageSlider
      url={"https://picsum.photos/v2/list"}
      limit={"8"}
    />
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
