import { Layout } from '../components/common/layout';
import { Hero } from '../components/home/hero';
import { Navbar } from '../components/common/navbar';
import { Experience } from '../components/home/experience/experience';
import { About } from '../components/home/about/about';
import { Contact } from '../components/home/contact';
import { Section } from '../components/home/section';
import '../assets/styles/components/home/home-container.scss';

const Home = () => (
  <Layout>
    <Navbar />
    <div className='home-container'>
      <Section color='primary' dividerSvgZoomLevel={100}>
        <Hero />
      </Section>
      <Section color='secondary' dividerSvgZoomLevel={200}>
        <About />
      </Section>
      <Section color='primary' dividerSvgZoomLevel={260}>
        <Experience />
      </Section>
      <Section color='secondary' withDivider={false}>
        <Contact />
      </Section>
    </div>
  </Layout>
);

export default Home;
