import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Intro from './sections/Intro';
import Properties from './sections/Properties';
import International from './sections/International';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#e8f7fa]">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Properties />
        <International />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
