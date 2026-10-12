export type HeaderProduct = {
  name: string;
  slug: string;
};

export type FeaturedProduct = HeaderProduct & {
  description: string;
};

export type HeaderIndustry = {
  name: string;
  slug: string;
  icon: string;
};

export const HEADER_PRODUCTS: HeaderProduct[] = [
  {
    "name": "Custom Folding Carton Boxes",
    "slug": "folding-carton-boxes"
  },
  {
    "name": "Premium Rigid Boxes",
    "slug": "rigid-boxes"
  },
  {
    "name": "Custom Box Inserts",
    "slug": "box-inserts"
  },
  {
    "name": "Custom Reusable Bags",
    "slug": "reusable-bags"
  },
  {
    "name": "Printed Mailer Bags",
    "slug": "mailer-bags"
  },
  {
    "name": "Flexible Packaging Pouches",
    "slug": "flexible-pouches"
  },
  {
    "name": "Metal Tin Containers",
    "slug": "tin-containers"
  },
  {
    "name": "Retail POP Displays",
    "slug": "pop-displays"
  },
  {
    "name": "Vinyl Stickers Labels",
    "slug": "stickers-labels"
  },
  {
    "name": "Printed Kraft Boxes",
    "slug": "kraft-boxes"
  },
  {
    "name": "Paper Shopping Bags",
    "slug": "paper-bags"
  },
  {
    "name": "Eco-friendly Packaging",
    "slug": "eco-friendly"
  },
  {
    "name": "Corrugated Shipping Boxes",
    "slug": "corrugated-shipping"
  },
  {
    "name": "Custom Cosmetic Boxes",
    "slug": "cosmetic-boxes"
  },
  {
    "name": "Food Grade Containers",
    "slug": "food-containers"
  },
  {
    "name": "Pharmaceutical Packaging",
    "slug": "pharmaceutical"
  },
  {
    "name": "Electronics Packaging",
    "slug": "electronics"
  },
  {
    "name": "Jewelry Gift Boxes",
    "slug": "jewelry-boxes"
  },
  {
    "name": "Wine & Liquor Boxes",
    "slug": "wine-boxes"
  },
  {
    "name": "Bakery & Cake Boxes",
    "slug": "bakery-boxes"
  },
  {
    "name": "Apparel Packaging",
    "slug": "apparel-packaging"
  },
  {
    "name": "Subscription Boxes",
    "slug": "subscription-boxes"
  },
  {
    "name": "Gift Wrapping Boxes",
    "slug": "gift-boxes"
  },
  {
    "name": "Toy Packaging",
    "slug": "toy-packaging"
  },
  {
    "name": "Book & Media Packaging",
    "slug": "media-packaging"
  },
  {
    "name": "Automotive Parts Boxes",
    "slug": "automotive-boxes"
  },
  {
    "name": "Sports Equipment Boxes",
    "slug": "sports-boxes"
  },
  {
    "name": "Pet Product Packaging",
    "slug": "pet-packaging"
  },
  {
    "name": "Hardware & Tool Boxes",
    "slug": "hardware-boxes"
  },
  {
    "name": "Candle & Fragrance Boxes",
    "slug": "candle-boxes"
  },
  {
    "name": "Supplement Packaging",
    "slug": "supplement-bottles"
  },
  {
    "name": "Craft & Hobby Boxes",
    "slug": "craft-boxes"
  },
  {
    "name": "Garden & Plant Packaging",
    "slug": "custom-garden-plant-packaging"
  },
  {
    "name": "Office Boxes",
    "slug": "custom-office-boxes"
  },
  {
    "name": "Home Decor Packaging",
    "slug": "home-decor-packaging-boxes"
  },
  {
    "name": "Musical Instrument Boxes",
    "slug": "musical-instrument-boxes"
  },
  {
    "name": "Custom Art Boxes",
    "slug": "custom-art-boxes"
  },
  {
    "name": "Custom Pizza Boxes",
    "slug": "pizza-boxes"
  },
  {
    "name": "Custom Burger Boxes",
    "slug": "burger-boxes"
  },
  {
    "name": "Custom Noodle Boxes",
    "slug": "noodle-boxes"
  },
  {
    "name": "Custom Sandwich Boxes",
    "slug": "sandwich-boxes"
  },
  {
    "name": "Takeaway Food Trays",
    "slug": "food-trays"
  },
  {
    "name": "Greaseproof Paper",
    "slug": "greaseproof-paper"
  },
  {
    "name": "Custom Paper Cups",
    "slug": "paper-cups"
  },
  {
    "name": "Custom Mailer Boxes",
    "slug": "mailer-boxes"
  },
  {
    "name": "Custom Tissue Paper",
    "slug": "tissue-paper"
  },
  {
    "name": "Custom Packing Tape",
    "slug": "packing-tape"
  }
];

export const FEATURED_PRODUCTS: FeaturedProduct[] = [
  {
    "name": "Custom Folding Carton Boxes",
    "slug": "folding-carton-boxes",
    "description": "Get custom folding carton boxes with flexible sizes, fast production, and high quality perfect for retail, gifting, and more."
  },
  {
    "name": "Corrugated Shipping Boxes",
    "slug": "corrugated-shipping",
    "description": "Heavy-duty corrugated boxes for safe shipping and storage. Buy custom sizes and strengths to protect your goods during transit."
  },
  {
    "name": "Custom Mailer Boxes",
    "slug": "mailer-boxes",
    "description": "Custom mailer boxes for UK online shops. These are corrugated cartons for posting smaller orders, quoted to your size and print. Prices and board grades are not listed on this page."
  },
  {
    "name": "Custom Pizza Boxes",
    "slug": "pizza-boxes",
    "description": "Custom pizza boxes for UK takeaways, restaurants and delivery kitchens. Tell Axis Packaging the box size, print and quantity you need, and we will quote the job. This page does not list prices or a fixed size range."
  },
  {
    "name": "Greaseproof Paper",
    "slug": "greaseproof-paper",
    "description": "Greaseproof paper for UK takeaways, bakeries and cafes. Sheets or rolls are quoted to the size you need. Prices, sheet weights and food-contact certificates are not listed on this page."
  },
  {
    "name": "Printed Kraft Boxes",
    "slug": "kraft-boxes",
    "description": "Modern customers notice packaging before they notice the product itself. This is why many businesses are switching to printed kraft boxes that combine clean branding, eco-friendly materials, and professional presentation. At Axis Packaging, our custom kraft packaging solutions are designed to help products look more premium while maintaining durability and practical everyday functionality. Perfect for retail, gifting, food, cosmetics, and eCommerce packaging."
  }
];

export const HEADER_INDUSTRIES: HeaderIndustry[] = [
  {
    "name": "Apparel",
    "slug": "apparel",
    "icon": "👕"
  },
  {
    "name": "Bakery & Cake",
    "slug": "bakery-cake",
    "icon": "🍰"
  },
  {
    "name": "Beer & Liquor",
    "slug": "beer-liquor",
    "icon": "🍺"
  },
  {
    "name": "Beverage",
    "slug": "beverage",
    "icon": "🥤"
  },
  {
    "name": "Candle",
    "slug": "candle",
    "icon": "🕯️"
  },
  {
    "name": "Candy & Sweets",
    "slug": "candy-sweets",
    "icon": "🍬"
  },
  {
    "name": "Cannabis",
    "slug": "cannabis",
    "icon": "🌿"
  },
  {
    "name": "Chocolate",
    "slug": "chocolate",
    "icon": "🍫"
  },
  {
    "name": "Coffee",
    "slug": "coffee",
    "icon": "☕"
  },
  {
    "name": "Cosmetics",
    "slug": "cosmetics",
    "icon": "💄"
  },
  {
    "name": "E-Commerce",
    "slug": "ecommerce",
    "icon": "🛒"
  },
  {
    "name": "Electronics",
    "slug": "electronics",
    "icon": "📱"
  }
];
