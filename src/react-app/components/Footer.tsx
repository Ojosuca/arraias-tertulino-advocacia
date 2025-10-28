import { Scale, MapPin, Phone, Mail, Linkedin, Instagram, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Arrais Tertulino</h3>
                <p className="text-blue-100 text-sm">Advocacia</p>
              </div>
            </div>
            
            <p className="text-blue-100 leading-relaxed mb-6 max-w-md">
              Há mais de 15 anos oferecendo soluções jurídicas de excelência, 
              sendo seu parceiro estratégico na resolução de desafios jurídicos empresariais.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-300 flex-shrink-0" />
                <span className="text-blue-100 text-sm">
                  Avenida Paulista, 1000 - Bela Vista, São Paulo/SP - CEP: 01310-100
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-300 flex-shrink-0" />
                <span className="text-blue-100 text-sm">
                  (11) 3000-0000 | (11) 99999-9999
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-300 flex-shrink-0" />
                <span className="text-blue-100 text-sm">
                  contato@arraisterte.com.br
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-blue-300 flex-shrink-0" />
                <span className="text-blue-100 text-sm">
                  Segunda à Sexta: 8h às 18h | Sábado: 8h às 12h
                </span>
              </div>
            </div>
          </div>

          {/* Areas de Atuação */}
          <div>
            <h4 className="text-lg font-bold mb-6">Áreas de Atuação</h4>
            <ul className="space-y-3">
              <li>
                <button className="text-blue-100 hover:text-white transition-colors text-sm text-left">
                  Direito Tributário
                </button>
              </li>
              <li>
                <button className="text-blue-100 hover:text-white transition-colors text-sm text-left">
                  Direito Empresarial
                </button>
              </li>
              <li>
                <button className="text-blue-100 hover:text-white transition-colors text-sm text-left">
                  Direito Trabalhista
                </button>
              </li>
              <li>
                <button className="text-blue-100 hover:text-white transition-colors text-sm text-left">
                  Direito Médico
                </button>
              </li>
              <li>
                <button className="text-blue-100 hover:text-white transition-colors text-sm text-left">
                  Full Service
                </button>
              </li>
              <li>
                <button className="text-blue-100 hover:text-white transition-colors text-sm text-left">
                  Consultoria Jurídica
                </button>
              </li>
            </ul>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-blue-100 hover:text-white transition-colors text-sm"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-blue-100 hover:text-white transition-colors text-sm"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-blue-100 hover:text-white transition-colors text-sm"
                >
                  Especialidades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('team')}
                  className="text-blue-100 hover:text-white transition-colors text-sm"
                >
                  Nossa Equipe
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-blue-100 hover:text-white transition-colors text-sm"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-blue-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
              <Linkedin className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
              <Instagram className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
              <Mail className="w-5 h-5" />
            </button>
          </div>

          <div className="text-center md:text-right">
            <p className="text-blue-200 text-sm">
              © {currentYear} Arrais Tertulino Advocacia. Todos os direitos reservados.
            </p>
            <p className="text-blue-300 text-xs mt-1">
              OAB/SP - Ordem dos Advogados do Brasil, Seccional São Paulo
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-blue-200">
            <div className="flex space-x-4 mb-2 md:mb-0">
              <button className="hover:text-white transition-colors">Política de Privacidade</button>
              <button className="hover:text-white transition-colors">Termos de Uso</button>
              <button className="hover:text-white transition-colors">Código de Ética</button>
            </div>
            <p>Desenvolvido com excelência para defender seus direitos</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
