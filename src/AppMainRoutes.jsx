import { Routes, Route } from "react-router-dom";

const AppMainRoutes = () => {
  return (
    <main className="mt-20">
      <Routes>
        <Route
          path="/"
          element={<h1>Welcome to The Kings Height Reality</h1>}
        />
        <Route
          path="/services"
          element={<h1>Welcome to The Kings Height Reality Services</h1>}
        />
        <Route
          path="/about"
          element={<h1>About The Kings Height Reality</h1>}
        />
        <Route
          path="/contact"
          element={<h1>Contact The Kings Height Reality Services</h1>}
        />
      </Routes>
    </main>
  );
};

export default AppMainRoutes;
