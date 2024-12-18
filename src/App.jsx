import { BrowserRouter } from "react-router-dom";
import AppMainRoutes from "./AppMainRoutes";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <header>
          <Navigation />
        </header>
        <AppMainRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
