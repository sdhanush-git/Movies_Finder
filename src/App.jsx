import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { AllRoutes } from "./routes/AllRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <AllRoutes></AllRoutes>
      <Footer />
    </>
  );
}

export default App;
