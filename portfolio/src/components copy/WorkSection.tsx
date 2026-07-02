import { useTranslation } from "react-i18next";
import { TerminalPanel } from "./TerminalPanel";

export function WorkSection() {
  const { t } = useTranslation();

  return (
    <section id="work" className="py-12 w-full scroll-mt-20">
      <h2 className="text-2xl md:text-3xl font-display text-accent text-glow mb-8 uppercase tracking-wide">
        {t('work.title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Project 1 */}
        <TerminalPanel className="group hover:-translate-y-1 transition-transform duration-300">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-accent group-hover:text-glow transition-all">{t('work.project1_title')}</h3>
            <span className="text-xs bg-accent/10 text-accent border border-accent/30 px-2 py-1">2026</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {['HTML', 'CSS', 'JavaScript', 'React'].map(tag => (
              <span key={tag} className="text-xs font-pixel tracking-widest text-text-dim">[{tag}]</span>
            ))}
          </div>

          <p className="text-sm text-text leading-relaxed mb-6 flex-grow">
            {t('work.project1_desc')}
          </p>
        </TerminalPanel>

        {/* Project 2 */}
        <TerminalPanel className="group hover:-translate-y-1 transition-transform duration-300 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-accent group-hover:text-glow transition-all">Raven's List</h3>
            <span className="text-xs bg-accent/10 text-accent border border-accent/30 px-2 py-1">2025</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'].map(tag => (
              <span key={tag} className="text-xs font-pixel tracking-widest text-text-dim">[{tag}]</span>
            ))}
          </div>

          <p className="text-sm text-text leading-relaxed mb-6 flex-grow">
            {t('work.project2_desc')}
          </p>

          <div className="mt-auto pt-4 border-t border-muted border-dashed">
            <a 
              href="https://github.com/styxvoid/RavensListV2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-xs font-mono text-text hover:text-accent transition-colors duration-300 group-hover:text-glow"
            >
              {t('work.btn_github')} <span className="ml-1">↗</span>
            </a>
          </div>
        </TerminalPanel>

      </div>
    </section>
  );
}
