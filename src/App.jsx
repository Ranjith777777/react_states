import CircleLight, {
  TwoImageChange,
  ActorContent,
  ShapeChanger,
} from "./components/state";

import "./App.css";

const App = () => {
  return (
    <>
      <CircleLight />
      <TwoImageChange />
      <ActorContent />
      <ShapeChanger />
    </>
  );
};

export default App;
