
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../src/main";
import Home from "./screens/Home";
export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
