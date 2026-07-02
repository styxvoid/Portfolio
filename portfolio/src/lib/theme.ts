export type ThemeMode = 'dark' | 'light';

const STORAGE_KEY = 'portfolio_theme';
const DARK_GRADIENT = `radial-gradient(circle at 20% 20%, rgba(127,255,212,0.16) 0%, transparent 28%), radial-gradient(circle at 80% 10%, rgba(92,225,255,0.16) 0%, transparent 24%), linear-gradient(135deg, rgba(3,7,13,0.96) 0%, rgba(7,17,27,0.94) 46%, rgba(12,27,40,0.9) 100%)`;
const LIGHT_GRADIENT = `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 32%), radial-gradient(circle at 80% 10%, rgba(14,165,233,0.2) 0%, transparent 24%), linear-gradient(135deg, rgba(14,165,233,0.95) 0%, rgba(37,99,235,0.86) 46%, rgba(2,6,23,0.2) 100%)`;

export function applyTheme(theme: ThemeMode, animate = false) {
  if (typeof document === 'undefined') return;

  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;

  if (animate && typeof window !== 'undefined') {
    const overlay = document.createElement('div');
    overlay.id = 'theme-transition-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.zIndex = '0';
    overlay.style.pointerEvents = 'none';
    overlay.style.opacity = '0';
    overlay.style.background = theme === 'dark' ? DARK_GRADIENT : LIGHT_GRADIENT;
    overlay.style.backgroundSize = 'cover';
    overlay.style.backgroundPosition = 'center';
    overlay.style.transition = 'opacity 900ms cubic-bezier(0.22, 1, 0.36, 1)';
    overlay.style.mixBlendMode = 'screen';

    document.documentElement.appendChild(overlay);

    requestAnimationFrame(() => {
      overlay.style.opacity = '0.75';
    });

    window.setTimeout(() => {
      overlay.style.opacity = '0';
      window.setTimeout(() => overlay.remove(), 900);
    }, 350);
  }
}

export function initializeTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'dark';

  const storedTheme = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const theme: ThemeMode = storedTheme ?? (prefersLight ? 'light' : 'dark');

  applyTheme(theme);
  return theme;
}

export function getCurrentTheme(): ThemeMode {
  if (typeof document === 'undefined') return 'dark';
  return (document.documentElement.dataset.theme as ThemeMode | undefined) ?? 'dark';
}

export function toggleTheme(): ThemeMode {
  const nextTheme: ThemeMode = getCurrentTheme() === 'light' ? 'dark' : 'light';

  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  }

  applyTheme(nextTheme, true);
  return nextTheme;
}
