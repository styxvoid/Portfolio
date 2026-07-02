import { useEffect } from 'react';
import { useParams, useLocation } from 'wouter';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MatrixRain } from '../components/MatrixRain';
import AboutPage from './AboutPage';
import WorkPage from './WorkPage';
import BlogPage from './BlogPage';
import GalleryPage from './GalleryPage';
import ContactPage from './ContactPage';

const SECTIONS: Record<string, React.ComponentType> = {
  about:   AboutPage,
  work:    WorkPage,
  blog:    BlogPage,
  gallery: GalleryPage,
  contact: ContactPage,
};

const VALID = new Set(Object.keys(SECTIONS));

export default function MainPortfolio() {
  const params = useParams<{ section: string }>();
  const [, setLocation] = useLocation();
  const section = params.section ?? 'about';

  // Redirect unknown sections to /home/about
  useEffect(() => {
    if (!VALID.has(section)) setLocation('/home/about');
  }, [section, setLocation]);

  const Section = SECTIONS[section] ?? AboutPage;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Main content area — centered panel like the original */}
      <main
        className="flex-1 w-full max-w-5xl mx-auto px-4 py-8"
        style={{ minHeight: 0 }}
      >
        <Section />
      </main>

      <Footer />
    </div>
  );
}
