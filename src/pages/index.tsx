import { useState } from 'react';
import Head from 'next/head';
import { QrCode, Download, Palette, Settings, Sparkles } from 'lucide-react';

export default function Home() {
  const [qrText, setQrText] = useState('');
  const [qrSize, setQrSize] = useState(256);
  const [foregroundColor, setForegroundColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  const generateQR = () => {
    if (!qrText) return;
    
    // Aquí implementaremos la generación real del QR
    console.log('Generando QR:', { qrText, qrSize, foregroundColor, backgroundColor });
  };

  return (
    <>
      <Head>
        <title>QR Editor - Generador Avanzado de Códigos QR</title>
        <meta name="description" content="Crea, edita y personaliza códigos QR profesionales de forma gratuita" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <QrCode className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">QR Editor</h1>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Características</a>
                <a href="#templates" className="text-gray-600 hover:text-blue-600 transition-colors">Templates</a>
                <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Precios</a>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Iniciar Sesión
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Crea Códigos QR
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Profesionales
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Genera, edita y personaliza códigos QR con nuestro editor avanzado. 
              Similar a qrfy.com, pero con más funcionalidades y completamente gratuito.
            </p>
          </div>

          {/* QR Generator */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contenido del QR
                  </label>
                  <textarea
                    value={qrText}
                    onChange={(e) => setQrText(e.target.value)}
                    placeholder="Ingresa una URL, texto, número de teléfono, etc."
                    className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tamaño
                    </label>
                    <select
                      value={qrSize}
                      onChange={(e) => setQrSize(Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value={128}>128x128</option>
                      <option value={256}>256x256</option>
                      <option value={512}>512x512</option>
                      <option value={1024}>1024x1024</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Color Principal
                    </label>
                    <input
                      type="color"
                      value={foregroundColor}
                      onChange={(e) => setForegroundColor(e.target.value)}
                      className="w-full h-10 border border-gray-300 rounded-lg cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Color de Fondo
                  </label>
                  <input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="w-full h-10 border border-gray-300 rounded-lg cursor-pointer"
                  />
                </div>

                <button
                  onClick={generateQR}
                  disabled={!qrText}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Generar QR</span>
                </button>
              </div>

              {/* Preview Section */}
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="w-64 h-64 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                  {qrText ? (
                    <div className="text-center text-gray-500">
                      <QrCode className="w-16 h-16 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm">Vista previa del QR</p>
                      <p className="text-xs text-gray-400 mt-1">Se generará aquí</p>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500">
                      <QrCode className="w-16 h-16 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm">Ingresa contenido para</p>
                      <p className="text-xs text-gray-400">ver la vista previa</p>
                    </div>
                  )}
                </div>

                {qrText && (
                  <div className="flex space-x-3">
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Descargar</span>
                    </button>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2">
                      <Palette className="w-4 h-4" />
                      <span>Editar</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <QrCode className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Generación Rápida</h3>
              <p className="text-gray-600">Crea códigos QR en segundos con nuestro generador optimizado</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalización Total</h3>
              <p className="text-gray-600">Colores, estilos, logos y efectos para hacer tu QR único</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Múltiples Formatos</h3>
              <p className="text-gray-600">Exporta en PNG, SVG, PDF y más formatos profesionales</p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © 2024 QR Editor. Desarrollado con ❤️ para la comunidad de desarrolladores.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
