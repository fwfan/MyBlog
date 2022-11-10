import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import HomePage from "./modules/homepage";
import About from "./modules/about";

function App() {
  return (
    <div className={"App"}>
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default App;
