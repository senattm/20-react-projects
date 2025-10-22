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
import TabTest from "./components/tabs/tab-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutocomplete from "./components/search-autocomplete-with-api";
import TicTacToe from "./components/tic-tac-toe";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import UseFetchHookTest from "./components/use-fetch/test";

function App() {
  return (
    <>
      <UseFetchHookTest/>
      {/*<FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>*/}
      {/*<TicTacToe/> */}
      {/*<SearchAutocomplete/>  */}
      {/* <GithubProfileFinder/>*/}
      {/* <ModalTest/> */}
      {/* <TabTest /> */}
      {/*<ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>*/}
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

export default App;
