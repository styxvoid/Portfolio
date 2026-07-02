import type { ComponentType } from 'react';
import {
  TwitchOverlaysIcon,
  PostsIcon,
  StoriesIcon,
  HackingClubIcon,
} from '@/components/GalleryIcons';

export const GALLERY_ASSET_ROOT = '/assets/gallery';

export interface GallerySection {
  id: string;
  Icon: ComponentType<{ size?: number; className?: string }>;
  titleEn: string;
  titlePt: string;
  assetBase: string;
  images: string[];
}

export const GALLERY_SECTIONS: GallerySection[] = [
  {
    id: 'twitch',
    Icon: TwitchOverlaysIcon,
    titleEn: 'Twitch Overlays — Octacore',
    titlePt: 'Overlays Twitch — Octacore',
    assetBase: 'twitch',
    images: [
      'imagem-de-cabecalho.png',
      'png-espera-live.png',
      'png-finalizacao.png',
      'png-live-cronometro-raio.png',
      'png-overlay-live-chat-octacore.png',
    ],
  },
  {
    id: 'posts',
    Icon: PostsIcon,
    titleEn: 'Posts — Octacore',
    titlePt: 'Posts — Octacore',
    assetBase: 'posts',
    images: [
      'post-insta-carrossel-1.png',
      'post-insta-carrossel-2-ordem-alterada.png',
      'post-pedrao-atualizado.png',
      'post-pedrao-2-atualizado.png',
    ],
  },
  {
    id: 'stories',
    Icon: StoriesIcon,
    titleEn: 'Stories — Octacore',
    titlePt: 'Stories — Octacore',
    assetBase: 'stories',
    images: [
      'classificatorias.png',
      'classificatorias-2.png',
      'story-esporte.png',
      'story-filet.png',
      'story-puc-in-roca.png',
      'story-seletivas-esportes-corrigido.png',
    ],
  },
  {
    id: 'hacking',
    Icon: HackingClubIcon,
    titleEn: 'Hacking Club PUCPR',
    titlePt: 'Hacking Club PUCPR',
    assetBase: 'hacking',
    images: [
      'panfleto-clube-de-hacking-base.png',
    ],
  },
];

export interface WorkProject {
  key: string;
  title: string;
  year: string;
  tags: string[];
  githubUrl?: string;
  description: string;
  accentColor: string;
  borderColor: string;
}

export interface WorkCategory {
  id: string;
  title: string;
  summary: string;
  Icon: ComponentType<{ size?: number; className?: string }>;
  accentColor: string;
  borderColor: string;
  glowColor: string;
  projects: WorkProject[];
}

export const WORK_CATEGORIES: WorkCategory[] = [
  {
    id: 'web',
    title: 'Desenvolvimento Web',
    summary: 'Portfólios, landing pages e interfaces com foco em performance e identidade visual.',
    Icon: TwitchOverlaysIcon,
    accentColor: 'rgba(0,255,136,0.12)',
    borderColor: 'rgba(0,255,136,0.3)',
    glowColor: 'rgba(0,255,136,0.2)',
    projects: [
      {
        key: 'portfolio',
        title: 'This Portfolio!',
        year: '2026',
        tags: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
        githubUrl: 'https://github.com/styxvoid/retro-portfolio',
        description: 'Um portfólio com estética futurista, navegação fluida e uma identidade visual forte.',
        accentColor: 'rgba(0,255,136,0.12)',
        borderColor: 'rgba(0,255,136,0.3)',
      },
      {
        key: 'ravens',
        title: "Raven's List",
        year: '2025',
        tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
        githubUrl: 'https://github.com/styxvoid/RavensListV2',
        description: 'Uma plataforma de listagens com estrutura simples, conteúdo dinâmico e foco em usabilidade.',
        accentColor: 'rgba(0,212,255,0.1)',
        borderColor: 'rgba(0,212,255,0.28)',
      },
    ],
  },
  {
    id: 'games',
    title: 'Jogos',
    summary: 'Experiências interativas, protótipos e ideias em ritmo de game jam.',
    Icon: StoriesIcon,
    accentColor: 'rgba(180,142,255,0.12)',
    borderColor: 'rgba(180,142,255,0.35)',
    glowColor: 'rgba(180,142,255,0.2)',
    projects: [
      {
        key: 'jam',
        title: 'Prototype Arcade',
        year: '2024',
        tags: ['Godot', 'UI', 'Gameplay'],
        description: 'Protótipo experimental com foco em ritmo, feedback visual e narrativa curta.',
        accentColor: 'rgba(180,142,255,0.1)',
        borderColor: 'rgba(180,142,255,0.28)',
      },
    ],
  },
  {
    id: 'others',
    title: 'Outros Projetos',
    summary: 'Trabalhos variados, identidade visual, branding e conteúdos criativos.',
    Icon: PostsIcon,
    accentColor: 'rgba(0,212,255,0.1)',
    borderColor: 'rgba(0,212,255,0.3)',
    glowColor: 'rgba(0,212,255,0.18)',
    projects: [
      {
        key: 'branding',
        title: 'Branding Visual',
        year: '2023',
        tags: ['Illustration', 'Design', 'Motion'],
        description: 'Exploração de identidade visual com estética oscila entre o tecnológico e o editorial.',
        accentColor: 'rgba(0,212,255,0.09)',
        borderColor: 'rgba(0,212,255,0.25)',
      },
    ],
  },
];
