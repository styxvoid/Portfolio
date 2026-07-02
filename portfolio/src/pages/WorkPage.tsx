import { useTranslation } from 'react-i18next';
import { TerminalPanel } from '../components/TerminalPanel';

const PROJECTS = [
  {
    key: 'portfolio',
    title: 'This Portfolio!',
    year: '2026',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
    githubUrl: 'https://github.com/styxvoid/retro-portfolio',
    descKey: 'work.project1_desc',
    accentColor: 'rgba(0,255,136,0.12)',
    borderColor: 'rgba(0,255,136,0.3)',
  },
  {
    key: 'ravens',
    title: "Raven's List",
    year: '2025',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
    githubUrl: 'https://github.com/styxvoid/RavensListV2',
    descKey: 'work.project2_desc',
    accentColor: 'rgba(0,212,255,0.1)',
    borderColor: 'rgba(0,212,255,0.28)',
  },
];

export default function WorkPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6">
      {/* Section header */}
      <div className="font-pixel text-xl tracking-widest uppercase" style={{ color: 'var(--accent2)' }}>
        &gt; {t('work.title').replace('◆ ', '')}
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-5">
        {PROJECTS.map(project => (
          <div
            key={project.key}
            className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: `linear-gradient(160deg, rgba(255,255,255,0.05) 0%, ${project.accentColor} 100%), var(--surface)`,
              backdropFilter: 'blur(18px)',
              border: `1px solid ${project.borderColor}`,
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              boxShadow: '0 6px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
            }}
          >
            {/* Glass top-shine */}
            <div
              className="absolute inset-x-0 top-0 h-px pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), rgba(0,212,255,0.3), transparent)',
              }}
            />

            {/* Top row: title + year badge */}
            <div className="flex justify-between items-start mb-3 relative z-10">
              <h2
                className="text-xl font-bold font-display transition-all duration-300 group-hover:text-glow"
                style={{ color: 'var(--accent)' }}
              >
                {project.title}
              </h2>
              <span
                className="font-pixel text-lg ml-4 shrink-0 px-3 py-0.5"
                style={{
                  color: 'var(--accent)',
                  background: 'rgba(0,255,136,0.08)',
                  border: '1px solid rgba(0,255,136,0.25)',
                  borderRadius: '20px',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
              >
                {project.year}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed mb-5 relative z-10" style={{ color: 'var(--text)' }}>
              {t(project.descKey)}
            </p>

            {/* Tags + GitHub link */}
            <div
              className="flex flex-wrap items-center gap-2 pt-4 relative z-10"
              style={{ borderTop: '1px solid rgba(0,212,255,0.12)' }}
            >
              {project.tags.map(tag => (
                <span key={tag} className="tag-pill">[{tag}]</span>
              ))}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto font-mono text-xs uppercase tracking-widest transition-all duration-200 hover:text-glow px-3 py-1"
                  style={{
                    color: 'var(--accent2)',
                    background: 'rgba(0,212,255,0.07)',
                    border: '1px solid rgba(0,212,255,0.22)',
                    borderRadius: '20px',
                  }}
                >
                  {t('work.btn_github')} ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
