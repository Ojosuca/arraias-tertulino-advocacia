import { Scale, Award, Users, MapPin, Phone, Mail } from 'lucide-react';

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            NOSSA EQUIPE
          </div>
          <h2 className="text-5xl font-light text-slate-900 leading-tight mb-8">
            Profissionais
            <span className="italic font-normal text-blue-900"> especializados</span>
            <br />
            <span className="font-bold text-blue-900">à sua disposição.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Nossa equipe multidisciplinar combina experiência, inovação e dedicação 
            para entregar resultados excepcionais em todas as áreas de atuação.
          </p>
        </div>

        {/* Main Team Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Founder/Partner */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face" 
                  alt="Dr. Arrais Tertulino" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Dr. Arrais Tertulino</h3>
              <p className="text-blue-100 mb-4">Sócio Fundador</p>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Mais de 15 anos de experiência em Direito Tributário e Empresarial. 
                Especialista em planejamento tributário e recuperação de créditos.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>OAB/SP 123.456</span>
                </div>
              </div>
            </div>
          </div>

          {/* Senior Associate */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-blue-100 group hover:shadow-xl transition-all">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b890?w=120&h=120&fit=crop&crop=face" 
                  alt="Dra. Ana Silva" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Dra. Ana Silva</h3>
              <p className="text-blue-900 mb-4">Sócia</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Especialista em Direito Empresarial e Trabalhista. Mestre em Direito Comercial 
                com foco em fusões e aquisições.
              </p>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center justify-center space-x-2">
                  <Award className="w-4 h-4 text-blue-900" />
                  <span>OAB/SP 234.567</span>
                </div>
              </div>
            </div>
          </div>

          {/* Associate */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-blue-100 group hover:shadow-xl transition-all">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face" 
                  alt="Dr. Carlos Santos" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Dr. Carlos Santos</h3>
              <p className="text-blue-900 mb-4">Advogado Sênior</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Especialista em Contencioso Tributário e Direito Médico. 
                Pós-graduado em Direito Sanitário e Tributação.
              </p>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center justify-center space-x-2">
                  <Award className="w-4 h-4 text-blue-900" />
                  <span>OAB/SP 345.678</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Information */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Nosso Escritório</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Localizado estrategicamente na Avenida Paulista, nosso escritório oferece 
                um ambiente moderno e profissional para atendimento aos nossos clientes.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Endereço</h4>
                    <p className="text-slate-600 text-sm">
                      Avenida Paulista, 1000<br />
                      Bela Vista - São Paulo/SP<br />
                      CEP: 01310-100
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Telefones</h4>
                    <p className="text-slate-600 text-sm">
                      (11) 3000-0000<br />
                      (11) 99999-9999
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <p className="text-slate-600 text-sm">
                      contato@arraisterte.com.br
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden">
                <img 
                  src="https://mocha-cdn.com/0199e08f-ada8-7240-a4b6-c5a01fe4e06a/team-photo.jpg"
                  alt="Equipe Arrais Tertulino" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Scale className="w-8 h-8 text-blue-900" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Ética & Transparência</h3>
            <p className="text-slate-600 leading-relaxed">
              Conduzimos todos os nossos trabalhos com os mais altos padrões éticos 
              e transparência total com nossos clientes.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-blue-900" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Excelência Técnica</h3>
            <p className="text-slate-600 leading-relaxed">
              Nossa equipe mantém constante atualização e especialização 
              para entregar sempre o melhor resultado.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-blue-900" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Compromisso</h3>
            <p className="text-slate-600 leading-relaxed">
              Estamos comprometidos com o sucesso dos nossos clientes 
              e trabalhamos incansavelmente para alcançar os melhores resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
