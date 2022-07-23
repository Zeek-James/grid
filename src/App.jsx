import "./App.css";
import { AnimatedGrid } from "./components/AnimatedGrid";
import { GridArea } from "./components/GridArea";
// import { GridPlacement } from "./components/GridPlacement";
// import { JustifyAlignItem } from "./components/Justify&AlignItem";
// import { NestedGrid } from "./components/NestedGrid";
// import { MosaicLayout } from "./components/MosaicLayout";
import { ResponsiveGrid } from "./components/ResponsiveGrid";
// import { TwelveColGrid } from "./components/TwelveColGrid";

function App() {
  return (
    <div className="App__Container">
      {/* <GridPlacement /> */}
      {/* <NestedGrid /> */}
      {/* <JustifyAlignItem /> */}
      {/* <TwelveColGrid /> */}
      {/* <MosaicLayout /> */}
      {/* <GridArea /> */}
      {/* <ResponsiveGrid /> */}
      <AnimatedGrid />
    </div>
  );
}

export default App;
