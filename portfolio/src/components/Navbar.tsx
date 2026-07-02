import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'wouter';
import { BlinkingCursor } from './BlinkingCursor';

const NAV_ITEMS = [
  { id: 'about',   labelKey: 'nav.about'   },
  { id: 'work',    labelKey: 'nav.work'    },
  { id: 'blog',    labelKey: 'nav.blog'    },
  { id: 'gallery', labelKey: 'nav.gallery' },
  { id: 'contact', labelKey: 'nav.contact' },
] as const;

export function Navbar() {
  const { t, i18n } = useTranslation();
  const params = useParams<{ section: string }>();
  const activeSection = params.section ?? 'about';
  const [timeStr, setTimeStr] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () =>
      setTimeStr(new Date().toLocaleTimeString('en-US', { hour12: false }));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [activeSection]);

  const toggleLang = () => {
    const next = i18n.language === 'en' ? 'pt-BR' : 'en';
    i18n.changeLanguage(next);
    localStorage.setItem('portfolio_lang', next);
  };

  return (
    <header
      style={{
        background: 'rgba(3, 7, 18, 0.88)',
        backdropFilter: 'blur(20px) saturate(150%)',
        WebkitBackdropFilter: 'blur(20px) saturate(150%)',
        borderBottom: '1px solid rgba(0,212,255,0.18)',
        boxShadow: '0 1px 0 rgba(0,255,136,0.06), 0 4px 16px rgba(0,0,0,0.3)',
        position: 'relative',
        zIndex: 50,
      }}
    >
      <div className="flex items-center justify-between px-5 py-2 gap-3 max-w-5xl mx-auto">

        {/* Logo */}
        <Link
          href="/home/about"
          className="font-display font-bold text-lg tracking-widest hover-glitch shrink-0 select-none animate-flicker"
          style={{ color: 'var(--accent)' }}
        >
          N://<BlinkingCursor />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-1 flex-1 justify-center">
          {NAV_ITEMS.map(item => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={`/home/${item.id}`}
                className={`px-3 py-1 font-pixel text-xl tracking-widest uppercase transition-all duration-200 ${isActive ? 'nav-active' : 'hover-glitch'}`}
                style={isActive
                  ? {}
                  : { color: 'var(--text-dim)', borderRadius: 'var(--radius-sm)' }
                }
              >
                {t(item.labelKey).replace(/[\[\]]/g, '')}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={toggleLang}
            className="font-pixel text-xl tracking-widest hover-glitch uppercase select-none px-2 py-0.5"
            style={{
              color: 'var(--text-dim)',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            [{i18n.language === 'en' ? 'EN' : 'PT-BR'}]
          </button>
          <span
            className="font-mono text-sm tabular-nums text-glow hidden md:block"
            style={{ color: 'var(--accent)', minWidth: '5.5rem', textAlign: 'right' }}
          >
            {timeStr}
          </span>

          {/* Hamburger — mobile */}
          <button
            className="sm:hidden flex flex-col justify-center gap-1.5 p-1"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="block transition-all duration-200"
                style={{
                  width: '20px', height: '1.5px',
                  background: menuOpen ? 'var(--accent)' : 'var(--text-dim)',
                  borderRadius: '2px',
                  transform: menuOpen
                    ? i === 0 ? 'rotate(45deg) translate(2px, 3px)'
                    : i === 1 ? 'scaleX(0)'
                    : 'rotate(-45deg) translate(2px, -3px)'
                    : 'none',
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Gradient accent line */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.4) 30%, rgba(0,255,136,0.35) 70%, transparent 100%)',
      }} />

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav
          className="sm:hidden flex flex-col px-4 py-2 gap-1"
          style={{
            background: 'rgba(3, 7, 18, 0.96)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(0,212,255,0.15)',
          }}
        >
          {NAV_ITEMS.map(item => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={`/home/${item.id}`}
                className="px-4 py-2.5 font-pixel text-xl tracking-widest uppercase transition-all duration-200"
                style={{
                  borderRadius: 'var(--radius-md)',
                  background: isActive ? 'rgba(0,255,136,0.12)' : 'transparent',
                  color: isActive ? 'var(--accent)' : 'var(--text-dim)',
                  border: isActive ? '1px solid rgba(0,255,136,0.25)' : '1px solid transparent',
                }}
              >
                {isActive ? '► ' : '  '}{t(item.labelKey).replace(/[\[\]]/g, '')}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
