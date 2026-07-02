/**
 * Custom SVG icons for gallery categories — Frutiger Aero / hacker aesthetic.
 * Each icon uses React.useId() to generate unique gradient/filter IDs per
 * instance, preventing collisions when multiple icons are rendered together.
 */
import { useId } from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

/** Twitch / Streaming Overlays — monitor with waveform + signal arcs */
export function TwitchOverlaysIcon({ size = 64, className = '' }: IconProps) {
  const uid = useId().replace(/:/g, '');
  const green  = `${uid}-green`;
  const cyan   = `${uid}-cyan`;
  const mixed  = `${uid}-mixed`;
  const glowG  = `${uid}-glow-g`;
  const panel  = `${uid}-panel`;
  const shine  = `${uid}-shine`;
  const shadow = `${uid}-shadow`;

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id={green} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#00ff88" stopOpacity="1" />
          <stop offset="100%" stopColor="#00cc66" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id={cyan} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#00d4ff" stopOpacity="1" />
          <stop offset="100%" stopColor="#0090cc" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id={mixed} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#00ff88" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id={panel} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dcecf8" />
        </linearGradient>
        <linearGradient id={shine} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id={glowG}>
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id={shadow}>
          <feDropShadow dx="0" dy="6" stdDeviation="3.5" floodColor="#6f8ba2" floodOpacity="0.22" />
        </filter>
      </defs>

      {/* Monitor body */}
      <rect x="8" y="10" width="48" height="32" rx="4" stroke="rgba(70,124,167,0.7)" strokeWidth="1.8" fill="rgba(255,255,255,0.55)" />
      {/* Screen */}
      <rect x="12" y="14" width="40" height="24" rx="2" fill="rgba(0,30,50,0.7)" stroke="rgba(0,212,255,0.2)" strokeWidth="1" />
      {/* Waveform bars */}
      <rect x="18" y="28" width="3" height="6"  rx="1" fill={`url(#${green})`} filter={`url(#${glowG})`} />
      <rect x="23" y="24" width="3" height="10" rx="1" fill={`url(#${green})`} filter={`url(#${glowG})`} />
      <rect x="28" y="20" width="3" height="14" rx="1" fill={`url(#${green})`} filter={`url(#${glowG})`} />
      <rect x="33" y="23" width="3" height="11" rx="1" fill={`url(#${green})`} filter={`url(#${glowG})`} />
      <rect x="38" y="26" width="3" height="8"  rx="1" fill={`url(#${green})`} filter={`url(#${glowG})`} />
      {/* Record dot */}
      <circle cx="46" cy="17" r="2.5" fill="#ff4444" />
      <circle cx="46" cy="17" r="1.2" fill="#ff8888" />
      {/* Stand */}
      <rect x="28" y="42" width="8" height="6"   rx="1"   fill="rgba(0,212,255,0.15)" stroke={`url(#${cyan})`} strokeWidth="1.2" />
      <rect x="22" y="47" width="20" height="2.5" rx="1.2" fill="rgba(0,212,255,0.2)"  stroke={`url(#${cyan})`} strokeWidth="1.2" />
      {/* Signal arcs */}
      <path d="M 24 10 Q 32 4 40 10"   stroke={`url(#${mixed})`} strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d="M 27 10 Q 32 6.5 37 10" stroke={`url(#${mixed})`} strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.9" />
    </svg>
  );
}

/** Posts / Social Content — document with layout grid */
export function PostsIcon({ size = 64, className = '' }: IconProps) {
  const uid  = useId().replace(/:/g, '');
  const green = `${uid}-green`;
  const cyan  = `${uid}-cyan`;
  const panel = `${uid}-panel`;
  const shine = `${uid}-shine`;
  const shadow = `${uid}-shadow`;

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id={green} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#00ff88" stopOpacity="1" />
          <stop offset="100%" stopColor="#00cc66" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id={cyan} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#00d4ff" stopOpacity="1" />
          <stop offset="100%" stopColor="#0090cc" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id={panel} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dcecf8" />
        </linearGradient>
        <linearGradient id={shine} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id={shadow}>
          <feDropShadow dx="0" dy="6" stdDeviation="3.5" floodColor="#6f8ba2" floodOpacity="0.22" />
        </filter>
      </defs>

      {/* Document */}
      <rect x="10" y="8" width="44" height="52" rx="5" fill="rgba(255,255,255,0.6)" stroke="rgba(70,124,167,0.7)" strokeWidth="1.8" />
      {/* Folded corner */}
      <path d="M 42 8 L 54 20 L 42 20 Z" fill="rgba(0,212,255,0.12)" stroke={`url(#${cyan})`} strokeWidth="1" />
      {/* Image placeholder */}
      <rect x="16" y="16" width="20" height="14" rx="2" fill="rgba(0,255,136,0.1)" stroke={`url(#${green})`} strokeWidth="1.2" />
      <path d="M 16 27 L 22 21 L 27 26 L 31 22 L 36 30" stroke={`url(#${green})`} strokeWidth="1" fill="none" strokeLinecap="round" />
      <circle cx="20" cy="20" r="1.8" fill={`url(#${green})`} />
      {/* Text lines */}
      <rect x="16" y="35" width="32" height="2" rx="1" fill={`url(#${cyan})`} opacity="0.7" />
      <rect x="16" y="40" width="28" height="2" rx="1" fill={`url(#${cyan})`} opacity="0.5" />
      <rect x="16" y="45" width="22" height="2" rx="1" fill={`url(#${cyan})`} opacity="0.35" />
      <rect x="16" y="50" width="18" height="2" rx="1" fill={`url(#${cyan})`} opacity="0.2" />
    </svg>
  );
}

/** Stories / Mobile — phone with story ring + notification badge */
export function StoriesIcon({ size = 64, className = '' }: IconProps) {
  const uid   = useId().replace(/:/g, '');
  const green  = `${uid}-green`;
  const cyan   = `${uid}-cyan`;
  const glowG  = `${uid}-glow-g`;
  const panel  = `${uid}-panel`;
  const shine  = `${uid}-shine`;
  const shadow = `${uid}-shadow`;

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id={green} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#00ff88" stopOpacity="1" />
          <stop offset="100%" stopColor="#00cc66" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id={cyan} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#00d4ff" stopOpacity="1" />
          <stop offset="100%" stopColor="#0090cc" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id={panel} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dcecf8" />
        </linearGradient>
        <linearGradient id={shine} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id={glowG}>
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id={shadow}>
          <feDropShadow dx="0" dy="6" stdDeviation="3.5" floodColor="#6f8ba2" floodOpacity="0.22" />
        </filter>
      </defs>

      {/* Phone body */}
      <rect x="16" y="6"  width="32" height="54" rx="7" fill="rgba(255,255,255,0.72)" stroke="rgba(70,124,167,0.7)" strokeWidth="1.8" />
      {/* Screen */}
      <rect x="19" y="13" width="26" height="38" rx="3" fill="rgba(0,10,30,0.8)" stroke="rgba(0,212,255,0.2)" strokeWidth="1" />
      {/* Notch */}
      <rect x="27" y="8"  width="10" height="3" rx="1.5" fill="rgba(0,212,255,0.3)" />
      {/* Home bar */}
      <rect x="25" y="55" width="14" height="2" rx="1" fill="rgba(0,212,255,0.3)" />
      {/* Story ring */}
      <circle cx="32" cy="27" r="10" stroke={`url(#${green})`} strokeWidth="2" fill="none" filter={`url(#${glowG})`} />
      <circle cx="32" cy="27" r="8"  fill="rgba(0,255,136,0.08)" />
      {/* Profile silhouette */}
      <circle cx="32" cy="25" r="3.5" fill={`url(#${green})`} opacity="0.7" />
      <path d="M 24 35 Q 32 30 40 35" fill={`url(#${green})`} opacity="0.5" />
      {/* Story progress bars */}
      <rect x="20" y="43" width="7" height="2" rx="1" fill={`url(#${cyan})`} />
      <rect x="29" y="43" width="7" height="2" rx="1" fill="rgba(0,212,255,0.3)" />
      <rect x="38" y="43" width="7" height="2" rx="1" fill="rgba(0,212,255,0.15)" />
      {/* Notification badge */}
      <circle cx="44" cy="10" r="7" fill="rgba(5,8,15,0.9)" stroke="rgba(0,212,255,0.4)" strokeWidth="1" />
      <circle cx="44" cy="10" r="5" fill="#ff4466" />
      <text x="44" y="13.5" textAnchor="middle" fontSize="6" fontFamily="monospace" fontWeight="bold" fill="white">3</text>
    </svg>
  );
}

/** Hacking Club — terminal window with code output */
export function HackingClubIcon({ size = 64, className = '' }: IconProps) {
  const uid   = useId().replace(/:/g, '');
  const green  = `${uid}-green`;
  const cyan   = `${uid}-cyan`;
  const glowG  = `${uid}-glow-g`;
  const panel  = `${uid}-panel`;
  const shine  = `${uid}-shine`;
  const shadow = `${uid}-shadow`;

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id={green} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#00ff88" stopOpacity="1" />
          <stop offset="100%" stopColor="#00cc66" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id={cyan} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#00d4ff" stopOpacity="1" />
          <stop offset="100%" stopColor="#0090cc" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id={panel} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dcecf8" />
        </linearGradient>
        <linearGradient id={shine} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id={glowG}>
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id={shadow}>
          <feDropShadow dx="0" dy="6" stdDeviation="3.5" floodColor="#6f8ba2" floodOpacity="0.22" />
        </filter>
      </defs>

      {/* Window body */}
      <rect x="6" y="10" width="52" height="44" rx="5" fill="rgba(255,255,255,0.62)" stroke="rgba(70,124,167,0.7)" strokeWidth="1.8" />
      {/* Title bar */}
      <rect x="6"  y="10" width="52" height="12" rx="5" fill="rgba(0,255,136,0.1)" />
      <rect x="6"  y="16" width="52" height="6"  fill="rgba(0,255,136,0.1)" />
      {/* Traffic lights */}
      <circle cx="16" cy="16" r="3" fill="#ff5f57" />
      <circle cx="25" cy="16" r="3" fill="#febc2e" />
      <circle cx="34" cy="16" r="3" fill="#28c840" />
      {/* Window title */}
      <text x="46" y="19.5" textAnchor="middle" fontSize="6" fontFamily="monospace" fill="rgba(0,255,136,0.7)">root@sys</text>
      {/* Terminal lines */}
      <text x="12" y="33" fontSize="7" fontFamily="monospace" fill={`url(#${green})`} filter={`url(#${glowG})`}>&gt; ACCESS</text>
      <text x="12" y="42" fontSize="7" fontFamily="monospace" fill={`url(#${cyan})`}> GRANTED_</text>
      {/* Glitch bar */}
      <rect x="12" y="48" width="30" height="2" rx="0.5" fill={`url(#${green})`} opacity="0.5" />
      <rect x="24" y="48" width="8"  height="2" rx="0.5" fill="rgba(255,100,100,0.4)" />
      {/* Blinking cursor block */}
      <rect x="12" y="44" width="6" height="8" rx="0.5" fill={`url(#${green})`} filter={`url(#${glowG})`} />
    </svg>
  );
}
