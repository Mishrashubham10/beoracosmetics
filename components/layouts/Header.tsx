'use client';

import { useState, useEffect } from 'react';
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useProducts } from '@/context/ProductContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopDropdown, setShopDropdown] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const { totalItems } = useCart();
  const { items: wishlistItems } = useWishlist();
  const { searchQuery, setSearchQuery } = useProducts();
  const router = useRouter();

  /* Clear search automatically when popup opens */
  useEffect(() => {
    if (searchOpen) {
      setSearchQuery('');
    }
  }, [searchOpen, setSearchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push('/shop');
      setSearchOpen(false);
    }
  };

  const shopCategories = [
    { label: 'All Products', path: '/shop' },
    { label: 'Skincare', path: '/shop?category=Skincare' },
    { label: 'Makeup', path: '/shop?category=Makeup' },
    { label: 'Haircare', path: '/shop?category=Haircare' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= TOP NAV ================= */}
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* LEFT (Mobile Menu Only) */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight"
            >
              Veora<span className="text-primary">Cosmetics</span>
            </Link>
          </div>

          {/* CENTER NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            <Link href="/" className="nav-link">
              Home
            </Link>

            {/* SHOP DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setShopDropdown(true)}
              onMouseLeave={() => setShopDropdown(false)}
            >
              <Link href="/shop" className="nav-link flex items-center gap-1">
                Shop <ChevronDown className="h-3 w-3" />
              </Link>

              <AnimatePresence>
                {shopDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full mt-3 w-52 rounded-xl border bg-card shadow-xl p-2"
                  >
                    {shopCategories.map((c) => (
                      <Link
                        key={c.path}
                        href={c.path}
                        onClick={() => setShopDropdown(false)}
                        className="dropdown-link"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </nav>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-2">
            {/* SEARCH */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen((prev) => !prev)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* WISHLIST */}
            <Link href="/wishlist">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                {wishlistItems.length > 0 && (
                  <span className="badge-counter">{wishlistItems.length}</span>
                )}
              </Button>
            </Link>

            {/* CART */}
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="badge-counter">{totalItems}</span>
                )}
              </Button>
            </Link>

            {/* PROFILE */}
            <div
              className="relative hidden lg:block"
              onMouseEnter={() => setProfileDropdown(true)}
              onMouseLeave={() => setProfileDropdown(false)}
            >
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>

              <AnimatePresence>
                {profileDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-3 w-40 rounded-xl border bg-card shadow-xl p-2"
                  >
                    <Link href="/login" className="dropdown-link">
                      Login
                    </Link>
                    <Link href="/register" className="dropdown-link">
                      Register
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ================= SEARCH POPUP ================= */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="border-t border-border/50 py-4"
            >
              <form onSubmit={handleSearch} className="max-w-xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-11 pl-10 pr-10 rounded-xl bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    autoFocus
                  />

                  {/* CLEAR BUTTON */}
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-sm"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border/50 bg-background"
          >
            <nav className="px-4 py-4 space-y-1">
              {[
                { label: 'Home', path: '/' },
                { label: 'Shop', path: '/shop' },
                { label: 'About', path: '/about' },
                { label: 'Blog', path: '/blog' },
                { label: 'Contact', path: '/contact' },
                { label: 'Login', path: '/login' },
                { label: 'Register', path: '/register' },
              ].map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-3 rounded-lg text-sm hover:bg-secondary transition"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}