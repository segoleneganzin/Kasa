import Banner from '../components/Banner';
import Housings from '../layouts/Housings';

const Home = () => {
  return (
    <main className='home'>
      <Banner title={'Chez vous, partout et ailleurs'} page={'home'} />
      <Housings />
    </main>
  );
};

export default Home;
