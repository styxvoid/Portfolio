import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TerminalPanel } from '../components/TerminalPanel';
import {
  TwitchOverlaysIcon,
  PostsIcon,
  StoriesIcon,
  HackingClubIcon,
} from '../components/GalleryIcons';

const GALLERIES = [
  {
    id: 'twitch',
    Icon: TwitchOverlaysIcon,
    titleEn: 'Twitch Overlays — Octacore',
    titlePt: 'Overlays Twitch — Octacore',
    color: 'rgba(0,212,255,0.12)',
    borderColor: 'rgba(0,212,255,0.35)',
    glowColor: 'rgba(0,212,255,0.2)',
    images: [
      'https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/overlays%20twitch/imagem%20de%20cabe%C3%A7alho.png',
      'https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/overlays%20twitch/PNG%20espera%20live.png',
      'https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/overlays%20twitch/PNG%20finaliza%C3%A7%C3%A3o.png',
      'https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/overlays%20twitch/PNG%20LIVE%20CRONOMETRO%20raio.png',
      'https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/overlays%20twitch/PNG%20OVERLAY%20LIVE%20CHAT%20OCTACORE.png',
    ],
  },
  {
    id: 'posts',
    Icon: PostsIcon,
    titleEn: 'Posts — Octacore',
    titlePt: 'Posts — Octacore',
    color: 'rgba(0,255,136,0.1)',
    borderColor: 'rgba(0,255,136,0.3)',
    glowColor: 'rgba(0,255,136,0.18)',
    images: [
      'https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/posts/post%20insta%20carrossel%201.png',
      'https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/posts/post%20insta%20carrossel%202%20ordem%20alterada.png',
      'https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/posts/post%20pedr%C3%A3o%20atualizado.png',
      'https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/posts/post%20pedr%C3%A3o%202%20atualizado.png',
    ],
  },
  {
    id: 'stories',
    Icon: StoriesIcon,
    titleEn: 'Stories — Octacore',
    titlePt: 'Stories — Octacore',
    color: 'rgba(180,142,255,0.1)',
    borderColor: 'rgba(180,142,255,0.35)',
    glowColor: 'rgba(180,142,255,0.18)',
    images: [
      'https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/stories/classificatorias.png',
      'https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/stories/classificatorias%202.png',
      'https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/stories/story%20esporte.png',
      'https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/stories/Story%20Filet.png',
      'https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/stories/STORY%20PUC%20IN%20ROCA.png',
      'https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/stories/story%20seletivas%20esportes%20corrigido.png',
    ],
  },
  {
    id: 'hacking',
    Icon: HackingClubIcon,
    titleEn: 'Hacking Club PUCPR',
    titlePt: 'Hacking Club PUCPR',
    color: 'rgba(0,255,136,0.08)',
    borderColor: 'rgba(0,255,136,0.3)',
    glowColor: 'rgba(0,255,136,0.15)',
    images: [
      'https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/clube%20de%20hacking/panfleto%20clube%20de%20hacking%20base%20(1).png',
    ],
  },
];

export default function GalleryPage() {
  const { t, i18n } = useTranslation();
  const isPt = i18n.language === 'pt-BR';
  const [active, setActive] = useState<string | null>(null);
  const selected = active ? GALLERIES.find(g => g.id === active) : null;

  return (
    <div className="flex flex-col gap-6">
      {/* Section header */}
      <div className="font-pixel text-xl tracking-widest uppercase" style={{ color: 'var(--accent2)' }}>
        &gt; {t('gallery.title').replace('◆ ', '')}
      </div>

      {!active ? (
        /* ── Category grid ── */
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {GALLERIES.map(gallery => (
            <button
              key={gallery.id}
              onClick={() => setActive(gallery.id)}
              className="group text-left overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background:
                  `linear-gradient(160deg, rgba(255,255,255,0.05) 0%, ${gallery.color} 100%), var(--surface)`,
                backdropFilter: 'blur(18px)',
                border: `1px solid ${gallery.borderColor}`,
                borderRadius: 'var(--radius-lg)',
                boxShadow: `0 6px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)`,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 10px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15), 0 0 24px ${gallery.glowColor}`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 6px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)`;
              }}
            >
              {/* Icon area */}
              <div
                className="h-36 flex items-center justify-center relative overflow-hidden"
                style={{
                  background: `radial-gradient(ellipse 70% 70% at 50% 50%, ${gallery.color} 0%, transparent 80%)`,
                  borderBottom: `1px solid ${gallery.borderColor}`,
                  borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
                }}
              >
                {/* Thumbnail bg image */}
                <img
                  src={gallery.images[0]}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
                {/* SVG icon */}
                <div className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg">
                  <gallery.Icon size={68} />
                </div>
                {/* Glossy top-shine */}
                <div
                  className="absolute inset-x-0 top-0 h-1/2 pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 100%)',
                    borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
                  }}
                />
              </div>

              {/* Label */}
              <div className="flex justify-between items-center px-5 py-3">
                <span
                  className="font-bold text-sm transition-colors duration-200 group-hover:text-glow"
                  style={{ color: 'var(--text)' }}
                >
                  {isPt ? gallery.titlePt : gallery.titleEn}
                </span>
                <span
                  className="font-pixel text-base ml-3 shrink-0 px-2"
                  style={{
                    color: 'var(--accent2)',
                    background: 'rgba(0,212,255,0.08)',
                    border: '1px solid rgba(0,212,255,0.2)',
                    borderRadius: '12px',
                  }}
                >
                  {gallery.images.length} IMG
                </span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        /* ── Image viewer ── */
        <TerminalPanel>
          <div
            className="flex justify-between items-center mb-5 pb-4"
            style={{ borderBottom: '1px solid rgba(0,212,255,0.15)' }}
          >
            <h2 className="font-bold text-lg" style={{ color: 'var(--accent)' }}>
              {isPt ? selected?.titlePt : selected?.titleEn}
            </h2>
            <button
              onClick={() => setActive(null)}
              className="btn-gloss px-4 py-1.5 text-sm font-bold tracking-widest uppercase"
            >
              {t('gallery.btn_back')}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {selected?.images.map((src, i) => (
              <div
                key={i}
                className="group relative overflow-hidden"
                style={{
                  background: 'rgba(0,10,25,0.6)',
                  border: '1px solid rgba(0,212,255,0.15)',
                  borderRadius: 'var(--radius-md)',
                  aspectRatio: '1',
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"
                  style={{ background: 'rgba(0,255,136,0.07)', mixBlendMode: 'overlay' }}
                />
                <div
                  className="absolute top-2 left-2 font-pixel text-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity px-2"
                  style={{
                    color: 'var(--accent)',
                    background: 'rgba(3,7,18,0.88)',
                    border: '1px solid rgba(0,255,136,0.3)',
                    borderRadius: '6px',
                  }}
                >
                  IMG_{String(i + 1).padStart(2, '0')}
                </div>
                <img
                  src={src}
                  alt={`${selected.titleEn} ${i + 1}`}
                  className="w-full h-full object-contain p-2 grayscale group-hover:grayscale-0 scale-95 group-hover:scale-100 transition-all duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </TerminalPanel>
      )}
    </div>
  );
}
