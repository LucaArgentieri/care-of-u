import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Loading from "./app/components/loading/loading";

const App = React.lazy(() => import("./app/App"));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
