export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  gradient: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Ultimate Guide to Glass Skin',
    excerpt:
      "Discover the Korean skincare secrets behind the coveted glass skin look that's taken the beauty world by storm.",
    content:
      "Glass skin is all about achieving a dewy, luminous complexion that looks almost translucent. The key is layering lightweight hydrating products—start with a gentle cleanser, follow with an essence, then layer a hyaluronic acid serum, and seal everything with a lightweight moisturizer. Consistency is everything. Within weeks, you'll notice a visible difference in your skin's radiance and texture.",
    date: 'Feb 8, 2026',
    author: 'Dr. Sarah Kim',
    category: 'Skincare',
    readTime: '5 min',
    gradient:
      'linear-gradient(135deg, hsl(350,40%,90%) 0%, hsl(20,30%,92%) 100%)',
  },
  {
    id: 2,
    title: '5 Lipstick Trends for 2026',
    excerpt:
      "From soft berry tones to bold corals, here are the lip colors defining this year's beauty landscape.",
    content:
      "This year is all about self-expression through lip color. Berry tones are making a huge comeback, offering a sophisticated yet approachable look. Soft corals bring warmth and freshness, while nude-rose shades remain a timeless staple. Don't be afraid to experiment with ombré lips and subtle gloss layering for a modern twist.",
    date: 'Feb 5, 2026',
    author: 'Emma Laurent',
    category: 'Makeup',
    readTime: '4 min',
    gradient:
      'linear-gradient(135deg, hsl(340,35%,85%) 0%, hsl(355,25%,90%) 100%)',
  },
  {
    id: 3,
    title: 'Natural Ingredients Your Hair Craves',
    excerpt:
      'Why argan oil, keratin, and biotin are the holy trinity of luxurious, healthy hair.',
    content:
      'Your hair deserves the best nature has to offer. Argan oil provides deep nourishment and incredible shine, keratin rebuilds damaged bonds for strength, and biotin supports healthy growth from the roots. When combined in a thoughtful haircare routine, these ingredients transform even the most tired tresses into silky, salon-worthy locks.',
    date: 'Feb 1, 2026',
    author: 'Maya Johnson',
    category: 'Haircare',
    readTime: '6 min',
    gradient:
      'linear-gradient(135deg, hsl(35,40%,88%) 0%, hsl(25,30%,92%) 100%)',
  },
  {
    id: 4,
    title: 'Building a Minimalist Skincare Routine',
    excerpt:
      'Less is more. Learn how to streamline your routine for maximum results with fewer products.',
    content:
      'The minimalist approach to skincare focuses on quality over quantity. A cleanser, moisturizer, and SPF form the essential trio. Add one targeted treatment—like a vitamin C serum or retinol—based on your specific concerns. This simplified routine not only saves time and money but often yields better results than a complex 10-step regimen.',
    date: 'Jan 28, 2026',
    author: 'Dr. Sarah Kim',
    category: 'Skincare',
    readTime: '4 min',
    gradient:
      'linear-gradient(135deg, hsl(330,30%,88%) 0%, hsl(350,35%,92%) 100%)',
  },
  {
    id: 5,
    title: 'The Art of No-Makeup Makeup',
    excerpt:
      'Master the natural beauty look that enhances your features without looking overdone.',
    content:
      'The no-makeup makeup look is deceptively simple but incredibly effective. Start with a tinted moisturizer instead of heavy foundation. A touch of cream blush on the cheeks, a swipe of tinted lip balm, and well-groomed brows create a polished yet effortless appearance that celebrates your natural beauty.',
    date: 'Jan 22, 2026',
    author: 'Emma Laurent',
    category: 'Makeup',
    readTime: '5 min',
    gradient:
      'linear-gradient(135deg, hsl(320,30%,87%) 0%, hsl(345,30%,91%) 100%)',
  },
  {
    id: 6,
    title: 'Scalp Care: The Foundation of Great Hair',
    excerpt:
      'Why treating your scalp is just as important as caring for the hair itself.',
    content:
      'A healthy scalp is the foundation of beautiful hair. Regular exfoliation removes product buildup, balances oil production, and promotes circulation for healthier growth. Incorporate a weekly scalp treatment into your routine—look for ingredients like tea tree oil, salicylic acid, and charcoal for a deep detox.',
    date: 'Jan 18, 2026',
    author: 'Maya Johnson',
    category: 'Haircare',
    readTime: '5 min',
    gradient:
      'linear-gradient(135deg, hsl(40,35%,86%) 0%, hsl(30,25%,90%) 100%)',
  },
];