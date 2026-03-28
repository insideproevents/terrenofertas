import { useEffect, useRef, useState } from 'react';
import { MapPin, Send, ChevronDown, Trees, Droplets, Mountain, Shield, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const RioBlanco = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('https://formsubmit.co/ajax/insideproevents@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: 'Nuevo contacto desde Río Blanco',
        }),
      });
      alert('Gracias por contactarnos. Te responderemos pronto.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch {
      alert('Hubo un error al enviar el mensaje. Por favor intenta nuevamente.');
    }
  };

  return (
    <div className="min-h-screen bg-[#e8f4f8]">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://kimi-web-img.moonshot.cn/img/viajesikea.com/f42a14b7bc08109b58f7e29152cc024d3eedb0b3.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a3d4a]/60 via-[#0a3d4a]/40 to-[#0a3d4a]/70" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#5bc0de] mb-6">Patagonia Central, Chile</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
            Río <span className="italic text-[#5bc0de]">Blanco</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-4 max-w-2xl mx-auto leading-relaxed text-white/90">
            Un refugio exclusivo en plena naturaleza patagónica. 
            Parcelas con vistas a montañas nevadas, ríos cristalinos y bosques nativeos.
          </p>
          <div className="mt-10">
            <p className="text-sm uppercase tracking-[0.2em] mb-2 text-white/70">Desde</p>
            <p className="text-4xl md:text-5xl font-display">$18.990.000</p>
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
                El Refgio Perfecto en la <span className="italic text-[#5bc0de]">Patagonia</span>
              </h2>
              <div className="space-y-6 text-[#0a3d4a]/80 leading-relaxed">
                <p>
                  <strong className="text-[#0a3d4a]">Río Blanco</strong> es un santuario natural ubicado 
                  en el corazón de la Patagonia chilena. Este proyecto ofrece{' '}
                  <strong className="text-[#0a3d4a]">parcelas de entre 5.000 y 10.000 m²</strong>, 
                  cada una con acceso directo a un río de aguas cristalinas y vistas privilegiadas 
                  a la cordillera de los Andes.
                </p>
                <p>
                  El proyecto se integra perfectamente con el entorno natural: senderos内部的, 
                  áreas de conservación y espacios diseñados para respetar la biodiversidad local. 
                  Aquí podrás despertar chaque día con el sonido del agua y la vista de montañas nevadas.
                </p>
                <p>
                  Con acceso por camino pavimentado y todos los servicios disponibles, 
                  <strong className="text-[#0a3d4a]">Río Blanco</strong> es la opción ideal para quienes 
                  buscan un refugio de fin de semana o una inversión con potencial de plusvalía en una 
                  zona de alto crecimiento turístico.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2">
                <div className="w-12 h-[2px] bg-[#5bc0de]" />
                <span className="text-sm text-[#0a3d4a]/60 uppercase tracking-wider">Donde la tranquilidad encuentra su hogar</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://kimi-web-img.moonshot.cn/img/viajesikea.com/f42a14b7bc08109b58f7e29152cc024d3eedb0b3.jpg"
                alt="Río Blanco Patagonia"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#0a3d4a] text-white p-6 rounded-lg shadow-xl max-w-xs">
                <p className="font-display text-lg italic">"Donde el río susurra secretos de montaña"</p>
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
                icon: Mountain,
                title: 'Vistas a la Cordillera',
                description: 'Panoramas ininterrumpidas de montañas nevadas y glaciares durante todo el año.'
              },
              {
                icon: Droplets,
                title: 'Río de Agua Cristalina',
                description: 'Acceso privado a río de aguas cristalinas, ideal para pesca deportiva y navegación.'
              },
              {
                icon: Trees,
                title: 'Bosque Nativo',
                description: 'Entorno de bosque nativo preservado, con senderos para caminatas y observación de fauna.'
              },
              {
                icon: Shield,
                title: 'Seguridad Privada',
                description: 'Acceso controlado con vigilancia 24/7 y cercado perimetral completo.'
              },
              {
                icon: Check,
                title: 'Servicios Disponibles',
                description: 'Agua potable, electricidad y fibra óptica disponibles en cada parcela.'
              },
              {
                icon: MapPin,
                title: 'Acceso Pavimentado',
                description: 'A solo 1 hora de la ciudad más cercana, con camino pavimentado todo el año.'
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

export default RioBlanco;