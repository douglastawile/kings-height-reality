import { BrowserRouter } from "react-router-dom";
import { Flowbite } from "flowbite-react";

import AppMainRoutes from "./AppMainRoutes";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Flowbite>
        <Navigation />
        <AppMainRoutes />
        <Footer />
      </Flowbite>
    </BrowserRouter>
  );
}
