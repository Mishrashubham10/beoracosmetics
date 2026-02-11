'use client';

import { CartProvider } from '@/context/CartContext';
import { ProductProvider } from '@/context/ProductContext';
import { WishlistProvider } from '@/context/WishlistContext';
import { ReactNode } from 'react';

export function GlobalProvider({ children }: { children: ReactNode }) {
  return (
    <ProductProvider>
      <CartProvider>
        <WishlistProvider>{children}</WishlistProvider>
      </CartProvider>
    </ProductProvider>
  );
}