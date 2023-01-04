import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/components/Home";
import { MonthStatisticks } from "./pages/MonthStatisticks/components/MonthStatisticks";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/month-statistics" element={<MonthStatisticks />} />
      </Routes>
    </div>
  );
}

export default App;
