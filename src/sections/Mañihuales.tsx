import { useEffect, useRef, useState } from 'react';
import { MapPin, Send, ChevronDown, Trees, Droplets, Route, Shield, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Mañihuales = () => {
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
          style={{ backgroundImage: 'url(/mañihuales/portada_mañihuales.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a3d4a]/60 via-[#0a3d4a]/40 to-[#0a3d4a]/70" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#5bc0de] mb-6">Aysén, Chile</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
            <span className="italic text-[#5bc0de]">Mañihuales</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-4 max-w-2xl mx-auto leading-relaxed text-white/90">
            Tierras productivas en el corazón de la Patagonia chilena. 
            Praderas ideales para agricultura, ganadería y proyectos de turismo rural.
          </p>
          <div className="mt-10">
            <p className="text-sm uppercase tracking-[0.2em] mb-2 text-white/70">Desde</p>
            <p className="text-4xl md:text-5xl font-display">$33.990.000</p>
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
                Un Imperio Natural en la <span className="italic text-[#5bc0de]">Patagonia</span> Chilena
              </h2>
              <div className="space-y-6 text-[#0a3d4a]/80 leading-relaxed">
                <p>
                  <strong className="text-[#0a3d4a]">Mañihuales</strong> es una oportunidad única de 
                  adquirir tierras productivas en una de las regiones más privilegiadas de Chile. 
                  Con más de{' '}
                  <strong className="text-[#0a3d4a]">500 hectáreas de praderas naturales</strong>, 
                  este territorio ofrece condiciones ideales para desarrollo agrícola, ganadero 
                  y proyectos de turismo experiential.
                </p>
                <p>
                  Ubicado en la región de Aysén, este proyecto representa la última frontera 
                  agrícola de Chile: tierra fértil, agua abundante, y un ecosistema prístino 
                  que permite múltiples usos productivos. Una inversión con potencial de 
                 plusvalía excepcional en una zona en desarrollo.
                </p>
                <p>
                  La propiedad cuenta con{' '}
                  <strong className="text-[#0a3d4a]">acceso por camino pavimentado</strong>, 
                  agua de calidad y energía eléctrica disponible. Ideal para quienes buscan 
                  establecer un proyecto productivo sostenible en el tiempo.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2">
                <div className="w-12 h-[2px] bg-[#5bc0de]" />
                <span className="text-sm text-[#0a3d4a]/60 uppercase tracking-wider">Producción sostenible, inversión segura</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="/mañihuales/principal_mañihuales.jpg"
                alt="Mañihuales Patagonia"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#0a3d4a] text-white p-6 rounded-lg shadow-xl max-w-xs">
                <p className="font-display text-lg italic">"Donde la tierra promise abundancia"</p>
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
                icon: Trees,
                title: 'Praderas Naturales',
                description: 'Más de 500 hectáreas de praderas naturales con suelo fértil, ideal para agricultura y ganadería.'
              },
              {
                icon: Droplets,
                title: 'Agua Abundante',
                description: 'Disponibilidad de agua de calidad desde fuentes naturales, esenciales para cualquier proyecto productivo.'
              },
              {
                icon: Route,
                title: 'Acceso Pavimentado',
                description: 'Conexión por camino pavimentado durante todo el año, facilitando el transporte de productos.'
              },
              {
                icon: Shield,
                title: 'Título Dominial Listo',
                description: 'Todos los terrenos cuentan con título de dominio vigente, listo para construir y procesar.'
              },
              {
                icon: Check,
                title: 'Infraestructura Disponible',
                description: 'Electricidad y agua potable disponibles en el sector para desarrollo inmediato.'
              },
              {
                icon: MapPin,
                title: 'Ubicación Estratégica',
                description: 'En la región de Aysén, una de las zonas con mayor potencial de desarrollo en Chile.'
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

export default Mañihuales;