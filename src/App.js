import "./App.css";
import "./components/otherStuff.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Cast from "./components/cast.jsx";
import Home from "./components/home.jsx";
import ReleaseInfo from "./components/ReleaseInfo.jsx";
import Navbar from "./components/Navbar.js";
import Videos from "./components/videos.jsx";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cast" element={<Cast />} />
          <Route path="/release-info" element={<ReleaseInfo />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
