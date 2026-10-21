import { INDUSTRY_PAGE_CONTENT } from "./industry-page-content";
import { PRODUCT_ENRICHMENTS } from "./product-enrichments";

export { COMPANY_INFO, NAVIGATION_ITEMS } from "./site-info";

const _PRODUCT_CATEGORIES = [
  {
    name: "Custom Folding Carton Boxes",
    description: "Get custom folding carton boxes with flexible sizes, fast production, and high quality perfect for retail, gifting, and more.",
    icon: "📦",
    image: "/assets/packify-custom-boxes.jpg",
    slug: "folding-carton-boxes",
    metaTitle: "Premium and Customized Folding Carton Boxes - Axis Packaging",
    metaDescription: "Get custom folding carton boxes with fast turnaround, fast production, and high quality perfect for retail, gifting, and more.",
    h1: "Custom Folding Carton Boxes for Premium Packaging",
    alt: "folding carton boxes",
  },
  {
    name: "Premium Rigid Boxes",
    description: "Shop rigid boxes for premium products. Custom sizes, luxury finishes, and eco-friendly packaging with fast flip turnaround.",
    icon: "🎁",
    image: "/assets/packify-luxury-boxes.jpg",
    slug: "rigid-boxes",
    metaTitle: "Buy Custom Rigid Boxes - Premium Packaging - Axis Packaging",
    metaDescription: "Shop rigid boxes for premium products. Custom sizes, luxury finishes, and eco-friendly packaging with fast flip turnaround.",
    h1: "Custom & Premium Rigid Boxes",
    alt: "Custom rigid box with luxury finish,Premium rigid gift boxes",
  },
  {
    name: "Custom Box Inserts",
    description: "Get custom box inserts for gifts and retail. Durable, stylish and versatile packaging solutions with rapid turnaround.",
    icon: "📋",
    image: "/assets/Custom Box Inserts.jpg",
    slug: "box-inserts",
    metaTitle: "Buy Custom Box Inserts - Premium Packaging - Axis Packaging",
    metaDescription: "Get custom box inserts for gifts and retail. Durable, stylish and versatile packaging solutions with rapid turnaround.",
    h1: "Custom & Premium Box Inserts for Packaging",
    alt: "Custom box inserts,Premium packaging inserts",
  },
  {
    name: "Custom Reusable Bags",
    description: "Looking for sustainable packaging? Our custom reusable bags offer strength, style, and sustainability. Ideal for retail, grocery, and promotions.",
    icon: "👜",
    image: "/assets/packify-retail-packaging.jpg",
    slug: "reusable-bags",
    metaTitle: "Buy Custom Reusable Bags - Top Durable & Shopping Bags",
    metaDescription: "Looking for sustainable packaging? Our custom reusable bags offer strength, style, and sustainability. Ideal for retail, grocery, and promotions.",
    h1: "Custom & Eco-Friendly Reusable Bags",
    alt: "custom reusable bags,",
  },
  {
    name: "Printed Mailer Bags",
    description: "Order custom mailer bags for secure shipping. Eco-friendly bags ideal for clothing and small product items, available in various colors.",
    icon: "📮",
    image: "/assets/printed mailer box.jpeg",
    slug: "mailer-bags",
    metaTitle: "Shop Plastic and Customized Mailer Bags - Axis Packaging",
    metaDescription: "Order custom mailer bags for secure shipping. Eco-friendly bags ideal for clothing and small product items, available in various colors.",
  },
  {
    name: "Flexible Packaging Pouches",
    description: "Maintain food freshness with our resealable packaging pouches. Custom sizes, high-barrier materials, and vibrant printing options.",
    icon: "🥡",
    image: "/assets/packify-food-containers.jpg",
    slug: "flexible-pouches",
    metaTitle: "Buy Custom Flexible Packaging Pouches - Axis Packaging",
    metaDescription: "Maintain food freshness with our resealable packaging pouches. Custom sizes, high-barrier materials, and vibrant printing options.",
    h1: "Custom Flexible Packaging Pouches for Freshness",
  },
  {
    name: "Metal Tin Containers",
    description: "Searching for packaging that protects and stands out? Our custom metal tin containers offer durability and premium shelf appeal.",
    icon: "🥫",
    image: "/assets/assorted-food-containers.jpg",
    slug: "tin-containers",
    metaTitle: "Buy Metal Tin Containers - Custom Packaging - Axis Packaging",
    metaDescription: "Searching for packaging that protects and stands out? Our custom metal tin containers offer durability and premium shelf appeal.",
    h1: "Premium Metal Tin Containers for Standout Branding",
  },
  {
    name: "Retail POP Displays",
    description: "Custom POP displays for UK shops, supermarkets and exhibitions. Tell us the size, material and print, and we will prepare a quotation.",
    icon: "🏪",
    image: "/assets/Retail POP Displays.jpg",
    slug: "pop-displays",
    metaTitle: "Custom POP Displays UK | Axis Packaging",
    metaDescription: "Custom POP displays for UK shops, supermarkets and exhibitions. Cardboard, corrugated and fabric options, with printing confirmed on your quotation.",
    h1: "Custom POP Displays for UK Retail",
  },
  {
    name: "Vinyl Stickers Labels",
    description: "Elevate your products with high-quality vinyl stickers and labels. Available in custom shapes, sizes, and finishes for branding and packaging.",
    icon: "🏷️",
    image: "/assets/packify-cosmetics-packaging.jpg",
    slug: "stickers-labels",
    metaTitle: "Buy Vinyl Stickers & Labels - Custom Printing - Axis Packaging",
    metaDescription: "Add custom flair to your products with high-quality vinyl stickers and labels. Durable, waterproof, and perfect for branding impact.",
    h1: "Custom Vinyl Stickers & Labels for Brand Impact",
  },
  {
    name: "Printed Kraft Boxes",
    description: "Showcase products stylishly with sustainable kraft packaging. Custom printed boxes that combine eco-friendly materials with premium design.",
    icon: "🌱",
    image: "/assets/Printed Kraft Boxes.jpg",
    slug: "kraft-boxes",
    metaTitle: "Buy Printed Kraft Boxes - Sustainable Packaging - Axis Packaging",
    metaDescription: "Showcase products stylishly with sustainable kraft packaging. Custom printed boxes that combine eco-friendly materials with premium design.",
    h1: "Sustainable Printed Kraft Boxes for Stylish Packaging",
  },
  {
    name: "Paper Shopping Bags",
    description: "Stylish and eco-friendly paper shopping bags for retail and gifting. Custom printed with your logo for a premium brand experience.",
    icon: "🛍️",
    image: "/assets/retail-packaging-display.jpg",
    slug: "paper-bags",
    metaTitle: "Buy Paper Shopping Bags - Eco-Friendly - Axis Packaging",
    metaDescription: "Stylish and eco-friendly paper shopping bags for retail and gifting. Custom printed with your logo for a premium brand experience.",
    h1: "Eco-Friendly Paper Shopping Bags for Retail",
  },
  {
    name: "Eco-friendly Packaging",
    description: "Explore our range of sustainable packaging alternatives. Eco-friendly materials that protect your products and the planet.",
    icon: "♻️",
    image: "/assets/packify-eco-friendly-packaging.jpg",
    slug: "eco-friendly",
    metaTitle: "Buy Eco-friendly Packaging - Sustainable Solutions - Axis Packaging",
    metaDescription: "Explore our range of sustainable packaging alternatives. Eco-friendly materials that protect your products and the planet.",
    h1: "Sustainable & Eco-friendly Packaging Solutions",
  },
  {
    name: "Corrugated Shipping Boxes",
    description: "Heavy-duty corrugated boxes for safe shipping and storage. Buy custom sizes and strengths to protect your goods during transit.",
    icon: "📦",
    image: "/assets/Corrugated Shipping Boxes.jpg",
    slug: "corrugated-shipping",
    metaTitle: "Buy Corrugated Shipping Boxes - Heavy Duty - Axis Packaging",
    metaDescription: "Heavy-duty corrugated boxes for safe shipping and storage. Buy custom sizes and strengths to protect your goods during transit.",
    h1: "Heavy-Duty Corrugated Shipping Boxes for Safe Transit",
  },
  {
    name: "Custom Cosmetic Boxes",
    description: "Elegant packaging solutions for beauty and cosmetic products. Custom printed cosmetic boxes with luxury finishes and premium feel.",
    icon: "💄",
    image: "/assets/packify-cosmetic-boxes.jpg",
    slug: "cosmetic-boxes",
    metaTitle: "Buy Custom Cosmetic Boxes - Elegant Solutions - Axis Packaging",
    metaDescription: "Elegant packaging solutions for beauty and cosmetic products. Custom printed cosmetic boxes with luxury finishes and premium feel.",
    h1: "Elegant Custom Cosmetic Boxes for Beauty Brands",
  },
  {
    name: "Food Grade Containers",
    description: "Containers for food and beverage products. Hygienic custom packaging for food and drink.",
    icon: "🍽️",
    image: "/assets/assorted-food-containers.jpg",
    slug: "food-containers",
    metaTitle: "Food Grade Containers | Axis Packaging",
    metaDescription: "Containers for food and beverage products. Hygienic custom packaging for food and drink.",
    h1: "Food Grade Containers for Food and Drink",
  },
  {
    name: "Pharmaceutical Packaging",
    description: "Compliant packaging for pharmaceutical and medical products. Secure, informative, and meeting all industry standards for safety.",
    icon: "💊",
    image: "/assets/packify-pharmaceutical.jpg",
    slug: "pharmaceutical",
    metaTitle: "Buy Pharmaceutical Packaging - Compliant - Axis Packaging",
    metaDescription: "Compliant packaging for pharmaceutical and medical products. Secure, informative, and meeting all industry standards for safety.",
    h1: "Compliant Pharmaceutical & Medical Packaging",
  },
  {
    name: "Electronics Packaging",
    description: "Anti-static and protective packaging for electronic devices. Custom solutions to ensure safety from electrostatic discharge and impact.",
    icon: "📱",
    image: "/assets/packify-electronics-packaging.jpg",
    slug: "electronics",
    metaTitle: "Buy Electronics Packaging - Anti-Static & Protective - Axis Packaging",
    metaDescription: "Anti-static and protective packaging for electronic devices. Custom solutions to ensure safety from electrostatic discharge and impact.",
    h1: "Protective Electronics Packaging with Anti-Static Features",
  },
  {
    name: "Jewelry Gift Boxes",
    description: "Luxury presentation boxes for jewelry and precious items. Custom-designed with premium materials for an unforgettable unboxing experience.",
    icon: "💍",
    image: "/assets/luxury-cosmetic-boxes.jpg",
    slug: "jewelry-boxes",
    metaTitle: "Buy Jewelry Gift Boxes - Luxury Presentation - Axis Packaging",
    metaDescription: "Luxury presentation boxes for jewelry and precious items. Custom-designed with premium materials for an unforgettable unboxing experience.",
    h1: "Luxury Jewelry Gift Boxes for Premium Presentation",
  },
  {
    name: "Wine & Liquor Boxes",
    description: "Order premium custom wine and liquor boxes. Elegant designs and durable materials perfect for gifting and luxury branding.",
    icon: "🍷",
    image: "/assets/packify-hero-box4.jpg",
    slug: "wine-boxes",
    metaTitle: "Buy Wine & Liquor Boxes - Premium Packaging - Axis Packaging",
    metaDescription: "Premium packaging for alcoholic beverages and wine bottles. Durable, stylish, and custom-designed for safe transport and gift appeal.",
    h1: "Premium Wine & Liquor Boxes for Safe Transport",
  },
  {
    name: "Bakery & Cake Boxes",
    description: "Keep treats fresh with custom bakery and cake boxes. Durable, food-safe packaging perfect for cakes, pastries, and desserts.",
    icon: "🎂",
    image: "/assets/packify-food-packaging.jpg",
    slug: "bakery-boxes",
    metaTitle: "Buy Bakery & Cake Boxes - Food Safe - Axis Packaging",
    metaDescription: "Food-safe boxes perfect for cakes, pastries, and baked goods. Custom printed and available in various sizes for all your bakery needs.",
    h1: "Food-Safe Bakery & Cake Boxes for Fresh Delivery",
  },
  {
    name: "Apparel Packaging",
    description: "Elevate brand with custom apparel packaging. Premium boxes and bags designed for clothing, shoes, and fashion accessories.",
    icon: "👕",
    image: "/assets/packify-fashion-packaging.jpg",
    slug: "apparel-packaging",
    metaTitle: "Buy Apparel Packaging - Stylish & Durable - Axis Packaging",
    metaDescription: "Stylish boxes and bags for clothing and fashion items. Enhance your apparel brand with custom printed, high-quality packaging.",
    h1: "Stylish Apparel Packaging for Fashion Brands",
  },
  {
    name: "Subscription Boxes",
    description: "Design unique subscription boxes that excite customers. Durable, branded packaging perfect for monthly deliveries and kits.",
    icon: "📮",
    image: "/assets/custom-packaging-boxes.jpg",
    slug: "subscription-boxes",
    metaTitle: "Buy Subscription Boxes - Custom Branded - Axis Packaging",
    metaDescription: "Custom branded boxes for subscription and e-commerce businesses. Create a unique unboxing experience with our durable shipping boxes.",
    h1: "Custom Branded Subscription Boxes for E-Commerce",
  },
  {
    name: "Gift Wrapping Boxes",
    description: "Make every gift special with custom gift wrapping boxes. Beautiful designs and premium finishes for any occasion or brand.",
    icon: "🎁",
    image: "/assets/custom-blue-box.jpg",
    slug: "gift-boxes",
    metaTitle: "Buy Gift Wrapping Boxes - Beautiful Presentation - Axis Packaging",
    metaDescription: "Beautiful presentation boxes for gifts and special occasions. Custom sizes and finishes to make every gift feel extra special.",
    h1: "Beautiful Gift Wrapping Boxes for All Occasions",
  },
  {
    name: "Toy Packaging",
    description: "Shop premium toy packaging for kids, gifts, and collectibles. Custom, durable, and eco-friendly boxes perfect for storage.",
    icon: "🧸",
    image: "/assets/packify-hero-box3.jpg",
    slug: "toy-packaging",
    metaTitle: "Buy Toy Packaging Boxes & Custom Designs - Axis Packaging",
    metaDescription: "Shop premium toy packaging for kids, girls, and collectibles. Custom, durable, and eco-friendly boxes perfect for retail.",
    h1: "Premium Toy Packaging Boxes",
  },
  {
    name: "Book & Media Packaging",
    description: "Protect and present CDs, DVDs, and books with our media packaging. Custom designs, sturdy materials, perfect for retail and shipping.",
    icon: "📚",
    image: "/assets/Book & Media Packaging.jpg",
    slug: "media-packaging",
    metaTitle: "Buy Media & Book Packaging Solutions - Axis Packaging",
    metaDescription: "Protect and present CDs, DVDs, and books with our premium packaging. Custom designs, sturdy materials, perfect for retail and shipping.",
    h1: "Premium Media & Book Packaging for Retail & Shipping",
  },
  {
    name: "Automotive Parts Boxes",
    description: "Protect auto parts with durable custom-built packaging boxes. Custom designs, foam protection, and bulk supply options.",
    icon: "🚗",
    image: "/assets/Automotive Parts Boxes.jpg",
    slug: "automotive-boxes",
    metaTitle: "Buy Automotive Packaging Boxes for Parts - Axis Packaging",
    metaDescription: "Premium auto parts with durable custom automotive packaging boxes. Custom designs, foam protection, and bulk supply options.",
    h1: "Custom Auto Packaging Boxes for Secure Part Protection",
  },
  {
    name: "Sports Equipment Boxes",
    description: "Design your unique custom sports packaging to reflect your brand image, protect equipment, and boost product appeal with durable boxes.",
    icon: "⚽",
    image: "/assets/spports.jpg",
    slug: "sports-boxes",
    metaTitle: "Buy Custom Sports Packaging Boxes - Axis Packaging",
    metaDescription: "Design your unique custom sports packaging to reflect your brand image, protect equipment, and boost product appeal.",
    h1: "Custom Sports Packaging Boxes for Gear & Brand Impact",
  },
  {
    name: "Pet Product Packaging",
    description: "Shop premium pet product high quality custom built packaging boxes with premium finishes and sustainable options to present products.",
    icon: "🐾",
    image: "/assets/assorted-food-containers.jpg",
    slug: "pet-packaging",
    metaTitle: "Pet Products Packaging - Custom Solutions - Axis Packaging",
    metaDescription: "Shop premium PET, custom pet packaging boxes with premium finishes and sustainable options for pet products and toys.",
    h1: "Custom PET Packaging Boxes",
  },
  {
    name: "Hardware & Tool Boxes",
    description: "Custom hardware packaging boxes protect heavy, sharp, and high-value products from factory floor to retail shelf to customer doorstep. We supply custom tool boxes and hardware packaging for hand tools, power tools, drill bits, fasteners, screws, bolts, and complete tool kits — in heavy-duty corrugated and rigid stock, with retail-ready printing, branded logo placement, and structural formats engineered for weight, sharpness, and durability.",
    icon: "🔧",
    image: "/assets/Hardware & Tools Boxes.png",
    slug: "hardware-boxes",
    metaTitle: "Custom Hardware & Tool Packaging Boxes | Axis Packaging",
    metaDescription: "Custom hardware and tool boxes for drills, screws, hand tools & power tools. Heavy-duty corrugated and logo printing. Order quantities are confirmed on your quotation.",
    h1: "Custom Hardware & Tool Packaging Boxes",
    alt: "Custom hardware and tool packaging boxes in heavy-duty corrugated by Axis Packaging",
    breadcrumbName: "Hardware & Tool Boxes",
    productsWePackageTitle: "Hardware & Tool Products We Package",
    productsWePackage: [
      { title: "Hand tool boxes", detail: "Hammer, screwdriver, wrench, and multi-tool retail packaging with hang tabs" },
      { title: "Power tool packaging", detail: "Heavy-duty corrugated with foam inserts, full-color product printing" },
      { title: "Drill bit & accessory boxes", detail: "Tray inserts, window display, blister-alternative formats" },
      { title: "Fastener & hardware packaging", detail: "Small-part tuck boxes, hang-display formats, bulk inner cartons" },
      { title: "Complete tool kit boxes", detail: "Large corrugated, foam-molded inserts, retail and e-commerce formats" },
      { title: "Industrial & auto parts packaging", detail: "Heavy-duty corrugated shippers, moisture-resistant options" },
    ],
    materials: [
      { name: "Corrugated (B/C/BC-flute)", bestFor: "Power tools, heavy tool kits, industrial shipping" },
      { name: "Double-Wall Corrugated", bestFor: "Extra-heavy or sharp hardware requiring crush resistance" },
      { name: "SBS Cardstock (16pt–24pt)", bestFor: "Hand tool retail boxes, drill bit display, fastener packaging" },
      { name: "Rigid Bux Board", bestFor: "Premium tool gift sets, professional-grade tool presentation" },
    ],
    printingFinishing: {
      print: ["Full-color CMYK", "PMS Pantone", "Single-color"],
      finish: ["Matte", "Gloss", "Spot UV", "Kraft natural"],
      addons: ["Foam inserts", "Hang tabs", "Blister-style windows", "Tray inserts", "Moisture-resistant lining", "Custom die-cut slots for tool shapes"],
    },
    whyChoose: [
      "Heavy-duty corrugated construction — rated for tools, hardware, and dense products",
      "Custom foam and die-cut tray inserts to hold tool shapes securely",
      "Retail-ready formats: hang tabs, peg-display, shelf-stand for hardware store placement",
      "Bold CMYK printing for product specifications, safety warnings, and brand identity",
      "Moisture-resistant options for outdoor and industrial hardware packaging",
      "A digital proof can be confirmed on your quotation",
      "Order quantities are confirmed on your quotation",
    ],
    faqs: [
      {
        question: "What hardware and tool products can you make packaging for?",
        answer: "Hand tools, power tools, drill bits, screwdrivers, wrenches, fasteners, screws, bolts, complete tool kits, and industrial and auto parts.",
      },
      {
        question: "What materials work best for heavy tool packaging?",
        answer: "Double-wall or BC-flute corrugated is the standard for heavy power tools and tool kits. B-flute and C-flute work well for mid-weight hand tools. For retail display of smaller hardware items, 16pt–24pt SBS cardstock provides a sharp print surface with adequate rigidity.",
      },
      {
        question: "Can you add foam inserts to tool packaging?",
        answer: "Yes. Custom die-cut foam inserts in EVA and polyurethane are available for tool boxes — holding each tool in a shaped cavity, preventing movement, and creating a premium presentation when the box is opened.",
      },
      {
        question: "Do you offer hang tab hardware packaging for retail display?",
        answer: "Yes. Hang tab formats for peg-display in hardware stores and home improvement retail are standard on our tuck-end and cardstock hardware packaging styles.",
      },
      {
        question: "What is the minimum order quantity?",
        answer: "MOQ varies by box style. Contact us with your product type and quantity for a quote.",
      },
    ],
  },
  {
    name: "Candle & Fragrance Boxes",
    description: "Custom candle boxes communicate the luxury, scent, and personality of your brand before the candle is ever lit. We supply candle packaging boxes and fragrance packaging for jar candles, pillar candles, taper candles, reed diffusers, wax melts, and gift sets — in premium rigid board, kraft, and cardstock, with foil stamping, soft-touch coating, and elegant finishes that match the quality of what is inside.",
    icon: "🕯️",
    image: "/assets/packify-cosmetics-packaging.jpg",
    slug: "candle-boxes",
    metaTitle: "Custom Candle & Fragrance Boxes Packaging | Axis",
    metaDescription: "Custom candle boxes and fragrance packaging with luxury finishes, foil stamping & eco-friendly kraft. Finishes and order quantities are confirmed on your quotation.",
    h1: "Custom Candle & Fragrance Packaging Boxes",
    alt: "Custom luxury candle boxes with gold foil stamp and soft-touch finish by Axis Packaging",
    breadcrumbName: "Candle & Fragrance Boxes",
    productsWePackageTitle: "Candle & Fragrance Products We Package",
    productsWePackage: [
      { title: "Jar candle boxes", detail: "Tuck-end, window display, sleeve formats; foam inserts for protection" },
      { title: "Pillar & taper candle boxes", detail: "Tall-format rigid and cardstock, custom inserts" },
      { title: "Reed diffuser packaging", detail: "Rigid magnetic lid, foam-molded inserts, luxury presentation" },
      { title: "Wax melt & tealight boxes", detail: "Window display, multi-cavity tray inserts, retail formats" },
      { title: "Candle gift sets", detail: "Two-piece rigid boxes, ribbon closures, tissue lining, branded tissue" },
      { title: "Fragrance & perfume cartons", detail: "Precision-fit cardstock cartons, foil-stamped, premium finish" },
    ],
    materials: [
      { name: "Rigid Bux Board", bestFor: "Luxury candle gift boxes, reed diffusers, premium brands" },
      { name: "SBS Cardstock (14pt–24pt)", bestFor: "Retail jar candle boxes, fragrance cartons, high-print quality" },
      { name: "Kraft Board", bestFor: "Eco candle brands, artisan and natural wax candle packaging" },
      { name: "Corrugated (E-flute)", bestFor: "Candle e-commerce shipping, multi-candle order fulfillment" },
    ],
    printingFinishing: {
      print: ["Full-color CMYK", "PMS Pantone", "Interior printing available"],
      finish: ["Matte", "Gloss", "Soft-touch", "Gold/Silver foil stamp", "Spot UV", "Emboss", "Deboss", "Holographic foil"],
      addons: ["Magnetic closures", "Ribbon pulls", "Window cutouts", "Foam inserts", "Tissue lining", "Fragrance info tags"],
    },
    whyChoose: [
      "Luxury finishing — foil stamp, emboss, soft-touch — standard for candle brands",
      "Rigid gift box formats with magnetic closures for premium candle lines",
      "Fragrance info tag printing and interior-printed lid options",
      "Foam and card inserts to protect glass jars during shipping and retail display",
      "Eco-friendly kraft options for natural wax and sustainable candle brands",
      "A digital proof can be confirmed on your quotation",
      "Order quantities are confirmed on your quotation",
    ],
    faqs: [
      {
        question: "What candle types can you make packaging for?",
        answer: "Jar candles, pillar candles, taper candles, votive candles, tealights, wax melts, reed diffusers, and candle gift sets.",
      },
      {
        question: "Can you make luxury gift boxes for candles?",
        answer: "Yes. Our luxury candle gift boxes in rigid board with magnetic closures, ribbon pulls, foil-stamped logos, and tissue lining are built for premium candle brands and gifting occasions.",
      },
      {
        question: "What finishes work best for candle packaging?",
        answer: "Soft-touch coating with gold foil stamping is the most popular combination for premium candle brands. Matte lamination with Spot UV is the modern minimalist option. Gloss lamination suits bold, colorful retail candle packaging.",
      },
      {
        question: "Do you offer eco-friendly candle boxes?",
        answer: "Yes. Recycled kraft, paper-based cardstock, and biodegradable materials with water-based inks are all available — ideal for natural wax, soy, and coconut candle brands.",
      },
      {
        question: "What is the minimum order quantity?",
        answer: "MOQ varies by box style. Contact us with your product type and quantity for a quote.",
      },
    ],
  },
  {
    name: "Supplement Packaging",
    description: "Custom supplement packaging is one of the most regulated and brand-sensitive categories in retail. Consumers judge supplement brands by packaging before they read the label. We supply custom supplement boxes for protein powders, vitamins, capsules, softgels, wellness shots, and health drinks — with full-color printing and finish options. Tell us the labelling you need and we will confirm it on your quotation.",
    icon: "💊",
    image: "/assets/packify-pharmaceutical.jpg",
    slug: "supplement-bottles",
    metaTitle: "Custom Supplement Packaging Boxes & Bottles | Axis",
    metaDescription: "Custom supplement packaging boxes for protein, vitamins, capsules & wellness bottles. Printing, finishes and order quantities are confirmed on your quotation.",
    h1: "Custom Supplement Packaging Boxes",
    alt: "Custom supplement packaging boxes with nutritional label printing by Axis Packaging",
    breadcrumbName: "Supplement Packaging",
    productsWePackageTitle: "Supplement Products We Package",
    productsWePackage: [
      { title: "Protein powder boxes", detail: "Heavy-duty corrugated, moisture-resistant, large-format branding" },
      { title: "Vitamin & capsule boxes", detail: "Tuck-end retail, auto-bottom, child-resistant options available" },
      { title: "Softgel & tablet packaging", detail: "Sealed tuck boxes, sleeve-and-tray formats, foil-lined options" },
      { title: "Wellness shot & drink boxes", detail: "Bottle carriers, six-pack partitions, branded retail cartons" },
      { title: "Pre-workout & sports nutrition boxes", detail: "Bold CMYK printing, metallic finish, high-impact shelf presence" },
      { title: "Supplement gift sets & starter kits", detail: "Rigid gift boxes, branded insert trays, premium unboxing" },
    ],
    materials: [
      { name: "SBS Cardstock (16pt–24pt)", bestFor: "Retail vitamin and capsule boxes, high-resolution label printing" },
      { name: "Corrugated (B/C-flute)", bestFor: "Protein powder shipping, bulk supplement fulfillment" },
      { name: "Rigid Bux Board", bestFor: "Premium wellness brands, supplement gift sets" },
      { name: "Moisture-Resistant Lining", bestFor: "Powder and liquid supplement packaging" },
    ],
    printingFinishing: {
      print: ["Full-color CMYK", "PMS Pantone", "Nutritional label printing"],
      finish: ["Matte", "Gloss", "Soft-touch", "Metallic foil", "Spot UV", "Emboss/Deboss"],
      addons: ["Tamper-evident seals", "Child-resistant closures", "Foil lining", "QR code printing", "Window cutouts"],
    },
    whyChoose: [
      "Material options for supplement packaging are confirmed on your quotation",
      "Nutritional label panel printing with accurate CMYK color reproduction",
      "Moisture-resistant options for powder and liquid supplement products",
      "Bold shelf-presence designs — metallic foil, Spot UV, high-impact CMYK",
      "Child-resistant and tamper-evident options available",
      "A digital proof can be confirmed on your quotation",
      "Order quantities are confirmed on your quotation",
    ],
    faqs: [
      {
        question: "What types of supplements can you make packaging for?",
        answer: "Protein powders, vitamins, capsules, softgels, tablets, wellness shots, pre-workout, sports nutrition blends, and supplement gift sets.",
      },
      {
        question: "Can you confirm materials for supplement packaging?",
        answer: "Tell us the supplement packaging you need. Material options are confirmed on your quotation. We do not publish a certification on this page.",
      },
      {
        question: "Can you print nutritional labels and supplement facts panels?",
        answer: "Yes. Full nutritional label printing with accurate CMYK color matching is available on all supplement box formats. We support supplement facts panel placement and regulatory text layout.",
      },
      {
        question: "Do you offer tamper-evident or child-resistant options?",
        answer: "Yes. Tamper-evident seals and child-resistant closure options are available for capsule and tablet supplement packaging.",
      },
      {
        question: "What is the minimum order quantity?",
        answer: "MOQ varies by box style. Contact us with your product type and quantity for a quote.",
      },
    ],
  },
  {
    name: "Craft & Hobby Boxes",
    description: "Custom craft boxes and hobby packaging turn everyday creative supplies into a branded experience. We supply packaging for DIY kit brands, craft subscription boxes, yarn and fabric suppliers, scrapbooking products, jewelry-making sets, and art and hobby retailers — in kraft, cardstock, and corrugated, with full-color printing and eco-friendly options.",
    icon: "🎨",
    image: "/assets/Craft & Hobby Boxes.jpg",
    slug: "craft-boxes",
    metaTitle: "Custom Craft & Hobby Boxes Packaging | Axis Packaging",
    metaDescription: "Custom craft and hobby boxes for DIY kits, yarn, scrapbooking, jewelry making & more. Kraft materials and logo printing. Order quantities are confirmed on your quotation.",
    h1: "Custom Craft & Hobby Boxes",
    alt: "Custom craft and hobby boxes in eco-friendly kraft by Axis Packaging",
    breadcrumbName: "Craft & Hobby Boxes",
    productsWePackageTitle: "Craft & Hobby Products We Package",
    productsWePackage: [
      { title: "DIY kit boxes", detail: "Subscription mailers, multi-item dividers, branded tissue and inserts" },
      { title: "Yarn & fabric packaging", detail: "Sleeve wraps, band wraps, hang-tag formats, kraft natural finish" },
      { title: "Scrapbooking & paper craft boxes", detail: "Flat-pack rigid, tuck-end retail, window display" },
      { title: "Jewelry making kits", detail: "Tray-insert boxes, foam slots, gift-ready rigid formats" },
      { title: "Paint-by-numbers & canvas kits", detail: "Corrugated mailers, foam padding, branded exterior" },
      { title: "General hobby supply boxes", detail: "Retail shelf, hang tab, window cutout formats" },
    ],
    materials: [
      { name: "Kraft Board", bestFor: "Eco craft brands, artisan hobby suppliers, subscription boxes" },
      { name: "SBS Cardstock (14pt–24pt)", bestFor: "Retail hobby shelf packaging, vivid CMYK printing" },
      { name: "Corrugated (E/B-flute)", bestFor: "DIY kit shipping, subscription mailers, heavier hobby sets" },
      { name: "Rigid Bux Board", bestFor: "Premium hobby gift boxes, luxury craft sets" },
    ],
    printingFinishing: {
      print: ["Full-color CMYK", "PMS Pantone", "Single-color"],
      finish: ["Matte", "Gloss", "Soft-touch", "Kraft natural", "Foil stamp", "Spot UV"],
      addons: ["Die-cut windows", "Hang tabs", "Custom dividers", "Foam inserts", "Tissue lining"],
    },
    whyChoose: [
      "Eco-friendly kraft options — standard for craft and hobby brands",
      "Custom dividers and inserts for multi-item DIY kit organization",
      "Subscription box formats with branded interior and exterior printing",
      "Retail-ready hang tabs and window cutouts available",
      "Order quantities are confirmed on your quotation",
      "A digital proof can be confirmed on your quotation",
    ],
    faqs: [
      {
        question: "What craft and hobby products can you package?",
        answer: "DIY kits, yarn, fabric, scrapbooking supplies, jewelry-making sets, paint-by-numbers kits, canvas sets, and general hobby supply bundles.",
      },
      {
        question: "Can you make branded subscription boxes for craft brands?",
        answer: "Yes. We produce custom craft subscription boxes in corrugated mailer formats with full exterior and interior printing, custom dividers, and tissue paper for organized unboxing.",
      },
      {
        question: "Do you offer eco-friendly craft packaging?",
        answer: "Yes. Recycled kraft, paper-based corrugated, and biodegradable materials with water-based inks are all available — preferred by most craft and hobby brands.",
      },
      {
        question: "What is the minimum order quantity?",
        answer: "MOQ varies by box style. Contact us with your product type and quantity for a quote.",
      },
      {
        question: "How long does production take?",
        answer: "Timing is confirmed on your quotation. Fast turnaround options can be discussed.",
      },
    ],
  },
  {
    name: "Garden & Plant Packaging",
    description:
      "Custom Garden & Plant Packaging UK is the quotation brief for cartons that hold seed packets, potted plants, soil products, garden tools or gift sets. The pictures are illustrative concepts and not photographs of Axis Packaging stock. Name the item and how it will be handled, then use the quotation form on this page.",
    icon: "🌱",
    image: "/assets/garden-plant-seed-cartons.webp",
    slug: "custom-garden-plant-packaging",
    seoTitle: "Custom Garden & Plant Packaging UK: Quotation Checklist",
    metaDescription:
      "Custom Garden & Plant Packaging UK for seeds, pots, soil, tools and gift sets. Send the item, size, quantity and artwork, then request your quotation.",
    h1: "Custom Garden & Plant Packaging UK",
    alt: "Three open cartons of leaf-printed seed packets on a wooden counter",
    breadcrumbName: "Garden & Plant Packaging",
    faqHeading: "Frequently Asked Questions",
    hideProductFeatures: true,
    quoteTitle: "Request a garden packaging quote",
    gallery: [
      {
        src: "/assets/garden-plant-seed-cartons.webp",
        alt: "Three open cartons of leaf-printed seed packets on a wooden counter",
      },
      {
        src: "/assets/garden-plant-pot-dimensions.webp",
        alt: "A leafy plant in a terracotta pot and saucer beside an empty open carton",
      },
      {
        src: "/assets/garden-plant-tool-gift.webp",
        alt: "An open carton holding a trowel cream gloves and a ball of twine with no plant inside",
      },
    ],
    internalLinks: [
      { phrase: "corrugated shipping boxes", href: "/products/corrugated-shipping" },
      { phrase: "mailer boxes", href: "/products/mailer-boxes" },
      { phrase: "subscription boxes", href: "/products/subscription-boxes" },
      { phrase: "plant boxes guide", href: "/blog/plant-boxes-packaging-plants-flowers-garden-products" },
      { phrase: "issuing plant passports", href: "https://www.gov.uk/guidance/issuing-plant-passports-to-trade-plants-in-great-britain" },
      { phrase: "importing plants and plant products", href: "https://www.gov.uk/guidance/import-plants-and-plant-products-from-the-eu-to-great-britain" },
      { phrase: "quotation form on this page", href: "#static-product-quote" },
    ],
    contentSections: [
      {
        title: "What to decide before a quotation",
        intro:
          "A nursery, a seed seller and a gift brand can all ask for a carton, and they are not describing the same pack. This page separates five item types and lists the details that make two quotations comparable. It does not publish a board grade, a coating, a certificate, a price or a delivery date.",
        subsections: [
          {
            title: "We supply the packaging",
            content:
              "We supply packaging from Leeds. We do not grow plants, and a carton is not a promise about the condition of a plant. Say whether the item is living, or whether it is a packet, a bag of soil or a tool.",
          },
          {
            title: "Leave specifications to the quotation",
            content:
              "If a board, a finish or a certificate is relevant, it is named on the quotation. Do not paste a grade or a weight from another website and treat it as agreed.",
          },
        ],
      },
      {
        title: "Custom Garden & Plant Packaging UK by item type",
        intro:
          "Name one item type first. A mixed enquiry is welcome, but each type needs its own size and handling note so the lines can be quoted separately.",
        subsections: [
          {
            title: "Seed cartons",
            content:
              "Seed cartons hold packets. Say how many packets sit in one carton, whether that carton is for a shelf or for posting, and what must be printed: a variety name, a short instruction, or only a logo. Give the packet size if the packets already exist. If you want the packet and the outer carton quoted together, say so. Do not send a pot measurement for a packet.",
          },
          {
            title: "Potted plants",
            content:
              "A potted plant is the only item here that needs pot dimensions. Give the pot width and height. If a saucer travels with the pot, give the saucer width too. If the leaves must stay inside the carton, also give the height from the table to the top of the plant. The centre picture shows the empty space beside the pot.",
          },
          {
            title: "Soil products",
            content:
              "Soil and compost are heavy, and a bag can shed dust. Give the filled weight you know, the bag size, and whether the carton holds one bag or several. If you want a liner, ask for it to be discussed rather than treating it as included. Heavier posted goods may sit closer to corrugated shipping boxes than to a small counter carton.",
          },
          {
            title: "Garden tools",
            content:
              "Tools are solid goods. A trowel, a pair of gloves or a hand fork needs its longest length and its weight, not a pot size. Say whether the carton is a retail pack for one tool or an outer carton for several. The gallery picture of a trowel, gloves and twine is a gift-style concept with no plant inside. It is not a shipper for a living plant, and it is not a stock item.",
          },
          {
            title: "Gift sets",
            content:
              "A gift set may combine packets, a small tool and a printed note. List every piece and mark the tallest one. A one-off carton is different from a selection that is sent again and again. A repeating selection can be discussed as subscription boxes. A flat posted gift may suit mailer boxes.",
          },
        ],
      },
      {
        title: "Information to send with the enquiry",
        intro:
          "These six points are enough to start. Missing measurements can be asked for later. A guessed carton size is less useful than the size of the item itself.",
        subsections: [
          {
            title: "Item type",
            content:
              "Say seed carton, potted plant, soil product, garden tool or gift set. If one order contains more than one type, list them on separate lines.",
          },
          {
            title: "Dimensions",
            content:
              "For packets, bags and tools, give the item width, depth and height. For a potted plant, use the pot measurements in the next section. Do not replace those figures with a carton size you hope will be large enough.",
          },
          {
            title: "Quantity",
            content:
              "Give the quantity you want quoted. No minimum is published on this page.",
          },
          {
            title: "Artwork",
            content:
              "Say whether you have finished artwork or only a logo and a list of words. You supply variety names, prices and any planting instructions. We do not invent plant names or statements about how a plant will grow.",
          },
          {
            title: "Intended handling",
            content:
              "Say who handles the carton: shop staff, a courier, or a customer at the counter. A handle, a window or an insert is a request to discuss, not a feature already agreed.",
          },
          {
            title: "Posted or collected",
            content:
              "Say whether the customer receives the item by post or collects it. A posted carton has to suit the journey you have in mind. A collected carton mainly has to be clear on a shelf or a counter. Name a carrier only if you already use one. This page does not promise a transit time.",
          },
        ],
      },
      {
        title: "Pot dimensions for potted plants only",
        intro:
          "Pot size is the wrong question for a seed packet, a bag of soil or a tool. Asking for it on those items slows the reply.",
        subsections: [
          {
            title: "What to measure",
            content:
              "Measure the pot at its widest point, including the rim. Measure from the table to the top of the pot. If the foliage must not be crushed, also measure from the table to the highest leaf. Include a saucer only when the saucer is part of the order.",
          },
          {
            title: "What the picture does not decide",
            content:
              "The open carton beside the plant shows why the pot must be described. It is not a template. If you want the pot held in place, describe the pot and ask what can be discussed. That answer belongs on the quotation.",
          },
        ],
      },
      {
        title: "Features to confirm before you mention them",
        intro:
          "Optional features are part of the brief. They are not capabilities this page guarantees, and they should not be promised to customers until the quotation names them.",
        subsections: [
          {
            title: "Holes, liners and inserts",
            content:
              "If you want holes, a liner or an insert, say why in plain words. You might want a pot to sit still, or a bag of soil kept away from a booklet. Wait until the quotation names the feature before you describe it as part of the pack.",
          },
          {
            title: "Words and pictures on the pack",
            content:
              "Say which words must be readable at arm's length: the product name, a short instruction, or a logo. A picture of a plant on the carton is artwork you must have the right to print. Printing that picture does not change how the plant itself is carried.",
          },
        ],
      },
      {
        title: "Plant trade rules sit outside the carton",
        intro:
          "Some plants that are traded or brought into Great Britain need official checks. Packaging alone does not satisfy those requirements, and Axis Packaging does not provide regulatory approval.",
        subsections: [
          {
            title: "Passports and imports",
            content:
              "GOV.UK guidance on issuing plant passports explains a duty that can apply when certain plants are traded in Great Britain. GOV.UK guidance on importing plants and plant products explains checks that can apply when plants enter Great Britain. Read those pages if they match your trade. A carton does not issue a passport and does not clear an import.",
          },
          {
            title: "How this page differs from the plant article",
            content:
              "Our plant boxes guide talks more generally about plants, flowers and garden goods. Use it as background. Use this page to prepare the quotation. It is not a care guide.",
          },
        ],
      },
      {
        title: "Send the brief",
        intro:
          "Use the quotation form on this page. Quotation requests receive a 24h quote response, and customer support is available 24/7. Price and timing are confirmed on the quotation.",
        subsections: [
          {
            title: "A list you can copy",
            content:
              "Item type, dimensions, quantity, artwork, intended handling, and whether the item is posted or collected. Add pot dimensions only for a potted plant. Attach a photograph of the item if you have one.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What should I send for a garden packaging quotation?",
        answer:
          "Send the item type, the item dimensions, the quantity, the artwork you have, how the carton will be handled, and whether the item is posted or collected. Add pot dimensions only when the item is a potted plant.",
      },
      {
        question: "Do seed cartons, soil bags and tools need pot dimensions?",
        answer:
          "No. Pot width and pot height are for potted plants. Packets, bags and tools need their own width, depth and height.",
      },
      {
        question: "Are the pictures photographs of Axis Packaging stock?",
        answer:
          "No. The gallery shows illustrative concepts. The carton you can order is the one described on your quotation.",
      },
      {
        question: "Does the packaging meet plant passport or import rules?",
        answer:
          "No. Official plant-trade duties are explained on GOV.UK. A carton does not issue a plant passport, does not clear an import, and is not a regulatory approval from Axis Packaging.",
      },
      {
        question: "Can a gift set be quoted as a posted mailer?",
        answer:
          "It can be discussed. Tell us the pieces in the set and whether the gift is posted flat or collected from a counter. The quotation will say if a posted mailer fits.",
      },
      {
        question: "Is a minimum order or a delivery date published here?",
        answer:
          "No. Quantity and timing are confirmed on the quotation. This page does not publish a minimum, a price or a delivery promise.",
      },
    ],
  },
  {
    name: "Office Supply Boxes",
    description: "Shop office supply boxes for storage and organization, available in small, large, paper or fabric-covered designs for any workspace.",
    icon: "📎",
    image: "/assets/packify-retail-boxes.jpg",
    slug: "office-boxes",
    metaTitle: "Shop Office Supply Boxes - Custom & Premium - Axis Packaging",
    metaDescription: "Shop office supply boxes for storage and organization, available in small, large, paper or cardboard designs for brands.",
    h1: "Office Supply Boxes — Storage and Organization Solutions",
  },
  {
    name: "Home Decor Packaging",
    description: "Shop home decor packaging including decorative boxes, storage solutions, and subscription boxes. Perfect for gifts, home organization, and retail.",
    icon: "🏠",
    image: "/assets/packify-custom-boxes.jpg",
    slug: "home-decor",
    metaTitle: "Buy Home Decor Packaging - Premium Creation - Axis Packaging",
    metaDescription: "Shop home decor packaging including decorative boxes, storage solutions, and subscription boxes. Perfect for gifts and collectibles.",
    h1: "Home Decor Packaging — Decoration & Storage Boxes",
  },
  {
    name: "Musical Instrument Cases",
    description: "Protect instruments with custom musical instrument cases. Durable, padded packaging designed for safe transport and professional presentation.",
    icon: "🎵",
    image: "/assets/Musical Instrument Cases.jpg",
    slug: "music-cases",
    metaTitle: "Buy Musical Instrument Cases - Protective - Axis Packaging",
    metaDescription: "Protective cases and packaging for musical instruments. Ensure safe transport and storage with our durable, custom-fit solutions.",
    h1: "Protective Musical Instrument Cases and Packaging",
  },
  {
    name: "Custom Art Boxes",
    description:
      "Custom Art Boxes UK is the quotation brief for cartons that hold pencils, brushes, paint sets, sketchbooks or art kits. The pictures are illustrative concepts and not photographs of Axis Packaging stock. Name the item and how it will be handled, then use the quotation form on this page.",
    icon: "🖼️",
    image: "/assets/art-pencil-brush-cartons.webp",
    slug: "custom-art-boxes",
    seoTitle: "Custom Art Boxes UK: Checklist Before You Request a Quote",
    metaDescription:
      "Custom Art Boxes UK for pencils, brushes, paint sets, sketchbooks and kits. Send the longest item, the quantity and artwork, then request your quotation.",
    h1: "Custom Art Boxes UK",
    alt: "Two open kraft cartons on a wooden table with coloured pencils in one and paintbrushes in the other",
    breadcrumbName: "Art Boxes",
    faqHeading: "Frequently Asked Questions",
    hideProductFeatures: true,
    quoteTitle: "Request an art box quote",
    gallery: [
      {
        src: "/assets/art-pencil-brush-cartons.webp",
        alt: "Two open kraft cartons on a wooden table with coloured pencils in one and paintbrushes in the other",
      },
      {
        src: "/assets/art-pencils-open-carton.webp",
        alt: "Coloured pencils of different lengths beside an empty open carton",
      },
      {
        src: "/assets/art-paint-set-gift-carton.webp",
        alt: "A closed kraft carton beside a wooden palette and two paint tubes",
      },
    ],
    internalLinks: [
      { phrase: "craft boxes", href: "/products/craft-boxes" },
      { phrase: "box inserts", href: "/products/box-inserts" },
      { phrase: "mailer boxes", href: "/products/mailer-boxes" },
      { phrase: "art storage guide", href: "/blog/art-box-storage-packaging-creative-supplies" },
      { phrase: "Toys (Safety) Regulations 2011", href: "https://www.gov.uk/government/publications/toys-safety-regulations-2011" },
      { phrase: "quotation form on this page", href: "#static-product-quote" },
    ],
    contentSections: [
      {
        title: "What to decide before a quotation",
        intro:
          "A shop selling pencils and a brand posting a paint set are not asking for the same carton. This page separates five art items and lists the details that make two quotations comparable. It does not publish a board grade, a coating, a certificate, a price or a delivery date.",
        subsections: [
          {
            title: "We supply the packaging",
            content:
              "We supply packaging from Leeds. We do not make the pencils, brushes or paint. Say what goes in the carton and whether a customer will see it on a shelf or receive it by post.",
          },
          {
            title: "Leave specifications to the quotation",
            content:
              "If a board, a finish or a window is relevant, it is named on the quotation. Do not paste a grade, a weight or a film type from another website and treat it as agreed.",
          },
        ],
      },
      {
        title: "Custom Art Boxes UK by item type",
        intro:
          "Name one item type first. A mixed enquiry is welcome, but each type needs its own length and handling note so the lines can be quoted separately.",
        subsections: [
          {
            title: "Pencil boxes",
            content:
              "A pencil box holds pencils or crayons, not a sketchbook. Say how many sit in one carton and whether they lie flat or stand. Give the length of the longest pencil, including any sharpened tip you expect to pack. A short crayon and a long pencil should not share one guessed size.",
          },
          {
            title: "Brush packaging",
            content:
              "Brushes are awkward because the handle and the bristles are different lengths. Measure the longest brush from the end of the handle to the tip of the bristles. Say whether the bristles must stay straight and whether several brushes share one carton. Do not assume a shaped holder until the quotation names one.",
          },
          {
            title: "Paint sets",
            content:
              "A paint set may include pans, tubes or a small palette. List every piece and mark the tallest and the longest. Tubes can be shorter than the palette they sit with. The closed carton in the gallery is a gift-style concept beside a palette. It is not a storage trunk and it is not a stock item.",
          },
          {
            title: "Sketchbooks",
            content:
              "A sketchbook is a flat item with a fixed page size. Give the cover width, the cover height and the thickness of the book you actually sell. Say whether the carton holds one book or several, and whether a band or a sleeve is being asked for instead of a full carton. Paper pads that are thinner than a bound book need their own note.",
          },
          {
            title: "Art kits",
            content:
              "An art kit mixes pieces, such as pencils, a brush and a small pad. List every piece and mark the longest one. A kit sold on a counter is a different brief from a kit posted to a customer. Yarn, fabric and general hobby kits belong with craft boxes. Keep those enquiries separate from this page.",
          },
        ],
      },
      {
        title: "Retail presentation and postal packaging",
        intro:
          "Say which of these two jobs the carton has to do. A pack that looks clear on a shelf can be the wrong shape for a courier, and a posted carton can be a poor shop display.",
        subsections: [
          {
            title: "Retail presentation",
            content:
              "A retail carton is handled by shop staff and picked up by a customer. Say whether it sits on a shelf, hangs, or is handed over at a counter. If you want the contents seen before purchase, ask for a window to be discussed. Do not describe a window as already included.",
          },
          {
            title: "Postal packaging",
            content:
              "A posted carton has to suit the journey you have in mind. Say whether the customer receives one item or a set. A flat posted gift may suit mailer boxes, which are a separate product. Name a carrier only if you already use one. This page does not promise a transit time.",
          },
        ],
      },
      {
        title: "Information to send with the enquiry",
        intro:
          "These points are enough to start. Missing measurements can be asked for later. A guessed carton size is less useful than the size of the item itself.",
        subsections: [
          {
            title: "Item type",
            content:
              "Say pencil box, brush packaging, paint set, sketchbook or art kit. If one order contains more than one type, list them on separate lines.",
          },
          {
            title: "Longest item",
            content:
              "Name the longest piece and give its length. For pencils, that is the longest pencil. For brushes, include the bristles. For a kit, it may be a ruler, a brush or the pad. The loose pencils beside the open carton are there to show why that length has to be measured. They do not set a carton size.",
          },
          {
            title: "Dimensions",
            content:
              "Give width, depth and height as well as the longest length. A sketchbook needs its cover size and thickness. A paint tin needs its diameter and height. Do not replace those figures with a carton you hope will be large enough.",
          },
          {
            title: "Quantity",
            content:
              "Give the quantity you want quoted. No minimum is published on this page.",
          },
          {
            title: "Artwork",
            content:
              "Say whether you have finished artwork or only a logo and a list of words. You supply product names and any instructions. We do not invent ranges, ages or claims about how the materials perform.",
          },
          {
            title: "Intended handling",
            content:
              "Say who handles the carton: shop staff, a courier, or a customer at the counter. A handle, a window or an insert is a request to discuss, not a feature already agreed. If pencils or brushes must be held apart, box inserts can be quoted as a separate piece.",
          },
          {
            title: "Posted or collected",
            content:
              "Say whether the customer receives the item by post or collects it. A collected carton mainly has to be clear in the shop. A posted carton has to suit the journey. State which one applies before the artwork is locked.",
          },
        ],
      },
      {
        title: "Quotation checklist",
        intro:
          "Use this list so a later quotation can be compared with the first. A repeat order is still a new quotation.",
        bullets: [
          "Item type: pencils, brushes, paint set, sketchbook or art kit",
          "Longest piece and its length",
          "Width, depth and height of each piece",
          "Quantity you want quoted",
          "Artwork you already have, or a logo and the words to print",
          "Who handles the carton",
          "Posted or collected",
          "Any window, insert or finish you want discussed",
        ],
      },
      {
        title: "Features to confirm before you mention them",
        intro:
          "Windows, inserts, finishes and printing are part of the brief. They are not capabilities this page guarantees, and they should not be promised to customers until the quotation names them.",
        subsections: [
          {
            title: "Windows and inserts",
            content:
              "If you want a window, say what the customer should see and on which face of the carton. If you want pieces held apart, describe the pieces. Wait until the quotation names the window or the insert before you describe it as part of the pack.",
          },
          {
            title: "Finishes and printing",
            content:
              "Say which words must be readable at arm's length: the product name, a short instruction, or a logo. If you want a particular finish, ask for it in the same brief. A finish or a print process is included only when the quotation says so.",
          },
        ],
      },
      {
        title: "Children's kits and toy rules",
        intro:
          "Most art supplies on this page are not being discussed as toys. The position changes when you market the kit as a children's toy.",
        subsections: [
          {
            title: "What the carton does not prove",
            content:
              "GOV.UK publishes the Toys (Safety) Regulations 2011 for products that are toys. Read that guidance if it matches how you sell the kit. A packaging carton alone does not establish regulatory compliance, and Axis Packaging does not provide that approval.",
          },
        ],
      },
      {
        title: "How this page differs from storage advice",
        intro:
          "Organising a studio and quoting a retail or postal carton are different jobs. This page stays with the quotation.",
        subsections: [
          {
            title: "The storage article",
            content:
              "Our art storage guide talks more generally about organising creative supplies at home, in a class or in a shop. Use it as background. Use this page to prepare the quotation. The article is not a specification.",
          },
        ],
      },
      {
        title: "Send the brief",
        intro:
          "Use the quotation form on this page. Quotation requests receive a 24h quote response, and customer support is available 24/7. Price and timing are confirmed on the quotation.",
        subsections: [
          {
            title: "A list you can copy",
            content:
              "Item type, longest item, dimensions, quantity, artwork, intended handling, and whether the packaging is posted or collected. Add a note if the kit is marketed as a children's toy. Attach a photograph of the item if you have one.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What should I send for an art box quotation?",
        answer:
          "Send the item type, the longest piece, the other dimensions, the quantity, the artwork you have, how the carton will be handled, and whether it is posted or collected.",
      },
      {
        question: "Why do you ask for the longest item?",
        answer:
          "A carton that looks large enough in a photograph can still be short for one pencil or one brush. The longest piece sets the length that has to be discussed.",
      },
      {
        question: "What is the difference between retail and postal packaging?",
        answer:
          "A retail carton is picked up in a shop. A postal carton is sent to the customer. Tell us which job you need, because the brief is not the same.",
      },
      {
        question: "Are the pictures photographs of Axis Packaging stock?",
        answer:
          "No. The gallery shows illustrative concepts. The carton you can order is the one described on your quotation.",
      },
      {
        question: "Can I ask for a window, an insert or a finish?",
        answer:
          "Yes, as a request. Name it in the brief. It is part of the pack only when the quotation includes it.",
      },
      {
        question: "Does the carton meet toy safety rules?",
        answer:
          "No. If you market the kit as a children's toy, read the official toy safety guidance. A carton does not establish compliance, and Axis Packaging does not provide regulatory approval.",
      },
      {
        question: "Is a minimum order or a delivery date published here?",
        answer:
          "No. Quantity and timing are confirmed on the quotation. This page does not publish a minimum, a price or a delivery promise.",
      },
    ],
  },
  {
    name: "Custom Pizza Boxes",
    description: "Custom pizza boxes for UK takeaways, restaurants and delivery kitchens. Tell Axis Packaging the box size, print and quantity you need, and we will quote the job. This page does not list prices or a fixed size range.",
    icon: "🍕",
    image: "/assets/custom-pizza-boxes.jpg",
    slug: "pizza-boxes",
    featuredOrder: 2,
    seoTitle: "Custom Pizza Boxes for UK Takeaways | Axis Packaging",
    metaDescription: "Custom pizza boxes for UK takeaways and delivery kitchens. Send the pizza size, print and quantity, and Axis Packaging in Leeds will quote the carton.",
    h1: "Custom Pizza Boxes for UK Takeaways",
    alt: "Printed red and cream pizza boxes with one box open around a pizza",
    breadcrumbName: "Pizza Boxes",
    hideProductFeatures: true,
    internalLinks: [
      { phrase: "burger boxes", href: "/products/burger-boxes" },
      { phrase: "bakery and cake boxes", href: "/products/bakery-boxes" },
      { phrase: "food grade containers", href: "/products/food-containers" },
      { phrase: "corrugated shipping boxes", href: "/products/corrugated-shipping" },
      { phrase: "takeaway food trays", href: "/products/food-trays" },
      { phrase: "restaurant packaging", href: "/industries/restaurant" },
    ],
    contentSections: [
      {
        title: "Pizza boxes for collection and delivery",
        intro: "A pizza box has to stay shut in a delivery bag, stack in a pass, and open cleanly at the table. It is a different pack from bakery and cake boxes, which are built for slices and celebration cakes, and from food grade containers, which are closed tubs rather than a flat corrugated carton. A whole pizza stays in this carton rather than in takeaway food trays.",
        subsections: [
          {
            title: "What to send with your enquiry",
            content: "Share the length, width and depth in the quote form, how many boxes you need, and whether the board should be plain or printed. If the pizza is sold for delivery, say so. We quote from those details rather than from a published size chart.",
          },
          {
            title: "When a pizza box is the wrong pack",
            content: "Hot sides, chips and salads usually need takeaway trays or tubs, not a pizza carton. Parcels that travel by courier belong in corrugated shipping boxes. Browse restaurant packaging if you are planning the wider menu, and use burger boxes when the item is a burger rather than a round pizza.",
          },
        ],
      },
    ],
    productTypesTitle: "Pizza box formats to discuss",
    productTypes: [
      { title: "Single pizza cartons", detail: "A shallow corrugated carton for one pizza. Size comes from your base, not from a stock list." },
      { title: "Printed pizza cartons", detail: "The same carton with your name or a simple design. Print choices on the quote form are plain, one colour, two colours, or full colour." },
      { title: "Plain kraft pizza cartons", detail: "Unprinted board for shops that brand the pizza with a sticker or a band instead of a printed lid." },
    ],
    specificationsTitle: "What we need before we quote",
    specificationsTable: [
      { feature: "Size", detail: "The length, width and depth you enter on the quote form. No standard pizza sizes are published here." },
      { feature: "Board", detail: "Corrugated or kraft board. The board for your job is confirmed on the quote." },
      { feature: "Print", detail: "Plain, one colour, two colours, or full colour." },
      { feature: "Quantity", detail: "Quoted for the quantity you ask for. This page does not state a minimum order." },
    ],
    whyChooseTitle: "How Axis Packaging handles a pizza box enquiry",
    whyChooseParagraphs: [
      "Send the pizza size you actually sell, the quantity, and whether the box needs print. We reply with a quote for that job. Prices, lead times and food-contact requirements are confirmed in that reply, not assumed on this page.",
      "If the rest of the menu needs other packs, keep pizza boxes separate from cake packaging and from closed food tubs so each page stays useful for the right search.",
    ],
    benefitsTitle: "Useful points before you enquire",
    benefits: [
      "Made to the footprint of your pizza, once you supply the measurements",
      "Plain or printed, using the print choices on the quote form",
      "Suitable to discuss for collection and delivery service",
      "Quoted per job, with no price shown on this page",
    ],
    faqs: [
      {
        question: "What size pizza box can you make?",
        answer: "Enter the length, width and depth you need. We do not publish a list of 7 inch, 10 inch or 12 inch boxes, because the quote follows your pizza.",
      },
      {
        question: "Can you print our takeaway name on the lid?",
        answer: "Yes. Choose plain, one colour, two colours, or full colour on the quote form and tell us what must appear on the box.",
      },
      {
        question: "Is there a minimum order for pizza boxes?",
        answer: "This page does not state a minimum. Send the quantity you need and we will quote that quantity.",
      },
      {
        question: "Are these boxes certified for direct food contact?",
        answer: "Tell us what the box will hold and any food-contact requirement you must meet. Certification is not claimed on this page.",
      },
    ],
  },
  {
    name: "Custom Burger Boxes",
    description: "Custom burger boxes for UK takeaways, burger restaurants and cafes. Clamshell cartons are quoted to your burger size, print and quantity. Prices and minimum orders are not published here.",
    icon: "🍔",
    image: "/assets/custom-burger-boxes.jpg",
    slug: "burger-boxes",
    featuredOrder: 3,
    seoTitle: "Custom Burger Boxes for UK Takeaways | Axis Packaging",
    metaDescription: "Custom burger boxes for UK takeaways and cafes. Printed clamshell cartons are quoted to your burger size, print and quantity by Axis Packaging in Leeds.",
    h1: "Custom Burger Boxes for Takeaway Service",
    alt: "Printed teal and mustard burger boxes with one box open around a burger",
    breadcrumbName: "Burger Boxes",
    hideProductFeatures: true,
    internalLinks: [
      { phrase: "pizza boxes", href: "/products/pizza-boxes" },
      { phrase: "paper shopping bags", href: "/products/paper-bags" },
      { phrase: "food grade containers", href: "/products/food-containers" },
      { phrase: "Printed kraft boxes", href: "/products/kraft-boxes" },
      { phrase: "takeaway food trays", href: "/products/food-trays" },
      { phrase: "restaurant packaging", href: "/industries/restaurant" },
    ],
    contentSections: [
      {
        title: "Clamshell boxes for burgers",
        intro: "A burger box is a hinged carton that closes over the bun. It is not a flat pizza carton and it is not a cake box. Shops often pair burger boxes with paper shopping bags for carry-out, and with takeaway food trays when chips or sides sit beside the burger.",
        subsections: [
          {
            title: "Measurements that matter",
            content: "Measure the burger as it is actually served, including tall brioche buns and stacked patties. Put those three dimensions on the quote form. A box that is only sized to the patty will crush the bun.",
          },
          {
            title: "Print and board",
            content: "Printed kraft boxes on our kraft page are a broader carton range. For a burger, ask for a clamshell and say if the board should be plain or printed. Closed tubs are listed under food grade containers when the product is a sauce, dip or salad rather than a burger. For the rest of a takeaway menu, see restaurant packaging.",
          },
        ],
      },
    ],
    productTypesTitle: "Burger box styles to ask about",
    productTypes: [
      { title: "Single burger clamshell", detail: "A hinged carton for one burger. Height should clear the bun you sell." },
      { title: "Larger stacked-burger clamshell", detail: "A taller carton for double or chicken burgers. Supply the served height, not the patty height." },
      { title: "Printed or plain", detail: "Plain kraft, or print in one colour, two colours, or full colour." },
    ],
    specificationsTitle: "What we need before we quote",
    specificationsTable: [
      { feature: "Size", detail: "Length, width and depth of the served burger. No stock burger sizes are listed." },
      { feature: "Style", detail: "Hinged clamshell unless you ask for a different closure." },
      { feature: "Print", detail: "Plain, one colour, two colours, or full colour." },
      { feature: "Quantity", detail: "Quoted for the quantity you ask for. No minimum is stated on this page." },
    ],
    whyChooseTitle: "How a burger box quote works",
    whyChooseParagraphs: [
      "Describe the burger, the quantity, and the print. If customers also take pizza, keep that job on pizza boxes so the two cartons are specified separately.",
      "We will not guess a price or a lead time on this page. Both come back with the quote.",
    ],
    benefitsTitle: "Useful points before you enquire",
    benefits: [
      "Sized around the served burger, including the bun",
      "Hinged carton rather than a flat pizza box",
      "Plain or printed",
      "Can be discussed alongside bags and side trays",
    ],
    faqs: [
      {
        question: "Will a burger box fit a tall brioche bun?",
        answer: "Only if you give us the height of the burger as served. Do not send the patty thickness on its own.",
      },
      {
        question: "Can the same box be used for chicken burgers?",
        answer: "Yes, if the dimensions match. Send the size of each item you want boxed. One clamshell does not automatically fit every burger on a menu.",
      },
      {
        question: "Do you state a minimum order?",
        answer: "No. Ask for a quote at the quantity you expect to use.",
      },
      {
        question: "Do you claim a food-contact certificate here?",
        answer: "No. Tell us the food and any certificate your buyer requires, and we will confirm what can be offered.",
      },
    ],
  },
  {
    name: "Custom Noodle Boxes",
    description: "Custom noodle boxes for UK noodle bars, street-food traders and restaurants. Folded paperboard pails are quoted to your portion size and print. No price or standard capacity is published on this page.",
    icon: "🥡",
    image: "/assets/custom-noodle-boxes.jpg",
    slug: "noodle-boxes",
    featuredOrder: 4,
    seoTitle: "Custom Noodle Boxes for UK Takeaways | Axis Packaging",
    metaDescription: "Custom noodle boxes for UK takeaways and street-food stalls. Folded cartons are quoted to your portion, print and quantity by Axis Packaging in Leeds.",
    h1: "Custom Noodle Boxes for Hot Food Takeaway",
    alt: "Printed coral and navy noodle cartons with noodles and chopsticks",
    breadcrumbName: "Noodle Boxes",
    hideProductFeatures: true,
    internalLinks: [
      { phrase: "flexible packaging pouches", href: "/products/flexible-pouches" },
      { phrase: "food grade containers", href: "/products/food-containers" },
      { phrase: "pizza boxes", href: "/products/pizza-boxes" },
      { phrase: "vinyl stickers and labels", href: "/products/stickers-labels" },
      { phrase: "restaurant packaging", href: "/industries/restaurant" },
    ],
    contentSections: [
      {
        title: "Folded pails for noodles and rice",
        intro: "A noodle box is a tall folded paperboard pail, often with a paper handle, for a hot portion that is eaten from the pack. It is a different job from flexible packaging pouches, which are sealed bags, and from food grade containers, which are lidded tubs.",
        subsections: [
          {
            title: "Portion size",
            content: "Tell us how the portion is served: noodles, rice, or a sauced dish, and the length, width and height of the filled pail you want. We do not publish millilitre sizes, because the quote uses your portion.",
          },
          {
            title: "Print, or a separate label",
            content: "The pail can be plain or printed. Shops that change specials often prefer plain board plus vinyl stickers and labels. Round pizzas should stay on pizza boxes. For the rest of a restaurant menu, see restaurant packaging.",
          },
        ],
      },
    ],
    productTypesTitle: "Noodle box options to specify",
    productTypes: [
      { title: "Handled pail", detail: "A folded paperboard box. A paper handle can be requested on the quotation. The photograph shows printed cartons and does not set the handle or the capacity." },
      { title: "Plain pail", detail: "Unprinted board for kitchens that label each order." },
      { title: "Printed pail", detail: "Your name or a simple design, in one colour, two colours, or full colour." },
    ],
    specificationsTitle: "What we need before we quote",
    specificationsTable: [
      { feature: "Size", detail: "Length, width and height for your portion. No capacity in millilitres is published." },
      { feature: "Handle", detail: "Say if you want a paper handle. We do not promise a handle rating until the portion weight is known." },
      { feature: "Print", detail: "Plain, one colour, two colours, or full colour." },
      { feature: "Quantity", detail: "Quoted for the quantity you ask for. No minimum is stated here." },
    ],
    whyChooseTitle: "How a noodle box enquiry is quoted",
    whyChooseParagraphs: [
      "Send the portion size, whether you want a handle, and how the box should be printed. Sauce-heavy dishes may need a different closure from a dry noodle portion, so describe the food.",
      "Keep sealed refill packs on flexible packaging pouches. A noodle pail is for a ready-to-eat takeaway portion.",
    ],
    benefitsTitle: "Useful points before you enquire",
    benefits: [
      "Tall pail format rather than a flat carton or a pouch",
      "Handle only if you ask for one",
      "Plain board or printed board",
      "Sized from your portion, not from a stock capacity list",
    ],
    faqs: [
      {
        question: "Can the box hold a saucy noodle dish?",
        answer: "Describe the dish and how full the box will be. We will not claim leak resistance on this page. The quote will say what board and closure we can offer.",
      },
      {
        question: "Do the handles come as standard?",
        answer: "No. Ask for a paper handle if you want one, and tell us the filled weight you expect.",
      },
      {
        question: "What quantities can I ask for?",
        answer: "Any quantity you want quoted. This page does not set a minimum.",
      },
      {
        question: "Is a food-contact certificate included?",
        answer: "Not on this page. State the requirement with your enquiry.",
      },
    ],
  },
  {
    name: "Custom Sandwich Boxes",
    description: "Custom sandwich boxes for UK cafes, bakeries, delis and food-to-go counters. Wedge and rectangular cartons are quoted to your sandwich size. No prices or standard sandwich sizes are listed here.",
    icon: "🥪",
    image: "/assets/custom-sandwich-boxes.jpg",
    slug: "sandwich-boxes",
    featuredOrder: 5,
    seoTitle: "Custom Sandwich Boxes for UK Cafes | Axis Packaging",
    metaDescription: "Custom sandwich boxes for UK cafes, bakeries and delis. Wedge and rectangular cartons are quoted to your sandwich size by Axis Packaging in Leeds, UK.",
    h1: "Custom Sandwich Boxes for Cafes and Bakeries",
    alt: "Printed sage sandwich boxes with a filled baguette in an open wedge carton",
    breadcrumbName: "Sandwich Boxes",
    hideProductFeatures: true,
    internalLinks: [
      { phrase: "bakery and cake boxes", href: "/products/bakery-boxes" },
      { phrase: "paper shopping bags", href: "/products/paper-bags" },
      { phrase: "food grade containers", href: "/products/food-containers" },
      { phrase: "printed bagel and sandwich boxes", href: "/products/printed-bagel-sandwich-boxes" },
      { phrase: "bakery packaging", href: "/industries/bakery-cake" },
      { phrase: "takeaway food trays", href: "/products/food-trays" },
    ],
    contentSections: [
      {
        title: "Cartons for made-to-order sandwiches",
        intro: "Sandwich boxes are small cartons for a triangular wedge or a long filled roll. They are not bakery and cake boxes, which are for cakes and pastries, and they are not food grade containers, which suit tubs, salads and other lidded foods. A branded carton for a bagel or a filled roll, where the print is the main brief, is covered by printed bagel and sandwich boxes.",
        subsections: [
          {
            title: "Wedge or rectangular",
            content: "A cut sandwich usually wants a triangular carton. A baguette or uncut roll usually wants a longer rectangle. Measure the sandwich after it is made, including tall fillings, and put those dimensions on the quote form.",
          },
          {
            title: "How cafes carry them out",
            content: "Many cafes put the closed carton into paper shopping bags. Side salads and crisps are a better fit for takeaway food trays than for the sandwich carton. Bakeries planning cakes as well as sandwiches can use bakery packaging for the cake range and keep this page for the sandwich.",
          },
        ],
      },
    ],
    productTypesTitle: "Sandwich carton shapes",
    productTypes: [
      { title: "Triangular wedge", detail: "For a sandwich cut on the diagonal. Match the carton to the cut piece, not to the whole loaf." },
      { title: "Rectangular carton", detail: "For rolls, baguettes and uncut sandwiches. Length is the measurement that is most often wrong, so measure the filled roll." },
      { title: "Plain or printed", detail: "Plain kraft, or print in one colour, two colours, or full colour." },
    ],
    specificationsTitle: "What we need before we quote",
    specificationsTable: [
      { feature: "Shape", detail: "Triangular wedge, rectangular carton, or both. Say which sandwiches use which shape." },
      { feature: "Size", detail: "Length, width and depth of the made sandwich. No platters or standard wedge sizes are published." },
      { feature: "Print", detail: "Plain, one colour, two colours, or full colour." },
      { feature: "Quantity", detail: "Quoted for the quantity you ask for. No minimum is stated on this page." },
    ],
    whyChooseTitle: "How a sandwich box quote works",
    whyChooseParagraphs: [
      "List each sandwich you want boxed and its made size. A single wedge size rarely fits a baguette and a thin triangle at the same time.",
      "Cake orders stay with bakery and cake boxes. This page is only for the sandwich carton.",
    ],
    benefitsTitle: "Useful points before you enquire",
    benefits: [
      "Wedge cartons and rectangular cartons can be quoted separately",
      "Sized from the finished sandwich",
      "Plain or printed",
      "Distinct from cake boxes and from lidded food tubs",
    ],
    faqs: [
      {
        question: "Can one box fit every sandwich on our menu?",
        answer: "Usually not. A deep filled triangle and a long roll need different cartons. Send both sizes if you sell both.",
      },
      {
        question: "Do you make window boxes for sandwiches?",
        answer: "Ask if you want a window. We will say on the quote whether that closure is available for your size. It is not promised here.",
      },
      {
        question: "What is the minimum order?",
        answer: "None is published. Request a quote for the quantity you need.",
      },
      {
        question: "Do you state that the board is food-contact certified?",
        answer: "No. Include any food-contact requirement in your enquiry so it can be checked.",
      },
    ],
  },
  {
    name: "Custom Printed Bagel & Sandwich Boxes",
    description: "Custom Printed Bagel & Sandwich Boxes give cafes, bakeries, delis, sandwich bars and caterers a branded carton for food that leaves the counter. The pack can carry your logo, colours and original artwork, so a bagel or a filled roll looks like part of the shop rather than a plain takeaway container.",
    icon: "🥯",
    image: "/assets/custom-printed-bagel-sandwich-boxes.webp",
    slug: "printed-bagel-sandwich-boxes",
    featuredOrder: 1,
    metaTitle: "Custom Printed Bagel & Sandwich Boxes UK | Axis Packaging",
    metaDescription: "Custom printed bagel and sandwich boxes for UK cafes, bakeries and delis. Food-grade board, full-colour CMYK print. Request a quote from Axis Packaging.",
    h1: "Custom Printed Bagel & Sandwich Boxes",
    alt: "Custom Printed Bagel & Sandwich Boxes with Axis Packaging branding",
    breadcrumbName: "Bagel & Sandwich Boxes",
    hideProductFeatures: true,
    internalLinks: [
      { phrase: "sandwich boxes", href: "/products/sandwich-boxes" },
      { phrase: "bakery and cake boxes", href: "/products/bakery-boxes" },
      { phrase: "food grade containers", href: "/products/food-containers" },
      { phrase: "paper shopping bags", href: "/products/paper-bags" },
      { phrase: "food labelling and packaging guidance", href: "https://www.gov.uk/food-labelling-and-packaging" },
    ],
    contentSections: [
      {
        title: "Branded cartons for bagels and sandwiches",
        intro: "A printed carton does two jobs. It holds the food for the walk back to the office, and it shows the name of the business that made it. This range is for bagels, sandwiches and filled rolls. It is separate from plain sandwich boxes, which are quoted when you want an unprinted wedge or rectangle, and from bakery and cake boxes, which are built for cakes and pastries.",
        subsections: [
          {
            title: "Bagel boxes",
            content: "A bagel is round and taller than a flat sandwich wedge. Tell us the diameter and the height of the filled bagel, including cream cheese or other toppings. We quote a carton for that size. Dimensions are not listed here, because they depend on the bagel you sell.",
          },
          {
            title: "Sandwich boxes with a window",
            content: "A triangular carton with a clear window lets the customer see the filling before they open it. Measure the sandwich after it is cut, including tall ingredients. If you also sell long rolls, say so. One wedge size does not fit a baguette. Side salads and crisps are usually better in food grade containers than in the sandwich carton.",
          },
        ],
      },
      {
        title: "Print, colour and who it is for",
        intro: "Full-colour CMYK printing can reproduce logos, brand colours and original illustrations on the board. The finish is matt or gloss. This product uses food-grade board at 240gsm. UK food labelling and packaging guidance explains that packaging used for food must be suitable for that use, and that a declaration of compliance comes from the supplier. Prices and minimum orders are not published on this page.",
        subsections: [
          {
            title: "Shops that use this packaging",
            content: "Cafes, bakeries, delis, sandwich bars, caterers and other food-to-go businesses use printed cartons when the food is eaten away from the counter. Many of them then place the closed box in paper shopping bags for the customer to carry. Describe the menu, and we will quote the carton shapes you actually need.",
          },
          {
            title: "What to send with the enquiry",
            content: "Use the quote form on this page. Include the food, the length, width and depth, whether you want a bagel box, a window sandwich box, or both, and the quantity. Lead time is confirmed on the quotation, not assumed here. If you only need an unprinted sandwich carton, the sandwich boxes page is the better place to start.",
          },
        ],
      },
    ],
    productTypesTitle: "Formats to discuss",
    productTypes: [
      { title: "Bagel carton", detail: "A box shaped around a filled bagel. The size comes from the bagel you describe, not from a stock list." },
      { title: "Window sandwich carton", detail: "A triangular box with a display window, so the filling can be seen before the carton is opened." },
      { title: "Printed artwork", detail: "Your logo, colours and original artwork, printed in full-colour CMYK with a matt or gloss finish." },
    ],
    specificationsTitle: "Specifications",
    specificationsTable: [
      { feature: "Material", detail: "Food-grade board" },
      { feature: "Board weight", detail: "240gsm" },
      { feature: "Printing", detail: "Full-colour CMYK" },
      { feature: "Finish", detail: "Matt or gloss" },
      { feature: "Dimensions", detail: "Awaiting confirmation. Enter the length, width and depth on the quote form." },
      { feature: "Lead time", detail: "Confirmed on the quotation." },
      { feature: "Quantity", detail: "Quoted for the quantity you request. No minimum is stated on this page." },
    ],
    whyChooseTitle: "How a quote is prepared",
    whyChooseParagraphs: [
      "Send the bagel or sandwich as it is served, the print you want, and the quantity. We reply with a quotation for that job. Prices and production time are part of the reply, not this page.",
      "Keep cakes on bakery and cake boxes, so a celebration cake is quoted separately from a bagel or a sandwich.",
    ],
    benefitsTitle: "Before you enquire",
    benefits: [
      "A bagel carton and a window sandwich carton can be quoted together",
      "Artwork is discussed with the box, rather than taken from a stock design",
      "The window is for sandwiches where the filling should stay visible",
      "Measurements come from the food you actually sell",
      "Unprinted wedges are better handled as a separate sandwich carton",
    ],
    faqs: [
      {
        question: "Can one printed design cover both a bagel box and a sandwich box?",
        answer: "Yes. Tell us which shapes you need and we can quote them together. Each carton still has to match the food that goes inside it.",
      },
      {
        question: "Do you list standard bagel or sandwich sizes?",
        answer: "No. Dimensions are awaiting your confirmation. Enter the measurements of the filled bagel or the cut sandwich on the quote form.",
      },
      {
        question: "What printing can I request?",
        answer: "Full-colour CMYK, with a matt or gloss finish. Describe the logo, colours and artwork you want printed.",
      },
      {
        question: "Is there a minimum order or a published price?",
        answer: "Neither is published here. Request a quotation for the quantity you expect to order.",
      },
      {
        question: "When will the boxes be ready?",
        answer: "Lead time is confirmed on the quotation, once we have the size, print and quantity. It is not stated on this page.",
      },
    ],
  },
  {
    name: "Takeaway Food Trays",
    description: "Takeaway food trays for UK chip shops, cafes, restaurants and street-food stalls. Open kraft trays are quoted to your food and your size. Prices, capacities and minimum orders are not listed on this page.",
    icon: "🍟",
    image: "/assets/takeaway-food-trays.jpg",
    slug: "food-trays",
    featuredOrder: 6,
    seoTitle: "Takeaway Food Trays for UK Chip Shops | Axis Packaging",
    metaDescription: "Takeaway food trays for UK chip shops, cafes and street food. Open serving trays for chips and sides are quoted to your size by Axis Packaging in Leeds.",
    h1: "Takeaway Food Trays for Chips and Sides",
    alt: "Red and charcoal takeaway food trays holding chips onion rings and loaded fries",
    breadcrumbName: "Food Trays",
    hideProductFeatures: true,
    internalLinks: [
      { phrase: "burger boxes", href: "/products/burger-boxes" },
      { phrase: "pizza boxes", href: "/products/pizza-boxes" },
      { phrase: "Printed kraft boxes", href: "/products/kraft-boxes" },
      { phrase: "food grade containers", href: "/products/food-containers" },
      { phrase: "food industry packaging", href: "/industries/food" },
      { phrase: "printed food trays", href: "/products/printed-food-trays" },
      { phrase: "restaurant packaging", href: "/industries/restaurant" },
    ],
    contentSections: [
      {
        title: "Open trays for chips, sides and street food",
        intro: "A food tray is an open board tray for food that is eaten straight away. It is not a lidded tub. Use food grade containers when the food must be closed. Use burger boxes or pizza boxes when the item needs its own carton. Printed kraft boxes cover a wider kraft carton range if you also need closed cartons. For a tray where the print is the main brief, see printed food trays.",
        subsections: [
          {
            title: "Which foods suit a tray",
            content: "Chips, wedges, loaded fries, small street-food portions and some bakery sides are the usual brief. Sauces that must not spill in a bag are a poor match for an open tray. Say what you serve so the quote can refuse a tray when a closed pack is the better fit. The rest of a takeaway menu is covered under restaurant packaging.",
          },
          {
            title: "Shape",
            content: "The photograph shows open trays holding chips, onion rings and a loaded portion. That is presentation, not a size chart, and it is a different brief from printed food trays. Tell us which shape you want and the length, width and depth. We do not publish a scoop size or a portion weight.",
          },
        ],
      },
    ],
    productTypesTitle: "Tray shapes to specify",
    productTypes: [
      { title: "Rectangular tray", detail: "An open four-sided tray for chips and flatter portions." },
      { title: "Boat tray", detail: "A shallow open tray with curved ends, for smaller sides." },
      { title: "Plain or printed", detail: "Plain kraft, or print in one colour, two colours, or full colour." },
    ],
    specificationsTitle: "What we need before we quote",
    specificationsTable: [
      { feature: "Food", detail: "What goes in the tray, and whether it is dry, greasy or sauced." },
      { feature: "Size", detail: "Length, width and depth you need. No standard chip-scoop size is published." },
      { feature: "Shape", detail: "Rectangular, boat, or both." },
      { feature: "Quantity", detail: "Quoted for the quantity you ask for. No minimum is stated on this page." },
    ],
    whyChooseTitle: "How a tray enquiry is handled",
    whyChooseParagraphs: [
      "Describe the food first, then the tray size. An open tray is the wrong pack for a leaking sauce, and we would rather quote a closed container than pretend a tray will hold it.",
      "Wider food ranges can be reviewed under food industry packaging. Keep this URL for the open tray itself.",
    ],
    benefitsTitle: "Useful points before you enquire",
    benefits: [
      "Open tray, not a lidded container",
      "Rectangular and boat shapes can be quoted separately",
      "Plain or printed",
      "Sized from your portion, with no published scoop weight",
    ],
    faqs: [
      {
        question: "Are these trays suitable for chips?",
        answer: "Chips are a common use. Tell us the portion and whether you add wet toppings. Wet toppings may need a different pack.",
      },
      {
        question: "Can you print a shop name on the tray?",
        answer: "Yes, if you choose print on the quote form. Plain trays are also available.",
      },
      {
        question: "What quantities can I order?",
        answer: "Ask for the quantity you need. A minimum is not published here.",
      },
      {
        question: "Do you claim the tray is greaseproof or food-certified?",
        answer: "No. Those are separate requirements. State them on the enquiry if your food needs them.",
      },
    ],
  },
  {
    name: "Greaseproof Paper",
    description: "Greaseproof paper for UK takeaways, bakeries and cafes. Sheets or rolls are quoted to the size you need. Prices, sheet weights and food-contact certificates are not listed on this page.",
    icon: "🧻",
    image: "/assets/branded-greaseproof-paper.jpg",
    slug: "greaseproof-paper",
    featuredOrder: 7,
    seoTitle: "Greaseproof Paper for UK Bakeries | Axis Packaging",
    metaDescription: "Greaseproof paper for UK bakeries, cafes and takeaways. Sheets or rolls are quoted to your size and print by Axis Packaging in Leeds. Tell us the format.",
    h1: "Greaseproof Paper for Takeaways and Bakeries",
    alt: "Printed green and blush greaseproof paper wrapping a croissant and a pastry",
    breadcrumbName: "Greaseproof Paper",
    hideProductFeatures: true,
    internalLinks: [
      { phrase: "takeaway food trays", href: "/products/food-trays" },
      { phrase: "burger boxes", href: "/products/burger-boxes" },
      { phrase: "bakery and cake boxes", href: "/products/bakery-boxes" },
      { phrase: "paper shopping bags", href: "/products/paper-bags" },
      { phrase: "restaurant packaging", href: "/industries/restaurant" },
      { phrase: "food-contact materials regulations", href: "https://www.gov.uk/government/publications/food-contact-materials-regulations" },
    ],
    contentSections: [
      {
        title: "Sheets and rolls for greasy food",
        intro: "Greaseproof paper is a sheet or a roll used under or around food that marks ordinary paper. It is not a carton and it is not a bag. Use takeaway food trays when the portion needs an open board tray, and burger boxes when the burger needs its own closed carton. Cakes and slices belong in bakery and cake boxes. Use paper shopping bags to carry the order away from the counter.",
        subsections: [
          {
            title: "Sheets or a roll",
            content: "The photograph shows printed sheets and a roll used around bakery food. That is presentation, not a grade or a certificate. Tell us which format you want, and the length and width. We do not publish a sheet weight, a roll width, or a grease-resistance grade. If your kitchen needs a named grade or a food-contact certificate, say so in the enquiry so it can be checked before it is treated as agreed. Businesses can read the food-contact materials regulations before they ask. Reading that guidance does not mean paper from Axis Packaging is certified.",
          },
          {
            title: "When paper is the wrong pack",
            content: "A sheet will not hold a sauced portion on its own, and it will not replace a bag at the till. For the rest of a takeaway menu, see restaurant packaging and keep this page for the paper.",
          },
        ],
      },
    ],
    productTypesTitle: "Paper formats to specify",
    productTypes: [
      { title: "Cut sheets", detail: "Sheets cut to the length and width you supply." },
      { title: "Rolls", detail: "A roll for counters that tear paper to length. Width comes from your brief." },
      { title: "Plain or printed", detail: "Unprinted paper, or print in one colour, two colours, or full colour." },
    ],
    specificationsTitle: "What we need before we quote",
    specificationsTable: [
      { feature: "Format", detail: "Cut sheets or a roll. Say which you need." },
      { feature: "Size", detail: "The length and width you need. No standard sheet size is published." },
      { feature: "Print", detail: "Plain, one colour, two colours, or full colour." },
      { feature: "Quantity", detail: "Quoted for the quantity you ask for. No minimum is stated on this page." },
    ],
    whyChooseTitle: "How a paper enquiry is handled",
    whyChooseParagraphs: [
      "Send the food you wrap, the format, and the size. The quote follows that brief. A grease grade and any food-contact certificate are confirmed only if you ask for them and they can be supplied.",
      "Order cartons and bags on their own pages so this URL stays useful for the paper itself.",
    ],
    benefitsTitle: "Useful points before you enquire",
    benefits: [
      "Cut sheets or a roll, from the size you supply",
      "For wrapping or lining, not as a closed carton",
      "Plain or printed",
      "No price or sheet weight on this page",
    ],
    faqs: [
      {
        question: "Can this paper line a food tray?",
        answer: "Yes, if you want a sheet inside a tray. The tray is a separate product. Say whether you need the paper, the tray, or both.",
      },
      {
        question: "Can you print a shop name on the paper?",
        answer: "Yes, if you choose print on the quote form. Plain paper is also available.",
      },
      {
        question: "What quantities can I order?",
        answer: "Ask for the quantity you need. A minimum is not published here.",
      },
      {
        question: "Do you publish a grease grade or a food-contact certificate?",
        answer: "No. The page does not name a test grade or a certificate. Ask for either if your kitchen requires it.",
      },
    ],
  },
  {
    name: "Custom Paper Cups",
    description: "Custom paper cups for UK cafes, takeaways and events. Cups are quoted to the size, print and quantity you need. Capacities, lids and prices are not listed on this page.",
    icon: "☕",
    image: "/assets/custom-paper-cups.jpg",
    slug: "paper-cups",
    featuredOrder: 8,
    seoTitle: "Custom Paper Cups for UK Café Counters | Axis Packaging",
    metaDescription: "Custom paper cups for UK cafes, takeaways and events. Cup size, print and quantity are confirmed on your Axis Packaging quotation. No chart is published.",
    h1: "Custom Paper Cups for Cafes and Events",
    alt: "Printed terracotta navy and cream paper cups for cafe service",
    breadcrumbName: "Paper Cups",
    hideProductFeatures: true,
    internalLinks: [
      { phrase: "greaseproof paper", href: "/products/greaseproof-paper" },
      { phrase: "food grade containers", href: "/products/food-containers" },
      { phrase: "paper shopping bags", href: "/products/paper-bags" },
      { phrase: "beverage packaging", href: "/industries/beverage" },
      { phrase: "bakery packaging", href: "/industries/bakery-cake" },
      { phrase: "restaurant packaging", href: "/industries/restaurant" },
      { phrase: "cup packaging guide", href: "/blog/cup-design-packing" },
    ],
    contentSections: [
      {
        title: "Paper cups for counter and event service",
        intro: "A paper cup holds a drink served at a counter or a short event. It is not a sealed tub. Use food grade containers when the product must be closed. Greaseproof paper wraps or lines food and does not hold a drink. Use paper shopping bags when the customer carries the order away. Print planning is covered in the cup packaging guide.",
        subsections: [
          {
            title: "How to give the cup size",
            content: "The quote form asks for length, width and depth. For a cup, enter the diameter in length and width, and the height in depth. The photograph shows printed cups as a café example. A lid in a picture is not a promise that a lid is included. We do not publish drink sizes, a wall type, or a lid range.",
          },
          {
            title: "When a cup is the wrong pack",
            content: "Hot food belongs in a carton or a tray. A product that must stay sealed belongs in a closed container. See beverage packaging for drink brands, and bakery packaging if the cup is only one part of a cafe counter. Food served with the drink is covered under restaurant packaging.",
          },
        ],
      },
    ],
    productTypesTitle: "Cup options to specify",
    productTypes: [
      { title: "Plain cups", detail: "Unprinted paper cups, white or kraft, can be quoted. The photograph shows a printed example." },
      { title: "Printed cups", detail: "The same cup style with your name or a simple design." },
      { title: "Lids", detail: "Not included unless you ask for a lid to be quoted with the cup." },
    ],
    specificationsTitle: "What we need before we quote",
    specificationsTable: [
      { feature: "Size", detail: "Diameter and height entered on the quote form. No standard drink sizes are published." },
      { feature: "Print", detail: "Plain, one colour, two colours, or full colour." },
      { feature: "Lids", detail: "Ask if a lid must be quoted. Lid sizes are not listed here." },
      { feature: "Quantity", detail: "Quoted for the quantity you ask for. No minimum is stated on this page." },
    ],
    whyChooseTitle: "How a cup enquiry is handled",
    whyChooseParagraphs: [
      "Describe the drink service and the cup size. Wall type, lid fit and any food-contact requirement are confirmed only when you ask and they can be met.",
      "A cafe that also wraps food should order greaseproof paper on its own page, so this URL stays about the cup.",
    ],
    benefitsTitle: "Useful points before you enquire",
    benefits: [
      "Sized from the diameter and height you supply",
      "Plain white or plain kraft, or printed",
      "Lids are quoted only if you ask for them",
      "No capacity chart on this page",
    ],
    faqs: [
      {
        question: "What cup sizes can you make?",
        answer: "Enter the diameter and height you need. This page does not publish a list of drink sizes.",
      },
      {
        question: "Can you print a cafe name on the cup?",
        answer: "Yes. Choose plain, one colour, two colours, or full colour on the quote form.",
      },
      {
        question: "Are lids included?",
        answer: "No. Ask for a lid to be quoted with the cup. This page does not list lid sizes.",
      },
      {
        question: "Are the cups certified for hot drinks?",
        answer: "Tell us the drink and any certificate you must have. Certification is not claimed on this page.",
      },
    ],
  },
  {
    name: "Custom Mailer Boxes",
    description: "Custom mailer boxes for UK online shops. These are corrugated cartons for posting smaller orders, quoted to your size and print. Prices and board grades are not listed on this page.",
    icon: "📦",
    image: "/assets/custom-mailer-boxes.jpg",
    slug: "mailer-boxes",
    featuredOrder: 10,
    seoTitle: "Custom Mailer Boxes for UK Online Shops | Axis Packaging",
    metaDescription: "Custom mailer boxes for UK online shops. These corrugated cartons for smaller posted orders are quoted to your size and print by Axis Packaging in Leeds.",
    h1: "Custom Mailer Boxes for Online Orders",
    alt: "Printed plum and sand mailer boxes with one open around tissue and a candle",
    breadcrumbName: "Mailer Boxes",
    hideProductFeatures: true,
    internalLinks: [
      { phrase: "printed mailer bags", href: "/products/mailer-bags" },
      { phrase: "corrugated shipping boxes", href: "/products/corrugated-shipping" },
      { phrase: "custom tissue paper", href: "/products/tissue-paper" },
      { phrase: "custom packing tape", href: "/products/packing-tape" },
      { phrase: "ecommerce packaging", href: "/industries/ecommerce" },
    ],
    contentSections: [
      {
        title: "Corrugated cartons for smaller parcels",
        intro: "A mailer box is a corrugated carton for posting a smaller order. The photograph shows a printed mailer, one open with tissue and a small product and one closed. That is presentation, not a board grade. It is not a bag. Flexible packs for clothing and small items are printed mailer bags. Heavier or larger outer cartons are corrugated shipping boxes. Line a gift or apparel order with custom tissue paper, and close the parcel with custom packing tape. Those are separate products.",
        subsections: [
          {
            title: "What to measure",
            content: "Enter the length, width and depth of the assembled box, and say what you are posting. We do not publish a flute, a board grade, or a list of mailer sizes. Tell us the closure you need rather than assuming the flap style in the photograph is the only one.",
          },
          {
            title: "Bags, mailers and outer shippers",
            content: "Choose a bag when the product can travel in a flexible pack, and an outer shipper when the order is large or heavy. See ecommerce packaging for the wider dispatch setup, and keep this URL for the mailer carton.",
          },
        ],
      },
    ],
    productTypesTitle: "Mailer carton options to specify",
    productTypes: [
      { title: "Plain mailer cartons", detail: "Unprinted corrugated cartons can still be quoted. The photograph shows a printed mailer." },
      { title: "Printed mailer cartons", detail: "The same carton with your name or a design on the outside." },
      { title: "Lined orders", detail: "Tissue and tape can be quoted with the carton. They are not included unless you ask." },
    ],
    specificationsTitle: "What we need before we quote",
    specificationsTable: [
      { feature: "Size", detail: "Length, width and depth of the assembled box. No stock mailer sizes are published." },
      { feature: "Board", detail: "Corrugated board. The grade for your job is confirmed on the quote." },
      { feature: "Print", detail: "Plain, one colour, two colours, or full colour." },
      { feature: "Quantity", detail: "Quoted for the quantity you ask for. No minimum is stated on this page." },
    ],
    whyChooseTitle: "How a mailer box enquiry is handled",
    whyChooseParagraphs: [
      "Send the product, the assembled size, and whether the carton needs print. Tissue and tape are quoted on their own pages, so they are not assumed in the carton price.",
      "Use the industry page when you are planning dispatch as a whole, and this page when the item is the mailer carton.",
    ],
    benefitsTitle: "Useful points before you enquire",
    benefits: [
      "Corrugated carton, not a flexible mailer bag",
      "Made to the assembled size you supply",
      "Plain or printed",
      "Tissue and tape quoted separately",
    ],
    faqs: [
      {
        question: "How is a mailer box different from a mailer bag?",
        answer: "A mailer box is a rigid corrugated carton. A mailer bag is a flexible bag. Both can be quoted. They are different packs.",
      },
      {
        question: "Can the outside be printed?",
        answer: "Yes. Choose plain, one colour, two colours, or full colour on the quote form.",
      },
      {
        question: "What quantities can I order?",
        answer: "Ask for the quantity you need. A minimum is not published here.",
      },
      {
        question: "Do you state a board grade?",
        answer: "Not on this page. The grade is confirmed on the quote for your product and the way it will travel.",
      },
    ],
  },
  {
    name: "Custom Tissue Paper",
    description: "Custom tissue paper for UK retailers, gift brands and apparel shops. Sheets are quoted to your size, colour and print. Sheet weights and prices are not listed on this page.",
    icon: "🎀",
    image: "/assets/custom-tissue-paper.jpg",
    slug: "tissue-paper",
    featuredOrder: 11,
    seoTitle: "Custom Tissue Paper for UK Retail | Axis Packaging",
    metaDescription: "Custom tissue paper for UK retailers, gift brands and apparel shops. Sheet size, colour and print are confirmed on your Axis Packaging quotation in Leeds.",
    h1: "Custom Tissue Paper for Gifts and Retail",
    alt: "Blush and gold printed tissue paper wrapped around a small gift box",
    breadcrumbName: "Tissue Paper",
    hideProductFeatures: true,
    internalLinks: [
      { phrase: "custom mailer boxes", href: "/products/mailer-boxes" },
      { phrase: "gift wrapping boxes", href: "/products/gift-boxes" },
      { phrase: "paper shopping bags", href: "/products/paper-bags" },
      { phrase: "greaseproof paper", href: "/products/greaseproof-paper" },
      { phrase: "apparel packaging", href: "/products/apparel-packaging" },
    ],
    contentSections: [
      {
        title: "Tissue sheets for gifts, apparel and unboxing",
        intro: "Tissue paper is a thin sheet used to wrap a product or to fill space inside a carton. Place it inside custom mailer boxes, inside gift wrapping boxes, or inside paper shopping bags. It is not a food wrap. Food that needs a grease-resistant sheet should use greaseproof paper. Clothing brands that need the outer carton as well should look at apparel packaging separately.",
        subsections: [
          {
            title: "Colour, size and print",
            content: "The photograph shows printed tissue around a small gift. That is presentation, not a stock colour chart. Tell us the colour, the sheet size, and whether the sheet should be plain or printed. We do not publish a sheet weight.",
          },
          {
            title: "What tissue does not do",
            content: "Tissue will not close a parcel, hold a drink, or protect a greasy wrap on its own. Order the carton, the bag, or the food paper on the matching page, and keep this page for the sheet.",
          },
        ],
      },
    ],
    productTypesTitle: "Tissue options to specify",
    productTypes: [
      { title: "Plain white sheets", detail: "Unprinted white tissue can be quoted. The photograph shows a printed sheet." },
      { title: "Plain kraft sheets", detail: "Unprinted brown tissue can be quoted separately from the printed example." },
      { title: "Printed sheets", detail: "Tissue with your name or a simple pattern. Colour still comes from your brief." },
    ],
    specificationsTitle: "What we need before we quote",
    specificationsTable: [
      { feature: "Use", detail: "Gift wrap, apparel wrapping, or void fill inside a carton or bag." },
      { feature: "Sheet", detail: "Length, width and colour you need. No sheet weight is published." },
      { feature: "Print", detail: "Plain, one colour, two colours, or full colour." },
      { feature: "Quantity", detail: "Quoted for the quantity you ask for. No minimum is stated on this page." },
    ],
    whyChooseTitle: "How a tissue enquiry is handled",
    whyChooseParagraphs: [
      "Say what the sheet wraps, the size, and the colour. Print is optional. The sheet is quoted on its own, even when it will sit inside a mailer or a gift box.",
      "Do not use this page for food lining. That brief belongs on the greaseproof paper page.",
    ],
    benefitsTitle: "Useful points before you enquire",
    benefits: [
      "Thin sheets for wrapping or filling, not a carton",
      "White and kraft shown as plain examples",
      "Other colours and print taken from your brief",
      "No sheet weight or price on this page",
    ],
    faqs: [
      {
        question: "Can tissue paper go inside a mailer box?",
        answer: "Yes. The sheet and the carton are quoted separately. Say if you need both.",
      },
      {
        question: "Can you print a logo on the tissue?",
        answer: "Yes. Choose the print option on the quote form and tell us the sheet colour.",
      },
      {
        question: "Is this the same as greaseproof paper?",
        answer: "No. Tissue is for gifts, retail and apparel. It is not offered here as a food wrap.",
      },
      {
        question: "What quantities can I order?",
        answer: "Ask for the quantity you need. A minimum is not published here.",
      },
    ],
  },
  {
    name: "Custom Packing Tape",
    description: "Custom packing tape for UK shops, warehouses and online sellers. Rolls are quoted to your brief and print. Widths, roll lengths and prices are not listed on this page.",
    icon: "📏",
    image: "/assets/custom-packing-tape.jpg",
    slug: "packing-tape",
    featuredOrder: 9,
    seoTitle: "Custom Packing Tape for UK Parcels | Axis Packaging",
    metaDescription: "Custom packing tape for UK shops and warehouses. Plain or printed rolls are quoted to your brief by Axis Packaging in Leeds. No tape width is listed here.",
    h1: "Custom Packing Tape for Parcels and Cartons",
    alt: "Navy and orange printed packing tape sealing two brown cartons",
    breadcrumbName: "Packing Tape",
    hideProductFeatures: true,
    internalLinks: [
      { phrase: "custom mailer boxes", href: "/products/mailer-boxes" },
      { phrase: "corrugated shipping boxes", href: "/products/corrugated-shipping" },
      { phrase: "vinyl stickers and labels", href: "/products/stickers-labels" },
      { phrase: "printed mailer bags", href: "/products/mailer-bags" },
      { phrase: "shipping packaging", href: "/industries/shipping" },
    ],
    contentSections: [
      {
        title: "Tape for closing cartons",
        intro: "Packing tape closes a carton for storage or dispatch. The photograph shows printed tape sealing two cartons. Plain tape can still be quoted. That picture is not a width or a roll length. Use it on custom mailer boxes and on corrugated shipping boxes. It is not a product label. Brand marks that must be a sticker belong on vinyl stickers and labels. A flexible clothing pack is a job for printed mailer bags, which may not need carton tape at all.",
        subsections: [
          {
            title: "What to send with the enquiry",
            content: "Say whether the tape should be plain or printed, and what it will close. We do not publish a tape width, a roll length, or an adhesive type. The quote form still asks for length, width and depth. Use those fields for the roll size you need, and say in the size fields if you only know the carton you are closing.",
          },
          {
            title: "Tape, labels and bags",
            content: "A printed tape can carry a short name. A shaped sticker or a product label is a different item. See shipping packaging for the wider dispatch range, and keep this page for the tape.",
          },
        ],
      },
    ],
    productTypesTitle: "Tape options to specify",
    productTypes: [
      { title: "Plain brown rolls", detail: "Unprinted brown tape can be quoted. The photograph shows a printed roll." },
      { title: "Printed rolls", detail: "The same style of roll with your name or a short design." },
      { title: "Carton closing", detail: "Tape for mailer cartons and larger shipping cartons. The carton is quoted separately." },
    ],
    specificationsTitle: "What we need before we quote",
    specificationsTable: [
      { feature: "Use", detail: "What the tape will close, such as a mailer carton or a larger shipper." },
      { feature: "Roll", detail: "The width and length you need. Neither is published as a standard roll." },
      { feature: "Print", detail: "Plain, one colour, two colours, or full colour." },
      { feature: "Quantity", detail: "Quoted for the quantity you ask for. No minimum is stated on this page." },
    ],
    whyChooseTitle: "How a tape enquiry is handled",
    whyChooseParagraphs: [
      "Describe the carton and whether the roll needs print. Adhesive type is confirmed on the quote, not assumed from the photograph.",
      "Order the carton on its own page. Tape does not include the box.",
    ],
    benefitsTitle: "Useful points before you enquire",
    benefits: [
      "Printed or plain tape can be quoted",
      "Print can be requested on the quote form",
      "For closing cartons, not as a product label",
      "No width, roll length or price on this page",
    ],
    faqs: [
      {
        question: "Can you print a shop name on the tape?",
        answer: "Yes. Choose the print option on the quote form. Plain brown tape is also available.",
      },
      {
        question: "What roll sizes do you stock?",
        answer: "This page does not publish a width or a roll length. Send the size you need.",
      },
      {
        question: "Is the adhesive type stated?",
        answer: "No. Tell us how the carton will travel and we will confirm the tape on the quote.",
      },
      {
        question: "What quantities can I order?",
        answer: "Ask for the quantity you need. A minimum is not published here.",
      },
    ],
  },
  {
    name: "Custom Printed Food Trays",
    listedOn: "2026-10-16",
    description: "Custom Printed Food Trays UK give restaurants, cafes, bakeries, takeaways and street-food stalls a branded open tray for food eaten soon after it is served. Size, shape, artwork and board are confirmed on the quotation.",
    icon: "🍱",
    image: "/assets/printed-food-trays.jpg",
    slug: "printed-food-trays",
    metaDescription: "Custom Printed Food Trays UK for restaurants, cafes, bakeries and takeaways. Your logo, size and board are confirmed on your Axis Packaging quotation.",
    h1: "Custom Printed Food Trays for UK Restaurants & Bakeries",
    alt: "Colourful printed food trays holding a sandwich with chips and a pastry",
    breadcrumbName: "Printed Food Trays",
    hideProductFeatures: true,
    internalLinks: [
      { phrase: "takeaway food trays", href: "/products/food-trays" },
      { phrase: "burger boxes", href: "/products/burger-boxes" },
      { phrase: "bakery boxes", href: "/products/bakery-boxes" },
      { phrase: "food grade containers", href: "/products/food-containers" },
      { phrase: "custom paper cups", href: "/products/paper-cups" },
      { phrase: "greaseproof paper", href: "/products/greaseproof-paper" },
      { phrase: "restaurant packaging", href: "/industries/restaurant" },
      { phrase: "bakery and cake packaging", href: "/industries/bakery-cake" },
      { phrase: "food-contact materials regulations", href: "https://www.gov.uk/government/publications/food-contact-materials-regulations" },
    ],
    contentSections: [
      {
        title: "Custom Printed Food Trays for UK Food Businesses",
        intro: "A printed food tray is an open board tray with your branding on the outside, for food eaten at the counter or taken away. It is not a closed carton or a lidded tub. Use takeaway food trays for a plain or lightly printed kraft tray for chips and sides. Use this page when the logo and colours are the reason for the enquiry.",
        subsections: [
          {
            title: "What the tray is for",
            content: "Customers see the tray while they eat. A clear name and a simple colour show that the food came from your counter. The tray still has to fit the portion, so tell us what you serve before we talk about the print.",
          },
          {
            title: "What this page does not promise",
            content: "No board grade, certificate, price or minimum order is published here. Ask us to confirm a suitable board on the quotation. Businesses can read the official food-contact materials regulations. That link does not mean a tray from Axis Packaging is certified.",
          },
        ],
      },
      {
        title: "Printed Food Trays for Restaurants and Takeaways",
        intro: "Restaurants, takeaways and street-food stalls use open trays when the meal is eaten straight away. Chips, a side, a sandwich and some burgers served open can sit in a tray. A burger that needs a closed carton is better quoted as burger boxes. A whole pizza is a different carton.",
        subsections: [
          {
            title: "Counter and street-food service",
            content: "Say whether the portion is dry, greasy or sauced. An open tray is a poor match for a sauce that must not leak. We would rather quote food grade containers than pretend a tray will hold the liquid.",
          },
          {
            title: "Restaurant packaging around the tray",
            content: "Drinks are often quoted as custom paper cups. A sheet under fried food is greaseproof paper, quoted separately, and it does not make the tray greaseproof. Wider restaurant packaging can be discussed with the tray. This page stays on the printed tray.",
          },
        ],
      },
      {
        title: "Branded Food Trays for Bakeries and Cafés",
        intro: "Bakeries and cafes use printed trays for snacks that should look like the shop. A pastry, a filled roll or a small savoury can sit in a tray when a cake box is more than the food needs. Larger bakes belong in bakery boxes. Bakery and cake packaging covers that wider range.",
        subsections: [
          {
            title: "Presentation at the counter",
            content: "Shop colours help when several snacks are served at once. Describe the food as it is handed over. A flat cookie and a tall filled roll do not share one tray size.",
          },
          {
            title: "When a box is the better pack",
            content: "If the food must stay closed, or if icing and decoration need a lid, ask for bakery boxes instead. The printed tray is for food that is seen and eaten from the open tray.",
          },
        ],
      },
      {
        title: "Custom Printing and Branding Options",
        intro: "Send the logo, colours and any artwork you already have. You can ask for one colour, two colours, or a fuller print. The quotation confirms what can be printed. A print method is not guaranteed on this page.",
        subsections: [
          {
            title: "Artwork that stays readable",
            content: "A short name reads better on a small tray than a crowded design. Tell us where it should sit, and whether the inside stays plain. We do not publish a list of inks or finishes.",
          },
          {
            title: "Branding without extra claims",
            content: "The print identifies the business. It does not add a food-contact approval or a performance claim. Do not print a certificate that has not been confirmed for the job.",
          },
        ],
      },
      {
        title: "Food Tray Styles and Size Considerations",
        intro: "The photograph shows printed rectangular trays with a sandwich, chips and a pastry. That is presentation, not a size chart. Tell us the length, width and depth, and whether you want a rectangular tray, a boat-shaped tray, or both.",
        subsections: [
          {
            title: "Match the tray to the portion",
            content: "Measure the food as it is served. A tray that is too small spills, and one that is much too large looks empty. We do not publish a scoop size or a portion weight.",
          },
          {
            title: "One menu, more than one tray",
            content: "A chip portion and a bakery snack can be quoted together. Say which foods share a design and which need their own size.",
          },
        ],
      },
      {
        title: "How to Choose the Right Printed Food Trays",
        intro: "Start with the food, then the service, then the print. A handsome design on the wrong shape does not help the customer carry the meal.",
        bullets: [
          "Name the food and say if it is dry, greasy or sauced",
          "Say whether it is eaten at the counter, at a table, or taken away",
          "Give the length, width and depth, or the size of the portion if you do not yet know the tray",
          "Choose a rectangular tray, a boat-shaped tray, or ask us to quote both",
          "Send the logo and colours, and say if any food-contact requirement must be checked",
        ],
      },
      {
        title: "Why Choose Axis Packaging?",
        intro: "Axis Packaging supplies printed food trays from Leeds for UK food businesses. Quotation requests receive a 24h quote response, and customer support is available 24/7. The reply confirms the tray, the print and the quantity. Price and timing are not published on this page.",
        subsections: [
          {
            title: "A quotation for the job you describe",
            content: "We would rather confirm a different pack than force a tray onto food it will not hold. The tray quote stays specific to the food and the print you describe.",
          },
        ],
      },
      {
        title: "Request a Quote for Printed Food Trays",
        intro: "Use the quote form on this page. Include the food, the tray shape, the approximate size, the print and the quantity. Cups, a liner or a closed carton can be quoted separately. Timing is confirmed on the quotation.",
        subsections: [
          {
            title: "Details that change the quote",
            content: "The food, the quantity and any artwork change the specification. A finished dieline is not required to start. Customer support is available 24/7 if you want to talk the brief through first.",
          },
        ],
      },
    ],
    specificationsTitle: "What we need before we quote",
    specificationsTable: [
      { feature: "Food", detail: "What goes in the tray, and whether it is dry, greasy or sauced." },
      { feature: "Shape", detail: "Rectangular, boat-shaped, or both. No stock size list is published." },
      { feature: "Size", detail: "Length, width and depth, measured from the portion you serve." },
      { feature: "Print", detail: "Logo, colours and artwork. The print is confirmed on the quotation." },
      { feature: "Quantity", detail: "Quoted for the quantity you ask for. No minimum is stated on this page." },
    ],
    faqs: [
      {
        question: "Can printed food trays be customised with a restaurant logo?",
        answer: "Yes. Send the logo, colours and any artwork you have. The quotation confirms how that print can be applied. A print method is not stated on this page.",
      },
      {
        question: "What types of food businesses use printed food trays?",
        answer: "Restaurants, takeaways, cafes, bakeries and street-food stalls use them for food eaten from an open tray. Closed meals are quoted as another pack.",
      },
      {
        question: "Are different tray sizes available?",
        answer: "Tell us the size you need. No standard scoop or bakery size is published. Rectangular and boat-shaped trays can be quoted separately.",
      },
      {
        question: "What details are needed to request a quote?",
        answer: "Name the food, the shape, the approximate length, width and depth, the print, and the quantity. Quotation requests receive a 24h quote response.",
      },
      {
        question: "Can bakeries and cafés order branded food trays?",
        answer: "Yes. A pastry or a snack can be quoted as a printed tray. Cakes that need a lid are better handled as bakery boxes.",
      },
      {
        question: "How should a business choose a suitable tray material?",
        answer: "Describe the food and any food-contact requirement. The board is confirmed on the quotation. No material or certificate is named here.",
      },
      {
        question: "Can printed food trays be used for takeaway orders?",
        answer: "Yes, when the food can travel in an open tray. Food that must not leak is better in food grade containers. Plain kraft chip trays are takeaway food trays.",
      },
    ],
  },
  {
    name: "Custom Restaurant Menu Cards",
    listedOn: "2026-10-17",
    description:
      "Custom Restaurant Menu Cards UK are printed cards and folded leaflets for restaurants, cafés and takeaways. The pictures are illustrative concepts, not photographs of current stock. Describe who reads the menu, the size and the artwork, then use the quotation form on this page.",
    icon: "🍽️",
    image: "/assets/menu-card-restaurant-table.webp",
    slug: "custom-restaurant-menu-cards",
    metaTitle: "Custom Restaurant Menu Cards UK: 8 Essential Buying Tips",
    metaDescription:
      "Custom Restaurant Menu Cards UK for restaurants, cafés and takeaways. Check the finished size, folds, print and finish, then request your menu quotation.",
    h1: "Custom Restaurant Menu Cards UK",
    alt: "Two burgundy dinner cards titled Hearth showing a roast and a salad",
    breadcrumbName: "Menu Cards",
    faqHeading: "Frequently Asked Questions",
    hideProductFeatures: true,
    quoteTitle: "Request a custom menu card quote",
    gallery: [
      {
        src: "/assets/menu-card-restaurant-table.webp",
        alt: "Two burgundy dinner cards titled Hearth showing a roast and a salad",
      },
      {
        src: "/assets/menu-card-cafe-breakfast.webp",
        alt: "Sage green cream and orange Mill Cafe cards beside a coffee cup and a croissant",
      },
      {
        src: "/assets/menu-card-takeaway-leaflet.webp",
        alt: "A folded orange cream and green leaflet showing a burger chips and a drink",
      },
      {
        src: "/assets/menu-card-finishing-layouts.webp",
        alt: "Four menu covers labelled North Room Plates Wine and Sunday",
      },
    ],
    internalLinks: [
      { phrase: "restaurant packaging", href: "/industries/restaurant" },
      { phrase: "pizza boxes", href: "/products/pizza-boxes" },
      { phrase: "burger boxes", href: "/products/burger-boxes" },
      { phrase: "custom paper cups", href: "/products/paper-cups" },
      { phrase: "paper shopping bags", href: "/products/paper-bags" },
      { phrase: "printed food trays", href: "/products/printed-food-trays" },
      { phrase: "bakery boxes", href: "/products/bakery-boxes" },
      { phrase: "sandwich boxes", href: "/products/sandwich-boxes" },
      { phrase: "quotation form on this page", href: "#static-product-quote" },
      { phrase: "allergen guidance for food businesses", href: "https://www.food.gov.uk/business-guidance/allergen-guidance-for-food-businesses" },
    ],
    contentSections: [
      {
        title: "Product Overview",
        intro:
          "A menu card is the printed sheet, fold or booklet a customer reads before they order. It is not a food carton, a bag or a cup. The card you receive is the one named on the quotation, not the picture in the gallery.",
        subsections: [
          {
            title: "What the card has to do",
            content:
              "Someone has to read the dishes and the prices in your room, or in a few seconds at the counter. A photograph does not help if the type is too small or a fold hides the section they need.",
          },
          {
            title: "What this page does not decide",
            content:
              "No paper weight, laminate, price, minimum order or delivery time is published here. The Food Standards Agency publishes allergen guidance for food businesses. A menu can be one place to show that information. Printing the card does not meet a legal duty by itself, and we do not check your dish wording.",
          },
        ],
      },
      {
        title: "Benefits of Custom Restaurant Menu Cards UK",
        intro:
          "A printed menu is worth having when the offer is easier to read and easier to recognise as yours. It does not promise a busier service.",
        subsections: [
          {
            title: "Menu readability",
            content:
              "Group dishes and drinks so the eye can find them, and leave space around prices. Say which words must stay large.",
          },
          {
            title: "Brand recognition",
            content:
              "A logo and a short set of colours help a returning customer know they have the right card. Keep the logo clear of the dish names.",
          },
          {
            title: "A clear dine-in and takeaway split",
            content:
              "A table card can stay in a holder. A takeaway leaflet has to survive a pocket and still be readable. Quote them separately if the dishes differ.",
          },
          {
            title: "Room to organise the offer",
            content:
              "Breakfast and dinner rarely share one layout. Tell us how the day is divided before the design is locked.",
          },
          {
            title: "Something staff can hand over",
            content:
              "Say whether the menu stays on the table, sits in a folder, or leaves with the customer.",
          },
          {
            title: "A brief you can reprint from",
            content:
              "Keep the size and artwork so a later quotation can be compared with the first. A reprint is still a new quotation, and no date is promised.",
          },
        ],
      },
      {
        title: "Customisation Options",
        intro:
          "These are questions for the brief. None of them is a standard specification, and each is confirmed only when the quotation says so.",
        subsections: [
          {
            title: "Sizes and layout",
            content:
              "Measure the table, the holder or the counter before you pick a finished size. A card that is too wide gets in the way of plates, and one that is too small cramps the type. Sketch one column, two columns, or a drinks panel.",
          },
          {
            title: "Logo and brand colours",
            content:
              "Send a logo you are allowed to print, and the colours you want matched as closely as the process allows. Do not assume a foil, a spot colour or a special ink until the quotation includes it.",
          },
          {
            title: "Single-sheet, folded and multi-page concepts",
            content:
              "A single sheet suits a short list. A fold suits a leaflet or a card that hides a section until it is opened. Several pages suit a longer list, such as wine beside food. Ask which structure is feasible for your quantity.",
          },
          {
            title: "Artwork preparation",
            content:
              "Say whether you have finished artwork or a logo and a written list. You supply the dish names, prices and any allergen wording. We do not invent dishes or prices.",
          },
        ],
      },
      {
        title: "Popular Menu Card Formats",
        intro:
          "Choose the format from how the menu is used. A shape that looks generous in a photograph can be awkward in service.",
        subsections: [
          {
            title: "Single-sheet cards",
            content:
              "A single sheet is the simplest card for a table or a counter. It suits a short list. On a long menu the type shrinks or the card grows, so say which of those you want to avoid.",
          },
          {
            title: "Folded menus",
            content:
              "A fold gives panels without a booklet and is a common takeaway shape. Mark the cover and the panel a customer sees first. Leave a margin so type does not sit in the crease.",
          },
          {
            title: "Multi-page menus",
            content:
              "Several leaves suit food on one page and drinks on another. Say how the pages should be held together, and do not assume stitching or a cover board until the quotation includes it.",
          },
          {
            title: "Takeaway leaflets",
            content:
              "A leaflet is read away from the restaurant. The food still needs its own pack. A round pizza belongs in pizza boxes, a closed burger in burger boxes, and an open portion may be printed food trays.",
          },
        ],
      },
      {
        title: "Materials and Finishing Options",
        intro:
          "Paper and card are discussed from how the menu is handled. This page does not name a weight, a coating or a certificate.",
        subsections: [
          {
            title: "Paper and card thickness",
            content:
              "A card that stays on the table all evening is handled more than a leaflet read once. Ask what material is proposed. A thicker sheet can be harder to fold, so the quotation should name it in words you can compare.",
          },
          {
            title: "Lamination and other finishes",
            content:
              "A laminate or varnish can change how a card feels and how it marks. Treat a finish as included only when the quotation says so. Gloss can glare under restaurant lights, and matte can show fingerprints. Neither means the card is waterproof.",
          },
          {
            title: "Print and photographs",
            content:
              "A picture uses more of the card than type and needs artwork that stays sharp at the finished size. A type-only menu is often easier to read and to update. Say which dishes, if any, need a picture.",
          },
        ],
      },
      {
        title: "How to Choose the Right Menu Cards",
        intro:
          "These eight checks keep two quotations comparable. Answer them before you approve artwork.",
        subsections: [
          {
            title: "1. Name the reader and the place",
            content:
              "Say whether the card lives on a table, at the till, or in a customer’s hand. A dining room, a café counter and a takeaway door are different briefs.",
          },
          {
            title: "2. List the sections you need now",
            content:
              "Write the sections, such as breakfast, mains and drinks, and say how often they change. A weekly change needs a simpler update than a menu that changes twice a year.",
          },
          {
            title: "3. Fix the finished size and the fold",
            content:
              "Give the width and height, or the space the card must fit. Say if it is a single sheet, a fold or a set of pages, and include a holder size if you have one.",
          },
          {
            title: "4. Describe the handling",
            content:
              "Say how long the card should stay in use and whether it is handled with damp hands. Ask which material is proposed. Do not send a guessed paper code from another website.",
          },
          {
            title: "5. Set the type before the decoration",
            content:
              "The dish name and the price have to be readable at arm’s length. Agree a size for those words, then place the logo where it does not compete with them.",
          },
          {
            title: "6. Decide photographs or type",
            content:
              "Use photographs where they help someone choose, and send images you have the right to print. A soft photo will not become sharp because the layout looks premium.",
          },
          {
            title: "7. Ask about finishing in the same brief",
            content:
              "If you want a laminate or another finish, ask now. A finish added later can change the feel and the glare. Wait for the quotation before you describe a coating to customers.",
          },
          {
            title: "8. State the quantity and the artwork",
            content:
              "Give the quantity you want quoted. No minimum is published on this page. Say whether the artwork is finished, and who will check the dish names. Quotation requests receive a 24h quote response.",
          },
        ],
      },
      {
        title: "Menu Cards for Restaurants, Cafés and Takeaways",
        intro:
          "The same printer can serve more than one kind of food business. The useful difference is how the menu is held and how the food leaves.",
        subsections: [
          {
            title: "Restaurants",
            content:
              "A dining room usually needs a card that stays at the table. Wine and the main list may be separate covers, as the gallery suggests. Measure the table and any holder. Food that is packed to leave is a different product from the card.",
          },
          {
            title: "Cafés",
            content:
              "Keep drinks, breakfast and bakery items apart so a coffee order is not buried in mains. Cakes that need a lid are bakery boxes, and a filled roll that must stay closed is better discussed as sandwich boxes. The menu only lists them.",
          },
          {
            title: "Takeaways",
            content:
              "A takeaway needs a leaflet people can carry, plus packaging for the food. Drinks are often quoted as custom paper cups, and the order may leave in paper shopping bags. Wider food packs sit under restaurant packaging.",
          },
        ],
      },
      {
        title: "Request a Custom Menu Card Quote",
        intro:
          "Use the quotation form on this page. Axis Packaging supplies custom printed menu cards from Leeds, and customer support is available 24/7. Price and timing are confirmed on the quotation, not on this page.",
        subsections: [
          {
            title: "What to include",
            content:
              "Name the format, the approximate size, the quantity and whether you have artwork. Say if it is for the table, the counter or a handout. Attach the logo and the dish list.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is a custom restaurant menu card?",
        answer:
          "It is a printed card, folded leaflet or set of pages that lists what you sell. It is not a carton for the food. Format, size and print are confirmed on the quotation.",
      },
      {
        question: "Do these pictures show Axis Packaging stock?",
        answer:
          "No. The gallery shows illustrative concepts with fictional names. The card you can order is the size, format and artwork confirmed on your quotation.",
      },
      {
        question: "Can you print a single sheet, a folded leaflet and a multi-page menu?",
        answer:
          "Ask for the format you need, or ask for more than one to be quoted. The quotation confirms which structure can be supplied.",
      },
      {
        question: "Which paper weight should I choose?",
        answer:
          "Do not guess a weight from this page. Describe where the card is used and how long it should last. The material is named on the quotation.",
      },
      {
        question: "Can the menu include our logo and brand colours?",
        answer:
          "Yes, when you supply artwork you are allowed to print. Say which colours matter most. A special ink or a foil is included only if the quotation says so.",
      },
      {
        question: "What should I send with the artwork?",
        answer:
          "Send the logo, the dish list, the prices and any allergen wording you want printed. A clear written list is enough to start. A finished file helps if you already have one.",
      },
      {
        question: "Are menu cards the same as food packaging?",
        answer:
          "No. A menu describes the food. Trays, cartons, cups and bags are quoted separately. Mention them if you need them, so the menu job stays clear.",
      },
      {
        question: "Will a new menu card increase sales by a set amount?",
        answer:
          "No figure is promised. A clear menu can make the offer easier to read. Whether people order more depends on the food and the service, which this page cannot know.",
      },
    ],
  },
];

export const PRODUCT_CATEGORIES = _PRODUCT_CATEGORIES.map((product) =>
  PRODUCT_ENRICHMENTS[product.slug]
    ? { ...product, ...PRODUCT_ENRICHMENTS[product.slug] }
    : product
);

export const TRUST_INDICATORS = [
  { text: "24h Quote Response", icon: "⭐" },
  { text: "Premium Quality Packaging", icon: "🏆" },
  { text: "24/7 Customer Support", icon: "📞" },
  { text: "Quotation Support", icon: "🎨" },
];

const _INDUSTRIES = [
  {
    name: "Apparel",
    description: "Pair your apparel with one-of-a-kind custom printed clothing boxes. Enhance brand appeal with premium fashion packaging.",
    icon: "👕",
    image: "/assets/packify-fashion-packaging.jpg",
    slug: "apparel",
    metaTitle: "Buy Apparel Packaging Boxes - Custom Clothing Solutions",
    metaDescription: "Pair your apparel with one-of-a-kind custom printed clothing boxes. Enhance brand appeal with premium fashion packaging.",
    h1: "Custom Apparel Packaging Boxes for Fashion Brands",
  },
  {
    name: "Bakery & Cake",
    description: "Show off your baked goods with personalized cake and bakery boxes. Food-safe, durable, and custom-designed for freshness.",
    icon: "🍰",
    image: "/assets/packify-food-packaging.jpg",
    slug: "bakery-cake",
    metaTitle: "Buy Bakery & Cake Packaging - Custom Boxes - Axis Packaging",
    metaDescription: "Show off your baked goods with personalized cake and bakery boxes. Food-safe, durable, and custom-designed for freshness.",
    h1: "Custom Bakery & Cake Packaging Solutions",
  },
  {
    name: "Beer & Liquor",
    description: "Premium packaging for alcoholic beverages. Custom-designed boxes for beer and liquor that ensure safe transport and brand presence.",
    icon: "🍺",
    image: "/assets/custom-blue-box.jpg",
    slug: "beer-liquor",
    metaTitle: "Buy Beer & Liquor Packaging - Premium Solutions - Axis Packaging",
    metaDescription: "Premium packaging for alcoholic beverages. Custom-designed boxes for beer and liquor that ensure safe transport and brand presence.",
    h1: "Premium Beer & Liquor Packaging Solutions",
  },
  {
    name: "Beverage",
    description: "Custom packaging for all types of beverages. From cans to bottles, we provide high-quality solutions that protect and present your drink brands.",
    icon: "🥤",
    image: "/assets/packify-food-containers.jpg",
    slug: "beverage",
    metaTitle: "Buy Beverage Packaging Solutions - Custom Designs - Axis Packaging",
    metaDescription: "Custom packaging for all types of beverages. From cans to bottles, we provide high-quality solutions that protect and present your drink brands.",
    h1: "Custom Beverage Packaging Solutions",
  },
  {
    name: "Candle",
    description: "Elegant packaging for candle products. Custom printed candle boxes with luxury finishes and protective inserts.",
    icon: "🕯️",
    image: "/assets/packify-cosmetics-packaging.jpg",
    slug: "candle",
    metaTitle: "Buy Custom Candle Packaging - Elegant Boxes - Axis Packaging",
    metaDescription: "Elegant packaging for candle products. Custom printed candle boxes with luxury finishes and protective inserts.",
    h1: "Elegant Custom Candle Packaging Solutions",
  },
  {
    name: "Candy & Sweets",
    description: "Sweet packaging solutions for confectionery. Custom candy boxes and packaging that attract customers and keep treats fresh.",
    icon: "🍬",
    image: "/assets/packify-chocolate-packaging.jpg",
    slug: "candy-sweets",
    metaTitle: "Buy Candy & Sweets Packaging - Custom Designs - Axis Packaging",
    metaDescription: "Sweet packaging solutions for confectionery. Custom candy boxes and packaging that attract customers and keep treats fresh.",
    h1: "Custom Candy & Sweets Packaging Solutions",
  },
  {
    name: "Cannabis",
    description: "Custom-crafted tamper proof marijuana packaging. Compliant, secure, and brand-focused solutions for the cannabis industry.",
    icon: "🌿",
    image: "/assets/packify-cannabis-packaging.jpg",
    slug: "cannabis",
    metaTitle: "Buy Cannabis Packaging - Tamper Proof Solutions - Axis Packaging",
    metaDescription: "Custom-crafted tamper proof marijuana packaging. Compliant, secure, and brand-focused solutions for the cannabis industry.",
    h1: "Compliant & Secure Cannabis Packaging Solutions",
  },
  {
    name: "Chocolate",
    description: "Premium custom chocolate boxes and packaging. Elegant designs and food-safe materials to showcase your luxury chocolates.",
    icon: "🍫",
    image: "/assets/packify-chocolate-packaging.jpg",
    slug: "chocolate",
    metaTitle: "Buy Custom Chocolate Boxes - Premium Packaging - Axis Packaging",
    metaDescription: "Premium custom chocolate boxes and packaging. Elegant designs and food-safe materials to showcase your luxury chocolates.",
    h1: "Premium Custom Chocolate Packaging Solutions",
  },
  {
    name: "Coffee",
    description: "Packaging solutions for coffee products. Custom bags and boxes that maintain freshness and highlight your brand's unique flavor.",
    icon: "☕",
    image: "/assets/packify-food-containers.jpg",
    slug: "coffee",
    metaTitle: "Buy Coffee Packaging Solutions - Custom Designs - Axis Packaging",
    metaDescription: "Packaging solutions for coffee products. Custom bags and boxes that maintain freshness and highlight your brand's unique flavor.",
    h1: "Custom Coffee Packaging Solutions for Freshness",
  },
  {
    name: "Cosmetics",
    description: "Custom printed cosmetic boxes and packaging. Luxury finishes and brand-focused designs for all your beauty products.",
    icon: "💄",
    image: "/assets/packify-cosmetics-packaging.jpg",
    slug: "cosmetics",
    metaTitle: "Buy Cosmetics Packaging - Custom Printed Boxes - Axis Packaging",
    metaDescription: "Custom printed cosmetic boxes and packaging. Luxury finishes and brand-focused designs for all your beauty products.",
    h1: "Custom Cosmetics Packaging Solutions for Beauty Brands",
  },
  {
    name: "E-Commerce",
    description: "Packaging solutions for online businesses. Durable shipping boxes and mailers designed for the rigors of e-commerce delivery.",
    icon: "🛒",
    image: "/assets/e-commerce.jpg",
    slug: "ecommerce",
    metaTitle: "Buy E-Commerce Packaging - Secure Solutions - Axis Packaging",
    metaDescription: "Packaging solutions for online businesses. Durable shipping boxes and mailers designed for the rigors of e-commerce delivery.",
    h1: "Durable E-Commerce Packaging Solutions for Online Retail",
  },
  {
    name: "Electronics",
    description: "Protective packaging for electronic devices. Custom-designed solutions to prevent damage and ensure safe delivery of sensitive electronics.",
    icon: "📱",
    image: "/assets/packify-electronics-packaging.jpg",
    slug: "electronics",
    metaTitle: "Buy Electronics Packaging - Custom Protective - Axis Packaging",
    metaDescription: "Protective packaging for electronic devices. Custom-designed solutions to prevent damage and ensure safe delivery of sensitive electronics.",
    h1: "Protective Electronics Packaging Solutions",
  },
  {
    name: "Food",
    description: "Food packaging solutions. Custom designs to keep food products secure and appetizing.",
    icon: "🍽️",
    image: "/assets/packify-food-packaging.jpg",
    slug: "food",
    metaTitle: "Buy Food Packaging Solutions - Safe & Compliant - Axis Packaging",
    metaDescription: "Food packaging solutions. Custom designs to keep food products secure and appetizing.",
    h1: "Safe & Compliant Custom Food Packaging Solutions",
  },
  {
    name: "Gift",
    description: "Beautiful packaging for gift items. Custom gift boxes and wrapping solutions that make every occasion extra special.",
    icon: "🎁",
    image: "/assets/packify-luxury-boxes.jpg",
    slug: "gift",
    metaTitle: "Buy Gift Packaging - Beautiful & Custom - Axis Packaging",
    metaDescription: "Beautiful packaging for gift items. Custom gift boxes and wrapping solutions that make every occasion extra special.",
    h1: "Beautiful & Custom Gift Packaging Solutions",
  },
  {
    name: "Jewelry",
    description: "Luxury packaging for jewelry and accessories. Custom-designed boxes and displays that reflect the elegance of your pieces.",
    icon: "💍",
    image: "/assets/luxury-cosmetic-boxes.jpg",
    slug: "jewelry",
    metaTitle: "Buy Jewelry Packaging - Luxury Solutions - Axis Packaging",
    metaDescription: "Luxury packaging for jewelry and accessories. Custom-designed boxes and displays that reflect the elegance of your pieces.",
    h1: "Luxury Jewelry Packaging Solutions",
  },
  {
    name: "Pets",
    description: "Packaging for pet products and supplies. Custom-designed boxes and bags for pet food, toys, and grooming items.",
    icon: "🐾",
    image: "/assets/assorted-food-containers.jpg",
    slug: "pets",
    metaTitle: "Buy Pet Product Packaging - Custom Solutions - Axis Packaging",
    metaDescription: "Packaging for pet products and supplies. Custom-designed boxes and bags for pet food, toys, and grooming items.",
    h1: "Custom Pet Product Packaging Solutions",
  },
  {
    name: "Pharmaceutical",
    description: "Compliant packaging for pharmaceutical products. Safe, secure, and meeting all industry standards for medical and health supplies.",
    icon: "💊",
    image: "/assets/packify-pharmaceutical.jpg",
    slug: "pharmaceutical",
    metaTitle: "Buy Pharmaceutical Packaging - Compliant - Axis Packaging",
    metaDescription: "Compliant packaging for pharmaceutical products. Safe, secure, and meeting all industry standards for medical and health supplies.",
    h1: "Compliant Pharmaceutical Packaging Solutions",
  },
  {
    name: "Presentation",
    description: "Professional presentation packaging. Custom-designed boxes and folders that showcase your brand and products with elegance.",
    icon: "📊",
    image: "/assets/packify-retail-boxes.jpg",
    slug: "presentation",
    metaTitle: "Buy Presentation Packaging - Professional - Axis Packaging",
    metaDescription: "Professional presentation packaging. Custom-designed boxes and folders that showcase your brand and products with elegance.",
    h1: "Professional Presentation Packaging Solutions",
  },
  {
    name: "Restaurant",
    description: "Packaging for restaurant and food service. Custom-designed takeout boxes and bags that represent your brand and keep food fresh.",
    icon: "🍽️",
    image: "/assets/packify-food-packaging.jpg",
    slug: "restaurant",
    metaTitle: "Buy Restaurant Packaging - Custom Solutions - Axis Packaging",
    metaDescription: "Packaging for restaurant and food service. Custom-designed takeout boxes and bags that represent your brand and keep food fresh.",
    h1: "Custom Restaurant Packaging Solutions for Food Service",
  },
  {
    name: "Retail",
    description: "Eye-catching retail displays and packaging. Stand out on the shelf with our custom-designed retail packaging solutions.",
    icon: "🏪",
    image: "/assets/packify-retail-packaging.jpg",
    slug: "retail",
    metaTitle: "Buy Retail Packaging - Eye-Catching Designs - Axis Packaging",
    metaDescription: "Eye-catching retail displays and packaging. Stand out on the shelf with our custom-designed retail packaging solutions.",
    h1: "Eye-Catching Retail Packaging & Display Solutions",
  },
  {
    name: "Shipping",
    description: "Secure shipping and mailer solutions. Durable custom boxes designed for logistics and safe delivery of your products.",
    icon: "📦",
    image: "/assets/packify-shipping-boxes.png",
    slug: "shipping",
    metaTitle: "Buy Shipping Packaging - Secure Solutions - Axis Packaging",
    metaDescription: "Secure shipping and mailer solutions. Durable custom boxes designed for logistics and safe delivery of your products.",
    h1: "Secure Shipping & Mailer Packaging Solutions",
  },
  {
    name: "Soap",
    description: "Packaging for soap and personal care products. Custom printed soap boxes that highlight your brand's unique fragrance and style.",
    icon: "🧼",
    image: "/assets/packify-cosmetics-packaging.jpg",
    slug: "soap",
    metaTitle: "Buy Soap Packaging - Custom Designs - Axis Packaging",
    metaDescription: "Packaging for soap and personal care products. Custom printed soap boxes that highlight your brand's unique fragrance and style.",
    h1: "Custom Soap & Personal Care Packaging Solutions",
  },
  {
    name: "Toy",
    description: "Fun and safe packaging for toys. Custom-designed boxes that attract kids and meet all safety requirements for toy brands.",
    icon: "🧸",
    image: "/assets/packify-retail-boxes.jpg",
    slug: "toy",
    metaTitle: "Buy Toy Packaging - Safe & Fun Designs - Axis Packaging",
    metaDescription: "Fun and safe packaging for toys. Custom-designed boxes that attract kids and meet all safety requirements for toy brands.",
    h1: "Safe & Fun Custom Toy Packaging Solutions",
  },
  {
    name: "Tea",
    description: "Elegant packaging for tea products. Custom bags and boxes that preserve flavor and provide a premium experience for tea drinkers.",
    icon: "🫖",
    image: "/assets/packify-food-containers.jpg",
    slug: "tea",
    metaTitle: "Buy Tea Packaging - Elegant Solutions - Axis Packaging",
    metaDescription: "Elegant packaging for tea products. Custom bags and boxes that preserve flavor and provide a premium experience for tea drinkers.",
    h1: "Elegant Custom Tea Packaging Solutions",
  },
  {
    name: "Wine",
    description: "Premium packaging for wine and spirits. Custom-designed boxes and displays that reflect the luxury and quality of your brand.",
    icon: "🍷",
    image: "/assets/custom-blue-box.jpg",
    slug: "wine",
    metaTitle: "Buy Wine Packaging - Premium Solutions - Axis Packaging",
    metaDescription: "Premium packaging for wine and spirits. Custom-designed boxes and displays that reflect the luxury and quality of your brand.",
    h1: "Premium Wine & Spirit Packaging Solutions",
  },
];

export const INDUSTRIES = _INDUSTRIES.map((industry) => {
  const extra = INDUSTRY_PAGE_CONTENT[industry.slug];
  return extra ? { ...industry, ...extra } : industry;
});

export const CORRUGATED_STYLES = [
  {
    name: "Single Wall Corrugated",
    description: "Standard corrugated boxes with one layer of fluting",
    image: "/assets/packify-corrugated-boxes.png",
    slug: "single-wall",
  },
  {
    name: "Double Wall Corrugated",
    description: "Heavy-duty boxes with two layers of fluting for extra strength",
    image: "/assets/packify-custom-boxes.jpg",
    slug: "double-wall",
  },
  {
    name: "Triple Wall Corrugated",
    description: "Maximum strength boxes with three layers of fluting",
    image: "/assets/packify-shipping-boxes.png",
    slug: "triple-wall",
  },
  {
    name: "Die Cut Corrugated",
    description: "Custom shaped corrugated boxes for unique packaging needs",
    image: "/assets/packify-display-boxes.png",
    slug: "die-cut",
  },
];

export const CORRUGATED_OPTIONS = [
  {
    name: "E-Flute",
    description: "Thin, smooth surface perfect for printing",
    image: "/assets/packify-custom-boxes.jpg",
    slug: "e-flute",
  },
  {
    name: "B-Flute",
    description: "Good cushioning and compression resistance",
    image: "/assets/packify-corrugated-boxes.png",
    slug: "b-flute",
  },
  {
    name: "C-Flute",
    description: "Most common, excellent all-around performance",
    image: "/assets/packify-shipping-boxes.png",
    slug: "c-flute",
  },
  {
    name: "BC-Flute",
    description: "Double wall combination for maximum strength",
    image: "/assets/packify-custom-boxes.jpg",
    slug: "bc-flute",
  },
];

export const CORRUGATED_INSPIRATIONS = [
  {
    name: "Retail Display Boxes",
    description: "Eye-catching displays for retail environments",
    image: "/assets/packify-display-boxes.png",
    slug: "retail-displays",
  },
  {
    name: "Shipping Solutions",
    description: "Durable shipping boxes for e-commerce",
    image: "/assets/packify-shipping-boxes.png",
    slug: "shipping-solutions",
  },
  {
    name: "Product Packaging",
    description: "Custom product packaging with branding",
    image: "/assets/packify-custom-boxes.jpg",
    slug: "product-packaging",
  },
  {
    name: "Point of Purchase",
    description: "POP displays for in-store marketing",
    image: "/assets/packify-display-packaging.png",
    slug: "pop-displays",
  },
];

export const PACKAGING_SERVICES = [
  {
    name: "Pack size",
    description: "Tell us the product and the size. The quotation confirms the pack.",
    image: "/assets/packify-custom-boxes.jpg",
    slug: "pack-size",
  },
  {
    name: "Print",
    description: "Tell us the artwork you already have. The print is confirmed on the quotation.",
    image: "/assets/packify-cosmetic-boxes.jpg",
    slug: "print",
  },
  {
    name: "Quantity",
    description: "Tell us how many packs you need. The quantity is confirmed on the quotation.",
    image: "/assets/packify-custom-boxes.jpg",
    slug: "quantity",
  },
  {
    name: "Quotation",
    description: "Materials, print and timing are confirmed on the quotation.",
    image: "/assets/packify-custom-boxes.jpg",
    slug: "quotation",
  },
];

export const CERTIFICATIONS = [
  "24h Quote Response",
  "24/7 Customer Support",
  "Premium Quality Packaging",
  "Quotation Support",
];
