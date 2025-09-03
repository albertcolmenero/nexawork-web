import React from 'react';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-6">
        {/* Main warning message */}
        <div className="bg-gray-800 rounded-2xl p-6 text-center">
          <div className="bg-yellow-500 rounded-xl p-4 mb-4 flex items-center justify-center">
            <span className="text-6xl mr-3">⚠️</span>
            <div className="text-white font-bold text-lg">
              TU REGISTRO NO SE HA COMPLETADO
            </div>
          </div>

          {/* Step indicator */}
          <div className="bg-blue-200 text-blue-900 font-semibold py-2 px-4 rounded-lg text-center mb-4">
            PASO 1 DE 2
          </div>

          {/* Instructions */}
          <p className="text-white text-center mb-6 leading-relaxed">
            Completa el siguiente paso para asegurar tu plaza en el Evento.
          </p>

          <p className="text-white text-center mb-6 leading-relaxed">
            Únete al <span className="font-bold">Grupo de WhatsApp</span> privado para reservar tu plaza y conseguir tu entrada personalizada
          </p>

          {/* Call to action */}
          <div className="text-white text-center mb-6 text-lg font-semibold">
            👉 HAZ CLIC AQUÍ 👈
          </div>

          {/* WhatsApp button */}
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center w-full">
            <span className="mr-2">📱</span>
            😊 Quiero asegurar mi plaza
          </button>
        </div>
      </div>
    </div>
  );
}
