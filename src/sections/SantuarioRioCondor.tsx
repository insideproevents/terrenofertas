import { useEffect, useRef, useState } from 'react';
import { MapPin, Send, ChevronDown, Trees, Droplets, Bird, Shield, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const SantuarioRioCondor = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
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
          style={{ backgroundImage: 'url(https://kimi-web-img.moonshot.cn/img/www.gochile.cl/48fc88f7fc340cebee328b0008472a88ddcf86dd.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a3d4a]/60 via-[#0a3d4a]/40 to-[#0a3d4a]/70" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#5bc0de] mb-6">Los Lagos, Chile</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
            Santuario Río <span className="italic text-[#5bc0de]">Condor</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-4 max-w-2xl mx-auto leading-relaxed text-white/90">
            Un santuario natural donde los cóndores vuelan libre. 
            Terrenos únicos con conservación de fauna y flora nativea.
          </p>
          <div className="mt-10">
            <p className="text-sm uppercase tracking-[0.2em] mb-2 text-white/70">Desde</p>
            <p className="text-4xl md:text-5xl font-display">$13.990.000</p>
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
                Un Santuario de <span className="italic text-[#5bc0de]">Conservación</span> Natural
              </h2>
              <div className="space-y-6 text-[#0a3d4a]/80 leading-relaxed">
                <p>
                  <strong className="text-[#0a3d4a]">Santuario Río Condor</strong> es un proyecto inmobiliario 
                  único en su tipo: un desarrollo que prioriza la conservación del medio ambiente sobre 
                  cualquier otra consideración. Aquí, los{' '}
                  <strong className="text-[#0a3d4a]">cóndores tienen prioridad</strong>, y los propietarios 
                  comparten su espacio con una de las poblaciones más importantes de estas aves emblemáticas.
                </p>
                <p>
                  El proyecto abarca más de{' '}
                  <strong className="text-[#0a3d4a]">200 hectáreas de territorio protegido</strong>, donde 
                  más del 60% se mantiene como área de conservación permanente. Los senderos, las áreas 
                  de observación de fauna y los miradores están diseñados para minimizar el impacto 
                  mientras se maximiza la experiencia de conexión con la naturaleza.
                </p>
                <p>
                  Este es un proyecto para quienes valoran la biodiversidad, la sostenibilidad y la 
                  posibilidad de vivir en armonía con especies en peligro de extinción. Una inversión 
                  que va más allá del suelo: es una contribución real a la conservación de Chile.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2">
                <div className="w-12 h-[2px] bg-[#5bc0de]" />
                <span className="text-sm text-[#0a3d4a]/60 uppercase tracking-wider">Donde la naturaleza guía el desarrollo</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://kimi-web-img.moonshot.cn/img/www.gochile.cl/48fc88f7fc340cebee328b0008472a88ddcf86dd.jpg"
                alt="Santuario Río Condor"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#0a3d4a] text-white p-6 rounded-lg shadow-xl max-w-xs">
                <p className="font-display text-lg italic">"Donde el vuelo del cóndor corona el horizonte"</p>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bird,
                title: 'Observación de Cóndores',
                description: 'Área de observación privilegiada donde puedes apreciar el vuelo de cóndores dailymente.'
              },
              {
                icon: Trees,
                title: 'Bosque Nativo Protegido',
                description: 'Más de 120 hectáreas de bosque nativo preservado permanentemente para las futuras generaciones.'
              },
              {
                icon: Droplets,
                title: 'Ribera natural',
                description: 'Acceso a río con márgenes naturales, habitat de diversas especies de aves acuáticas.'
              },
              {
                icon: Shield,
                title: 'Conservación Certificada',
                description: 'Proyecto certificado por organismos de conservación ambiental nacionales e internacionales.'
              },
              {
                icon: Check,
                title: 'Energía Renovable',
                description: 'Sistema de energía solar y manejo de agua lluvia, promoviendo la autosustentabilidad.'
              },
              {
                icon: MapPin,
                title: 'Ubicación Privilegiada',
                description: 'En la región de Los Lagos, a 2 horas de Puerto Montt, con acceso por ruta pavimentada.'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <feature.icon className="w-12 h-12 text-[#5bc0de] mb-6" />
                <h3 className="font-display text-xl text-white mb-4">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
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
                placeholder="¿En qué terreno estás interesado? ¿Tienes alguna pregunta?"
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

export default SantuarioRioCondor;