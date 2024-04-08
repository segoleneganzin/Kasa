import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import './stylesheet/main.css';
import Header from './components/Header';
import Footer from './components/Footer';
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
