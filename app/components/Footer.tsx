'use client';
import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setStatus('success');
      setMessage('Successfully subscribed to newsletter!');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Failed to subscribe');
    }
  };

  const links = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Projects', href: '/projects' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'For Musicians', href: '/musicians' },
      { name: 'For Investors', href: '/investors' },
      { name: 'Learn More', href: '/learn-more' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
    social: [
      { name: 'Twitter', href: 'https://twitter.com/champions', icon: 'fab fa-twitter' },
      { name: 'LinkedIn', href: 'https://linkedin.com/company/champions', icon: 'fab fa-linkedin' },
      { name: 'Instagram', href: 'https://instagram.com/champions', icon: 'fab fa-instagram' },
    ],
  };

  return (
    <footer className={`h-full flex items-center ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} BMC Electrical. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.facebook.com/profile.php?id=100094347470517"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 transition-colors"
              aria-label="Visit our Facebook page"
            >
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="/privacy" className="text-sm hover:text-green-500 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}