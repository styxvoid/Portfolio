import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { TerminalPanel } from "./TerminalPanel";
import { BlinkingCursor } from "./BlinkingCursor";

export function ContactSection() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current !== null) clearTimeout(resetTimerRef.current);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      if (resetTimerRef.current !== null) clearTimeout(resetTimerRef.current);
      resetTimerRef.current = setTimeout(() => setSubmitted(false), 5000);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-12 pb-24 w-full scroll-mt-20">
      <h2 className="text-2xl md:text-3xl font-display text-accent text-glow mb-8 uppercase tracking-wide">
        {t('contact.title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-5 flex flex-col gap-6">
          <TerminalPanel title="NET_STATUS">
            <div className="text-sm text-text-dim leading-relaxed mb-6 font-mono">
              {t('contact.subtext')}
            </div>
            
            <div className="space-y-4 border-t border-muted pt-6">
              <div className="text-xs uppercase tracking-widest text-text-dim mb-2 font-pixel">ACTIVE_NODES:</div>
              <a 
                href="https://github.com/styxvoid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text hover:text-accent transition-colors group"
              >
                <span className="text-accent opacity-50 group-hover:opacity-100">[{'G'}]</span>
                <span className="font-bold tracking-wider">GitHub</span>
                <span className="text-text-dim text-xs ml-auto group-hover:text-accent group-hover:text-glow">styxvoid</span>
              </a>
              <div className="flex items-center gap-3 text-text-dim opacity-50 cursor-not-allowed">
                <span className="text-accent opacity-50">[{'◈'}]</span>
                <span className="font-bold tracking-wider">LinkedIn</span>
                <span className="text-xs ml-auto">OFFLINE</span>
              </div>
              <div className="flex items-center gap-3 text-text-dim opacity-50 cursor-not-allowed">
                <span className="text-accent opacity-50">[{'◈'}]</span>
                <span className="font-bold tracking-wider">Twitter</span>
                <span className="text-xs ml-auto">OFFLINE</span>
              </div>
            </div>
          </TerminalPanel>
        </div>

        <div className="md:col-span-7">
          <TerminalPanel>
            {submitted ? (
              <div className="h-64 flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
                <div className="text-accent text-glow font-pixel text-xl mb-4 uppercase">
                  {t('contact.success')}
                </div>
                <BlinkingCursor />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                  <label htmlFor="name" className="text-accent font-bold uppercase tracking-widest text-sm w-32 shrink-0">
                    <span className="mr-2">{'>'}</span> {t('contact.label_name')}
                  </label>
                  <input 
                    id="name"
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="flex-1 bg-surface2 border-b border-muted hover:border-accent/50 focus:border-accent focus:outline-none text-text px-2 py-1 font-mono text-sm transition-colors"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                  <label htmlFor="email" className="text-accent font-bold uppercase tracking-widest text-sm w-32 shrink-0">
                    <span className="mr-2">{'>'}</span> {t('contact.label_email')}
                  </label>
                  <input 
                    id="email"
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="flex-1 bg-surface2 border-b border-muted hover:border-accent/50 focus:border-accent focus:outline-none text-text px-2 py-1 font-mono text-sm transition-colors"
                  />
                </div>
                
                <div className="flex flex-col gap-2 pt-2">
                  <label htmlFor="message" className="text-accent font-bold uppercase tracking-widest text-sm">
                    <span className="mr-2">{'>'}</span> {t('contact.label_message')}
                  </label>
                  <textarea 
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="w-full bg-surface2 border border-muted hover:border-accent/50 focus:border-accent focus:outline-none text-text p-3 font-mono text-sm transition-colors resize-none"
                  ></textarea>
                </div>
                
                <div className="pt-4 flex justify-end">
                  <button 
                    type="submit"
                    className="border border-accent text-accent px-6 py-2 font-bold tracking-widest uppercase hover:bg-accent hover:text-bg transition-colors duration-300 hover-glitch"
                  >
                    {t('contact.btn_submit')}
                  </button>
                </div>
              </form>
            )}
          </TerminalPanel>
        </div>
      </div>
    </section>
  );
}
