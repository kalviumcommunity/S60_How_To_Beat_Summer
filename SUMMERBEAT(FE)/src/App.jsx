import "./App.css";
import FetchData from "./module12";
import SignUp from "./signin";
import Login from "./login";
import { Routes, Route } from "react-router-dom";
import Adding from "./form(M13)";
import Add from "./DeleteandUpadate";
import Filtering from "./dataFilter";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/datafilter" element={<Filtering/>}></Route>
        <Route path="/fetch" element={<FetchData/>} ></Route>
        <Route path="/post" element={<Adding />}></Route>
        <Route path="/update/:key" element={<Add />}></Route>
      </Routes>
    </>
  );
}

export default App;
