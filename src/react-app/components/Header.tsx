import { useState } from 'react';
import { Menu, X, Scale } from 'lucide-react';
import { Link } from 'react-router';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">Arrais Tertulino</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              Início
            </Link>
            <Link 
              to="/servicos"
              className="text-slate-700 hover:text-blue-900 transition-colors font-medium"
            >
              Especialidades
            </Link>
            <Link 
              to="/sobre"
              className="text-slate-700 hover:text-blue-900 transition-colors font-medium"
            >
              Sobre
            </Link>
            <Link 
              to="/equipe"
              className="text-slate-700 hover:text-blue-900 transition-colors font-medium"
            >
              Equipe
            </Link>
            <Link 
              to="/contato"
              className="text-slate-700 hover:text-blue-900 transition-colors font-medium"
            >
              Contato
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/servicos"
              className="text-blue-900 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors border border-blue-900"
            >
              Serviços
            </Link>
            <Link 
              to="/contato"
              className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Consulta Gratuita
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-slate-900 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg border-t border-slate-200/50">
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-slate-700 hover:text-slate-900 py-2 font-medium"
              >
                Início
              </Link>
              <Link 
                to="/servicos"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-slate-700 hover:text-blue-900 py-2 font-medium"
              >
                Especialidades
              </Link>
              <Link 
                to="/sobre"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-slate-700 hover:text-blue-900 py-2 font-medium"
              >
                Sobre
              </Link>
              <Link 
                to="/equipe"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-slate-700 hover:text-blue-900 py-2 font-medium"
              >
                Equipe
              </Link>
              <Link 
                to="/contato"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left text-slate-700 hover:text-blue-900 py-2 font-medium"
              >
                Contato
              </Link>
              <div className="pt-4 border-t border-slate-200">
                <Link 
                  to="/contato"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-blue-900 text-white px-4 py-3 rounded-lg hover:bg-blue-800 transition-colors text-center font-medium"
                >
                  Consulta Gratuita
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
