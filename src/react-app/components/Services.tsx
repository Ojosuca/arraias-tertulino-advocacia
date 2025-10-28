import { 
  Calculator,
  Building2, 
  ArrowRight,
  Shield,
  Users,
  FileText,
  Stethoscope,
  Scale
} from 'lucide-react';
import { Link } from 'react-router';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            ÁREAS DE ATUAÇÃO
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-slate-900 leading-tight mb-8">
            Expertise que 
            <span className="italic font-normal text-blue-900"> protege</span>
            <br />
            e <span className="font-bold text-blue-900">impulsiona</span> seu negócio.
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Soluções jurídicas inovadoras e personalizadas. Enfrentamos os desafios 
            do mercado com segurança, eficiência e expertise comprovada.
          </p>
        </div>

        {/* Main Practice Areas */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Direito Tributário */}
          <Link to="/direito-tributario" className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-all cursor-pointer">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:animate-pulse group-hover:scale-110 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Calculator className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Direito Tributário</h3>
              <ul className="space-y-2 text-blue-100 mb-6">
                <li>• Recuperação de crédito</li>
                <li>• Negociação com Receita e PGFN</li>
                <li>• Planejamento tributário estratégico</li>
                <li>• Redução de impostos</li>
                <li>• Auditoria fiscal</li>
                <li>• Contencioso tributário</li>
              </ul>
              <div className="text-white font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                Saiba mais <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </div>
          </Link>

          {/* Direito Empresarial */}
          <Link to="/direito-empresarial" className="bg-gradient-to-br from-blue-800 to-blue-700 rounded-3xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-all cursor-pointer">
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 group-hover:animate-bounce group-hover:scale-125 transition-all duration-700"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Direito Empresarial</h3>
              <ul className="space-y-2 text-blue-100 mb-6">
                <li>• Holdings familiares</li>
                <li>• Contratos empresariais</li>
                <li>• Constituições e alterações</li>
                <li>• Acordos de sócios</li>
                <li>• Registros de marcas e patentes</li>
                <li>• Novos negócios e expansões</li>
              </ul>
              <div className="text-white font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                Saiba mais <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </div>
          </Link>

          {/* Direito Trabalhista */}
          <Link to="/direito-trabalhista" className="bg-gradient-to-br from-blue-700 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-all cursor-pointer">
            <div className="absolute top-1/2 right-0 w-20 h-20 bg-white/10 rounded-full group-hover:animate-ping group-hover:scale-150 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Scale className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Direito Trabalhista</h3>
              <ul className="space-y-2 text-blue-100 mb-6">
                <li>• Atuação preventiva</li>
                <li>• Defesa jurídica especializada</li>
                <li>• Documentos internos</li>
                <li>• Compliance trabalhista</li>
                <li>• Processos administrativos</li>
                <li>• Consultoria em RH</li>
              </ul>
              <div className="text-white font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                Saiba mais <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </div>
          </Link>
        </div>

        {/* Secondary Areas */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Direito Médico */}
          <Link to="/direito-medico" className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-3xl p-8 border border-blue-200 group hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-800 group-hover:rotate-6 transition-all duration-300">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Direito Médico</h3>
                <ul className="space-y-2 text-slate-700 mb-6">
                  <li>• Planejamento tributário para profissionais da saúde</li>
                  <li>• Termos e documentos internos especializados</li>
                  <li>• Treinamentos e capacitação</li>
                  <li>• Compliance médico</li>
                </ul>
                <div className="text-blue-900 font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                  Saiba mais <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>
          </Link>

          {/* Full Service */}
          <Link to="/servicos" className="bg-gradient-to-r from-slate-100 to-blue-100 rounded-3xl p-8 border border-blue-200 group hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-800 group-hover:-rotate-6 transition-all duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Full Service</h3>
                <ul className="space-y-2 text-slate-700 mb-6">
                  <li>• Consultoria jurídica completa</li>
                  <li>• Elaboração de contratos</li>
                  <li>• Assessoria em processos judiciais</li>
                  <li>• Pareceres jurídicos especializados</li>
                </ul>
                <div className="text-blue-900 font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                  Saiba mais <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Precisa de uma solução jurídica personalizada?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para analisar seu caso e oferecer as melhores estratégias jurídicas 
            para proteger e impulsionar seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contato"
              className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors"
            >
              Consulta Gratuita
            </Link>
            <Link 
              to="/contato"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Falar com Especialista
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-900" />
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-2">500+</div>
            <div className="text-slate-600">Clientes Atendidos</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-900" />
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-2">15+</div>
            <div className="text-slate-600">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-8 h-8 text-blue-900" />
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-2">R$ 50M+</div>
            <div className="text-slate-600">Recuperados em Tributos</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-blue-900" />
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-2">200+</div>
            <div className="text-slate-600">Empresas Constituídas</div>
          </div>
        </div>
      </div>
    </section>
  );
}
