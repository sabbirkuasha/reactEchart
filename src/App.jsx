// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <>
      <title>React Learning: Home Page</title>
      <div className="flex justify-center flex-col gap-2">
        <h1 className="text-3xl">Hello React World!</h1>
      </div>

      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/aboutUs" element={<AboutUsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
