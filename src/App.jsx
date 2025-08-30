import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React from "react";

// Pages
import Home from "./pages/Home";
import WhoWeAre from "./pages/whoarewe";
import Approach from "./pages/Approach";
import Framework from "./pages/Framework";
import Offer from "./pages/Offer";
import MarketSignals from "./pages/MarketSignal";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Page Routes */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/approach" element={<Approach />} />
           <Route path="/framework" element={<Framework />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/market-signals" element={<MarketSignals />} />
        </Routes>
      </main>

    
      {/* <Footer /> */}
    </div>
  );
}

export default App;
