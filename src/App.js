import './App.css';
import Food from './component/Foodweb/Food/Food';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Whether from './component/whether/Whether'
import Navbar from './component/Navbar/Navbar';
import Kanban from './component/Kanban/Kanban';
import { useState, useRef } from 'react';
function App() {
  const [query, setquery] = useState()
  const fref = useRef()
  const wref = useRef()
  function buttonclick() {
    if (window.location.pathname === '/food') {
      return fref.current.log()
    } else if (window.location.pathname === '/weather') {
      return wref.current.newfood()
    }
  }
  return (
    <div className="App">
      <Navbar addtoquery={() => buttonclick()} newquery={(e) => setquery(e)} />
      <BrowserRouter>
        <Routes>
          <Route path="/food" element={<Food ref={fref} food={query} />} />
          <Route path="/weather" element={<Whether ref={wref} city={query} />} />
          <Route path="/kanban" element={<Kanban />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
