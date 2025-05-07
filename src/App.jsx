import React from "react";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="overflow-x-hidden h-screen text-neutral-300 antialiased selection:bg-green-300 selection:text-green-800">
      <div className="absolute top-0 z-[-2] h-full w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="container flex flex-col">
        <BrowserRouter  basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Page1 /> } ></Route>
          <Route path="/f1" element={<Page2 />} ></Route>
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
