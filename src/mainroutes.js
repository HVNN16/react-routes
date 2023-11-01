import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Product from "./product";
import About from "./about";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;