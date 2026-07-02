import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Welcome({ onLanguageSelect }) {
  const { i18n } = useTranslation();

  const selectLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('portfolio_lang_selected', 'true');
    onLanguageSelect();
  };

  return (
    <div className="fixed inset-0 bg-slate-950 text-white flex flex-col items-center justify-center p-4 z-50">
      <div className="text-center max-w-md space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Welcome / Bem-vindo
          </h1>
          <p className="text-slate-400 text-sm md:text-base">
            Please choose your language to enter the portfolio.<br />
            Por favor, escolha seu idioma para entrar no portfólio.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={() => selectLanguage('en')}
            className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg w-full sm:w-auto"
          >
            🇺🇸 English
          </button>
          <button
            onClick={() => selectLanguage('pt')}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg w-full sm:w-auto"
          >
            🇧🇷 Português
          </button>
        </div>
      </div>
    </div>
  );
}