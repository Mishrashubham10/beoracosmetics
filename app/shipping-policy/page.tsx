import { Truck, Clock, Globe, PackageCheck } from 'lucide-react';

export default function ShippingPolicyPage() {
  const freeShippingThreshold = 2000; // You can also compute dynamically if needed

  return (
    <div className="section-padding">
      <div className="max-w-4xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">Shipping Policy</h1>
          <p className="text-muted-foreground">
            Everything you need to know about how we deliver your glow ✨
          </p>
        </div>

        {/* ================= HIGHLIGHT CARDS ================= */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {[
            {
              icon: Truck,
              title: 'Fast Delivery',
              desc: 'Orders are processed within 24-48 hours.',
            },
            {
              icon: Clock,
              title: 'Delivery Time',
              desc: '3-7 business days domestic shipping.',
            },
            {
              icon: Globe,
              title: 'Worldwide Shipping',
              desc: 'We ship internationally with trusted carriers.',
            },
            {
              icon: PackageCheck,
              title: 'Free Shipping',
              desc: `Free shipping on orders over ₹${freeShippingThreshold}.`,
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass-card p-6 rounded-2xl">
              <Icon className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        {/* ================= POLICY CONTENT ================= */}
        <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Order Processing
            </h2>
            <p>
              All orders are processed within 24-48 hours (excluding weekends
              and holidays). Once your order has been shipped, you will receive
              a confirmation email with tracking information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Shipping Rates
            </h2>
            <p>
              Shipping charges for your order will be calculated and displayed
              at checkout.
            </p>
            <p className="mt-2">
              We offer{' '}
              <strong className="text-foreground">
                free standard shipping
              </strong>{' '}
              on all orders over ₹{freeShippingThreshold}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              International Shipping
            </h2>
            <p>
              Veora Cosmetics proudly ships worldwide. Delivery times may vary
              depending on your location. Customs fees or import duties may
              apply based on your country&apos;s regulations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Tracking Your Order
            </h2>
            <p>
              After your order ships, you will receive a tracking number via
              email. Please allow up to 24 hours for tracking updates to appear.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Delays
            </h2>
            <p>
              While we strive to deliver your products promptly, delays may
              occur due to weather, holidays, or carrier issues. If your package
              is significantly delayed, please contact our support team.
            </p>
          </section>
        </div>

        {/* ================= FOOT NOTE ================= */}
        <div className="mt-16 text-center text-xs text-muted-foreground">
          <p>Last updated: {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}