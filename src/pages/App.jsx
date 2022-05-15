import Home from "./Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Info from "../components/Info";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/info" element={<Info />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
