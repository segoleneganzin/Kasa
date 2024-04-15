import Banner from '../components/Banner';
import { aboutUsList } from '../assets/datas/aboutUsList';
import Collapse from '../components/Collapse';

const AboutUs = () => {
  return (
    <main className='about-us'>
      <Banner page={'about-us'} />
      <section className='collapses'>
        {aboutUsList.map((item, index) => (
          <Collapse title={item.title} textContent={item.content} key={index} />
        ))}
      </section>
    </main>
  );
};

export default AboutUs;
