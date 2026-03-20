import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail, Clock, Send, ChevronDown, Trees, Droplets, Route, Shield, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#e8f4f8]">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#0d3b3f] shadow-lg' : 'bg-[#0d3b3f]/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 30L18 6L30 30" stroke="#4ecdc4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 22H26" stroke="#4ecdc4" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="18" cy="18" r="2" fill="#4ecdc4"/>
              </svg>
              <span className="text-white text-lg font-medium tracking-wider">TERRENOFERTAS</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="/" className="text-sm text-white/80 hover:text-white transition-colors uppercase tracking-wider">Inicio</a>
              <a href="#" className="text-sm text-white/80 hover:text-white transition-colors uppercase tracking-wider">Catálogo Nacional</a>
              <a href="#" className="text-sm text-white/80 hover:text-white transition-colors uppercase tracking-wider">Catálogo Internacional</a>
              <a href="#contacto" onClick={() => scrollToSection('contacto')} className="text-sm text-white/80 hover:text-white transition-colors uppercase tracking-wider">Contacto</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#0d3b3f] border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              <a href="/" className="block py-2 text-white/80 hover:text-white">Inicio</a>
              <a href="#" className="block py-2 text-white/80 hover:text-white">Catálogo Nacional</a>
              <a href="#" className="block py-2 text-white/80 hover:text-white">Catálogo Internacional</a>
              <a href="#contacto" onClick={() => scrollToSection('contacto')} className="block py-2 text-white/80 hover:text-white">Contacto</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-river.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d3b3f]/60 via-[#0d3b3f]/40 to-[#0d3b3f]/70" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#4ecdc4] mb-6">Patagonia Norte, Chile</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
            Rivera de los<br />
            <span className="italic text-[#4ecdc4]">Coigües</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-4 max-w-2xl mx-auto leading-relaxed text-white/90">
            Tu vida junto a la naturaleza, en un entorno privilegiado.
            Parcelas frente al Río Cóndor, acceso a senderos, bosque nativo y unas vistas de ensueño.
          </p>
          <div className="mt-10">
            <p className="text-sm uppercase tracking-[0.2em] mb-2 text-white/70">Desde</p>
            <p className="text-4xl md:text-5xl font-serif">$6.990.000</p>
          </div>
          <div className="mt-10">
            <Button 
              onClick={() => scrollToSection('caracteristicas')}
              className="bg-transparent border-2 border-white/50 text-white hover:bg-white hover:text-[#0d3b3f] px-8 py-6 text-sm uppercase tracking-wider transition-all"
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
              <p className="text-xs uppercase tracking-[0.3em] text-[#0d3b3f]/60 mb-4">Sobre el Proyecto</p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#0d3b3f] mb-8 title-underline">
                Un Proyecto Único en la <span className="italic text-[#4ecdc4]">Patagonia</span> Chilena
              </h2>
              <div className="space-y-6 text-[#0d3b3f]/80 leading-relaxed">
                <p>
                  Ribera de los Coigües es mucho más que un proyecto inmobiliario: es un{' '}
                  <strong className="text-[#0d3b3f]">refugio natural junto al Río Cóndor</strong>, 
                  donde cada parcela cuenta una historia de respeto, conexión y futuro. Aquí, 
                  entre senderos milenarios, cascadas escondidas y bosque nativo protegido, 
                  la vida vuelve a fluir con sentido profundo y auténtico.
                </p>
                <p>
                  Este santuario natural se extiende por más de{' '}
                  <strong className="text-[#0d3b3f]">33 hectáreas de pura naturaleza</strong>, 
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
                <div className="w-12 h-[2px] bg-[#4ecdc4]" />
                <span className="text-sm text-[#0d3b3f]/60 uppercase tracking-wider">Baja intervención, alta proyección</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/forest-trail.jpg" 
                alt="Bosque nativo de la Patagonia"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#4ecdc4]/20 rounded-sm -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#0d3b3f]/10 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#0d3b3f]/60 mb-4">Características del Proyecto</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0d3b3f] title-underline">
              Opciones de <span className="italic text-[#4ecdc4]">Terrenos</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Terrenos Interiores */}
            <div className="bg-[#e8f4f8] rounded-sm overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="h-56 bg-gradient-to-br from-[#0d3b3f]/10 to-[#4ecdc4]/10 flex items-center justify-center">
                <Trees className="w-16 h-16 text-[#0d3b3f]" />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl text-[#0d3b3f] mb-2">Terrenos Interiores</h3>
                <p className="text-sm text-[#0d3b3f]/50 mb-4 uppercase tracking-wider">desde</p>
                <p className="text-4xl font-serif text-[#0d3b3f] mb-2">$6.990.000</p>
                <p className="text-sm text-[#0d3b3f]/70">Cuota desde $291.000/mes</p>
                <div className="mt-6 pt-6 border-t border-[#0d3b3f]/10">
                  <ul className="space-y-2 text-sm text-[#0d3b3f]/70">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#4ecdc4]" /> Acceso a senderos</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#4ecdc4]" /> Bosque nativo</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#4ecdc4]" /> Vistas panorámicas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Terrenos Orilla de río */}
            <div className="bg-[#0d3b3f] rounded-sm overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="h-56 bg-gradient-to-br from-[#4ecdc4]/20 to-[#0d3b3f] flex items-center justify-center">
                <Droplets className="w-16 h-16 text-[#4ecdc4]" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#4ecdc4] text-[#0d3b3f] text-xs px-2 py-1 uppercase tracking-wider">Destacado</span>
                </div>
                <h3 className="font-serif text-2xl text-white mb-2">Orilla de Río</h3>
                <p className="text-sm text-white/50 mb-4 uppercase tracking-wider">desde</p>
                <p className="text-4xl font-serif text-white mb-2">$14.990.000</p>
                <p className="text-sm text-white/70">Cuota desde $625.000/mes</p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <ul className="space-y-2 text-sm text-white/70">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#4ecdc4]" /> Acceso directo al río</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#4ecdc4]" /> 500m de ribera</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#4ecdc4]" /> Privacidad garantizada</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Terrenos Orilla de camino */}
            <div className="bg-[#e8f4f8] rounded-sm overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="h-56 bg-gradient-to-br from-[#0d3b3f]/10 to-[#4ecdc4]/10 flex items-center justify-center">
                <Route className="w-16 h-16 text-[#0d3b3f]" />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl text-[#0d3b3f] mb-2">Orilla de Camino</h3>
                <p className="text-sm text-[#0d3b3f]/50 mb-4 uppercase tracking-wider">desde</p>
                <p className="text-4xl font-serif text-[#0d3b3f] mb-2">$10.990.000</p>
                <p className="text-sm text-[#0d3b3f]/70">Cuota desde $458.000/mes</p>
                <div className="mt-6 pt-6 border-t border-[#0d3b3f]/10">
                  <ul className="space-y-2 text-sm text-[#0d3b3f]/70">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#4ecdc4]" /> Fácil acceso</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#4ecdc4]" /> Caminos pavimentados</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#4ecdc4]" /> Todo el año</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 lg:py-32 bg-[#0d3b3f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#4ecdc4] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4ecdc4] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed">
            "Hay lugares que no se explican.<br />
            <span className="italic text-[#4ecdc4]">Se sienten</span>"
          </p>
        </div>
      </section>

      {/* Master Plan Section */}
      <section className="py-24 lg:py-32 bg-[#e8f4f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#0d3b3f]/60 mb-4">Ubicación</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0d3b3f] title-underline">
              Master <span className="italic text-[#4ecdc4]">Plan</span>
            </h2>
            <p className="text-[#0d3b3f]/70 mt-8 max-w-2xl mx-auto">
              Conoce la distribución de parcelas y las áreas comunes del proyecto
            </p>
          </div>
          
          <div className="relative rounded-sm overflow-hidden shadow-2xl">
            <img 
              src="/master-plan.jpg" 
              alt="Master Plan Ribera de los Coigües"
              className="w-full h-[400px] lg:h-[550px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d3b3f]/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-sm">
                  <MapPin className="w-5 h-5 text-[#4ecdc4]" />
                  <span className="text-sm font-medium text-[#0d3b3f]">33 hectáreas</span>
                </div>
                <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-sm">
                  <Droplets className="w-5 h-5 text-[#4ecdc4]" />
                  <span className="text-sm font-medium text-[#0d3b3f]">500m de ribera</span>
                </div>
                <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-sm">
                  <Shield className="w-5 h-5 text-[#4ecdc4]" />
                  <span className="text-sm font-medium text-[#0d3b3f]">Áreas protegidas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#0d3b3f]/60 mb-4">Asesoría Personalizada</p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#0d3b3f] mb-8 title-underline">
                Comencemos tu <span className="italic text-[#4ecdc4]">Historia</span>
              </h2>
              <p className="text-[#0d3b3f]/70 leading-relaxed mb-12">
                Cada terreno cuenta una historia única. Permítenos ayudarte a encontrar el lugar 
                donde comenzará la tuya. Nuestro equipo de expertos está listo para guiarte en cada paso del camino.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e8f4f8] rounded-sm flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#4ecdc4]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#0d3b3f]/50 mb-1">Teléfono</p>
                    <p className="text-[#0d3b3f] font-medium">+56 89608591</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e8f4f8] rounded-sm flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#4ecdc4]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#0d3b3f]/50 mb-1">Email</p>
                    <p className="text-[#0d3b3f] font-medium">contacto@terrenofertas.cl</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e8f4f8] rounded-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#4ecdc4]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#0d3b3f]/50 mb-1">Oficina</p>
                    <p className="text-[#0d3b3f] font-medium">Las Condes, Santiago, Chile</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#e8f4f8] rounded-sm flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#4ecdc4]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#0d3b3f]/50 mb-1">Horario</p>
                    <p className="text-[#0d3b3f] font-medium">Lun - Vie: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-12 bg-[#0d3b3f] p-8 rounded-sm">
                <p className="font-serif text-xl text-white/90 italic leading-relaxed">
                  "La naturaleza no es un lugar para visitar. Es el hogar."
                </p>
                <p className="text-white/60 mt-4 text-sm">— Gabriela Mistral</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#e8f4f8] p-8 lg:p-12 rounded-sm">
              <h3 className="font-serif text-2xl text-[#0d3b3f] mb-8">Solicitar Información</h3>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="nombre" className="text-xs uppercase tracking-wider text-[#0d3b3f]/60 mb-2 block">Nombre Completo</Label>
                  <Input 
                    id="nombre" 
                    placeholder="Tu nombre"
                    className="bg-white border-0 focus:ring-2 focus:ring-[#4ecdc4] h-12"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-xs uppercase tracking-wider text-[#0d3b3f]/60 mb-2 block">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="tu@email.com"
                      className="bg-white border-0 focus:ring-2 focus:ring-[#4ecdc4] h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="telefono" className="text-xs uppercase tracking-wider text-[#0d3b3f]/60 mb-2 block">Teléfono</Label>
                    <Input 
                      id="telefono" 
                      placeholder="+56 9..."
                      className="bg-white border-0 focus:ring-2 focus:ring-[#4ecdc4] h-12"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="mensaje" className="text-xs uppercase tracking-wider text-[#0d3b3f]/60 mb-2 block">Mensaje</Label>
                  <Textarea 
                    id="mensaje" 
                    placeholder="Cuéntanos qué tipo de terreno buscas..."
                    className="bg-white border-0 focus:ring-2 focus:ring-[#4ecdc4] min-h-[120px] resize-none"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-[#0d3b3f] hover:bg-[#1a5a5e] text-white py-6 text-sm uppercase tracking-wider transition-all"
                >
                  Enviar Mensaje
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d3b3f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <a href="/" className="flex items-center gap-3 mb-6">
                <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 30L18 6L30 30" stroke="#4ecdc4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 22H26" stroke="#4ecdc4" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="18" cy="18" r="2" fill="#4ecdc4"/>
                </svg>
                <span className="text-xl font-medium tracking-wider">TERRENOFERTAS</span>
              </a>
              <p className="text-white/60 leading-relaxed max-w-md">
                Especialistas en terrenos exclusivos de la Patagonia Chilena. Conectamos personas 
                con la naturaleza a través de propiedades únicas donde los sueños encuentran su hogar.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6">Navegación</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-white/70 hover:text-[#4ecdc4] transition-colors">Inicio</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#4ecdc4] transition-colors">Catálogo Nacional</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#4ecdc4] transition-colors">Catálogo Internacional</a></li>
                <li><a href="#contacto" className="text-white/70 hover:text-[#4ecdc4] transition-colors">Contacto</a></li>
              </ul>
            </div>

            {/* Properties */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6">Propiedades</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/70 hover:text-[#4ecdc4] transition-colors">Rivera de los Coigües</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#4ecdc4] transition-colors">Río Blanco</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#4ecdc4] transition-colors">Mañihuales</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#4ecdc4] transition-colors">Santuario Río Condor</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © 2026 Terrenofertas. Todos los derechos reservados.
            </p>
            <p className="text-white/40 text-sm">
              Diseñado por <span className="text-[#4ecdc4]">Mi Marca en Linea</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
