import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbarcomponent from "./Components/Navbarcomponent";
import Landingpage from "./Components/Landingpage";
import Footer from "./Components/Footer";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
          </div>
        }
      >
        <Navbarcomponent />
        <Routes>
          <Route path="/" element={<Landingpage />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
