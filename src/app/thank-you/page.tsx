'use client'

import React from 'react';
import Script from 'next/script';

// Type declaration for Facebook Pixel
declare global {
  interface Window {
    fbq: (command: string, event?: string) => void;
  }
}

export default function ThankYouPage() {

  return (
    <>
      {/* Meta Pixel Code */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1316557306362606');
            fbq('track', 'PageView');
            fbq('track', 'CompleteRegistration');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1316557306362606&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      {/* End Meta Pixel Code */}

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
            <a
              href="https://chat.whatsapp.com/CG5S5YGR95o4JHB0xWCKaG?mode=ems_wa_t"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300 transition-colors"
            >
              👉 HAZ CLIC AQUÍ 👈
            </a>
          </div>

          {/* WhatsApp button */}
          <a
            href="https://chat.whatsapp.com/CG5S5YGR95o4JHB0xWCKaG?mode=ems_wa_t"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center w-full"
          >
            <span className="mr-2">📱</span>
                      😊 Quiero asegurar mi plaza
        </a>
        </div>
      </div>

    </div>
    </>
  );
}
