'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function CheckoutPage() {
  const { items, subtotal, shipping, total, clearCart } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    phone: '',
    payment: 'card',
  });

  /* Redirect if cart empty */
  useEffect(() => {
    if (items.length === 0) {
      router.replace('/cart');
    }
  }, [items, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    clearCart();
    router.push('/order-success');
  };

  if (items.length === 0) return null;

  const inputClass =
    'w-full h-11 px-4 rounded-xl bg-secondary border-0 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30';

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ================= LEFT SIDE ================= */}
            <div className="lg:col-span-2 space-y-6">
              {/* Billing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-6"
              >
                <h2 className="font-bold text-lg mb-4">Billing Details</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="firstName"
                    placeholder="First Name"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    name="lastName"
                    placeholder="Last Name"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={`${inputClass} sm:col-span-2`}
                  />
                  <input
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={`${inputClass} sm:col-span-2`}
                  />
                </div>
              </motion.div>

              {/* Shipping */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-card p-6"
              >
                <h2 className="font-bold text-lg mb-4">Shipping Address</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="address"
                    placeholder="Street Address"
                    required
                    value={form.address}
                    onChange={handleChange}
                    className={`${inputClass} sm:col-span-2`}
                  />
                  <input
                    name="city"
                    placeholder="City"
                    required
                    value={form.city}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    name="zip"
                    placeholder="ZIP Code"
                    required
                    value={form.zip}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </motion.div>

              {/* Payment */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card p-6"
              >
                <h2 className="font-bold text-lg mb-4">Payment Method</h2>

                <div className="space-y-3">
                  {['card', 'paypal', 'cod'].map((method) => (
                    <label
                      key={method}
                      className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition ${
                        form.payment === method
                          ? 'bg-primary/10 border-2 border-primary'
                          : 'bg-secondary border-2 border-transparent'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method}
                        checked={form.payment === method}
                        onChange={handleChange}
                        className="sr-only"
                      />

                      <div
                        className={`h-4 w-4 rounded-full border-2 flex items-center justify-center ${
                          form.payment === method
                            ? 'border-primary'
                            : 'border-muted-foreground/30'
                        }`}
                      >
                        {form.payment === method && (
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        )}
                      </div>

                      <span className="text-sm font-medium capitalize">
                        {method === 'card'
                          ? 'Credit/Debit Card'
                          : method === 'paypal'
                            ? 'PayPal'
                            : 'Cash on Delivery'}
                      </span>
                    </label>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ================= SUMMARY ================= */}
            <div className="glass-card p-6 h-fit sticky top-24">
              <h2 className="font-bold text-lg mb-4">Order Summary</h2>

              <div className="space-y-3 mb-4">
                {items.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-muted-foreground">
                      {product.name} × {quantity}
                    </span>
                    <span>${(product.price * quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full mt-6">
                Place Order
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}