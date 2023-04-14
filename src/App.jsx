import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Location from "./components/Location";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Art-Gallery-Website" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="location" element={<Location />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
