import "./App.css";
import FetchData from "./module12";
import { Routes, Route } from "react-router-dom";
import Adding from "./form(M13)";
import Add from "./DeleteandUpadate";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FetchData />}></Route>
        <Route path="/post" element={<Adding />}></Route>
        <Route path="/update/:key" element={<Add />}></Route>
      </Routes>
    </>
  );
}

export default App;
