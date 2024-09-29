import { Route, Routes } from "react-router-dom";
import "./App.css";
import Meditation from "./components/Meditation/Meditation";
import Momentum from "./components/Momentum/Momentum";
import { driveData, walkCityData, walkNatureData } from "./data";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Momentum />} path="/" />
        <Route element={<Meditation data={driveData} />} path="/drive" />
        <Route element={<Meditation data={walkCityData} />} path="/walkCity" />
        <Route element={<Meditation data={walkNatureData} />} path="/walkNature" />
      </Routes>
    </div>
  );
}

export default App;
