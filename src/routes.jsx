
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculadoras from "../src/screens/Calculadoras"
export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculadoras />} />
      </Routes>
    </BrowserRouter>
  );
}
