import React from "react";
import Show from "./Show";
import Home from "./Home";
import Share from "./Share";
function App() {
  const path = window.location.pathname;
  return (
    <div className="w-screen h-screen overflow-hidden bg-cover "
      style={{backgroundImage: 'url(https://static.wixstatic.com/media/295acc_0f5ce1524c7a418eab5919e249610239f000.jpg/v1/fill/w_1423,h_602,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/295acc_0f5ce1524c7a418eab5919e249610239f000.jpg)'}}>
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
