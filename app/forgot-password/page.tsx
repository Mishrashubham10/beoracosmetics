'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function ForgotPasswordPage() {
  const inputClass =
    'w-full h-11 px-4 rounded-xl bg-secondary border-0 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Add reset password logic
    console.log('Reset link requested');
  };

  return (
    <div className="section-padding flex items-center justify-center min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Reset Password</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Enter your email and we&apos;ll send you a reset link
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            className={inputClass}
          />

          <Button size="lg" type="submit" className="w-full">
            Send Reset Link
          </Button>
        </form>

        {/* Back to Login */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          <Link
            href="/login"
            className="text-primary font-medium hover:underline"
          >
            Back to Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}