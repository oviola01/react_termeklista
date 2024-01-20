import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './pages/Admin';
import Public from './pages/Public';
import Layout from './Layout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="public" element={<Public />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
