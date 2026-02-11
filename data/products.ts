export interface Product {
  id: number;
  name: string;
  category: 'Skincare' | 'Makeup' | 'Haircare';
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  description: string;
  image: string;
  stock: number;
  badge?: string;
  featured?: boolean;
  bestSeller?: boolean;
}

const gradients = {
  skincare: [
    'linear-gradient(135deg, hsl(350,40%,90%) 0%, hsl(20,30%,92%) 100%)',
    'linear-gradient(135deg, hsl(330,30%,88%) 0%, hsl(350,35%,92%) 100%)',
    'linear-gradient(135deg, hsl(10,35%,90%) 0%, hsl(30,40%,93%) 100%)',
    'linear-gradient(135deg, hsl(340,25%,87%) 0%, hsl(15,30%,91%) 100%)',
    'linear-gradient(135deg, hsl(355,30%,89%) 0%, hsl(25,35%,94%) 100%)',
    'linear-gradient(135deg, hsl(345,35%,91%) 0%, hsl(5,25%,90%) 100%)',
    'linear-gradient(135deg, hsl(360,20%,88%) 0%, hsl(20,40%,92%) 100%)',
  ],
  makeup: [
    'linear-gradient(135deg, hsl(340,35%,85%) 0%, hsl(355,25%,90%) 100%)',
    'linear-gradient(135deg, hsl(320,30%,87%) 0%, hsl(345,30%,91%) 100%)',
    'linear-gradient(135deg, hsl(350,45%,88%) 0%, hsl(10,20%,89%) 100%)',
    'linear-gradient(135deg, hsl(335,35%,86%) 0%, hsl(355,30%,92%) 100%)',
    'linear-gradient(135deg, hsl(345,40%,84%) 0%, hsl(360,25%,90%) 100%)',
    'linear-gradient(135deg, hsl(325,25%,88%) 0%, hsl(340,35%,93%) 100%)',
    'linear-gradient(135deg, hsl(350,30%,86%) 0%, hsl(5,30%,91%) 100%)',
  ],
  haircare: [
    'linear-gradient(135deg, hsl(35,40%,88%) 0%, hsl(25,30%,92%) 100%)',
    'linear-gradient(135deg, hsl(40,35%,86%) 0%, hsl(30,25%,90%) 100%)',
    'linear-gradient(135deg, hsl(30,30%,87%) 0%, hsl(38,40%,93%) 100%)',
    'linear-gradient(135deg, hsl(45,35%,85%) 0%, hsl(35,30%,91%) 100%)',
    'linear-gradient(135deg, hsl(38,40%,89%) 0%, hsl(28,25%,92%) 100%)',
    'linear-gradient(135deg, hsl(42,30%,87%) 0%, hsl(32,35%,93%) 100%)',
  ],
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Radiance Glow Serum',
    category: 'Skincare',
    price: 68,
    originalPrice: 85,
    rating: 4.9,
    reviews: 234,
    description:
      'A luxurious vitamin C serum that brightens and evens skin tone, leaving you with a radiant, dewy glow. Infused with hyaluronic acid and niacinamide for deep hydration.',
    image: gradients.skincare[0],
    stock: 25,
    badge: 'Bestseller',
    featured: true,
    bestSeller: true,
  },
  {
    id: 2,
    name: 'Velvet Matte Lipstick',
    category: 'Makeup',
    price: 34,
    rating: 4.7,
    reviews: 189,
    description:
      'A long-lasting velvet matte lipstick in a universally flattering rose shade. Enriched with shea butter for comfortable all-day wear.',
    image: gradients.makeup[0],
    stock: 40,
    featured: true,
    bestSeller: true,
  },
  {
    id: 3,
    name: 'Silk Repair Hair Mask',
    category: 'Haircare',
    price: 42,
    originalPrice: 52,
    rating: 4.8,
    reviews: 156,
    description:
      'An intensive repair mask infused with argan oil and keratin proteins. Restores damaged hair to silky, healthy-looking perfection.',
    image: gradients.haircare[0],
    stock: 30,
    badge: 'New',
    featured: true,
  },
  {
    id: 4,
    name: 'Rose Petal Moisturizer',
    category: 'Skincare',
    price: 54,
    rating: 4.6,
    reviews: 312,
    description:
      'A lightweight yet deeply nourishing moisturizer with damask rose extract. Perfect for achieving that coveted glass skin look.',
    image: gradients.skincare[1],
    stock: 18,
    bestSeller: true,
  },
  {
    id: 5,
    name: 'Luminous Foundation',
    category: 'Makeup',
    price: 46,
    rating: 4.5,
    reviews: 278,
    description:
      'Buildable medium coverage foundation with a luminous satin finish. Infused with skincare ingredients for a flawless, natural-looking complexion.',
    image: gradients.makeup[1],
    stock: 35,
    featured: true,
  },
  {
    id: 6,
    name: 'Hydra Boost Eye Cream',
    category: 'Skincare',
    price: 58,
    originalPrice: 72,
    rating: 4.8,
    reviews: 198,
    description:
      'Targets fine lines, dark circles, and puffiness with peptides and caffeine. Wake up to brighter, firmer under-eyes.',
    image: gradients.skincare[2],
    stock: 22,
    badge: 'Sale',
  },
  {
    id: 7,
    name: 'Volumizing Shampoo',
    category: 'Haircare',
    price: 28,
    rating: 4.4,
    reviews: 167,
    description:
      'Sulfate-free volumizing shampoo that adds body and bounce without weighing hair down. Enriched with biotin and collagen.',
    image: gradients.haircare[1],
    stock: 50,
  },
  {
    id: 8,
    name: 'Blush Palette Rosé',
    category: 'Makeup',
    price: 38,
    rating: 4.7,
    reviews: 145,
    description:
      'Four harmonious blush shades from soft peach to deep mauve. Silky powder formula blends seamlessly for a natural flush.',
    image: gradients.makeup[2],
    stock: 28,
    bestSeller: true,
  },
  {
    id: 9,
    name: 'Retinol Night Cream',
    category: 'Skincare',
    price: 76,
    rating: 4.9,
    reviews: 289,
    description:
      'Advanced retinol formula that works overnight to reduce wrinkles and improve skin texture. Paired with squalane for zero irritation.',
    image: gradients.skincare[3],
    stock: 15,
    badge: 'Bestseller',
    bestSeller: true,
  },
  {
    id: 10,
    name: 'Keratin Smooth Conditioner',
    category: 'Haircare',
    price: 26,
    rating: 4.3,
    reviews: 134,
    description:
      'Smoothing conditioner that tames frizz and adds incredible shine. Formulated with Brazilian keratin complex.',
    image: gradients.haircare[2],
    stock: 45,
  },
  {
    id: 11,
    name: 'Setting Spray Dewy',
    category: 'Makeup',
    price: 22,
    rating: 4.6,
    reviews: 321,
    description:
      "Lock in your makeup for up to 16 hours with a dewy, fresh finish. Micro-fine mist won't disturb your artistry.",
    image: gradients.makeup[3],
    stock: 60,
  },
  {
    id: 12,
    name: 'AHA/BHA Exfoliant',
    category: 'Skincare',
    price: 38,
    rating: 4.5,
    reviews: 176,
    description:
      'Gentle chemical exfoliant with glycolic and salicylic acids. Reveals smoother, brighter skin with regular use.',
    image: gradients.skincare[4],
    stock: 33,
  },
  {
    id: 13,
    name: 'Brow Sculpt Pencil',
    category: 'Makeup',
    price: 18,
    rating: 4.4,
    reviews: 256,
    description:
      'Ultra-fine tip pencil for natural-looking, hair-like strokes. Built-in spoolie for seamless blending.',
    image: gradients.makeup[4],
    stock: 55,
  },
  {
    id: 14,
    name: 'Scalp Revival Treatment',
    category: 'Haircare',
    price: 48,
    originalPrice: 60,
    rating: 4.7,
    reviews: 98,
    description:
      'Detoxifying scalp treatment with tea tree and charcoal. Removes buildup and rebalances for healthier hair growth.',
    image: gradients.haircare[3],
    stock: 20,
    badge: 'New',
  },
  {
    id: 15,
    name: 'Niacinamide Serum 10%',
    category: 'Skincare',
    price: 32,
    rating: 4.6,
    reviews: 445,
    description:
      'Minimizes pores and controls excess oil while strengthening the skin barrier. A must-have for clear, balanced skin.',
    image: gradients.skincare[5],
    stock: 42,
  },
  {
    id: 16,
    name: 'Mascara Volume Intense',
    category: 'Makeup',
    price: 24,
    rating: 4.8,
    reviews: 367,
    description:
      'Dramatic volume and length without clumping. Smudge-proof, flake-proof formula lasts all day.',
    image: gradients.makeup[5],
    stock: 48,
    bestSeller: true,
  },
  {
    id: 17,
    name: 'Argan Oil Elixir',
    category: 'Haircare',
    price: 36,
    rating: 4.5,
    reviews: 212,
    description:
      'Pure cold-pressed argan oil for intense nourishment. Use on damp or dry hair for a glossy, frizz-free finish.',
    image: gradients.haircare[4],
    stock: 38,
  },
  {
    id: 18,
    name: 'Sunscreen SPF 50+',
    category: 'Skincare',
    price: 30,
    rating: 4.7,
    reviews: 523,
    description:
      'Lightweight, invisible sunscreen with no white cast. Broad-spectrum protection with antioxidant-rich formula.',
    image: gradients.skincare[6],
    stock: 55,
  },
  {
    id: 19,
    name: 'Contour & Highlight Duo',
    category: 'Makeup',
    price: 32,
    rating: 4.3,
    reviews: 178,
    description:
      'Cream contour and highlight stick for sculpted, dimensional features. Blends like a dream for effortless definition.',
    image: gradients.makeup[6],
    stock: 30,
  },
  {
    id: 20,
    name: 'Heat Protectant Spray',
    category: 'Haircare',
    price: 22,
    rating: 4.4,
    reviews: 189,
    description:
      'Shields hair from heat damage up to 230°C. Lightweight formula adds shine without residue.',
    image: gradients.haircare[5],
    stock: 65,
  },
  {
    id: 21,
    name: 'Hyaluronic Acid Toner',
    category: 'Skincare',
    price: 28,
    rating: 4.5,
    reviews: 298,
    description:
      'Multi-weight hyaluronic acid toner that plumps and preps skin for maximum product absorption.',
    image: gradients.skincare[0],
    stock: 38,
    featured: true,
  },
];

export const categories = ['All', 'Skincare', 'Makeup', 'Haircare'] as const;