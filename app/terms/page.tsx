import { products } from '@/data/products';
import { FileText, ShieldCheck, ShoppingBag, Scale } from 'lucide-react';

export default function TermsPage() {
  const totalProducts = products.length;

  return (
    <div className="section-padding">
      <div className="max-w-4xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">Terms & Conditions</h1>
          <p className="text-muted-foreground">
            Please read these terms carefully before using Veora Cosmetics.
          </p>
        </div>

        {/* ================= HIGHLIGHT CARDS ================= */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {[
            {
              icon: ShoppingBag,
              title: 'Product Usage',
              desc: `We currently offer ${totalProducts}+ beauty products through our platform.`,
            },
            {
              icon: ShieldCheck,
              title: 'Secure Transactions',
              desc: 'All payments are processed securely via trusted gateways.',
            },
            {
              icon: FileText,
              title: 'Clear Policies',
              desc: 'Returns, shipping, and privacy policies apply to all orders.',
            },
            {
              icon: Scale,
              title: 'Legal Compliance',
              desc: 'These terms comply with applicable eCommerce regulations.',
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass-card p-6 rounded-2xl">
              <Icon className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        {/* ================= TERMS CONTENT ================= */}
        <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using Veora Cosmetics, you agree to be bound by
              these Terms & Conditions and all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              2. Products & Availability
            </h2>
            <p>
              We currently list {totalProducts} products on our platform.
              Product descriptions, pricing, and availability are subject to
              change without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              3. Orders & Payments
            </h2>
            <p>By placing an order, you agree that:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                You are legally capable of entering into a binding contract.
              </li>
              <li>Your payment information is accurate and authorized.</li>
              <li>We may cancel orders due to pricing or inventory errors.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              4. Returns & Refunds
            </h2>
            <p>
              Returns are governed by our Returns & Refunds Policy. Refund
              eligibility depends on product condition and return window.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              5. Intellectual Property
            </h2>
            <p>
              All content on this website including text, images, branding, and
              design elements are the property of Veora Cosmetics and may not be
              copied or reused without permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              6. Limitation of Liability
            </h2>
            <p>
              Veora Cosmetics shall not be liable for indirect, incidental, or
              consequential damages arising from the use of our products or
              website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              7. Changes to Terms
            </h2>
            <p>
              We reserve the right to update these Terms & Conditions at any
              time. Continued use of the website indicates acceptance of the
              updated terms.
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