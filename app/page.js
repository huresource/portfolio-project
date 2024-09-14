import { Footer, Navbar } from '../components';
import { About, Projects, Feedback, GetStarted, TitlesSection, Hero, Skills, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-my-bg overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />      
      <TitlesSection />
    </div>
    <div className="relative">
      <Projects />
      {/* <GetStarted /> */}
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <div className="relative">
      <Skills />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
