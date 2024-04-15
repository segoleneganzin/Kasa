import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import AboutUs from './pages/AboutUs';
import HousingSheet from './pages/HousingSheet';

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/apropos' element={<AboutUs />} />
      <Route path='/logement/:housingId' element={<HousingSheet />} />
      {/* NotFound - error 'caught' by code - can be managed by navigate */}
      <Route
        path='/erreur404'
        element={
          <ErrorPage
            errorType={'404'}
            errorMessage={`Oups! La page que vous demandez n'existe pas.`}
          />
        }
      />
      {/* NotFound - error 'uncaught' by code - unpredictable */}
      <Route
        path='*'
        element={
          <ErrorPage
            errorType={'404'}
            errorMessage={`Oups! La page que vous demandez n'existe pas.`}
          />
        }
      />
    </Routes>
  );
};

export default Router;
