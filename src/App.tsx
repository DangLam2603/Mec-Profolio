import { Route, Routes } from "react-router-dom";
import Homepage from "../src/pages/Homepage";
import Card from "../src/components/ImgCard";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/ " element={<Card />} />
      </Routes>
    </>
  );
}

export default App;
