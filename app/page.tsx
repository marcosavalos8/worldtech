"use client";

import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-blue-700 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              WORLD TECH IT SOLUTIONS
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-red-500 transition">Inicio</a>
              <a href="#servicios" className="hover:text-red-500 transition">Servicios</a>
              <a href="#nosotros" className="hover:text-red-500 transition">Nosotros</a>
              <a href="#contacto" className="hover:text-red-500 transition">Contacto</a>
            </div>
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-2">
              <a href="#home" className="block hover:text-red-500 transition" onClick={() => setMobileMenuOpen(false)}>Inicio</a>
              <a href="#servicios" className="block hover:text-red-500 transition" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
              <a href="#nosotros" className="block hover:text-red-500 transition" onClick={() => setMobileMenuOpen(false)}>Nosotros</a>
              <a href="#contacto" className="block hover:text-red-500 transition" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              WORLD TECH IT SOLUTIONS
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Empresa especializada en el diseño, implementación y mantenimiento de soluciones tecnológicas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#servicios" 
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition shadow-lg"
              >
                Nuestros Servicios
              </a>
              <a 
                href="#contacto" 
                className="bg-white text-blue-700 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition shadow-lg"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-blue-800">
            ¿Qué Hacemos?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales para su empresa
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-blue-600">
              <div className="text-4xl mb-4 text-blue-600" aria-hidden="true">💻</div>
              <h3 className="text-xl font-bold mb-3 text-blue-800">
                Infraestructura y Equipos de Cómputo
              </h3>
              <p className="text-gray-600">
                Diseño e implementación de infraestructura tecnológica robusta y escalable para su empresa.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-red-600">
              <div className="text-4xl mb-4 text-red-600" aria-hidden="true">🔧</div>
              <h3 className="text-xl font-bold mb-3 text-blue-800">
                Mantenimiento y Soporte TI
              </h3>
              <p className="text-gray-600">
                Servicios de mantenimiento preventivo y correctivo con soporte técnico especializado.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-blue-600">
              <div className="text-4xl mb-4 text-blue-600" aria-hidden="true">🌐</div>
              <h3 className="text-xl font-bold mb-3 text-blue-800">
                Redes y Cableado Estructurado
              </h3>
              <p className="text-gray-600">
                Instalación y configuración de redes con cableado estructurado de alta calidad.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-red-600">
              <div className="text-4xl mb-4 text-red-600" aria-hidden="true">📹</div>
              <h3 className="text-xl font-bold mb-3 text-blue-800">
                Seguridad Electrónica (CCTV)
              </h3>
              <p className="text-gray-600">
                Sistemas de videovigilancia y seguridad electrónica de última generación.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-blue-600">
              <div className="text-4xl mb-4 text-blue-600" aria-hidden="true">💡</div>
              <h3 className="text-xl font-bold mb-3 text-blue-800">
                Software y Soluciones Digitales
              </h3>
              <p className="text-gray-600">
                Desarrollo de software a medida y soluciones digitales innovadoras.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-red-600">
              <div className="text-4xl mb-4 text-red-600" aria-hidden="true">📊</div>
              <h3 className="text-xl font-bold mb-3 text-blue-800">
                Consultoría Tecnológica
              </h3>
              <p className="text-gray-600">
                Asesoramiento experto para optimizar sus procesos tecnológicos y digitales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">
            Misión, Visión y Valores
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <div className="text-center p-8 bg-blue-50 rounded-lg">
              <div className="text-5xl mb-4 text-blue-600" aria-hidden="true">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Misión</h3>
              <p className="text-gray-700 leading-relaxed">
                Proporcionar soluciones tecnológicas innovadoras y de alta calidad que impulsen el crecimiento y la transformación digital de nuestros clientes.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center p-8 bg-red-50 rounded-lg">
              <div className="text-5xl mb-4 text-red-600" aria-hidden="true">👁️</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Visión</h3>
              <p className="text-gray-700 leading-relaxed">
                Ser la empresa líder en soluciones de TI, reconocida por nuestra excelencia, innovación y compromiso con el éxito de nuestros clientes.
              </p>
            </div>

            {/* Values */}
            <div className="text-center p-8 bg-blue-50 rounded-lg">
              <div className="text-5xl mb-4 text-blue-600" aria-hidden="true">⭐</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Valores</h3>
              <ul className="text-gray-700 space-y-2 text-left">
                <li>✓ Innovación constante</li>
                <li>✓ Calidad y excelencia</li>
                <li>✓ Compromiso con el cliente</li>
                <li>✓ Integridad profesional</li>
                <li>✓ Trabajo en equipo</li>
              </ul>
            </div>
          </div>

          {/* Corporate Purpose */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-700 to-blue-900 text-white p-8 rounded-lg shadow-xl">
            <h3 className="text-3xl font-bold mb-4 flex items-center">
              <span className="mr-3" aria-hidden="true">📋</span>
              Objeto Social
            </h3>
            <p className="text-lg leading-relaxed mb-4">
              WORLD TECH IT SOLUTIONS es una empresa especializada en el diseño, implementación y mantenimiento 
              de soluciones tecnológicas integrales. Nuestra constitución establece como objeto social:
            </p>
            <ul className="space-y-3 text-base">
              <li className="flex items-start">
                <span className="mr-2 text-red-400">▸</span>
                <span>Prestación de servicios de consultoría, diseño, implementación y mantenimiento de infraestructura tecnológica.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-400">▸</span>
                <span>Desarrollo e implementación de software y soluciones digitales personalizadas.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-400">▸</span>
                <span>Instalación y mantenimiento de sistemas de seguridad electrónica y videovigilancia.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-red-400">▸</span>
                <span>Servicios de soporte técnico especializado y capacitación en tecnologías de la información.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Contáctenos</h2>
            <p className="text-xl mb-8">
              ¿Listo para transformar su negocio con tecnología?
            </p>
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-2xl" aria-hidden="true">📧</span>
                  <span className="text-lg">info@worldtech.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-2xl" aria-hidden="true">📞</span>
                  <span className="text-lg">+52 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-2xl" aria-hidden="true">📍</span>
                  <span className="text-lg">Ciudad de México, México</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-semibold mb-2">WORLD TECH IT SOLUTIONS</p>
          <p className="text-gray-400">
            © 2024 World Tech IT Solutions. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
