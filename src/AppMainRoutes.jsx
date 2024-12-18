import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";

const AppMainRoutes = () => {
  return (
    <main className="mt-20">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/contact"
          element={<h1>Contact The Kings Height Reality Services</h1>}
        />
      </Routes>
    </main>
  );
};

export default AppMainRoutes;
