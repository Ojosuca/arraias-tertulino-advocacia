import { ArrowRight, Shield, Users, Play, Building2, Gavel } from 'lucide-react';
import { Link } from 'react-router';

export default function Hero() {

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Abstract Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-r from-blue-800 to-blue-600 rounded-full blur-3xl opacity-8 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full blur-2xl opacity-12 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Welcome Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-full text-slate-600 text-sm font-medium">
            BEM-VINDO À ARRAIAS TERTULINO
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-light text-slate-900 leading-tight mb-6">
            Seu Parceiro 
            <span className="font-normal italic text-blue-900"> Estratégico</span>
            <br />
            em <span className="font-bold text-blue-900">Soluções Jurídicas.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Expertise em soluções inovadoras e personalizadas para proteger e impulsionar 
            negócios. Enfrentamos os desafios do mercado com segurança e eficiência.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              to="/contato"
              className="bg-blue-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-800 transition-all"
            >
              Consulta Gratuita
            </Link>
            <Link 
              to="/servicos"
              className="text-blue-900 px-8 py-4 rounded-lg font-medium hover:text-blue-800 transition-all border border-blue-900 hover:bg-blue-50"
            >
              Nossas Especialidades
            </Link>
          </div>

          {/* Customer Avatars */}
          <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="flex -space-x-2">
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108755-2616b612b890?w=40&h=40&fit=crop&crop=face" alt="" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" alt="" />
            </div>
          </div>
          <div className="flex justify-center items-center text-sm text-slate-500">
            <Shield className="w-4 h-4 mr-1 text-amber-500" />
            Avaliado 4.9/5 por mais de 500+ clientes
          </div>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-20">
          {/* Card 1 - Direito Tributário */}
          <Link to="/direito-tributario" className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform cursor-pointer">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:animate-pulse group-hover:scale-110 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Direito Tributário</h3>
              <p className="text-blue-100 text-sm mb-4">Recuperação de crédito, negociação de dívidas e planejamento tributário estratégico.</p>
              <div className="text-white font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
                Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>

          {/* Card 2 - Direito Empresarial */}
          <Link to="/direito-empresarial" className="bg-gradient-to-br from-blue-800 to-blue-700 rounded-3xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform cursor-pointer">
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 group-hover:animate-bounce group-hover:scale-125 transition-all duration-700"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Direito Empresarial</h3>
              <p className="text-blue-100 text-sm mb-4">Holdings, contratos empresariais e registros de marcas para seu crescimento.</p>
              <div className="text-white font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
                Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>

          {/* Card 3 - Direito Trabalhista */}
          <Link to="/direito-trabalhista" className="bg-gradient-to-br from-blue-700 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform cursor-pointer">
            <div className="absolute top-1/2 right-0 w-20 h-20 bg-white/10 rounded-full group-hover:animate-ping group-hover:scale-150 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Gavel className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Direito Trabalhista</h3>
              <p className="text-blue-100 text-sm mb-4">Atuação preventiva, defesa jurídica e documentação interna especializada.</p>
              <div className="text-white font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
                Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>

          {/* Card 4 - Direito Médico */}
          <Link to="/direito-medico" className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform cursor-pointer">
            <div className="absolute top-0 left-1/2 w-16 h-16 bg-white/10 rounded-full -translate-y-8 group-hover:animate-spin group-hover:scale-125 transition-all duration-1000"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Direito Médico</h3>
              <p className="text-blue-100 text-sm mb-4">Planejamento tributário e documentação especializada para profissionais da saúde.</p>
              <div className="text-white font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
                Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>
        </div>

        {/* Bottom Section with Video */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
              SUCESSO DO CLIENTE
            </div>
            <h2 className="text-4xl font-light text-slate-900">
              "Arrais Tertulino é nosso 
              <span className="italic font-normal text-blue-900"> parceiro estratégico</span> 
              <span className="font-bold"> jurídico ideal.</span>"
            </h2>
            <button className="inline-flex items-center space-x-3 text-slate-600 hover:text-blue-900 transition-colors">
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                <Play className="w-5 h-5 text-white ml-1" />
              </div>
              <span className="font-medium">Conheça nossos cases (3:15)</span>
            </button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl h-80 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop" 
                alt="Cliente satisfeito" 
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
