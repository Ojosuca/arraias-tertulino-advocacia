import { Shield, Target, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              SOBRE ARRAIS TERTULINO
            </div>
            <h2 className="text-5xl font-light text-slate-900 leading-tight">
              Seu parceiro
              <span className="italic font-normal text-blue-900"> estratégico</span> em
              <br />
              <span className="font-bold text-blue-900">soluções jurídicas.</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Há mais de 15 anos oferecendo expertise em soluções inovadoras e personalizadas 
              para proteger e impulsionar negócios. Enfrentamos os desafios do mercado com 
              segurança, eficiência e resultados comprovados.
            </p>

            {/* Values */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Missão</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Enfrentar os desafios do mercado com segurança e eficiência, oferecendo 
                    soluções jurídicas que realmente fazem a diferença no crescimento dos nossos clientes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Valores</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Confiança, inovação, excelência e compromisso com resultados. Cada caso é tratado 
                    com dedicação máxima e estratégias personalizadas para o sucesso do cliente.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Professional Image */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl overflow-hidden">
              <img 
                src="https://mocha-cdn.com/0199e08f-ada8-7240-a4b6-c5a01fe4e06a/law-office-hero.jpg"
                alt="Escritório Arrais Tertulino" 
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl border border-blue-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-1">R$ 50M+</div>
                <div className="text-sm text-slate-600">Recuperados em Tributos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Differentials Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              NOSSOS DIFERENCIAIS
            </div>
            <h2 className="text-4xl font-light text-slate-900 mb-2">
              Por que escolher a <span className="font-bold text-blue-900">Arrais Tertulino?</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Differential 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Award className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Expertise Comprovada</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Mais de 15 anos de experiência com resultados excepcionais. Nossa equipe possui 
                especialização nas principais áreas do direito empresarial e tributário.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-slate-600">500+ clientes atendidos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-slate-600">R$ 50M+ recuperados</span>
                </div>
              </div>
            </div>

            {/* Differential 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Users className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Atendimento Personalizado</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Cada cliente recebe um atendimento único e estratégias personalizadas. 
                Entendemos as particularidades do seu negócio e oferecemos soluções sob medida.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-slate-600">Consultoria estratégica</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-slate-600">Acompanhamento contínuo</span>
                </div>
              </div>
            </div>

            {/* Differential 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Shield className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Inovação & Tecnologia</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Utilizamos as mais modernas ferramentas tecnológicas e metodologias inovadoras 
                para otimizar processos e entregar resultados superiores.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-slate-600">Processos digitalizados</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-slate-600">Análises automatizadas</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              DEPOIMENTOS
            </div>
            <h2 className="text-4xl font-light text-slate-900 mb-2">
              O que nossos <span className="font-bold text-blue-900">clientes dizem</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex-shrink-0 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b890?w=80&h=80&fit=crop&crop=face" 
                    alt="Cliente" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <blockquote className="text-lg text-slate-900 mb-4 leading-relaxed">
                    "Arrais Tertulino nos ajudou a estruturar nossa holding familiar e otimizar nossa carga tributária. 
                    O resultado superou nossas expectativas. Profissionalismo exemplar."
                  </blockquote>
                  <div>
                    <p className="font-bold text-slate-900">Maria Silva</p>
                    <p className="text-slate-600 text-sm">CEO, Grupo Silva & Associados</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex-shrink-0 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" 
                    alt="Cliente" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <blockquote className="text-lg text-slate-900 mb-4 leading-relaxed">
                    "A equipe da Arrais Tertulino é excepcional. Recuperamos mais de R$ 2 milhões em créditos 
                    tributários. Recomendo para qualquer empresa que busca excelência jurídica."
                  </blockquote>
                  <div>
                    <p className="font-bold text-slate-900">Carlos Santos</p>
                    <p className="text-slate-600 text-sm">Diretor Financeiro, TechCorp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Pronto para ser nosso próximo case de sucesso?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Agende uma consulta gratuita e descubra como podemos impulsionar seu negócio 
              com soluções jurídicas estratégicas e inovadoras.
            </p>
            <Link 
              to="/contato"
              className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              Agendar Consulta Gratuita <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
