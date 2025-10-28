import Layout from '@/react-app/components/Layout';
import { Building2, FileText, Shield, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router';

export default function BusinessLawPage() {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full mb-6">
              <Building2 className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Direito Empresarial</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-slate-900 leading-tight mb-8">
              Seu negócio
              <span className="italic font-normal text-blue-900"> estruturado</span>
              <br />
              <span className="font-bold text-blue-900">para crescer</span>.
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Mais de 200 empresas constituídas e estruturadas. Nossa expertise em direito empresarial 
              garante que seu negócio tenha a base jurídica sólida para crescer com segurança.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contato"
                className="bg-blue-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-colors inline-flex items-center justify-center"
              >
                Consulta Gratuita <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                Falar com Especialista
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Building2 className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Holdings Familiares</h3>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Estruturação patrimonial</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Planejamento sucessório</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Proteção patrimonial</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Otimização tributária</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <FileText className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Contratos Empresariais</h3>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Contratos sociais</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Acordos de sócios</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Contratos comerciais</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Due diligence</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Shield className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Marcas e Patentes</h3>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Registro de marcas</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Proteção de patentes</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Propriedade intelectual</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Defesa de direitos autorais</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Pronto para estruturar seu negócio?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Nossa equipe especializada está pronta para ajudar na constituição, estruturação 
              e crescimento sustentável da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contato"
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Agendar Consulta
              </Link>
              <Link 
                to="/contato"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Solicitar Proposta
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
