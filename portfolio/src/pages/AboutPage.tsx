import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { TerminalPanel } from '../components/TerminalPanel';
import { BlinkingCursor } from '../components/BlinkingCursor';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6">

      {/* Bio + Skills row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Bio panel */}
        <div className="lg:col-span-8">
          <TerminalPanel className="h-full flex flex-col gap-0">
            <h1
              className="text-3xl md:text-5xl font-display font-bold text-glow mb-2 uppercase"
              style={{ color: 'var(--accent)' }}
            >
              Nathan Nascimento
            </h1>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="font-pixel text-xl tracking-widest uppercase"
                style={{ color: 'var(--text-dim)' }}
              >
                {t('about.role')}
              </span>
              <span style={{ color: 'rgba(0,212,255,0.3)' }}>|</span>
              <span
                className="font-pixel text-lg px-3 py-0.5"
                style={{
                  color: 'var(--accent2)',
                  background: 'rgba(0,212,255,0.08)',
                  border: '1px solid rgba(0,212,255,0.25)',
                  borderRadius: '20px',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
              >
                {t('about.location')}
              </span>
            </div>

            <p className="leading-relaxed mb-8 flex-grow" style={{ color: 'var(--text)' }}>
              <span className="mr-2 text-glow" style={{ color: 'var(--accent)' }}>{'>'}</span>
              {t('about.bio')}
              <BlinkingCursor />
            </p>

            <div>
              <Link
                href="/home/contact"
                className="btn-gloss inline-block px-7 py-3 font-bold tracking-widest uppercase text-sm"
              >
                {t('about.cta')}
              </Link>
            </div>
          </TerminalPanel>
        </div>

        {/* Skills panel */}
        <div className="lg:col-span-4">
          <TerminalPanel className="h-full" title="SYSTEM.INFO">
            <div className="space-y-5 text-sm">
              {[
                {
                  label: t('about.skills_frontend'),
                  items: ['HTML / CSS', 'JavaScript', 'React', 'TypeScript', 'Construct'],
                },
                {
                  label: t('about.skills_backend'),
                  items: ['Python', 'C / C#', 'SQL', 'Node.js', 'PHP'],
                },
                {
                  label: t('about.skills_design'),
                  items: ['SolidWorks', 'Blender', 'Photoshop', 'Premiere', 'Figma'],
                },
                {
                  label: t('about.skills_languages'),
                  items: ['English — C1', 'Japanese — N3', 'German — Learning'],
                  cols: 1,
                },
              ].map(group => (
                <div key={group.label}>
                  <div
                    className="font-pixel text-base tracking-wider uppercase mb-2 pb-1"
                    style={{
                      color: 'var(--accent2)',
                      borderBottom: '1px solid rgba(0,212,255,0.15)',
                    }}
                  >
                    {group.label}
                  </div>
                  <div
                    className={`grid gap-y-1 ${group.cols === 1 ? '' : 'grid-cols-2'}`}
                    style={{ color: 'var(--text)' }}
                  >
                    {group.items.map(item => (
                      <span key={item}>
                        <span style={{ color: 'var(--accent)', marginRight: 4 }}>//</span>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TerminalPanel>
        </div>
      </div>

      {/* Academic panel */}
      <TerminalPanel title="ACADEMIC.LOG">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: t('about.academic_1_title'),
              year: '2025',
              org: 'ATHLETIC ACADEMIC ASSOCIATION OCTACORE · PUCPR',
              desc: t('about.academic_1_desc'),
            },
            {
              title: t('about.academic_2_title'),
              year: '2023',
              org: 'PUCPR',
              desc: t('about.academic_2_desc'),
            },
          ].map(entry => (
            <div
              key={entry.year}
              className="relative pl-5 group transition-all duration-300"
              style={{ borderLeft: '2px solid rgba(0,212,255,0.2)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderLeftColor = 'var(--accent)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderLeftColor = 'rgba(0,212,255,0.2)';
              }}
            >
              {/* Dot */}
              <div
                className="absolute -left-[7px] top-1.5 w-3 h-3 transition-all duration-300"
                style={{
                  background: 'var(--surface-solid)',
                  border: '1.5px solid rgba(0,212,255,0.4)',
                  borderRadius: '50%',
                }}
              />
              <div className="font-bold mb-1" style={{ color: 'var(--accent)' }}>
                {entry.title}
                <span
                  className="font-normal ml-2 text-sm px-2 py-0.5"
                  style={{
                    color: 'var(--accent2)',
                    background: 'rgba(0,212,255,0.08)',
                    border: '1px solid rgba(0,212,255,0.2)',
                    borderRadius: '12px',
                  }}
                >
                  {entry.year}
                </span>
              </div>
              <div
                className="font-pixel text-sm tracking-wider uppercase mb-2"
                style={{ color: 'var(--text-dim)' }}
              >
                {entry.org}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text)' }}>
                {entry.desc}
              </p>
            </div>
          ))}
        </div>
      </TerminalPanel>

    </div>
  );
}
