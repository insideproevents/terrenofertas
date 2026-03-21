import { useEffect, useRef, useState } from 'react';

const Intro = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="destacados"
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 bg-[#e8f7fa]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #0a3d4a 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              {/* Quote Mark - Turquesa gold */}
              <div
                className={`quote-mark mb-6 transition-all duration-1000 ${
                  isVisible
                    ? 'opacity-40 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                "
              </div>

              {/* Main Text */}
              <p
                className={`font-display text-2xl md:text-3xl lg:text-4xl text-[#0a3d4a] leading-relaxed font-light mb-10 transition-all duration-1000 delay-200 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                Hemos seleccionado los proyectos más extraordinarios de la{' '}
                <span className="italic text-[#0f6b7d]">Patagonia</span>, donde la
                naturaleza y la accesibilidad se encuentran en perfecta armonía.
              </p>

              {/* Description */}
              <div
                className={`space-y-6 transition-all duration-1000 delay-400 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <p className="text-[#4a6572] text-base md:text-lg leading-relaxed font-light">
                  Caminos bien trazados, accesibles, con cauces de agua
                  cristalina, árboles majestuosos y la comodidad de estar cerca de
                  la ciudad.
                </p>
                <p className="text-[#0a3d4a] text-lg md:text-xl font-display italic">
                  Un lugar para vivir, soñar e invertir.
                </p>
              </div>

              {/* Decorative Elements - Turquesa */}
              <div
                className={`flex items-center justify-center lg:justify-start gap-4 mt-12 transition-all duration-1000 delay-600 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="w-12 h-px bg-[#5bc0de]" />
                <div className="w-2 h-2 rounded-full bg-[#5bc0de]" />
                <div className="w-12 h-px bg-[#5bc0de]" />
              </div>
            </div>

            {/* Image */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="/acuarela_rio.jpg"
                  alt="Río de la Patagonia"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d4a]/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side Decoration - Turquesa */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-[#0f6b7d]/20 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-[#0f6b7d]/20 to-transparent" />
    </section>
  );
};

export default Intro;
