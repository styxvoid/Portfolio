import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Link, Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { useEffect } from 'react';

import './i18n';
import WelcomePage from './pages/WelcomePage';
import MainPortfolio from './pages/MainPortfolio';

const queryClient = new QueryClient();

function RedirectToAbout() {
  const [, setLocation] = useLocation();
  useEffect(() => { setLocation('/home/about'); }, [setLocation]);
  return null;
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-4 text-accent p-6">
      <h1 className="text-6xl font-display text-glow animate-flicker">404</h1>
      <p className="font-mono text-xl" style={{ color: 'var(--text-dim)' }}>ERR_PAGE_NOT_FOUND</p>
      <Link
        href="/"
        className="mt-8 btn-gloss px-6 py-2 font-bold uppercase tracking-widest"
      >
        [ RETURN TO SYSTEM ]
      </Link>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={WelcomePage} />
      <Route path="/home" component={RedirectToAbout} />
      <Route path="/home/:section" component={MainPortfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
