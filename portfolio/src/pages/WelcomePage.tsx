import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { BlinkingCursor } from "../components/BlinkingCursor";

export default function WelcomePage() {
  const [, setLocation] = useLocation();
  const { t, i18n } = useTranslation();
  const [typedText, setTypedText] = useState("");
  const [showButtons, setShowButtons] = useState(false);
  const fullText = "> SYSTEM BOOT...";

  useEffect(() => {
    const lang = localStorage.getItem('portfolio_lang');
    if (lang) setLocation('/home/about');
  }, [setLocation]);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(id);
        setTimeout(() => setShowButtons(true), 300);
      }
    }, 80);
    return () => clearInterval(id);
  }, [fullText]);

  const selectLanguage = (lang: string) => {
    localStorage.setItem('portfolio_lang', lang);
    i18n.changeLanguage(lang);
    setLocation('/home/about');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">

      {/* Corner marks */}
      {[
        'top-4 left-4 border-t border-l',
        'top-4 right-4 border-t border-r',
        'bottom-4 left-4 border-b border-l',
        'bottom-4 right-4 border-b border-r',
      ].map((pos, i) => (
        <div key={i} className={`fixed w-8 h-8 ${pos}`}
          style={{ borderColor: 'rgba(0,212,255,0.25)', borderRadius: i < 2 ? '8px 0 0 0' : '0 0 0 8px' }} />
      ))}

      {/* Status top */}
      <div className="fixed top-5 left-1/2 -translate-x-1/2 font-pixel text-sm tracking-widest"
        style={{ color: 'rgba(0,212,255,0.4)' }}>
        CONNECTION PENDING
      </div>

      {/* Boot text */}
      <div className="text-center mb-10 relative z-10">
        <div
          className="inline-block px-5 py-1.5 mb-6 font-pixel text-base tracking-widest"
          style={{
            color: 'rgba(0,212,255,0.6)',
            background: 'rgba(0,212,255,0.06)',
            border: '1px solid rgba(0,212,255,0.18)',
            borderRadius: '20px',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
          }}
        >
          STYXVOID.SYS v2.6.0
        </div>

        <h1 className="text-3xl md:text-5xl font-display text-glow mb-3" style={{ color: 'var(--accent)' }}>
          {typedText}<BlinkingCursor />
        </h1>

        <p
          className="font-pixel text-base tracking-widest"
          style={{ color: 'rgba(0,212,255,0.5)' }}
        >
          SELECT LANGUAGE PROTOCOL
        </p>
      </div>

      {/* Language cards */}
      <div
        className={`flex flex-col md:flex-row gap-5 w-full max-w-xl relative z-10 transition-all duration-700 ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        {[
          { lang: 'en',   flag: '🇺🇸', label: t('welcome.connect_en'), color: 'rgba(0,255,136,0.12)', border: 'rgba(0,255,136,0.32)' },
          { lang: 'pt-BR', flag: '🇧🇷', label: t('welcome.connect_pt'), color: 'rgba(0,212,255,0.1)',  border: 'rgba(0,212,255,0.32)' },
        ].map(opt => (
          <button
            key={opt.lang}
            onClick={() => selectLanguage(opt.lang)}
            disabled={!showButtons}
            className="flex-1 group relative flex flex-col items-center justify-center gap-5 py-8 px-6 overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{
              background: `linear-gradient(160deg, rgba(255,255,255,0.06) 0%, ${opt.color} 100%), var(--surface)`,
              backdropFilter: 'blur(18px)',
              border: `1px solid ${opt.border}`,
              borderRadius: 'var(--radius-lg)',
              boxShadow: '0 8px 28px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.12)',
            }}
          >
            {/* Top shine */}
            <div
              className="absolute inset-x-0 top-0 h-px pointer-events-none"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)' }}
            />
            {/* Bottom gloss */}
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
              style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.15), transparent)', borderRadius: '0 0 var(--radius-lg) var(--radius-lg)' }}
            />
            {/* Hover fill */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: `radial-gradient(ellipse 80% 80% at 50% 100%, ${opt.color} 0%, transparent 70%)` }}
            />

            <div className="text-5xl grayscale group-hover:grayscale-0 transition-all duration-400 opacity-75 group-hover:opacity-100 relative z-10">
              {opt.flag}
            </div>
            <div
              className="font-mono text-base tracking-widest uppercase relative z-10 transition-all duration-200 group-hover:text-glow"
              style={{ color: 'var(--text)' }}
            >
              {opt.label}
            </div>
          </button>
        ))}
      </div>

      {/* Bottom status */}
      <div className="fixed bottom-5 font-pixel text-sm tracking-widest" style={{ color: 'rgba(0,212,255,0.35)' }}>
        AWAITING INPUT
      </div>
    </div>
  );
}
