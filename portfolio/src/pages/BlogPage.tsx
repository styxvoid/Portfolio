import { useTranslation } from 'react-i18next';
import { TerminalPanel } from '../components/TerminalPanel';
import { BlinkingCursor } from '../components/BlinkingCursor';

export default function BlogPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6">
      <div className="font-pixel text-xl tracking-widest uppercase" style={{ color: 'var(--accent2)' }}>
        &gt; {t('blog.title').replace('◆ ', '')}
      </div>

      <TerminalPanel title="STATUS: IN_CONSTRUCTION">
        {/* Construction notice */}
        <div
          className="flex items-start gap-4 p-4 mb-6"
          style={{
            background: 'rgba(0,255,136,0.05)',
            border: '1px solid rgba(0,255,136,0.2)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >
          <span className="animate-blink text-lg shrink-0 mt-0.5" style={{ color: 'var(--accent)' }}>!</span>
          <p className="text-sm leading-relaxed font-pixel tracking-wide uppercase" style={{ color: 'var(--text-dim)' }}>
            {t('blog.construction')}
          </p>
        </div>

        {/* Log table header */}
        <div
          className="flex text-xs font-pixel tracking-widest uppercase pb-2 mb-3"
          style={{ color: 'var(--text-dim)', borderBottom: '1px solid rgba(0,212,255,0.15)' }}
        >
          <div className="w-28">DATE</div>
          <div className="w-24">TYPE</div>
          <div className="flex-1">CONTENT</div>
        </div>

        {/* Placeholder entry */}
        <div className="flex items-start gap-0 font-mono text-sm" style={{ opacity: 0.65 }}>
          <div className="w-28" style={{ color: 'var(--accent)' }}>2026.02.27</div>
          <div className="w-24">
            <span
              className="font-pixel text-base px-2"
              style={{
                color: 'var(--accent2)',
                background: 'rgba(0,212,255,0.09)',
                border: '1px solid rgba(0,212,255,0.22)',
                borderRadius: '10px',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
              }}
            >
              INFO
            </span>
          </div>
          <div className="flex-1" style={{ color: 'var(--text)' }}>
            {t('blog.placeholder')} <BlinkingCursor />
          </div>
        </div>

        {/* Ghost rows */}
        {[0, 1].map(i => (
          <div key={i} className="flex items-start font-mono text-sm mt-3" style={{ opacity: 0.12 }}>
            <div className="w-28" style={{ color: 'var(--accent)' }}>----.--.--</div>
            <div className="w-24" style={{ color: 'var(--text-dim)' }}>----</div>
            <div className="flex-1" style={{ color: 'var(--text-dim)' }}>---</div>
          </div>
        ))}
      </TerminalPanel>
    </div>
  );
}
