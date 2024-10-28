import React from "react";
import Show from "./Show";
import Home from "./Home";
import Share from "./Share";
function App() {
  const path = window.location.pathname;
  return (
    <div className="w-screen h-screen overflow-hidden">
      {path == "/" && <Home />}
      {path == "/home" && <Home />}
      {path == "/home/" && <Home />}
      {path == "/share" && <Share />}
      {path == "/share/" && <Share />}
      {path != "/" && <Show />}
    </div>
  );
}

export default App;
