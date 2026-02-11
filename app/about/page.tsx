"use client"

import { motion } from "framer-motion";
import { Heart, Leaf, Sparkles } from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

export default function AboutPage() {
  const team = [
    { name: "Vinay Kumar Chaurasiya", role: "Founder & CEO", gradient: "linear-gradient(135deg, hsl(350,40%,90%) 0%, hsl(20,30%,92%) 100%)" },
    { name: "Vivek Chandra Jaiswal", role: "Founder & CEO", gradient: "linear-gradient(135deg, hsl(340,35%,85%) 0%, hsl(355,25%,90%) 100%)" },
    // { name: "Lara Kim", role: "Creative Director", gradient: "linear-gradient(135deg, hsl(35,40%,88%) 0%, hsl(25,30%,92%) 100%)" },
  ];

  return (
    <div>
      {/* ============== HERO ============== */}
      <section className="section-padding gradient-rose">
        <div className="container-luxury text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Born from a passion for clean beauty, VeoraCosmetics crafts luxurious skincare and beauty products using the finest natural ingredients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ MISSION ============= */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Our Mission", desc: "To make premium, clean beauty accessible to everyone while respecting our planet and your skin." },
              { icon: Leaf, title: "Our Values", desc: "Sustainability, transparency, and efficacy drive every formula we create. No compromises, ever." },
              { icon: Sparkles, title: "Our Vision", desc: "A world where luxury beauty and environmental responsibility go hand in hand, naturally." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }} className="glass-card p-8 text-center">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== TEAM ============= */}
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-3">Meet the Team</h2>
            <p className="text-muted-foreground">The passionate people behind Veora</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <motion.div key={member.name} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }} className="text-center">
                {/* <div className="aspect-square rounded-2xl overflow-hidden mb-4 mx-auto max-w-50">
                  <div className="w-full h-full flex items-center justify-center" style={{ background: member.gradient }}>
                    <span className="font-heading text-4xl font-bold text-foreground/15">{member.name.charAt(0)}</span>
                  </div>
                </div> */}
                <h3 className="font-heading font-bold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};