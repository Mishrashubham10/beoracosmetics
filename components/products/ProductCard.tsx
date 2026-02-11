'use client';

import { Heart, IndianRupee, ShoppingBag, Star } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const wishlisted = isInWishlist(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <div className="glass-card overflow-hidden hover-lift">
        {/* =========== IMAGE. ============= */}
        <Link
          href={`/product/${product.id}`}
          className="block relative aspect-square overflow-hidden"
        >
          <div
            className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
            style={{ background: product.image }}
          >
            <span className="font-heading text-4xl font-bold text-foreground/10 select-none">
              {product.name.charAt(0)}
            </span>
          </div>
          {product.badge && (
            <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
              {product.badge}
            </span>
          )}
          {/* Quick actions overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className="h-10 px-5 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-elevated flex items-center gap-2 hover:bg-primary/90 transition-colors"
            >
              <ShoppingBag className="h-4 w-4" /> Add to Cart
            </button>
          </div>
        </Link>

        {/* Info */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                {product.category}
              </p>
              <Link href={`/product/${product.id}`}>
                <h3 className="font-heading font-semibold text-sm truncate hover:text-primary transition-colors">
                  {product.name}
                </h3>
              </Link>
            </div>
            <button
              onClick={() =>
                wishlisted
                  ? removeFromWishlist(product.id)
                  : addToWishlist(product)
              }
              className="shrink-0 p-1.5 rounded-full hover:bg-secondary transition-colors"
            >
              <Heart
                className={`h-4 w-4 ${wishlisted ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
              />
            </button>
          </div>
          <div className="flex items-center gap-1 mt-2">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            <span className="text-xs font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">
              ({product.reviews})
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="font-heading font-bold text-base">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}