import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Meditation from "./components/Meditation/Meditation";
import Momentum from "./components/Momentum/Momentum";
import { driveData, walkCityData, walkNatureData } from "./data";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Momentum />} path="/" />
        <Route path="/meditation" element={<Navigate to="/" replace />} />
        <Route element={<Meditation data={driveData} />} path="/meditation/drive" />
        <Route element={<Meditation data={walkCityData} />} path="/meditation/walkCity" />
        <Route element={<Meditation data={walkNatureData} />} path="/meditation/walkNature" />
      </Routes>
    </div>
  );
}

export default App;
