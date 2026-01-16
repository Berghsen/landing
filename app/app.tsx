import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import Voorwaarden from "./pages/Voorwaarden";
import Juridisch from "./pages/Juridisch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/voorwaarden" element={<Voorwaarden />} />
        <Route path="/juridisch" element={<Juridisch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
