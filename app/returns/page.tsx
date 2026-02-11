import { products } from '@/data/products';
import { RotateCcw, ShieldCheck, Clock, BadgeIndianRupee } from 'lucide-react';

export default function ReturnsPage() {
  // Example: derive average product price from your data
  const averagePrice =
    products.length > 0
      ? Math.round(
          products.reduce((acc, p) => acc + p.price, 0) /
            products.length
        )
      : 999;

  const returnWindowDays = 14;

  return (
    <div className="section-padding">
      <div className="max-w-4xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">
            Returns & Refunds Policy
          </h1>
          <p className="text-muted-foreground">
            We want you to love your Veora products. If not, we’re here to help.
          </p>
        </div>

        {/* ================= HIGHLIGHT CARDS ================= */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {[
            {
              icon: RotateCcw,
              title: `${returnWindowDays}-Day Returns`,
              desc: 'Return your product within 14 days of delivery.',
            },
            {
              icon: ShieldCheck,
              title: 'Quality Guarantee',
              desc: 'Damaged or defective products are fully refundable.',
            },
            {
              icon: Clock,
              title: 'Fast Processing',
              desc: 'Refunds are processed within 5-7 business days.',
            },
            {
              icon: BadgeIndianRupee,
              title: 'Easy Refunds',
              desc: `Most of our products are priced around ₹${averagePrice}.`,
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass-card p-6 rounded-2xl"
            >
              <Icon className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-semibold mb-2">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* ================= POLICY CONTENT ================= */}
        <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Eligibility for Returns
            </h2>
            <p>
              You may return products within {returnWindowDays} days of receiving
              your order. Items must be unused, unopened, and in original packaging.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Non-Returnable Items
            </h2>
            <p>
              For hygiene reasons, certain beauty and skincare products may not be
              eligible for return once opened.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Refund Process
            </h2>
            <p>
              Once we receive and inspect your returned item, we will notify you
              about the status of your refund. Approved refunds will be processed
              back to your original payment method.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Refund Amount
            </h2>
            <p>
              Refunds will include the full product value in ₹ (Indian Rupees).
              Shipping charges may not be refundable unless the return is due to
              our error.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              How to Initiate a Return
            </h2>
            <p>
              Contact our support team with your order number and reason for
              return. Our team will guide you through the process.
            </p>
          </section>
        </div>

        {/* ================= FOOT NOTE ================= */}
        <div className="mt-16 text-center text-xs text-muted-foreground">
          <p>
            Last updated: {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}