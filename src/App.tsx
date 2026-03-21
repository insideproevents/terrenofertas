import { useState } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Intro from './sections/Intro';
import Properties from './sections/Properties';
import International from './sections/International';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import RiveraCoigues from './sections/RiveraCoigues';
import Mañihuales from './sections/Mañihuales';

function App() {
  const [showRiveraCoigues, setShowRiveraCoigues] = useState(false);
  const [showMañihuales, setShowMañihuales] = useState(false);

  const handleShowHome = (show: boolean) => {
    setShowRiveraCoigues(false);
    setShowMañihuales(false);
    if (show) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#e8f7fa]">
      <Navbar 
        onShowRiveraCoigues={setShowRiveraCoigues} 
        onShowMañihuales={setShowMañihuales}
        onShowHome={handleShowHome} 
      />
      <main>
        {showRiveraCoigues ? (
          <RiveraCoigues />
        ) : showMañihuales ? (
          <Mañihuales />
        ) : (
          <>
            <Hero />
            <Intro />
            <Properties onShowRiveraCoigues={setShowRiveraCoigues} onShowMañihuales={setShowMañihuales} />
            <International />
            <Contact />
          </>
        )}
      </main>
      {!showRiveraCoigues && !showMañihuales && <Footer />}
    </div>
  );
}

export default App;
