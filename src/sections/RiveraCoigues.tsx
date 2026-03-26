import { useEffect, useRef, useState } from 'react';
import { MapPin, Send, ChevronDown, Trees, Droplets, Route, Shield, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const RiveraCoigues = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();
    alert('Gracias por contactarnos. Te responderemos pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#e8f4f8]">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/rivera-coigues/hero-river.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a3d4a]/60 via-[#0a3d4a]/40 to-[#0a3d4a]/70" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#5bc0de] mb-6">Patagonia, Chile</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
            Rivera de los<br />
            <span className="italic text-[#5bc0de]">Coigües</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-4 max-w-2xl mx-auto leading-relaxed text-white/90">
            Tu vida junto a la naturaleza, en un entorno privilegiado.
            Parcelas frente al Río Cóndor, acceso a senderos, bosque nativo y unas vistas de ensueño.
          </p>
          <div className="mt-10">
            <p className="text-sm uppercase tracking-[0.2em] mb-2 text-white/70">Desde</p>
            <p className="text-4xl md:text-5xl font-display">$6.990.000</p>
          </div>
          <div className="mt-10">
            <Button 
              onClick={() => {
                const el = document.getElementById('caracteristicas');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-transparent border-2 border-white/50 text-white hover:bg-white hover:text-[#0a3d4a] px-8 py-6 text-sm uppercase tracking-wider transition-all"
            >
              Ver Características
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 lg:py-32 bg-[#e8f4f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#0a3d4a]/60 mb-4">Sobre el Proyecto</p>
              <h2 className="font-display text-4xl md:text-5xl text-[#0a3d4a] mb-8">
                Un Proyecto Único en la <span className="italic text-[#5bc0de]">Patagonia</span> Chilena
              </h2>
              <div className="space-y-6 text-[#0a3d4a]/80 leading-relaxed">
                <p>
                  Ribera de los Coigües es mucho más que un proyecto inmobiliario: es un{' '}
                  <strong className="text-[#0a3d4a]">refugio natural junto al Río Cóndor</strong>, 
                  donde cada parcela cuenta una historia de respeto, conexión y futuro. Aquí, 
                  entre senderos milenarios, cascadas escondidas y bosque nativo protegido, 
                  la vida vuelve a fluir con sentido profundo y auténtico.
                </p>
                <p>
                  Este santuario natural se extiende por más de{' '}
                  <strong className="text-[#0a3d4a]">33 hectáreas de pura naturaleza</strong>, 
                  con más de 500 metros de ribera directa al Río Cóndor. Un espacio único 
                  diseñado para quienes buscan vivir distinto, reconectar con lo esencial 
                  y proyectar un futuro en armonía con el entorno.
                </p>
                <p>
                  La planificación del proyecto prioriza el equilibrio entre conservación y 
                  desarrollo: hectáreas completas protegidas para siempre, caminos integrados 
                  al paisaje natural y acceso disponible durante todo el año.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2">
                <div className="w-12 h-[2px] bg-[#5bc0de]" />
                <span className="text-sm text-[#0a3d4a]/60 uppercase tracking-wider">Baja intervención, alta proyección</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://kimi-web-img.moonshot.cn/img/patagonia-chile.com/9a2ab06935ba7c8590a1cc3faf7015d17758c37c.jpg"
                alt="Patagonia Chilena"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#0a3d4a] text-white p-6 rounded-lg shadow-xl max-w-xs">
                <p className="font-display text-lg italic">"Donde la naturaleza es la arquitecta principal"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="caracteristicas"
        className="py-24 lg:py-32 bg-[#0a3d4a]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#5bc0de] mb-4">¿Por Qué Elegirnos?</p>
            <h2 className="font-display text-4xl md:text-5xl text-white">
              Características que <span className="italic text-[#5bc0de]">Hacen la Diferencia</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6 pr-4">
              {[
                {
                  icon: Trees,
                  title: 'Bosque Nativo Protegido',
                  description: 'Más de 20 hectáreas de bosque nativo protegido permanentemente, con senderos para caminar y conectar con la naturaleza.'
                },
                {
                  icon: Droplets,
                  title: 'Ribera al Río Cóndor',
                  description: 'Más de 500 metros de ribera directa al Río Cóndor, donde podrás disfrutar de la fauna y flora acuática.'
                },
                {
                  icon: Route,
                  title: 'Caminos Integrados',
                  description: 'Caminos internos diseñados para mimetizarse con el paisaje, transitables todo el año.'
                },
                {
                  icon: Shield,
                  title: 'Seguridad 24/7',
                  description: 'Acceso controlado con vigilancia permanente y cercado perimetral para tu tranquilidad.'
                },
                {
                  icon: Check,
                  title: 'Titreentes Listos para Construir',
                  description: 'Todos los terrains cuentan con agua potable, electricidad y conexión a internet disponibles.'
                },
                {
                  icon: MapPin,
                  title: 'Ubicación Privilegiada',
                  description: 'A solo 45 minutos de Puerto Varas, con acceso pavimentado durante todo el año.'
                }
              ].map((feature, index) => (
                <div 
                  key={index}
className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-all duration-500 opacity-100 translate-y-0 visible opacity-100 !important`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <feature.icon className="w-12 h-12 text-[#5bc0de] mb-6" />
                  <h3 className="font-display text-xl text-white mb-4">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
            <img src="/rivera-coigues/forest.jpg" alt="Bosque Nativo" className="w-full h-[480px] lg:h-[600px] object-cover rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Precios Section */}
      <section 
        id="precios"
        className="py-24 lg:py-32 bg-[#e8f4f8]"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#0a3d4a]/60 mb-4">Invertir</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#0a3d4a]">
              Oportunidades <span className="italic text-[#5bc0de]">| Precios</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Tarjeta 1: Terrenos Interiores */}
            <div className="bg-gradient-to-br from-[#0a3d4a] to-[#5bc0de]/50 rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
              <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4 text-center">Terrenos Interiores</h3>
              <div className="text-4xl lg:text-5xl font-display font-bold text-center mb-2">desde</div>
              <div className="text-4xl lg:text-5xl font-display font-bold text-center mb-6">$6.990.000</div>
              <div className="text-xl font-bold text-center mb-2">Cuota desde</div>
              <div className="text-2xl font-display font-bold text-center mb-4">$291.000/mes</div>
              <div className="text-lg font-bold text-center text-emerald-400">$3.000.000 dcto.</div>
            </div>

            {/* Tarjeta 2: Terrenos Orilla de río */}
            <div className="bg-gradient-to-br from-[#0a3d4a] to-[#5bc0de]/30 rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
              <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4 text-center">Terrenos Orilla de río</h3>
              <div className="text-4xl lg:text-5xl font-display font-bold text-center mb-2">desde</div>
              <div className="text-4xl lg:text-5xl font-display font-bold text-center mb-6">$14.990.000</div>
              <div className="text-xl font-bold text-center mb-2">Cuota desde</div>
              <div className="text-2xl font-display font-bold text-center mb-4">$625.000/mes</div>
              <div className="text-lg font-bold text-center text-emerald-400">$3.000.000 dcto.</div>
            </div>

            {/* Tarjeta 3: Terrenos Orilla de camino */}
            <div className="bg-gradient-to-br from-[#0a3d4a] to-[#5bc0de]/20 rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
              <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4 text-center">Terrenos Orilla de camino</h3>
              <div className="text-4xl lg:text-5xl font-display font-bold text-center mb-2">desde</div>
              <div className="text-4xl lg:text-5xl font-display font-bold text-center mb-6">$10.990.000</div>
              <div className="text-xl font-bold text-center mb-2">Cuota desde</div>
              <div className="text-2xl font-display font-bold text-center mb-4">$458.000/mes</div>
              <div className="text-lg font-bold text-center text-emerald-400">$3.000.000 dcto.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section 
        id="galeria"

        className="py-24 lg:py-32 bg-[#e8f4f8]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#0a3d4a]/60 mb-4">Explora Visualmente</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#0a3d4a]">
              Galería <span className="italic text-[#5bc0de]">| Los Coigües</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{Array.from({ length: 9 }, (_, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <img 
                  src={`/rivera-coigues/galeria/los_coigues_${i+1}.jpg`}
                  alt={`Los Coigües ${i+1}`}
                  className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

{/* Master Plan */}
        <section className="py-24 lg:py-32 bg-[#e8f4f8]"> 
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.3em] text-[#0a3d4a]/60 mb-4">Proyecto</p>
              <h2 className="font-display text-4xl md:text-5xl text-[#0a3d4a]">
                Master <span className="italic text-[#5bc0de]">Plan</span>
              </h2>
            </div>
            <div className="relative">
              <div className="et_pb_code_inner">
                <iframe 
                  loading="lazy"
                  className="w-full h-[600px] block mx-auto"
                  src="https://digitaldesign.cl/360/Rio_Condor2/tour.html"
                />
              </div>
            </div>
          </div>
        </section>

      {/* Contact Form */}
      <section id="contacto" className="py-24 lg:py-32 bg-[#e8f4f8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-[#0a3d4a]/60 mb-4">Contacto</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#0a3d4a]">
              ¡Cuéntanos sobre <span className="italic text-[#5bc0de]">Ti!</span>
            </h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-[#0a3d4a] mb-2 block">Nombre</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-[#0a3d4a]/20 focus:border-[#0f6b7d] focus:outline-none transition-colors duration-300"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-[#0a3d4a] mb-2 block">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-[#0a3d4a]/20 focus:border-[#0f6b7d] focus:outline-none transition-colors duration-300"
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="phone" className="text-[#0a3d4a] mb-2 block">Teléfono</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-[#0a3d4a]/20 focus:border-[#0f6b7d] focus:outline-none transition-colors duration-300"
                placeholder="+56 9 1234 5678"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-[#0a3d4a] mb-2 block">Mensaje</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-[#0a3d4a]/20 focus:border-[#0f6b7d] focus:outline-none transition-colors duration-300 min-h-[150px]"
                placeholder="¿En qué terrain estás interesado? ¿Tienes alguna pregunta?"
                required
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-[#0a3d4a] text-white hover:bg-[#0f6b7d] py-4 px-8 text-sm uppercase tracking-wider transition-all duration-300"
            >
              <Send className="w-4 h-4 mr-2 inline" />
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default RiveraCoigues;

