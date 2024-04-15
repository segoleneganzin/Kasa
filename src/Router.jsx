import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Error404 from './pages/Error404';
import AboutUs from './pages/AboutUs';
import HousingSheet from './pages/HousingSheet';

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/apropos' element={<AboutUs />} />
      <Route path='/logement/:housingId' element={<HousingSheet />} />
      {/* NotFound */}
      <Route path='/erreur' element={<Error404 />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
};

export default Router;
