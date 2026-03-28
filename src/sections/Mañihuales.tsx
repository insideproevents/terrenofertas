import { useEffect, useRef, useState } from 'react';
import { MapPin, Send, ChevronDown, Trees, Droplets, Check } from 'lucide-react';
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
          _subject: 'Nuevo contacto desde Praderas de Mañihuales',
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
            Un lugar único, inmerso en la naturaleza, rodeado de reservas y paisajes que inspiran. Con una ubicación privilegiada junto al Río Mañihuales y la icónica Carretera Austral.
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
                  <strong className="text-[#0a3d4a]">Praderas de Mañihuales</strong> es el lugar perfecto que está buscando al momento de pensar en inversión y conservación, y disfrutar de él desde el primer día.
                </p>
                <p>
                  Está estratégicamente ubicado a tan sólo 20 minutos de la ciudad de Puerto Aysén y sólo 15 minutos de pueblo Villa Mañihuales, donde encontrarás todo lo necesario para abastecerte.
                </p>
                <p>
                  ¿Porque <strong className="text-[#0a3d4a]">Praderas de Mañihuales</strong>?, en este proyecto podrás acceder de manera directa a través de la ruta 7 más conocida como la famosa carretera austral.
                </p>
                <p>
                  Las características de los terrenos en <strong className="text-[#0a3d4a]">Praderas de Mañihuales</strong> son planos, aprovechables, rodeado de zonas de reservas naturales, donde podrá disfrutar de sus imponentes paisajes, zonas de área común acompañado de su tan conocido Río Mañihuales.
                </p>
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
         ref={sectionRef}
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
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full w-full">
               {[
                 {
                   icon: Trees,
                   title: '23',
                   description: 'Parcelas planas, con hermosos bosques'
                 },
                 {
                   icon: Droplets,
                   title: '8',
                   description: 'Parcelas\nposeen acceso directo al Río Mañihuales'
                 },
                 {
                   icon: MapPin,
                   title: '',
                   description: 'Acceso Directo a la Carretera Ruta Austral'
                 },
                 {
                   icon: Droplets,
                   title: '1.5 Km',
                   description: 'de Orilla del Río Mañihuales'
                 },
                 {
                   icon: Droplets,
                   title: '',
                   description: 'Parcelas con factibilidad de agua'
                 },
                 {
                   icon: Trees,
                   title: '',
                   description: 'Zonas de Área Común, para disfrutar la naturaleza'
                 },
                 {
                   icon: MapPin,
                   title: '20 min / 15 min',
                   description: 'A 20 minutos de Puerto Aysén y 15 minutos del pueblo Villa Mañihuales'
                 },
                 {
                   icon: Check,
                   title: '',
                   description: 'Terrenos con rol propio y aprobación del SAG'
                 }
               ].map((feature, index) => (
                 <div 
                   key={index}
                   className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-all duration-500 ${
                     isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                   } text-center !important`}
                   style={{ transitionDelay: `${index * 100}ms` }}
                 >
                   <feature.icon className="w-12 h-12 text-[#5bc0de] mb-6" />
                   {feature.title ? <h3 className="font-display text-3xl text-white mb-2">{feature.title}</h3> : null}
                   <p className="text-white/70 leading-relaxed">{feature.description}</p>
                 </div>
               ))}
             </div>
             <div className="space-y-4">
               <img src="/mañihuales/caracteristicas_1.jpg" alt="Característica 1" className="w-full h-[480px] lg:h-[600px] object-cover rounded-2xl shadow-2xl" />
               <img src="/mañihuales/caracteristicas_2.jpg" alt="Característica 2" className="w-full h-[480px] lg:h-[600px] object-cover rounded-2xl shadow-2xl" />
             </div>
           </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#0a3d4a]/60 mb-4">Video</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#0a3d4a]">
              Conoce <span className="italic text-[#5bc0de]">Praderas de Mañihuales</span>
            </h2>
          </div>
          <div className="flex justify-center">
            <video
              controls
              className="rounded-lg shadow-2xl w-full"
              src="/mañihuales/manihuales-web.mp4"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 lg:py-32 bg-[#e8f4f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#0a3d4a]/60 mb-4">Galería</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#0a3d4a]">
              Galería <span className="italic text-[#5bc0de]">Mañihuales</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 18 }, (_, i) => {
              const num = String(i + 1).padStart(3, '0');
              return (
                <div
                  key={num}
                  className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <img
                    src={`/mañihuales/Mañihuales_${num}.jpg`}
                    alt={`Mañihuales ${num}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Master Plan Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#0a3d4a]/60 mb-4">Master Plan</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#0a3d4a]">
              Master <span className="italic text-[#5bc0de]">Plan</span>
            </h2>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              src="https://www.lanube360.com/praderas-de-manihuales/"
              title="Master Plan Praderas de Mañihuales"
            />
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