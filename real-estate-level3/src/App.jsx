import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbarcomponent from "./Components/Navbarcomponent";
import Landingpage from "./Components/Landingpage";
import Footer from "./Components/Footer";
// import MyNavbar from "./Components/myNavbar";

function App() {

  return (
    <>
      {/* <MyNavbar/> */}
      <Navbarcomponent/>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
