import { useState } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Intro from './sections/Intro';
import Properties from './sections/Properties';
import International from './sections/International';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import RiveraCoigues from './sections/RiveraCoigues';

function App() {
  const [showRiveraCoigues, setShowRiveraCoigues] = useState(false);

  return (
    <div className="min-h-screen bg-[#e8f7fa]">
      <Navbar onShowRiveraCoigues={setShowRiveraCoigues} onShowHome={setShowRiveraCoigues} />
      <main>
        {showRiveraCoigues ? (
          <RiveraCoigues />
        ) : (
          <>
            <Hero />
            <Intro />
            <Properties onShowRiveraCoigues={setShowRiveraCoigues} />
            <International />
            <Contact />
          </>
        )}
      </main>
      {!showRiveraCoigues && <Footer />}
    </div>
  );
}

export default App;
