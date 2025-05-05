import React from "react";
import Resumeform1 from "./Components/Resume_Forms/Resumeform1";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/page2";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import EduSec from "./Components/Resume_Forms/EduSec";

const App = () => {
  return (
    <div className="overflow-x-hidden h-screen text-neutral-300 antialiased selection:bg-green-300 selection:text-green-800">
      <div class="absolute top-0 z-[-2] h-full w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="container flex flex-col">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/f1" element={<F1 />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
      </div>
    </div>
  );
};

export default App;
