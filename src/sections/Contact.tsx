import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Sparkles } from 'lucide-react';

const Contact = () => {
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
    // Handle form submission
    alert('Gracias por contactarnos. Te responderemos pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+56 89608591',
      href: 'tel:+5689608591',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+56 89608591',
      href: 'https://wa.me/5689608591',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contacto@terrenofertas.cl',
      href: 'mailto:contacto@terrenofertas.cl',
    },
    {
      icon: MapPin,
      label: 'Oficina',
      value: 'Las Condes, Santiago, Chile',
    },
    {
      icon: Clock,
      label: 'Horario',
      value: 'Lun - Vie: 9:00 - 18:00',
    },
    {
      icon: Sparkles,
      label: 'Diseñado por',
      value: 'Mi Marca en Linea',
      href: 'https://www.mimarcaenlinea.cl',
    },
  ];

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#e8f7fa]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://kimi-web-img.moonshot.cn/img/elements-resized.envatousercontent.com/ed69504d6723c40b6f8a2a175679f203f6dd41b7.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-[#0f6b7d] text-sm tracking-[0.3em] uppercase font-light block mb-4">
              Asesoría Personalizada
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#0a3d4a] font-light mb-6">
              Comencemos tu <span className="italic">Historia</span>
            </h2>
            <div className="w-24 h-px bg-[#5bc0de] mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              <p className="text-[#4a6572] text-lg leading-relaxed font-light mb-10">
                Cada terreno cuenta una historia única. Permítenos ayudarte a
                encontrar el lugar donde comenzará la tuya. Nuestro equipo de
                expertos está listo para guiarte en cada paso del camino.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href || '#'}
                    target={item.href?.startsWith('http') ? '_blank' : undefined}
                    rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 p-4 bg-white/50 backdrop-blur-sm border border-[#0a3d4a]/10 hover:bg-white/80 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#0f6b7d]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#0f6b7d]" />
                    </div>
                    <div>
                      <div className="text-[#4a6572] text-xs tracking-[0.15em] uppercase font-light mb-1">
                        {item.label}
                      </div>
                      <div className="text-[#0a3d4a] text-sm font-medium">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quote - Turquesa */}
              <div className="p-6 bg-[#0a3d4a] text-white">
                <div className="quote-mark text-4xl mb-2 opacity-40">"</div>
                <p className="font-display text-xl italic mb-4">
                  La naturaleza no es un lugar para visitar. Es el hogar.
                </p>
                <p className="text-white/60 text-sm">
                  — Gabriela Mistral
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-10'
              }`}
            >
              <form
                onSubmit={handleSubmit}
                className="p-8 md:p-10 bg-white shadow-xl border border-[#0a3d4a]/5"
              >
                <h3 className="font-display text-2xl text-[#0a3d4a] mb-8">
                  Solicitar Información
                </h3>

                <div className="space-y-6">
                  <div>
                    <label className="block text-[#4a6572] text-xs tracking-[0.15em] uppercase font-light mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-[#0a3d4a]/20 focus:border-[#0f6b7d] focus:outline-none transition-colors duration-300"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#4a6572] text-xs tracking-[0.15em] uppercase font-light mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-[#0a3d4a]/20 focus:border-[#0f6b7d] focus:outline-none transition-colors duration-300"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[#4a6572] text-xs tracking-[0.15em] uppercase font-light mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-[#0a3d4a]/20 focus:border-[#0f6b7d] focus:outline-none transition-colors duration-300"
                        placeholder="+56 89608591"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#4a6572] text-xs tracking-[0.15em] uppercase font-light mb-2">
                      Mensaje
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="w-full px-4 py-3 border border-[#0a3d4a]/20 focus:border-[#0f6b7d] focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Cuéntanos qué tipo de terreno buscas..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-glaciar w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#0a3d4a] text-white text-sm tracking-[0.15em] uppercase font-light hover:bg-[#0f6b7d] transition-all duration-500"
                  >
                    <span>Enviar Mensaje</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
