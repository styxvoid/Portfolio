import { ReactNode } from 'react';

interface TerminalPanelProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export function TerminalPanel({ children, className = '', title }: TerminalPanelProps) {
  return (
    <div className={`glass relative ${className}`} style={{ padding: '1.5rem' }}>
      {title && (
        <div
          className="font-pixel text-sm tracking-widest uppercase mb-4 pb-2"
          style={{
            color: 'var(--accent2)',
            borderBottom: '1px solid rgba(0,212,255,0.18)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {title}
        </div>
      )}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
