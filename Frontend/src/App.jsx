import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router";

import './App.css'
import DataPage from './pages/DataPage';
import DynamicTestPage from './pages/DynamicTestPage';

function App() {
  const [count, setCount] = useState(0)

  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataPage />} />
        <Route path="DynamicTestPage" element={<DynamicTestPage />} />
        
    </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
