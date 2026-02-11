'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OrderSuccessPage() {
  return (
    <div className="section-padding text-center">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Icon */}
          <CheckCircle className="h-20 w-20 mx-auto text-primary mb-6" />

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Order Placed!</h1>

          {/* Message */}
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            Thank you for your purchase. Your order has been confirmed and will
            be shipped soon.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/shop">
              <Button size="lg">Continue Shopping</Button>
            </Link>

            <Link href="/">
              <Button variant="outline" size="lg">
                Back Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}