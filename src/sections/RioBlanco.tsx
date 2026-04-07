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
          <p className="text-sm uppercase tracking-[0.3em] text-white mb-6">Patagonia Chilena</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
            Río <span className="italic text-[#5bc0de]">Blanco</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-4 max-w-2xl mx-auto leading-relaxed text-white/90">
            Un refugio exclusivo en plena naturaleza patagónica. 
            Parcelas con vistas a montañas nevadas, ríos cristalinos y bosques nativos.
            Vive tu propio refugio a 15 minutos de Puerto Aysén.
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

      {/* Video Section */}
      <section className="py-12 bg-[#e8f4f8]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <video
              src="/rioblanco/Reel_Rio_blanco.mp4"
              controls
              autoPlay
              loop
              playsInline
              className="w-full h-auto"
            >
              Tu navegador no soporta el video.
            </video>
          </div>
        </div>
      </section>

      {/* Caracteristicas del Proyecto Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Imagenes a la izquierda */}
            <div className="lg:col-span-7 grid grid-cols-3 gap-4">
              {['000', '001', '002', '003', '004', '005', '006', '007', '008', '009', '010', '011'].map((num, index) => (
                <div 
                  key={num} 
                  className={`overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 ${
                    index === 0 ? 'col-span-2 row-span-2' : ''
                  }`}
                >
                  <img
                    src={`/rioblanco/caracteristicas/caract_${num}.jpg`}
                    alt={`Característica ${num}`}
                    className={`w-full object-cover hover:scale-105 transition-transform duration-500 ${
                      index === 0 ? 'h-full' : 'h-40'
                    }`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            
            {/* Texto a la derecha */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <p className="text-xs uppercase tracking-[0.3em] text-[#0a3d4a]/60 mb-4">Detalles del Proyecto</p>
              <h2 className="font-display text-4xl md:text-5xl text-[#0a3d4a] mb-8">
                Características del <span className="italic text-[#5bc0de]">Proyecto</span>
              </h2>
              <div className="space-y-6 text-[#0a3d4a]/80 leading-relaxed">
                <p className="text-lg">
                  <strong className="text-[#0a3d4a]">Río Blanco</strong> ofrece un entorno exclusivo 
                  donde la naturaleza y el confort se unen. Cada parcela ha sido diseñada para 
                  maximizar las vistas y la privacidad de sus propietarios.
                </p>
                <ul className="space-y-4 mt-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#5bc0de] rounded-full mt-2" />
                    <span>Parcelas de 5.000 a 10.000 m²</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#5bc0de] rounded-full mt-2" />
                    <span>Todos los terrenos se entregan estacados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#5bc0de] rounded-full mt-2" />
                    <span>14 Terrenos a orillas del cauce de agua dulce proveniente de glaciares</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#5bc0de] rounded-full mt-2" />
                    <span>Camino interior de servidumbre del proyecto realizado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#5bc0de] rounded-full mt-2" />
                    <span>Todas las parcelas tienen acceso a orilla del Río Blanco a través de una servidumbre</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#5bc0de] rounded-full mt-2" />
                    <span>A 15 minutos de Puerto Aysén por caminos bien mantenidos todo el año</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#5bc0de] rounded-full mt-2" />
                    <span>Terrenos aprobados por el SAG. Entrega inmediata</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
                  Río Blanco es un santuario natural ubicado en el corazón de la Patagonia chilena. 
                  Este proyecto ofrece parcelas de entre 5.000 y 10.000 m², cada una con acceso directo 
                  a un río de aguas cristalinas y vistas privilegiadas a la cordillera de los Andes.
                </p>
                <p>
                  Inviertes en un lugar donde la tranquilidad es pan de cada día, la seguridad es 
                  constante y puedes disfrutar de una calidad de vida diferente a los estándares de la ciudad.
                </p>
                <p>
                  Además, estás en una región de Chile que, gracias a las lluvias que alimentan un rico 
                  sistema hídrico de ríos, lagos y lagunas, es nacional e internacionalmente reconocida 
                  como Reserva de Vida y de Agua, descartando futuros problemas con el agua.
                </p>
                <p>
                  Es una región que también está creciendo en temas de energías limpias y renovables, 
                  lo que te permite proyectar una vida siempre rodeada de un entorno prístino y limpio. 
                  Además, aparte de los caminos, no existe intervención humana, lo que te asegura un 
                  entorno puro y seguro para que puedas vivir tranquilo en tu propio espacio.
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

      {/* Gallery Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#0a3d4a]/60 mb-4">Galería</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#0a3d4a]">
              Galería <span className="italic text-[#5bc0de]">Río Blanco</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['001', '002', '003', '004', '005', '006', '007', '008', '009', '010', '011', '012', '013', '014', '015', '016', '018', '019', '020', '021'].map((num) => (
              <div
                key={num}
                className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={`/rioblanco/galeria/rio_blanco_${num}.jpg`}
                  alt={`Río Blanco ${num}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tomas Aereas Section */}
      <section className="py-24 lg:py-32 bg-[#e8f4f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#0a3d4a]/60 mb-4">Fotos Aéreas</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#0a3d4a]">
              Tomas Aereas del <span className="italic text-[#5bc0de]">Proyecto</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'DJI_0087-HDR', 'DJI_0093-HDR', 'DJI_0097-HDR', 'DJI_0100-HDR',
              'DJI_0192-HDR', 'DJI_0198-HDR', 'DJI_0208-HDR', 'DJI_0214-HDR',
              'DJI_0226-HDR', 'DJI_0260-HDR', 'DJI_0314-HDR', 'DJI_0520-HDR',
              'DJI_0606-HDR', 'DJI_0613-HDR', 'DJI_0623-HDR', '18102022-DJI_0623-HDR'
            ].map((name) => (
              <div
                key={name}
                className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={`/rioblanco/dron/${name}.jpg`}
                  alt={`Toma aérea ${name}`}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 lg:py-32 bg-[#e8f4f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#0a3d4a]/60 mb-4">Mapa</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#0a3d4a]">
              Ubicación <span className="italic text-[#5bc0de]">Río Blanco</span>
            </h2>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              src="https://www.google.com/maps?q=-45.6157778,-72.8013056&hl=es&z=14&output=embed"
              title="Mapa de Río Blanco"
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

export default RioBlanco;