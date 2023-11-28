
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculadoras from "../src/screens/Calculadoras"
import Inicial from "../src/screens/Inicial";
export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicial/>} />
        <Route path="/calculadora" element={<Calculadoras />} />
      </Routes>
    </BrowserRouter>
  );
}
