'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast('Message sent!', {
      description: "We'll get back to you within 24 hours.",
    });
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const inputClass =
    'w-full h-11 px-4 rounded-xl bg-secondary border-0 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 font-body';

  return (
    <div className="section-padding">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-4xl font-bold mb-3">Get in Touch</h1>
          <p className="text-muted-foreground">
            We&apos;d love to hear from you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-6 space-y-4"
          >
            <input
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className={inputClass}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
              className={inputClass}
            />
            <input
              placeholder="Subject"
              value={form.subject}
              onChange={(e) =>
                setForm((f) => ({ ...f, subject: e.target.value }))
              }
              className={inputClass}
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
              className="w-full px-4 py-3 rounded-xl bg-secondary border-0 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 font-body resize-none"
            />
            <Button size="lg" type="submit" className="w-full">
              Send Message
            </Button>
          </motion.form>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  label: 'OFFICE NO 404, FOURTH FLOOR TRIVENI KRUPA BUILDING, OPP, AMBE MATA MANDIR, BORIVALI EAST, MUMBER, 400066',
                },
                { icon: Mail, label: 'veoracosmetics@gmail.com' },
                { icon: Phone, label: '+91 8446942088' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">{label}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden h-64 bg-secondary">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120906!2d-118.43209796322542!3d34.09023448839498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1678886400000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Map"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}