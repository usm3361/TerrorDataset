import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";

import './App.css'
import HomePage from './pages/Home';
import DataPage from './pages/DataPage';
import DynamicTestPage from './pages/DynamicTestPage';

function App() {
  const [count, setCount] = useState(0)

  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="/terrorData" element={<DataPage />} />
        <Route path="dynamicTestPage" element={<DynamicTestPage />} />
            </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
