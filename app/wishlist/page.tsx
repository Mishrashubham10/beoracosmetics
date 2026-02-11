"use client";

import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WishlistPage() {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (items.length === 0)
    return (
      <div className="section-padding text-center container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Heart className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" />
          <h1 className="font-heading text-2xl font-bold mb-2">
            Your wishlist is empty
          </h1>
          <p className="text-muted-foreground mb-6">
            Save items you love for later.
          </p>
          <Link href="/shop">
            <Button size="lg">
              Browse Products
            </Button>
          </Link>
        </motion.div>
      </div>
    );

  return (
    <div className="section-padding">
      <div className="container-luxury">
        <h1 className="font-heading text-3xl font-bold mb-8">
          Wishlist ({items.length})
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card overflow-hidden"
            >
              <Link
                href={`/product/${product.id}`}
                className="block aspect-square"
              >
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ background: product.image }}
                >
                  <span className="font-heading text-4xl font-bold text-foreground/10">
                    {product.name.charAt(0)}
                  </span>
                </div>
              </Link>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-sm">
                  {product.name}
                </h3>
                <p className="font-heading font-bold mt-1">${product.price}</p>
                <div className="flex gap-2 mt-3">
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={() => {
                      addToCart(product);
                      removeFromWishlist(product.id);
                    }}
                  >
                    <ShoppingBag className="h-4 w-4 mr-1" /> Move to Cart
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="shrink-0 text-destructive"
                    onClick={() => removeFromWishlist(product.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};