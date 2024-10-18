import { Footer, Navbar } from '../components';
import { About, Projects, Feedback, GetStarted, TitlesSection, Hero, Skills, WhatsNew, World } from '../sections';

const Page = () => (
  <div>
    <Navbar />
    <Hero />
    {/* <About /> */}
    <Projects />
    <GetStarted />
    {/* <TitlesSection /> */}
    <WhatsNew />
    <World />
    <Skills />
    <Feedback />
    <Footer />
  </div>
);

export default Page;
