import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-800 text-white mt-16">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">DN</span>
                </div>
                <span className="text-xl font-bold">Diario Nacional</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Tu fuente confiable de noticias e información actualizada las 24 horas del día.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Secciones</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Política
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Economía
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Deportes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>📧 info@diarionacional.com</li>
                <li>📞 +1 (555) 123-4567</li>
                <li>📍 Ciudad, País</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2024 Diario Nacional. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer></div>
  )
}

export default Footer