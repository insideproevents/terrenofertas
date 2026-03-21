import { Mountain, Instagram, Facebook, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navegación',
      links: [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Destacados', href: '#catalogo' },
        { name: 'Catálogo', href: '#catalogo' },
        { name: 'Contacto', href: '#contacto' },
      ],
    },
    {
      title: 'Propiedades',
      links: [
        { name: 'Rivera de los Coigües', href: '#' },
        { name: 'Río Blanco', href: '#' },
        { name: 'Mañihuales', href: '#' },
        { name: 'Santuario Río Condor', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contacto@terrenofertas.cl', label: 'Email' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-[#0a3d4a] text-white overflow-hidden">
      {/* Top Border - Turquesa */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5bc0de]/50 to-transparent" />

      {/* Main Footer Content */}
      <div className="w-full px-6 lg:px-12 xl:px-20 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <a
                href="#inicio"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#inicio');
                }}
                className="flex items-center gap-3 mb-6 group"
              >
                <Mountain className="w-10 h-10 text-[#5bc0de] group-hover:scale-110 transition-transform duration-300" />
                <span className="font-light tracking-[0.25em] text-xl uppercase">
                  TERRENOFERTAS
                </span>
              </a>
              <p className="text-white/60 text-sm leading-relaxed font-light max-w-md mb-8">
                Especialistas en terrenos exclusivos de la Patagonia Chilena.
                Conectamos personas con la naturaleza a través de propiedades
                únicas donde los sueños encuentran su hogar.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    onClick={(e) => {
                      if (social.href.startsWith('#')) {
                        e.preventDefault();
                        scrollToSection(social.href);
                      }
                    }}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#5bc0de] hover:border-[#5bc0de] transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-white/70 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {footerLinks.map((column, index) => (
              <div key={index}>
                <h4 className="text-white text-sm tracking-[0.2em] uppercase font-light mb-6">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          if (link.href.startsWith('#')) {
                            e.preventDefault();
                            scrollToSection(link.href);
                          }
                        }}
                        className="text-white/60 text-sm font-light hover:text-[#5bc0de] transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full px-6 lg:px-12 xl:px-20 py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs font-light">
              © {currentYear} Terrenofertas. Todos los derechos reservados.
            </p>
            <p className="text-white/70 text-sm font-light">
              Diseñado por <a href="https://www.mimarcaenlinea.cl" target="_blank" rel="noopener noreferrer" className="text-[#5bc0de] hover:text-white transition-colors">Mi Marca en Linea</a>.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5">
        <div className="absolute inset-0 bg-gradient-radial from-white to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;
