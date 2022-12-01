import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";

const App = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <App />
    </Suspense>
  </BrowserRouter>
);
