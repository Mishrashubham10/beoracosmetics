'use client';

import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag, IndianRupee } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CartPage() {
  const {
    items,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    subtotal,
    shipping,
    total,
    totalItems,
  } = useCart();

  /* ================= EMPTY STATE ================= */
  if (items.length === 0) {
    return (
      <div className="section-padding text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" />

            <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>

            <p className="text-muted-foreground mb-6">
              Looks like you haven&apos;t added anything yet.
            </p>

            <Link href="/shop">
              <Button size="lg">Start Shopping</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  /* ================= MAIN CART ================= */
  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Cart ({totalItems})</h1>

          <Button
            variant="ghost"
            size="sm"
            onClick={clearCart}
            className="text-destructive hover:text-destructive"
          >
            Clear All
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ================= ITEMS ================= */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(({ product, quantity }, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-4 flex gap-4"
              >
                {/* Image Placeholder */}
                <div
                  className="h-24 w-24 rounded-xl shrink-0 flex items-center justify-center"
                  style={{ background: product.image }}
                >
                  <span className="text-2xl font-bold text-foreground/10">
                    {product.name.charAt(0)}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  {/* Product Name */}
                  <Link
                    href={`/product/${product.id}`}
                    className="font-semibold text-sm hover:text-primary transition-colors"
                  >
                    {product.name}
                  </Link>

                  <p className="text-xs text-muted-foreground mt-0.5">
                    {product.category}
                  </p>

                  {/* Quantity + Price */}
                  <div className="flex items-center justify-between mt-3">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 bg-secondary rounded-lg p-0.5">
                      <button
                        onClick={() => decreaseQuantity(product.id)}
                        className="h-7 w-7 rounded-md flex items-center justify-center hover:bg-background transition-colors"
                      >
                        <Minus className="h-3 w-3" />
                      </button>

                      <span className="w-6 text-center text-sm font-medium">
                        {quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(product.id)}
                        className="h-7 w-7 rounded-md flex items-center justify-center hover:bg-background transition-colors"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                    {/* Price + Remove */}
                    <div className="flex items-center gap-3">
                      <span className="font-bold">
                        ₹{(product.price * quantity).toFixed(2)}
                      </span>

                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="p-1.5 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ================= SUMMARY ================= */}
          <div className="glass-card p-6 h-fit sticky top-24">
            <h2 className="font-bold text-lg mb-4">Order Summary</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>
                  {shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}
                </span>
              </div>

              {shipping > 0 && (
                <p className="text-xs text-primary">
                  Free shipping on orders over ₹2000!
                </p>
              )}

              <div className="border-t border-border pt-3 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            <Link href="/checkout" className="block mt-6">
              <Button size="lg" className="w-full">
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}