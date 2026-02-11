'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useProducts } from '@/context/ProductContext';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/products/ProductCard';
import type { Category, SortOption } from '@/types/product';

export function ShopClient() {
  const searchParams = useSearchParams();

  const {
    filteredProducts,
    categories,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    maxPrice,
    minRating,
    setMinRating,
    sortBy,
    setSortBy,
    searchQuery,
    setSearchQuery,
  } = useProducts();

  const [showFilters, setShowFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);

  /* ================= FIX 1: Remove `any` from category ================= */
  useEffect(() => {
    const cat = searchParams.get('category');

    if (
      typeof cat === 'string' &&
      (categories as Category[]).includes(cat as Category)
    ) {
      setSelectedCategory(cat as Category);
    }
  }, [searchParams, categories, setSelectedCategory]);

  const displayed = filteredProducts.slice(0, visibleCount);

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Shop</h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} products
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* MOBILE FILTER BUTTON */}
          <Button
            variant="outline"
            className="lg:hidden"
            onClick={() => setShowFilters((prev) => !prev)}
          >
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filters
            {showFilters && <X className="h-4 w-4 ml-2" />}
          </Button>

          {/* SIDEBAR */}
          <aside
            className={`w-full lg:w-64 shrink-0 space-y-6 ${
              showFilters ? 'block' : 'hidden lg:block'
            }`}
          >
            {/* Search */}
            <div>
              <label className="text-sm font-semibold mb-2 block">Search</label>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full h-10 px-3 rounded-lg bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            {/* Categories */}
            <div>
              <label className="text-sm font-semibold mb-2 block">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {(categories as Category[]).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
                      selectedCategory === cat
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary hover:bg-secondary/80'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <label className="text-sm font-semibold mb-2 block">
                Price Range
              </label>
              <Slider
                value={[priceRange[1]]}
                max={maxPrice}
                step={1}
                onValueChange={(v: number[]) => setPriceRange([0, v[0]])}
                className="mb-2"
              />
              <p className="text-xs text-muted-foreground">
                $0 — ${priceRange[1]}
              </p>
            </div>

            {/* Rating */}
            <div>
              <label className="text-sm font-semibold mb-2 block">
                Min Rating
              </label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((r) => (
                  <button
                    key={r}
                    onClick={() => setMinRating(r === minRating ? 0 : r)}
                    className="p-1"
                  >
                    <Star
                      className={`h-5 w-5 ${
                        minRating >= r
                          ? 'text-accent fill-accent'
                          : 'text-muted-foreground/30'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* ================= FIX 2: Remove `any` from sort ================= */}
            <div>
              <label className="text-sm font-semibold mb-2 block">
                Sort by
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="w-full h-10 px-3 rounded-lg bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="popularity">Popularity</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </aside>

          {/* PRODUCTS */}
          <div className="flex-1">
            {displayed.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  No products found
                </p>

                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                    setPriceRange([0, maxPrice]);
                    setMinRating(0);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  {displayed.map((p, i) => (
                    <ProductCard key={p.id} product={p} index={i} />
                  ))}
                </div>

                {visibleCount < filteredProducts.length && (
                  <div className="text-center mt-10">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => setVisibleCount((prev) => prev + 12)}
                    >
                      Load More
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}