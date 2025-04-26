'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Smooth scroll for anchor links
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        setIsOpen(false);
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Logo */}
      <div
        className={`fixed top-4 left-4 md:top-6 md:left-6 z-50 transition-transform duration-300 ${
          isScrolled ? 'scale-90' : ''
        }`}
      >
        <Link href="/" className="hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 rounded-md inline-block">
          <Image
            src="/bmc-logo.jpg"
            alt="BMC Electrical Contractors"
            className="rounded-md object-contain"
            width={isScrolled ? 130 : 150}
            height={60}
            priority
          />
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-40 rounded-full px-4 md:px-8 transition-all duration-300 hidden md:block mt-20 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-lg border border-gray-200 scale-95 mt-8'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
        style={{
          transform: `translate(-50%, 0) scale(${isScrolled ? 0.95 : 1})`,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div className="flex items-center justify-between h-12 md:h-14">
          <div className="flex items-center space-x-6 lg:space-x-12">
            {navigationItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-xs lg:text-sm min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tertiary rounded-md"
                onClick={e => handleNavLinkClick(e, item.href)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Call Button (desktop) */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50 flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="tel:0432974722"
              className="bg-green-700 text-white px-6 py-2 rounded-full text-sm hover:bg-green-800 transition-colors flex items-center gap-2"
            >
              <i className="fas fa-phone"></i>
              Call Now
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 w-10 h-10 flex items-center justify-center md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary rounded-md"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <motion.div className="w-6 h-6 relative" animate={isOpen ? 'open' : 'closed'}>
          <motion.span
            className="absolute h-0.5 rounded-full bg-tertiary w-6 transform-gpu"
            style={{ top: '30%' }}
            variants={{ open: { rotate: 45, y: 6 }, closed: { rotate: 0, y: 0 } }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute h-0.5 rounded-full bg-tertiary w-6 top-1/2 -translate-y-1/2"
            variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute h-0.5 rounded-full bg-tertiary w-6"
            style={{ bottom: '30%' }}
            variants={{ open: { rotate: -45, y: -6 }, closed: { rotate: 0, y: 0 } }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </button>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 backdrop-blur-sm z-50 md:hidden bg-primary/60"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <motion.div
        ref={menuRef}
        id="mobile-menu"
        className="fixed top-0 right-0 w-4/5 h-full backdrop-blur-md z-50 md:hidden shadow-xl bg-background/95"
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <nav className="space-y-1">
            {navigationItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-4 px-4 text-text hover:text-tertiary transition-colors duration-300 text-lg"
                onClick={e => {
                  handleNavLinkClick(e, item.href);
                  if (!item.href.startsWith('/#')) setIsOpen(false);
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-8 space-y-4">
            <Link
              href="tel:0432974722"
              className="w-full bg-green-700 text-white text-lg py-4 rounded-full flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-102"
              onClick={() => setIsOpen(false)}
            >
              <i className="fas fa-phone"></i>
              Call Now
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
