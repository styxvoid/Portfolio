import { useTranslation } from "react-i18next";
import { TerminalPanel } from "./TerminalPanel";
import { BlinkingCursor } from "./BlinkingCursor";

export function AboutSection() {
  const { t } = useTranslation();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="pt-32 pb-12 w-full scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Bio Panel */}
        <div className="lg:col-span-8">
          <TerminalPanel className="h-full flex flex-col">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-accent text-glow mb-2 uppercase tracking-wide">
              Nathan Nascimento
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-text-dim mb-8">
              <span className="font-pixel text-xl tracking-widest uppercase">{t('about.role')}</span>
              <span className="hidden sm:inline text-muted">|</span>
              <span className="font-mono text-sm bg-surface2 px-2 py-1 border border-muted/50 rounded-sm">
                {t('about.location')}
              </span>
            </div>
            
            <p className="text-text leading-relaxed mb-8 flex-grow">
              <span className="text-accent mr-2">{'>'}</span>
              {t('about.bio')}
              <BlinkingCursor />
            </p>
            
            <div>
              <button 
                onClick={scrollToContact}
                className="inline-block border border-accent text-accent px-6 py-3 font-bold tracking-widest uppercase hover:bg-accent hover:text-bg transition-colors duration-300 hover-glitch"
              >
                {t('about.cta')}
              </button>
            </div>
          </TerminalPanel>
        </div>

        {/* Skills Panel */}
        <div className="lg:col-span-4">
          <TerminalPanel className="h-full" title="SYSTEM.INFO">
            <h2 className="text-accent font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="text-accent-dim">◆</span> {t('about.skills')}
            </h2>
            
            <div className="space-y-6 text-sm">
              <div>
                <div className="text-text-dim uppercase tracking-wider mb-2 border-b border-muted pb-1">{t('about.skills_frontend')}</div>
                <div className="grid grid-cols-2 gap-y-1 text-text">
                  <span>// HTML / CSS</span>
                  <span>// JavaScript</span>
                  <span>// React</span>
                  <span>// TypeScript</span>
                  <span>// Construct</span>
                </div>
              </div>
              
              <div>
                <div className="text-text-dim uppercase tracking-wider mb-2 border-b border-muted pb-1">{t('about.skills_backend')}</div>
                <div className="grid grid-cols-2 gap-y-1 text-text">
                  <span>// Python</span>
                  <span>// C / C#</span>
                  <span>// SQL</span>
                  <span>// Node.js</span>
                  <span>// PHP</span>
                </div>
              </div>
              
              <div>
                <div className="text-text-dim uppercase tracking-wider mb-2 border-b border-muted pb-1">{t('about.skills_design')}</div>
                <div className="grid grid-cols-2 gap-y-1 text-text">
                  <span>// SolidWorks</span>
                  <span>// Blender</span>
                  <span>// Photoshop</span>
                  <span>// Premiere</span>
                  <span>// Figma</span>
                </div>
              </div>
              
              <div>
                <div className="text-text-dim uppercase tracking-wider mb-2 border-b border-muted pb-1">{t('about.skills_languages')}</div>
                <div className="flex flex-col gap-y-1 text-text">
                  <span>// English — C1</span>
                  <span>// Japanese — N3</span>
                  <span>// German — Learning</span>
                </div>
              </div>
            </div>
          </TerminalPanel>
        </div>

        {/* Academic Background Panel */}
        <div className="lg:col-span-12">
          <TerminalPanel>
            <h2 className="text-accent font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="text-accent-dim">◆</span> {t('about.academic')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative pl-6 border-l border-muted hover:border-accent transition-colors duration-300 group">
                <div className="absolute w-3 h-3 bg-surface border border-muted group-hover:bg-accent group-hover:border-accent transition-all duration-300 rounded-none -left-[6.5px] top-1.5 group-hover:box-glow"></div>
                <div className="text-accent font-bold mb-1">{t('about.academic_1_title')} <span className="text-text-dim font-normal ml-2">· 2025</span></div>
                <div className="text-xs text-text-dim font-pixel tracking-wider uppercase mb-3">ATHLETIC ACADEMIC ASSOCIATION OCTACORE - PUCPR</div>
                <p className="text-text text-sm leading-relaxed">{t('about.academic_1_desc')}</p>
              </div>
              
              <div className="relative pl-6 border-l border-muted hover:border-accent transition-colors duration-300 group">
                <div className="absolute w-3 h-3 bg-surface border border-muted group-hover:bg-accent group-hover:border-accent transition-all duration-300 rounded-none -left-[6.5px] top-1.5 group-hover:box-glow"></div>
                <div className="text-accent font-bold mb-1">{t('about.academic_2_title')} <span className="text-text-dim font-normal ml-2">· 2023</span></div>
                <div className="text-xs text-text-dim font-pixel tracking-wider uppercase mb-3">PUCPR</div>
                <p className="text-text text-sm leading-relaxed">{t('about.academic_2_desc')}</p>
              </div>
            </div>
          </TerminalPanel>
        </div>
      </div>
    </section>
  );
}
