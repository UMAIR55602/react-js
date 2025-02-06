import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNexen from "./components/Mainnexen";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About-us/About-us";
import OurServices from "./pages/Our-services/Our-services";
import Portfolio from "./pages/Portfolio/Protfolio";
import MainLayout from "./pages/Layout/Main";
import OurServicesDetail from "./pages/Our-services/Our-services-Detail";
import ContactPage from "./pages/Contact-us/contact-us";

function App() {
  return (

    <Router>
    <MainLayout>
      <Routes>

        <Route index path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/Contact-us" element={<ContactPage />} />
        <Route path="/ourservicesdetail/:slug" element={<OurServicesDetail />} />
      </Routes>
    </MainLayout>
    </Router>
  );
}

export default App;
