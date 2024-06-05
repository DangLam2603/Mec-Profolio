import { Route, Routes } from "react-router-dom";
import Homepage from "../src/pages/Homepage";
import Card from "../src/components/ImgCard";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/card" element={<Card />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
