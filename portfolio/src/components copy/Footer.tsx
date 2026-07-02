import { useParams } from 'wouter';

export function Footer() {
  const params = useParams<{ section: string }>();
  const section = params.section ?? 'about';

  return (
    <footer
      style={{
        background: 'rgba(3, 7, 18, 0.88)',
        backdropFilter: 'blur(20px) saturate(150%)',
        WebkitBackdropFilter: 'blur(20px) saturate(150%)',
        borderTop: '1px solid rgba(0,212,255,0.18)',
        boxShadow: '0 -4px 16px rgba(0,0,0,0.3)',
        marginTop: 'auto',
        zIndex: 40,
      }}
    >
      {/* Gradient accent line */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(0,255,136,0.35) 30%, rgba(0,212,255,0.4) 70%, transparent 100%)',
      }} />

      <div className="flex items-center justify-between px-5 py-2 max-w-5xl mx-auto">
        {/* Online indicator */}
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: 'var(--accent)',
              boxShadow: '0 0 6px var(--accent)',
              display: 'inline-block',
            }}
          />
          <span className="font-pixel text-base tracking-widest" style={{ color: 'var(--accent)' }}>
            SYSTEM ONLINE
          </span>
        </div>

        {/* Current path */}
        <span
          className="font-pixel text-base tracking-widest px-3 py-0.5"
          style={{
            color: 'var(--text-dim)',
            background: 'rgba(0,212,255,0.05)',
            border: '1px solid rgba(0,212,255,0.12)',
            borderRadius: '20px',
          }}
        >
          /{section}
        </span>

        {/* Version */}
        <span className="font-pixel text-base tracking-widest" style={{ color: 'var(--text-dim)' }}>
          VER 3.6.0
        </span>
      </div>
    </footer>
  );
}
