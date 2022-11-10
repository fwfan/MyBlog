import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./modules/homepage"));
const About = lazy(() => import("./modules/about"));

function App() {
  return (
    <div className={"App"}>
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div className="loading">Loading...</div>}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<div className="loading">Loading...</div>}>
                <About />
              </Suspense>
            }
          />
          <Route path="*" element={<HomePage />}></Route>
        </Routes>
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default App;
