import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import './stylesheet/main.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
// import PageLayout from './layouts/PageLayout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <Router />
    <Footer />
    {/* <PageLayout>
      <Router />
    </PageLayout> */}
  </BrowserRouter>
);
