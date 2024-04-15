import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import './stylesheet/main.scss';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <Router />
    <Footer />
  </BrowserRouter>
);
