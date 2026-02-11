'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, Star, Sparkles, Leaf, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/products/ProductCard';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function HomePage() {
  const featured = products.filter((p) => p.featured).slice(0, 4);
  const bestSellers = products.filter((p) => p.bestSeller).slice(0, 4);

  const [newsletterEmail, setNewsletterEmail] = useState('');

  const testimonials = [
    {
      name: 'Sophie M.',
      text: 'The Radiance Serum transformed my skin in just two weeks!',
      rating: 5,
    },
    {
      name: 'Elena R.',
      text: 'The packaging, the scent, everything is perfection.',
      rating: 5,
    },
    {
      name: 'Mia K.',
      text: 'My hair has never looked healthier.',
      rating: 5,
    },
  ];

  const categories = [
    {
      name: 'Skincare',
      desc: 'Reveal your natural glow',
      gradient:
        'linear-gradient(135deg, hsl(350,40%,90%) 0%, hsl(20,30%,92%) 100%)',
    },
    {
      name: 'Makeup',
      desc: 'Enhance your beauty',
      gradient:
        'linear-gradient(135deg, hsl(340,35%,85%) 0%, hsl(355,25%,90%) 100%)',
    },
    {
      name: 'Haircare',
      desc: 'Nourish & strengthen',
      gradient:
        'linear-gradient(135deg, hsl(35,40%,88%) 0%, hsl(25,30%,92%) 100%)',
    },
  ];

  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://i.pinimg.com/736x/2e/8c/ae/2e8cae879963d537a757828e6d99c3d3.jpg"
            alt="Luxury skincare collection"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-background/90 via-background/60 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Discover Your <span className="text-gradient">Natural Glow</span>
            </h1>

            <p className="text-muted-foreground mb-8 max-w-md">
              Luxury skincare crafted with the finest natural ingredients.
              Elevate your beauty ritual.
            </p>

            <div className="flex gap-4">
              <Link href="/shop">
                <Button size="lg">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="/about">
                <Button variant="outline" size="lg">
                  Our Story
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURES BAR ================= */}
      <section className="bg-secondary/50 py-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { icon: Leaf, label: '100% Natural' },
            { icon: Sparkles, label: 'Cruelty Free' },
            { icon: Droplets, label: 'Derma Tested' },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground"
            >
              <Icon className="h-4 w-4 text-primary" /> {label}
            </div>
          ))}
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Shop by Category
            </h2>
            <p className="text-muted-foreground">Find your perfect match</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={`/shop?category=${cat.name}`}
                  className="block group"
                >
                  <div className="aspect-4/5 rounded-2xl overflow-hidden relative hover-lift">
                    <div
                      className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                      style={{ background: cat.gradient }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                      <h3 className="text-2xl font-bold">{cat.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {cat.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="flex justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                Featured Products
              </h2>
              <p className="text-muted-foreground">
                Curated picks for your beauty ritual
              </p>
            </div>

            <Link
              href="/shop"
              className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featured.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= BEST SELLERS ================= */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="flex justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                Best Sellers
              </h2>
              <p className="text-muted-foreground">Our most loved products</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {bestSellers.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground">
              Real reviews from our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>

                <p className="font-semibold text-sm">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeUp}
            className="gradient-rose rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Join the Veora Family
            </h2>

            <p className="text-muted-foreground mb-6">
              Subscribe for exclusive offers and 10% off your first order.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletterEmail('');
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />

              <Button size="lg">Subscribe</Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}