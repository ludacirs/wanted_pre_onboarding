import GlobalNavigationBar from "./components/GlobalNaviagtionBar/GlobalNavigationBar";
import Banner from "./components/Banner/Banner";
import { SlideProvider } from "./contexts/SlideContext";

function App() {
  return (
    <div className="App">
      <GlobalNavigationBar />
      <SlideProvider>
        <Banner />
      </SlideProvider>
    </div>
  );
}

export default App;
