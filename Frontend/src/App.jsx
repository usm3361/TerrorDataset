import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import "./App.css";
import HomePage from "./pages/HomePage";
import DataPage from "./pages/DataPage";
import DynamicTestPage from "./pages/DynamicTestPage";

function App() {
  const [ter, setTer] = useState();
    const url = `http://localhost:8000/api/terrorists`;
  
    useEffect(() => {
      async function loadDataTer() {
        try {
          
          const response = await fetch(url);
          const data = await response.json();
          setTer(data);
        } catch (error) {
          console.log(error)
        }
      }
      loadDataTer();
    }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="/terrorData" element={<DataPage ter={ter} />} />
            <Route path="/dynamicTestPage" element={<DynamicTestPage ter={ter} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
