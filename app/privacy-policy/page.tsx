import { products } from '@/data/products';
import { ShieldCheck, Lock, Database, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const totalProducts = products.length;

  return (
    <div className="section-padding">
      <div className="max-w-4xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Your privacy matters to us at Veora Cosmetics.
          </p>
        </div>

        {/* ================= HIGHLIGHT CARDS ================= */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {[
            {
              icon: ShieldCheck,
              title: 'Secure Shopping',
              desc: 'All transactions are encrypted and securely processed.',
            },
            {
              icon: Lock,
              title: 'Data Protection',
              desc: 'We never sell your personal information.',
            },
            {
              icon: Database,
              title: 'Minimal Data Collection',
              desc: `We only collect necessary data to serve our ${totalProducts}+ product catalog.`,
            },
            {
              icon: Mail,
              title: 'Email Transparency',
              desc: 'You can unsubscribe from marketing emails anytime.',
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
              1. Information We Collect
            </h2>
            <p>
              When you browse, purchase, or register on Veora Cosmetics, we may
              collect:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Name and contact details</li>
              <li>Email address</li>
              <li>Shipping and billing address</li>
              <li>Order and cart information</li>
              <li>
                Payment details (processed securely via third-party gateways)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              2. How We Use Your Information
            </h2>
            <p>We use your data to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Process and deliver your orders</li>
              <li>Improve our product recommendations</li>
              <li>Provide customer support</li>
              <li>Send promotional offers (if subscribed)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              3. Product & Order Data
            </h2>
            <p>
              Our website currently features {totalProducts} products. Purchase
              history is securely stored to enhance your shopping experience and
              simplify returns or refunds.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              4. Cookies & Tracking
            </h2>
            <p>
              We use cookies to personalize your experience, maintain your cart,
              and analyze website traffic. You can disable cookies in your
              browser settings at any time.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              5. Third-Party Services
            </h2>
            <p>
              We may use secure third-party services for payment processing,
              analytics, and email communication. These services comply with
              industry-standard security practices.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              6. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Request access to your data</li>
              <li>Request correction of incorrect information</li>
              <li>Request deletion of your personal data</li>
              <li>Unsubscribe from marketing emails</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              7. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be reflected on this page with an updated date.
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