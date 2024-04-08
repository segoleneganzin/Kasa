import PageLayout from '../layouts/PageLayout';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <PageLayout currentPage={'Home'}>
      <h1>Home</h1>
      <Link to='/logement/cb02d69b'>Magnifique appartement Rivoli</Link>
    </PageLayout>
  );
};

export default Home;
