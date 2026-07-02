import { useTranslation } from "react-i18next";
import { TerminalPanel } from "./TerminalPanel";
import { BlinkingCursor } from "./BlinkingCursor";

export function BlogSection() {
  const { t } = useTranslation();

  return (
    <section id="blog" className="py-12 w-full scroll-mt-20">
      <h2 className="text-2xl md:text-3xl font-display text-accent text-glow mb-8 uppercase tracking-wide">
        {t('blog.title')}
      </h2>

      <TerminalPanel title="STATUS: IN_CONSTRUCTION">
        <div className="border border-dashed border-accent/30 p-6 bg-accent/5 mb-8">
          <div className="flex items-start gap-4 text-text-dim">
            <span className="text-accent mt-1 animate-pulse">!</span>
            <p className="text-sm leading-relaxed uppercase tracking-wider font-pixel">
              {t('blog.construction')}
            </p>
          </div>
        </div>

        <div className="space-y-4 font-mono text-sm">
          <div className="flex text-muted font-bold text-xs uppercase tracking-widest border-b border-muted pb-2">
            <div className="w-24">DATE</div>
            <div className="w-24">TYPE</div>
            <div className="flex-1">CONTENT</div>
          </div>
          
          <div className="flex opacity-50 group hover:opacity-100 transition-opacity duration-300 cursor-not-allowed">
            <div className="w-24 text-accent">2026.02.27</div>
            <div className="w-24 text-text-dim">INFO</div>
            <div className="flex-1 text-text">
              {t('blog.placeholder')} <BlinkingCursor />
            </div>
          </div>
          
          <div className="flex opacity-20">
            <div className="w-24 text-accent">----.--.--</div>
            <div className="w-24 text-text-dim">----</div>
            <div className="flex-1 text-text">---</div>
          </div>
        </div>
      </TerminalPanel>
    </section>
  );
}
