import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { TerminalPanel } from '../components/TerminalPanel';
import { BlinkingCursor } from '../components/BlinkingCursor';

export default function ContactPage() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => { if (resetTimerRef.current !== null) clearTimeout(resetTimerRef.current); };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      if (resetTimerRef.current !== null) clearTimeout(resetTimerRef.current);
      resetTimerRef.current = setTimeout(() => setSubmitted(false), 5000);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="font-pixel text-xl tracking-widest uppercase" style={{ color: 'var(--accent2)' }}>
        &gt; {t('contact.title').replace('◆ ', '')}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* Left: status + socials */}
        <div className="md:col-span-5 flex flex-col gap-5">
          <TerminalPanel title="NET_STATUS">
            {/* Availability badge */}
            <div
              className="flex items-center gap-3 mb-5 px-4 py-3"
              style={{
                background: 'rgba(0,255,136,0.07)',
                border: '1px solid rgba(0,255,136,0.22)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full animate-pulse shrink-0"
                style={{ background: 'var(--accent)', boxShadow: '0 0 8px var(--accent), 0 0 16px rgba(0,255,136,0.4)' }}
              />
              <span className="font-pixel text-lg tracking-widest" style={{ color: 'var(--accent)' }}>
                AVAILABLE
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-6 font-mono" style={{ color: 'var(--text-dim)' }}>
              {t('contact.subtext')}
            </p>

            {/* Social nodes */}
            <div className="pt-4 space-y-2" style={{ borderTop: '1px solid rgba(0,212,255,0.12)' }}>
              <div className="font-pixel text-base tracking-widest uppercase mb-3" style={{ color: 'var(--text-dim)' }}>
                ACTIVE_NODES:
              </div>

              <a
                href="https://github.com/styxvoid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2.5 group transition-all duration-200"
                style={{
                  background: 'rgba(0,255,136,0.04)',
                  border: '1px solid rgba(0,255,136,0.15)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,136,0.4)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0,255,136,0.09)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,136,0.15)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0,255,136,0.04)';
                }}
              >
                <span className="font-pixel text-lg w-7 text-center" style={{ color: 'var(--accent)' }}>[G]</span>
                <span className="font-bold tracking-wider" style={{ color: 'var(--text)' }}>GitHub</span>
                <span className="ml-auto text-xs font-mono transition-all duration-200 group-hover:text-glow" style={{ color: 'var(--accent2)' }}>
                  styxvoid ↗
                </span>
              </a>

              {[
                { label: 'LinkedIn', icon: '[L]' },
                { label: 'Twitter',  icon: '[T]' },
              ].map(s => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 px-3 py-2.5 cursor-not-allowed"
                  style={{
                    background: 'rgba(0,0,0,0.1)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: 'var(--radius-md)',
                    opacity: 0.35,
                    color: 'var(--text-dim)',
                  }}
                >
                  <span className="font-pixel text-lg w-7 text-center">{s.icon}</span>
                  <span className="font-bold tracking-wider">{s.label}</span>
                  <span
                    className="ml-auto text-xs font-pixel px-2"
                    style={{
                      color: 'var(--text-dim)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                    }}
                  >
                    OFFLINE
                  </span>
                </div>
              ))}
            </div>
          </TerminalPanel>
        </div>

        {/* Right: form */}
        <div className="md:col-span-7">
          <TerminalPanel title="OPEN CHANNEL">
            {submitted ? (
              <div className="h-56 flex flex-col items-center justify-center text-center">
                <div className="font-pixel text-xl mb-4 text-glow" style={{ color: 'var(--accent)' }}>
                  {t('contact.success')}
                </div>
                <BlinkingCursor />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: 'name',  type: 'text',  label: t('contact.label_name'),  placeholder: 'Your name'       },
                  { id: 'email', type: 'email', label: t('contact.label_email'), placeholder: 'your@email.com' },
                ].map(field => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block font-pixel text-base tracking-widest uppercase mb-1.5"
                      style={{ color: 'var(--accent)' }}
                    >
                      &gt; {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      value={(formData as Record<string, string>)[field.id]}
                      onChange={e => setFormData({ ...formData, [field.id]: e.target.value })}
                      required
                      placeholder={field.placeholder}
                      className="terminal-input"
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block font-pixel text-base tracking-widest uppercase mb-1.5"
                    style={{ color: 'var(--accent)' }}
                  >
                    &gt; {t('contact.label_message')}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Your message..."
                    className="terminal-input resize-none"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button type="submit" className="btn-gloss px-7 py-2.5 font-bold tracking-widest uppercase text-sm">
                    {t('contact.btn_submit')}
                  </button>
                </div>
              </form>
            )}
          </TerminalPanel>
        </div>

      </div>
    </div>
  );
}
