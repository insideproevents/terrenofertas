import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    const element = document.querySelector('#destacados');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 w-full h-full parallax-bg"
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      >
        <img
          src="https://kimi-web-img.moonshot.cn/img/dynamic-media-cdn.tripadvisor.com/3b89e0269ef84d4baa113106070f58f0d3992e65.jpg"
          alt="Patagonia Chilena - Campos de Hielo Sur"
          className="w-full h-[120%] object-cover"
        />
        {/* Gradient Overlay - Turquesa tones */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a3d4a]/50 via-transparent to-[#0a3d4a]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a3d4a]/40 via-transparent to-[#0a3d4a]/40" />
        {/* Turquesa tint overlay */}
        <div className="absolute inset-0 bg-[#0f6b7d]/10 mix-blend-overlay" />
      </div>

      {/* Mist Effect */}
      <div className="absolute inset-0 mist-overlay animate-mist" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-center gap-12 lg:gap-20">
        {/* Text Content - Always centered */}
        <div className="text-center max-w-4xl">
          
          {/* Year Badge */}
          <div
            className="inline-block mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <span className="text-white/80 text-sm tracking-[0.3em] uppercase font-light">
              Patagonia Select 2026
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="font-display text-5xl md:text-7xl lg:text-8xl text-white font-light mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            <span className="italic">Los terrenos</span>
            <br />
            <span className="font-medium">más destacados</span>
          </h1>

          {/* Decorative Line - Turquesa */}
          <div
            className="w-24 h-px bg-gradient-to-r from-transparent via-[#5bc0de] to-transparent mx-auto mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
          />

          {/* Subtitle */}
          <p
            className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
          >
            Imagina despertar rodeado de bosques milenarios, con el sonido del río
            a tus pies y vistas que quitan el aliento.
          </p>

          {/* CTA Button */}
          <div
            className="mt-12 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}
          >
            <a
              href="#catalogo"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#catalogo');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-glaciar inline-flex items-center gap-3 px-8 py-4 border border-white/40 text-white text-sm tracking-[0.2em] uppercase font-light hover:bg-white/10 hover:border-[#5bc0de]/60 transition-all duration-500"
            >
              Explorar Propiedades
            </a>
          </div>
        </div>

        {/* Winner Image - 70% size, left side */}
        <img 
          src="/winner.png" 
          alt="Winner Award"
"hidden lg:block absolute left-8 top-0 w-[100px] h-[100px] object-contain drop-shadow-2xl z-20 pointer-events-none"
        />

      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 hover:text-[#5bc0de] transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>

      {/* Side Decorative Elements */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        <span className="text-white/50 text-xs tracking-[0.2em] uppercase rotate-180 [writing-mode:vertical-lr]">
          Patagonia
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        <span className="text-white/50 text-xs tracking-[0.2em] uppercase [writing-mode:vertical-lr]">
          Chile
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;

