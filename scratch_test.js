const fs = require('fs');

const payload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "TranscribAI",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, API, Cloud",
        "url": "https://www.etiia.com/demos/transcribai",
        "description": "Sube el audio de cualquier reunión. Whisper transcribe con 96.8% de precisión...",
        "featureList": "Whisper V3, Diarización, NLP, On-premise",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "image": "https://www.etiia.com/og-image.jpg",
        "publisher": {
          "@type": "Organization",
          "name": "ETIIA",
          "url": "https://www.etiia.com",
          "@id": "https://www.etiia.com/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Qué pasa si hay mucho ruido de fondo o personas con varios acentos locales?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "El modelo Whisper V3 es 'state-of-the-art' en robustez fonética..."
            }
          },
          {
            "@type": "Question",
            "name": "¿Los audios de sesiones de directorio confidenciales están seguros?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Todo el procesamiento se puede aislar..."
            }
          }
        ]
      }
    ]
  };

console.log(JSON.stringify(payload, null, 2));
