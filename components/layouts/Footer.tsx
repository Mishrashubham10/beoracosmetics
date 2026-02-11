'use client';

import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from 'sonner';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;

    toast('Subscribed!', {
      description: 'Thank you for joining the Veora family.',
    });

    setEmail('');
  };

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  const supportLinks = [
    { label: 'FAQs', path: '/faq' },
    { label: 'Shipping Policy', path: '/shipping-policy' },
    { label: 'Returns & Refunds', path: '/returns' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms & Conditions', path: '/terms' },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* ===== BRAND ===== */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Veora<span className="text-primary">Cosmetics</span>
            </h3>

            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Premium beauty & skincare crafted with love. Discover your glow
              with our carefully curated collection.
            </p>

            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ===== QUICK LINKS ===== */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== SUPPORT ===== */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Support
            </h4>

            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== NEWSLETTER ===== */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Newsletter
            </h4>

            <p className="text-sm text-background/60 mb-4">
              Get 10% off your first order and stay updated on new arrivals.
            </p>

            <form onSubmit={handleNewsletter} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 h-10 px-3 rounded-lg bg-background/10 border-0 text-sm text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button type="submit" size="sm" className="rounded-lg">
                Join
              </Button>
            </form>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-12 pt-8 border-t border-background/10 text-center">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} VeoraCosmetics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}