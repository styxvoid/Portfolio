import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TerminalPanel } from "./TerminalPanel";

const GALLERIES = [
  {
    id: "twitch",
    title: "🌐 Overlays Twitch - Octacore",
    images: [
      "https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/overlays%20twitch/imagem%20de%20cabe%C3%A7alho.png",
      "https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/overlays%20twitch/PNG%20espera%20live.png",
      "https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/overlays%20twitch/PNG%20finaliza%C3%A7%C3%A3o.png",
      "https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/overlays%20twitch/PNG%20LIVE%20CRONOMETRO%20raio.png",
      "https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/overlays%20twitch/PNG%20OVERLAY%20LIVE%20CHAT%20OCTACORE.png"
    ]
  },
  {
    id: "posts",
    title: "📄 Posts - Octacore",
    images: [
      "https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/posts/post%20insta%20carrossel%201.png",
      "https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/posts/post%20insta%20carrossel%202%20ordem%20alterada.png",
      "https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/posts/post%20pedr%C3%A3o%20atualizado.png",
      "https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/posts/post%20pedr%C3%A3o%202%20atualizado.png"
    ]
  },
  {
    id: "stories",
    title: "📱 Stories - Octacore",
    images: [
      "https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/stories/classificatorias.png",
      "https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/stories/classificatorias%202.png",
      "https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/stories/story%20esporte.png",
      "https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/stories/Story%20Filet.png",
      "https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/stories/STORY%20PUC%20IN%20ROCA.png",
      "https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/stories/story%20seletivas%20esportes%20corrigido.png"
    ]
  },
  {
    id: "hacking",
    title: "💻 Hacking Club PUCPR",
    images: [
      "https://raw.githubusercontent.com/styxvoid/retro-portfolio/master/assets/gallery/clube%20de%20hacking/panfleto%20clube%20de%20hacking%20base%20(1).png"
    ]
  }
];

export function GallerySection() {
  const { t } = useTranslation();
  const [activeGallery, setActiveGallery] = useState<string | null>(null);

  const selectedGallery = activeGallery ? GALLERIES.find(g => g.id === activeGallery) : null;

  return (
    <section id="gallery" className="py-12 w-full scroll-mt-20">
      <h2 className="text-2xl md:text-3xl font-display text-accent text-glow mb-8 uppercase tracking-wide">
        {t('gallery.title')}
      </h2>

      {!activeGallery ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GALLERIES.map(gallery => (
            <TerminalPanel 
              key={gallery.id} 
              className="cursor-pointer group hover:border-accent transition-colors duration-300 overflow-hidden"
            >
              <div 
                className="absolute inset-0 bg-surface z-10" 
                onClick={() => setActiveGallery(gallery.id)}
              >
                <div className="w-full h-32 overflow-hidden border-b border-muted group-hover:border-accent/50 transition-colors">
                  <div className="w-full h-full bg-surface2 relative">
                    {/* Placeholder glitch effect for image preview */}
                    <div className="absolute inset-0 bg-accent/5 flex items-center justify-center font-pixel text-accent/30 text-sm">
                      [ PREVIEW_RENDER ]
                    </div>
                  </div>
                </div>
                <div className="p-4 flex justify-between items-center bg-surface group-hover:bg-accent/5 transition-colors">
                  <span className="font-bold text-text group-hover:text-accent transition-colors">{gallery.title}</span>
                  <span className="text-xs text-text-dim font-pixel">[{gallery.images.length} IMG]</span>
                </div>
              </div>
            </TerminalPanel>
          ))}
        </div>
      ) : (
        <TerminalPanel className="animate-in fade-in zoom-in duration-300">
          <div className="mb-6 flex justify-between items-center border-b border-muted pb-4">
            <h3 className="font-bold text-accent text-lg">{selectedGallery?.title}</h3>
            <button 
              onClick={() => setActiveGallery(null)}
              className="text-text hover:text-accent text-sm uppercase tracking-widest transition-colors font-mono hover-glitch"
            >
              {t('gallery.btn_back')}
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedGallery?.images.map((img, index) => (
              <div key={index} className="aspect-square bg-surface2 border border-muted flex items-center justify-center overflow-hidden group relative">
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none mix-blend-overlay"></div>
                <div className="absolute top-2 left-2 text-accent text-xs font-pixel z-10 bg-surface/80 px-1 border border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  IMG_{String(index + 1).padStart(2, '0')}
                </div>
                <img 
                  src={img} 
                  alt={`${selectedGallery.title} ${index + 1}`} 
                  className="w-full h-full object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-500 scale-95 group-hover:scale-100"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </TerminalPanel>
      )}
    </section>
  );
}
