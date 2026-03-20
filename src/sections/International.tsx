import { useEffect, useRef, useState } from 'react';
import { Globe, ArrowUpRight } from 'lucide-react';

interface InternationalProperty {
  id: number;
  country: string;
  name: string;
  description: string;
  image: string;
}

const internationalProperties: InternationalProperty[] = [
  {
    id: 1,
    country: 'Argentina',
    name: 'Estancias Patagónicas',
    description:
      'Tierras vírgenes en la Patagonia argentina, con vistas a los Andes y acceso a lagos cristalinos.',
    image:
      'https://kimi-web-img.moonshot.cn/img/argentinapura.com/a55f568cd3660867cddcd02c3b464e1470f12eb9.webp',
  },
  {
    id: 2,
    country: 'Uruguay',
    name: 'Costa Atlántica',
    description:
      'Propiedades exclusivas en la costa uruguaya, ideales para desarrollos turísticos de lujo.',
    image:
      'https://kimi-web-img.moonshot.cn/img/torresdelpaine.com/9272a72ad652f2a8b143bb900ac9f2f816a307fe.jpg',
  },
];

const International = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="internacional"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#0a3d4a] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`flex flex-col md:flex-row md:items-end md:justify-between mb-16 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-5 h-5 text-[#5bc0de]" />
                <span className="text-[#5bc0de] text-sm tracking-[0.3em] uppercase font-light">
                  Catálogo Internacional
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-light">
                Más Allá de <span className="italic text-[#5bc0de]">Fronteras</span>
              </h2>
              <div className="w-24 h-px bg-[#5bc0de] mt-6" />
            </div>
            <p
              className={`text-white/60 text-base font-light max-w-md mt-6 md:mt-0 transition-all duration-1000 delay-200 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              Expandimos nuestra selección de terrenos excepcionales más allá de
              Chile, llegando a los destinos más privilegiados de Sudamérica.
            </p>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {internationalProperties.map((property, index) => (
              <div
                key={property.id}
                className={`group relative overflow-hidden cursor-pointer transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-16'
                }`}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-[400px] md:h-[450px] overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="card-image w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d4a] via-[#0a3d4a]/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Country Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-xs tracking-[0.2em] uppercase">
                      {property.country}
                    </span>
                  </div>

                  {/* External Link Icon */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    <h3 className="font-display text-2xl md:text-3xl text-white font-light mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {property.name}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed font-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {property.description}
                    </p>

                    {/* CTA - Turquesa */}
                    <div className="mt-6 flex items-center gap-3 text-[#5bc0de] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150">
                      <span className="text-sm tracking-[0.15em] uppercase font-light">
                        Explorar
                      </span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Row - Turquesa */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10 transition-all duration-1000 delay-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {[
              { number: '3', label: 'Países' },
              { number: '12', label: 'Proyectos' },
              { number: '500+', label: 'Hectáreas' },
              { number: '100%', label: 'Exclusivos' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl md:text-5xl text-[#5bc0de] font-light mb-2">
                  {stat.number}
                </div>
                <div className="text-white/50 text-sm tracking-[0.15em] uppercase font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default International;
