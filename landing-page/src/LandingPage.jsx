import React, { useEffect, useState } from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after mount
    setIsLoaded(true);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/972525970972', '_blank');
  };

  return (
    <div 
      dir="rtl" 
      className="relative w-full h-screen overflow-hidden bg-slate-900 text-white flex items-center justify-center font-sans selection:bg-green-500 selection:text-white"
    >
      {/* Custom Styles for Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes heartbeat {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 0 0 20px rgba(34, 197, 94, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(200%) skewX(-20deg); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-heartbeat {
          animation: heartbeat 2s infinite ease-in-out;
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>

      {/* Background Gradients/Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[-10%] w-[50vh] h-[50vh] bg-blue-600/20 rounded-full blur-[80px] animate-blob mix-blend-screen" />
        <div className="absolute bottom-0 right-[-10%] w-[60vh] h-[60vh] bg-purple-600/20 rounded-full blur-[80px] animate-blob animation-delay-2000 mix-blend-screen" />
        
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      {/* Main Content Card - Glassmorphism */}
      <div 
        className={`
          relative z-10 w-full max-w-md px-6 py-12 mx-4 text-center border shadow-2xl bg-white/5 backdrop-blur-xl border-white/10 rounded-3xl
          transition-all duration-1000 ease-out transform
          ${isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}
        `}
      >
        {/* Header Section */}
        <div className="mb-8 space-y-4">
          <h1 
            className={`
              text-4xl font-extrabold tracking-tight leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300
              transition-all duration-1000 delay-300 ease-out transform
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            אתר מקצועי לעסק שלך
          </h1>
          
          <h2 
            className={`
              text-lg font-medium text-gray-300/90 leading-relaxed px-2
              transition-all duration-1000 delay-500 ease-out transform
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            בוא נדבר ונתאים לך בדיוק מה שצריך
          </h2>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-4">
          <div 
            className={`
              w-full transition-all duration-1000 delay-700 ease-out transform
              ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
            `}
          >
            <button
              onClick={handleWhatsAppClick}
              className="animate-heartbeat group relative flex items-center justify-center w-full gap-3 py-4 px-8 text-xl font-bold text-white bg-gradient-to-r from-green-500 to-green-600 rounded-full hover:brightness-110 active:scale-95 transition-all"
              aria-label="Start WhatsApp Chat"
            >
              <MessageCircle className="w-7 h-7 fill-white/20" strokeWidth={2.5} />
              <span>התחל שיחה בוואטסאפ</span>
              
              {/* Shimmer Effect inside button */}
              <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              </div>
            </button>
          </div>

          {/* Trust Elements */}
          <div 
            className={`
              flex items-center gap-2 text-sm font-medium text-gray-400
              transition-all duration-1000 delay-1000 ease-out
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span>מענה מהיר מובטח</span>
          </div>
        </div>
      </div>
      
      {/* Footer / Copyright */}
      <div className="absolute bottom-4 text-xs text-white/20 font-light">
        © {new Date().getFullYear()} כל הזכויות שמורות
      </div>
    </div>
  );
};

export default LandingPage;
