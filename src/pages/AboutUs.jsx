import Banner from '../components/Banner';
import { aboutUsList } from '../assets/aboutUsList';
import Collapse from '../components/Collapse';
const AboutUs = () => {
  return (
    <main className='about-us'>
      <Banner page={'about-us'} />
      <section className='collapses'>
        {aboutUsList.map((item) => (
          <Collapse
            title={item.title}
            textContent={item.content}
            key={item.title}
          />
        ))}
      </section>
    </main>
  );
};

export default AboutUs;
