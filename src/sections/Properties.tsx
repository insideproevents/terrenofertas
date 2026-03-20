import { useEffect, useRef, useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

interface Property {
  id: number;
  name: string;
  subtitle?: string;
  location: string;
  image: string;
  featured?: boolean;
}

const properties: Property[] = [
  {
    id: 1,
    name: 'Rivera de los Coigües',
    subtitle: 'Río Condor',
    location: 'Patagonia Norte, Chile',
    image:
      'https://kimi-web-img.moonshot.cn/img/www.pew.org/f9ad3f46cdfa8ae3808f5ff945855e27916a6eda.jpg',
    featured: true,
  },
  {
    id: 2,
    name: 'Río Blanco',
    subtitle: 'Refugio',
    location: 'Patagonia Central, Chile',
    image:
      'https://kimi-web-img.moonshot.cn/img/viajesikea.com/f42a14b7bc08109b58f7e29152cc024d3eedb0b3.jpg',
  },
  {
    id: 3,
    name: 'Mañihuales',
    subtitle: 'Praderas',
    location: 'Aysén, Chile',
    image:
      'https://kimi-web-img.moonshot.cn/img/patagonia-chile.com/9a2ab06935ba7c8590a1cc3faf7015d17758c37c.jpg',
  },
  {
    id: 4,
    name: 'Santuario Río Condor',
    subtitle: 'Patagonia',
    location: 'Los Lagos, Chile',
    image:
      'https://kimi-web-img.moonshot.cn/img/www.gochile.cl/48fc88f7fc340cebee328b0008472a88ddcf86dd.jpg',
    featured: true,
  },
];

const Properties = () => {
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
      id="catalogo"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#e8f7fa]"
    >
      {/* Section Header */}
      <div className="w-full px-6 lg:px-12 xl:px-20 mb-16">
        <div
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-[#0f6b7d] text-sm tracking-[0.3em] uppercase font-light block mb-4">
            Catálogo Nacional
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#0a3d4a] font-light">
            Propiedades <span className="italic">Destacadas</span>
          </h2>
          <div className="w-24 h-px bg-[#5bc0de] mt-6" />
        </div>
      </div>

      {/* Properties Grid */}
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {properties.map((property, index) => (
              <div
                key={property.id}
                className={`card-glaciar group relative overflow-hidden cursor-pointer transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-16'
                } ${property.featured ? 'md:col-span-2' : ''}`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                {/* Image Container */}
                <div
                  className={`relative overflow-hidden ${
                    property.featured ? 'h-[400px] md:h-[500px]' : 'h-[350px]'
                  }`}
                >
                  <img
                    src={property.image}
                    alt={property.name}
                    className="card-image w-full h-full object-cover"
                  />

                  {/* Overlay - Turquesa tones */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d4a]/90 via-[#0a3d4a]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Featured Badge */}
                  {property.featured && (
                    <div className="absolute top-6 left-6">
                      <span className="property-tag">Destacado</span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    {/* Location */}
                    <div className="flex items-center gap-2 text-white/70 mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm tracking-wider font-light">
                        {property.location}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-white font-light mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {property.name}
                    </h3>

                    {/* Subtitle */}
                    {property.subtitle && (
                      <p className="text-white/80 text-lg font-display italic transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        {property.subtitle}
                      </p>
                    )}

                    {/* CTA - Turquesa */}
                    <div className="mt-6 flex items-center gap-3 text-[#5bc0de] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150">
                      <span className="text-sm tracking-[0.15em] uppercase font-light">
                        Ver Detalles
                      </span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div
        className={`w-full px-6 lg:px-12 xl:px-20 mt-16 transition-all duration-1000 delay-700 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-center">
          <button className="btn-glaciar group flex items-center gap-4 px-8 py-4 bg-[#0a3d4a] text-white text-sm tracking-[0.15em] uppercase font-light hover:bg-[#0f6b7d] transition-all duration-500">
            <span>Ver Catálogo Completo</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Properties;
