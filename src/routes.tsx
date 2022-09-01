import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Fav, Home } from './pages';
import { Navbar } from './components';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Fav />} />
      </Routes>
    </BrowserRouter>
  );
};
