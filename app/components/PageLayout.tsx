import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: ReactNode;
  mainClassName?: string;
}

export default function PageLayout({ children, mainClassName = '' }: PageLayoutProps) {
  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-white text-green-700 px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-green-700"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-[56px] md:h-[64px] z-40 bg-white/95 backdrop-blur-sm shadow-sm">
        <Navbar />
      </header>

      {/* Main Content */}
      <main
        id="main-content"
        className={`min-h-[500px] pt-[56px] md:pt-[64px] ${mainClassName}`}
        role="main"
        tabIndex={-1}
      >
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-8">
        <Footer />
      </footer>
    </>
  );
}