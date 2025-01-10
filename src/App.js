import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from './Navbar';
import Home from './components/Home';
import RFIDReader from './components/products/RFIDReader';
import RFIDTags from './components/products/RFIDTags';
import RFIDPrinter from './components/products/RFIDPrinter';
import AssetTracking from './components/services/AssetTracking';
import InventoryTracking from './components/services/InventoryTracking';
import VehicleIdentification from './components/services/VehicleIdentification';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reader" element={<RFIDReader />} />
          <Route path="/tags" element={<RFIDTags />} />
          <Route path="/printer" element={<RFIDPrinter />} />
          <Route path="/services/asset-tracking" element={<AssetTracking />} />
          <Route path="/services/inventory-tracking" element={<InventoryTracking />} />
          <Route path="/services/vehicle-identification" element={<VehicleIdentification />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
