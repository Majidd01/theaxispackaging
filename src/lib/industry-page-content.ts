/**
 * Unique copy for industry pages that previously shared one short template.
 * Product links point at existing catalogue pages. No compliance or certification claims.
 */
import { INDUSTRY_PAGE_EXAMPLES } from "./thin-page-examples";
type Section = {
  title: string;
  intro?: string;
  subsections?: { title: string; content: string }[];
  bullets?: string[];
};

type IndustryCopy = {
  description: string;
  metaDescription: string;
  productsIntro: string;
  relatedProductSlugs: string[];
  internalLinks: { phrase: string; href: string }[];
  contentSections: Section[];
};

const INDUSTRY_PAGES: Record<string, IndustryCopy> = {
  apparel: {
    description:
      "Apparel packaging for UK clothing, shoe and accessory brands covers the box or bag a customer carries from a shop and the mailer used for an online order. Tell Axis Packaging the garment and whether the pack is handed over or posted.",
    metaDescription:
      "Apparel packaging for UK clothing and shoe brands. Boxes, mailers and paper bags, with size, print and quantity confirmed on your quotation.",
    productsIntro: "These existing products can be quoted for clothing, shoes and accessories.",
    relatedProductSlugs: ["apparel-packaging", "mailer-boxes", "paper-bags", "stickers-labels"],
    internalLinks: [
      { phrase: "apparel packaging boxes", href: "/products/apparel-packaging" },
      { phrase: "mailer boxes", href: "/products/mailer-boxes" },
      { phrase: "paper shopping bags", href: "/products/paper-bags" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "How clothing brands use packaging",
        intro:
          "A folded shirt, a pair of shoes and a small accessory should not share one assumed carton. Shops need a pack the customer can carry. Online orders need a pack a courier can handle.",
        subsections: [
          {
            title: "Boutiques and department stores",
            content:
              "The pack on the counter is often a printed box or a paper shopping bag with the shop name. Apparel packaging boxes are the related catalogue page when the garment needs its own carton.",
          },
          {
            title: "Posted fashion orders",
            content:
              "Mailer boxes are the usual starting point for a garment posted to a customer. Say whether tissue, a label or a printed face is required. Those details are confirmed on the quotation.",
          },
        ],
      },
      {
        title: "What to include in an apparel quotation",
        intro:
          "Request a quotation with the garment and the sales channel. Axis Packaging confirms the specification, quantity and timing in the reply. Quotation requests receive a 24h quote response.",
        bullets: [
          "The item, such as knitwear, shoes or an accessory",
          "Whether you need a box, a bag, or both",
          "The quantity and the approximate size",
          "The logo or size text that must be printed",
        ],
      },
    ],
  },
  "bakery-cake": {
    description:
      "Bakery and cake packaging helps UK bakeries and cafés hand over cakes, cupcakes and pastries without crushing the decoration. Tell Axis Packaging the bake and any food-contact requirement you need confirmed. This page does not publish a food-contact certificate.",
    metaDescription:
      "Bakery and cake packaging for UK bakeries and cafés. Tell us the bake and any food-contact need so the box can be confirmed on your quotation.",
    productsIntro: "These products can be quoted for cakes, pastries and bakery counters.",
    relatedProductSlugs: ["bakery-boxes", "food-containers", "food-trays", "greaseproof-paper"],
    internalLinks: [
      { phrase: "bakery and cake boxes", href: "/products/bakery-boxes" },
      { phrase: "food and drink containers", href: "/products/food-containers" },
      { phrase: "greaseproof paper", href: "/products/greaseproof-paper" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Packs bakeries actually ask for",
        intro:
          "A celebration cake needs height. A bag of cookies needs a closed pack. A counter pastry may only need a sheet between layers. Describe the bake before a style is chosen.",
        subsections: [
          {
            title: "Cakes and cupcakes",
            content:
              "Bakery and cake boxes are the catalogue page for whole cakes and portion packs. Say the diameter or the number of portions if you know it.",
          },
          {
            title: "Counter service",
            content:
              "Greaseproof paper is quoted when a bake needs a sheet rather than a box. Food and drink containers cover products that are not cakes. Any food-contact requirement is confirmed on the quotation.",
          },
        ],
      },
      {
        title: "What a bakery quotation needs",
        intro:
          "Request a quotation with the bake, not a certificate name. The reply confirms the pack, the quantity and the timing. Quotation requests receive a 24h quote response.",
        bullets: [
          "The bake and whether it is iced or fragile",
          "Collection, counter sale, or delivery",
          "The quantity and the size",
          "The shop name to print, if any",
        ],
      },
    ],
  },
  "beer-liquor": {
    description:
      "Beer and liquor packaging covers carriers and gift packs for UK retailers, venues and brands. A single gift bottle and a pack of several bottles are different enquiries. Bottle size, quantity and print are confirmed on your quotation.",
    metaDescription:
      "Beer and liquor packaging for UK retailers and venues. Share the bottle size, pack count and print so Axis Packaging can confirm the box on your quotation.",
    productsIntro: "These products can be quoted for bottles, carriers and gift packs.",
    relatedProductSlugs: ["wine-boxes", "corrugated-shipping", "gift-boxes", "stickers-labels"],
    internalLinks: [
      { phrase: "wine and liquor boxes", href: "/products/wine-boxes" },
      { phrase: "corrugated shipping boxes", href: "/products/corrugated-shipping" },
      { phrase: "gift boxes", href: "/products/gift-boxes" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "How drinks brands pack bottles",
        intro:
          "Say whether the customer carries the pack from a shop or a courier moves it. This page does not publish a bottle-carry rating.",
        subsections: [
          {
            title: "Gift and retail bottles",
            content:
              "Wine and liquor boxes are the related catalogue page for printed bottle packs. Gift boxes suit a bottle sold inside a wider hamper.",
          },
          {
            title: "Trade outers",
            content:
              "Several bottles moving to a venue or a warehouse are usually quoted as corrugated shipping boxes. Include the bottle size and the count per carton.",
          },
        ],
      },
      {
        title: "Details for a beer or liquor quotation",
        intro:
          "Request a quotation with the liquid and the bottle. Specification, quantity and timing are confirmed in the reply. Quotation requests receive a 24h quote response.",
        bullets: [
          "Beer, cider, spirits, or a mixed gift",
          "Bottle size and how many bottles are in one pack",
          "Shop carry, courier, or both",
          "The brand text that must be printed",
        ],
      },
    ],
  },
  beverage: {
    description:
      "Beverage packaging for UK drink brands covers cups, carriers and outer cartons for cans and bottles. Tell Axis Packaging the drink format and whether the pack is used at a counter or sent to a retailer.",
    metaDescription:
      "Beverage packaging for UK drink brands. Cups, carriers and outer cartons, with format, quantity and print confirmed on your Axis Packaging quotation.",
    productsIntro: "These products can be quoted for cups, bottles, cans and wholesale outers.",
    relatedProductSlugs: ["paper-cups", "food-containers", "corrugated-shipping", "stickers-labels"],
    internalLinks: [
      { phrase: "paper cups", href: "/products/paper-cups" },
      { phrase: "food and drink containers", href: "/products/food-containers" },
      { phrase: "corrugated shipping boxes", href: "/products/corrugated-shipping" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Drink packs to describe on the enquiry",
        intro:
          "A takeaway cup, a retail multipack and a posted case are not one product. Name the format first.",
        subsections: [
          {
            title: "Counters and cafés",
            content:
              "Paper cups are quoted for drinks served in the cup. Food and drink containers cover packs that hold a drink or a related product for sale.",
          },
          {
            title: "Cans, bottles and wholesale",
            content:
              "Outer cartons for cans and bottles are usually quoted as corrugated shipping boxes. Say the count per case and whether the case is printed.",
          },
        ],
      },
      {
        title: "What to include in a beverage quotation",
        intro:
          "Request a quotation with the drink format. The reply confirms the pack, the quantity and the timing. Quotation requests receive a 24h quote response.",
        bullets: [
          "Cup, bottle, can, or multipack",
          "Served on site, sold from a shelf, or delivered",
          "The quantity and the size",
          "Any wording that must be printed",
        ],
      },
    ],
  },
  candle: {
    description:
      "Candle packaging for UK makers and retailers is the box or carton around a jar, pillar or gift set. Tell Axis Packaging the candle type and whether the pack is for a shelf, a gift, or a postal order.",
    metaDescription:
      "Candle packaging for UK candle makers and retailers. Jars, pillars and gift sets, with size, print and quantity confirmed on your quotation.",
    productsIntro: "These products can be quoted for jar candles, pillars and fragrance sets.",
    relatedProductSlugs: ["candle-boxes", "rigid-boxes", "kraft-boxes", "box-inserts"],
    internalLinks: [
      { phrase: "candle and fragrance boxes", href: "/products/candle-boxes" },
      { phrase: "rigid boxes", href: "/products/rigid-boxes" },
      { phrase: "printed kraft boxes", href: "/products/kraft-boxes" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Candle ranges that need their own pack",
        intro:
          "A glass jar and a wax melt set do not fit the same carton. Describe the vessel and whether the customer posts it or carries it.",
        subsections: [
          {
            title: "Retail jars and pillars",
            content:
              "Candle and fragrance boxes are the catalogue page for printed candle cartons. Printed kraft boxes are a related option when the brand wants a plainer board face.",
          },
          {
            title: "Gift sets",
            content:
              "Rigid boxes suit a set that should feel firmer when it is opened. Box inserts can be quoted if a jar needs to sit still inside the outer box.",
          },
        ],
      },
      {
        title: "Details for a candle quotation",
        intro:
          "Request a quotation with the candle, not a finish name copied from another brand. Specification, quantity and timing are confirmed in the reply. Quotation requests receive a 24h quote response.",
        bullets: [
          "Jar, pillar, melt, or a set",
          "The vessel size",
          "Shelf, gift, or postal sale",
          "The scent name or artwork to print",
        ],
      },
    ],
  },
  "candy-sweets": {
    description:
      "Candy and sweets packaging helps UK confectionery brands and shops present bags, bars and gift selections. Tell Axis Packaging the sweet and whether it is a single retail unit or a gift assortment.",
    metaDescription:
      "Candy and sweets packaging for UK confectionery brands. Single packs and gift assortments, with size, print and quantity confirmed on your quotation.",
    productsIntro: "These products can be quoted for bars, bags and sweet gift packs.",
    relatedProductSlugs: ["folding-carton-boxes", "gift-boxes", "kraft-boxes", "stickers-labels"],
    internalLinks: [
      { phrase: "folding carton boxes", href: "/products/folding-carton-boxes" },
      { phrase: "gift boxes", href: "/products/gift-boxes" },
      { phrase: "printed kraft boxes", href: "/products/kraft-boxes" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Confectionery packs to specify",
        intro:
          "A countline on a shelf and a hamper of mixed sweets need different cartons. Say if the sweet is already in a wrapper and the carton is only the outer.",
        subsections: [
          {
            title: "Everyday retail units",
            content:
              "Folding carton boxes are the usual quote for a branded outer around a bar, a bag or a small selection. Printed kraft boxes suit brands that want a plainer face.",
          },
          {
            title: "Gift assortments",
            content:
              "Gift boxes are the related page when the sweets are sold as a present. Labels can separate flavours that share one carton style.",
          },
        ],
      },
      {
        title: "What a confectionery quotation needs",
        intro:
          "Request a quotation and name the sweet. Any food-contact requirement should be stated so it can be confirmed. Quotation requests receive a 24h quote response.",
        bullets: [
          "The sweet and whether it is already wrapped",
          "Single unit or assortment",
          "The quantity and the size",
          "The flavour names or artwork to print",
        ],
      },
    ],
  },
  cannabis: {
    description:
      "Cannabis packaging enquiries from UK businesses should name the product format and the text that must be printed. This page does not state a regulatory approval, a child-resistance rating, or a tamper feature. Those points are confirmed only if they are agreed on your quotation.",
    metaDescription:
      "Cannabis packaging enquiries for UK businesses. Describe the product and the text you must print. Approvals are not stated on this page and are confirmed only on a quotation.",
    productsIntro: "These catalogue products can be discussed once you have described the format.",
    relatedProductSlugs: ["folding-carton-boxes", "rigid-boxes", "stickers-labels", "corrugated-shipping"],
    internalLinks: [
      { phrase: "folding carton boxes", href: "/products/folding-carton-boxes" },
      { phrase: "rigid boxes", href: "/products/rigid-boxes" },
      { phrase: "stickers and labels", href: "/products/stickers-labels" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "How to describe the pack you need",
        intro:
          "Use the product format you actually sell. A printed carton, a stiffer gift-style box and an outer shipper are separate lines on a quotation.",
        subsections: [
          {
            title: "Retail cartons and labels",
            content:
              "Folding carton boxes and stickers and labels are the related pages when the job is a printed retail unit. Send the wording you must show.",
          },
          {
            title: "Stiffer packs and outers",
            content:
              "Rigid boxes can be quoted for a presentation pack. Corrugated outers are quoted when several units travel together. Neither page states a compliance feature.",
          },
        ],
      },
      {
        title: "What to send with the quotation",
        intro:
          "Request a quotation and include the text your customer requires. Axis Packaging will confirm what can be supplied, the quantity and the timing. Quotation requests receive a 24h quote response.",
        bullets: [
          "The product format in your own words",
          "The wording that must be printed",
          "The quantity and the pack size",
          "Whether you also need an outer carton",
        ],
      },
    ],
  },
  chocolate: {
    description:
      "Chocolate packaging for UK makers and retailers covers cartons for bars, selections and seasonal gifts. Tell Axis Packaging the chocolate format and whether the carton is the retail pack or a gift outer.",
    metaDescription:
      "Chocolate packaging for UK makers and retailers. Bars, selections and seasonal gifts, with size, print and quantity confirmed on your quotation.",
    productsIntro: "These products can be quoted for bars, selections and chocolate gifts.",
    relatedProductSlugs: ["folding-carton-boxes", "gift-boxes", "rigid-boxes", "kraft-boxes"],
    internalLinks: [
      { phrase: "folding carton boxes", href: "/products/folding-carton-boxes" },
      { phrase: "gift boxes", href: "/products/gift-boxes" },
      { phrase: "rigid boxes", href: "/products/rigid-boxes" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Chocolate formats to name on the enquiry",
        intro:
          "A tablet, a box of pralines and a seasonal selection need different inners. Say if the chocolate is already wrapped.",
        subsections: [
          {
            title: "Bars and everyday selections",
            content:
              "Folding carton boxes are the usual quote for a retail chocolate carton. Printed kraft styles can be discussed when you want a plainer board.",
          },
          {
            title: "Gifts and seasonal sets",
            content:
              "Gift boxes and rigid boxes suit selections that are given as a present. Any food-contact requirement should be written on the quotation so it can be confirmed.",
          },
        ],
      },
      {
        title: "Details for a chocolate quotation",
        intro:
          "Request a quotation with the selection and the season if the artwork changes. The reply confirms the pack, the quantity and the timing. Quotation requests receive a 24h quote response.",
        bullets: [
          "Bar, praline selection, or seasonal gift",
          "The quantity and the tray count, if there is one",
          "The size of the selection",
          "The brand and flavour text to print",
        ],
      },
    ],
  },
  coffee: {
    description:
      "Coffee packaging for UK roasters and cafés includes bags, tins and cartons for retail bags and gifts. Tell Axis Packaging whether the coffee is a retail pack, a café supply, or a gift, and how you want the name printed.",
    metaDescription:
      "Coffee packaging for UK roasters and cafés. Bags, tins and cartons, with format, quantity and print confirmed on your Axis Packaging quotation.",
    productsIntro: "These products can be quoted for retail coffee, café supply and gifts.",
    relatedProductSlugs: ["flexible-pouches", "tin-containers", "kraft-boxes", "stickers-labels"],
    internalLinks: [
      { phrase: "flexible packaging pouches", href: "/products/flexible-pouches" },
      { phrase: "metal tin containers", href: "/products/tin-containers" },
      { phrase: "printed kraft boxes", href: "/products/kraft-boxes" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Coffee packs roasters usually enquire about",
        intro:
          "A 250 gram retail bag and a gift tin are different jobs. This page does not publish a valve, a barrier, or a freshness claim.",
        subsections: [
          {
            title: "Retail bags and cartons",
            content:
              "Flexible packaging pouches are the related page for bag-style packs. Printed kraft boxes can be quoted when the bag sits inside a carton for gifting or a shelf.",
          },
          {
            title: "Tins and café supply",
            content:
              "Metal tin containers are the related page when the coffee is packed in a tin. Labels can carry the roast name when the container is shared across coffees.",
          },
        ],
      },
      {
        title: "What a coffee quotation should include",
        intro:
          "Request a quotation with the format and the fill weight if you know it. Specification, quantity and timing are confirmed in the reply. Quotation requests receive a 24h quote response.",
        bullets: [
          "Bag, tin, carton, or a combination",
          "Retail, café supply, or gift",
          "The quantity and the fill size",
          "The roast names that must be printed",
        ],
      },
    ],
  },
  cosmetics: {
    description:
      "Cosmetics packaging for UK beauty brands, salons and retailers covers cartons for jars, tubes, palettes and sets. Tell Axis Packaging the container and whether the box is for a shelf, a salon, or an online order.",
    metaDescription:
      "Cosmetics packaging for UK beauty brands and salons. Jars, tubes, palettes and sets, with size, print and quantity confirmed on your quotation.",
    productsIntro: "These products can be quoted for single beauty items and sets.",
    relatedProductSlugs: ["cosmetic-boxes", "rigid-boxes", "stickers-labels", "box-inserts"],
    internalLinks: [
      { phrase: "cosmetic boxes", href: "/products/cosmetic-boxes" },
      { phrase: "rigid boxes", href: "/products/rigid-boxes" },
      { phrase: "stickers and labels", href: "/products/stickers-labels" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Beauty products to name in the enquiry",
        intro:
          "A serum jar and a ten-piece set do not share a carton. Describe the container and the shade range.",
        subsections: [
          {
            title: "Single products",
            content:
              "Cosmetic boxes are the catalogue page for individual beauty cartons. Stickers and labels help when one carton is used for more than one shade.",
          },
          {
            title: "Sets",
            content:
              "Rigid boxes suit a kit that should close firmly. Box inserts can be quoted when several pieces must stay apart inside the set.",
          },
        ],
      },
      {
        title: "What to include in a cosmetics quotation",
        intro:
          "Request a quotation with the container size and the wording. The reply confirms the pack, the quantity and the timing. Quotation requests receive a 24h quote response.",
        bullets: [
          "Jar, tube, palette, or set",
          "The container size",
          "Shelf, salon, or online sale",
          "Shade names and artwork",
        ],
      },
    ],
  },
  ecommerce: {
    description:
      "E-commerce packaging for UK online shops covers the mailer or outer carton a customer receives and the branded insert or tissue that finishes the order. Tell Axis Packaging what you ship and how often.",
    metaDescription:
      "E-commerce packaging for UK online shops. Mailers, outer cartons and subscription kits, with size, print and quantity confirmed on your quotation.",
    productsIntro: "These products can be quoted for posted orders and repeat kits.",
    relatedProductSlugs: ["mailer-boxes", "mailer-bags", "corrugated-shipping", "subscription-boxes"],
    internalLinks: [
      { phrase: "mailer boxes", href: "/products/mailer-boxes" },
      { phrase: "printed mailer bags", href: "/products/mailer-bags" },
      { phrase: "subscription boxes", href: "/products/subscription-boxes" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Online orders these packs suit",
        intro:
          "A soft fashion parcel and a heavy multi-item order should be quoted separately. This page does not promise a courier approval.",
        subsections: [
          {
            title: "Single customer parcels",
            content:
              "Mailer boxes and printed mailer bags are the related pages for individual orders. Say whether the outside should show the brand or stay plain.",
          },
          {
            title: "Kits and heavier goods",
            content:
              "Subscription boxes suit a presented kit. Corrugated outers suit heavier or multi-item shipments. Describe the heaviest typical order.",
          },
        ],
      },
      {
        title: "Details for an e-commerce quotation",
        intro:
          "Request a quotation with a typical order, not an average across every product you sell. Specification, quantity and timing are confirmed in the reply. Quotation requests receive a 24h quote response.",
        bullets: [
          "What a typical parcel contains",
          "Mailer, bag, or outer carton",
          "The monthly quantity, if you know it",
          "Whether the outside is printed",
        ],
      },
    ],
  },
  electronics: {
    description:
      "Electronics packaging for UK brands and resellers covers retail cartons and outer shippers for devices, accessories and spare parts. Tell Axis Packaging the item and whether you need cushioning or static protection confirmed on the quotation.",
    metaDescription:
      "Electronics packaging for UK devices and accessories. Describe the item and any cushioning or static protection so it can be confirmed on your quotation.",
    productsIntro: "These products can be quoted for retail cartons, fitments and outer shippers.",
    relatedProductSlugs: ["electronics", "box-inserts", "corrugated-shipping", "mailer-boxes"],
    internalLinks: [
      { phrase: "electronics product packaging", href: "/products/electronics" },
      { phrase: "box inserts", href: "/products/box-inserts" },
      { phrase: "corrugated shipping boxes", href: "/products/corrugated-shipping" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Electronics enquiries to separate",
        intro:
          "A retail carton for an accessory is not the same enquiry as a spare part posted to an engineer. Protection is confirmed only when you ask for it.",
        subsections: [
          {
            title: "Retail accessories",
            content:
              "Electronics product packaging is the catalogue page for device and accessory cartons. Box inserts can be quoted when the item should sit in a fixed place.",
          },
          {
            title: "Posted and wholesale units",
            content:
              "Mailer boxes suit smaller posted units. Corrugated shipping boxes suit multiple units or heavier goods. Say if static protection has to be confirmed.",
          },
        ],
      },
      {
        title: "What an electronics quotation needs",
        intro:
          "Request a quotation with the device and the journey. The reply confirms the specification, quantity and timing. Quotation requests receive a 24h quote response.",
        bullets: [
          "The device or spare part",
          "Retail carton, postal pack, or outer shipper",
          "Whether cushioning or static protection must be confirmed",
          "The quantity, size and printed name",
        ],
      },
    ],
  },
  food: {
    description:
      "Food packaging enquiries for UK producers, shops and caterers should name the food and how it is sold. This page does not publish a food-contact certificate. Any food-contact requirement is confirmed on your quotation.",
    metaDescription:
      "Food packaging for UK producers, shops and caterers. Name the food and any food-contact requirement so Axis Packaging can confirm the pack on your quotation.",
    productsIntro: "These products can be quoted once the food and the sales channel are known.",
    relatedProductSlugs: ["food-containers", "bakery-boxes", "food-trays", "pizza-boxes"],
    internalLinks: [
      { phrase: "food and drink containers", href: "/products/food-containers" },
      { phrase: "bakery and cake boxes", href: "/products/bakery-boxes" },
      { phrase: "takeaway food trays", href: "/products/food-trays" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Food jobs to describe separately",
        intro:
          "A dry retail product, a cake and a hot counter meal do not use one pack. Say whether the food is packed in a factory, a shop, or a kitchen.",
        subsections: [
          {
            title: "Retail food",
            content:
              "Food and drink containers are the related page for food sold as a packaged product. Bakery and cake boxes cover baked goods.",
          },
          {
            title: "Service and takeaway",
            content:
              "Takeaway food trays suit meals handed over a counter. Pizza boxes are a separate catalogue page for that format. State if the food is hot.",
          },
        ],
      },
      {
        title: "What a food quotation must include",
        intro:
          "Request a quotation with the food and any food-contact requirement. The reply confirms what can be supplied, the quantity and the timing. Quotation requests receive a 24h quote response.",
        bullets: [
          "The food and whether it is hot, chilled or dry",
          "Retail pack or service pack",
          "The quantity and the portion size",
          "The wording that must be printed",
        ],
      },
    ],
  },
  gift: {
    description:
      "Gift packaging for UK retailers and companies covers the box a present is sold in and the tissue or insert that finishes it. Tell Axis Packaging the gift and whether it is handed over or posted.",
    metaDescription:
      "Gift packaging for UK retailers and companies. Presentation boxes, rigid boxes and tissue, with the gift, quantity and print confirmed on your quotation.",
    productsIntro: "These products can be quoted for retail gifts and corporate sets.",
    relatedProductSlugs: ["gift-boxes", "rigid-boxes", "tissue-paper", "jewelry-boxes"],
    internalLinks: [
      { phrase: "gift wrapping boxes", href: "/products/gift-boxes" },
      { phrase: "rigid boxes", href: "/products/rigid-boxes" },
      { phrase: "tissue paper", href: "/products/tissue-paper" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Gifts that change the pack",
        intro:
          "A candle gift, a jewellery piece and a corporate set of fifty should be quoted as the gifts they are. The occasion can change the print, not the need to describe the item.",
        subsections: [
          {
            title: "Retail presents",
            content:
              "Gift wrapping boxes are the catalogue page for presentation cartons. Rigid boxes suit gifts that should feel firmer when opened.",
          },
          {
            title: "Finishing and small pieces",
            content:
              "Tissue paper finishes many gift packs. Jewellery gift boxes are the related page when the gift is a ring, earrings or a necklace.",
          },
        ],
      },
      {
        title: "What to include in a gift quotation",
        intro:
          "Request a quotation with the gift and the handover. Specification, quantity and timing are confirmed in the reply. Quotation requests receive a 24h quote response.",
        bullets: [
          "What the gift is",
          "One item or a set",
          "Handed over or posted",
          "The message or logo to print",
        ],
      },
    ],
  },
  jewelry: {
    description:
      "Jewellery packaging for UK jewellers and gift retailers is the box used when a ring, earrings or a necklace is handed to a customer. Tell Axis Packaging the piece and whether the box is also posted.",
    metaDescription:
      "Jewellery packaging for UK jewellers. Presentation boxes for rings, earrings and necklaces, with size, print and quantity confirmed on your quotation.",
    productsIntro: "These products can be quoted for individual pieces and small jewellery sets.",
    relatedProductSlugs: ["jewelry-boxes", "rigid-boxes", "box-inserts", "gift-boxes"],
    internalLinks: [
      { phrase: "jewellery gift boxes", href: "/products/jewelry-boxes" },
      { phrase: "rigid boxes", href: "/products/rigid-boxes" },
      { phrase: "box inserts", href: "/products/box-inserts" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Pieces jewellers should describe",
        intro:
          "A ring box and a necklace gift are different sizes. This page does not list linings or board grades. Those are confirmed from the piece you describe.",
        subsections: [
          {
            title: "Counter handover",
            content:
              "Jewellery gift boxes are the catalogue page for individual presentation packs. Rigid boxes are the related choice when the pack should feel stiffer.",
          },
          {
            title: "Sets",
            content:
              "Box inserts can be quoted when more than one piece sits in the same gift. Gift boxes cover broader occasion packs that are not only jewellery.",
          },
        ],
      },
      {
        title: "Details for a jewellery quotation",
        intro:
          "Request a quotation with a photo if the shape is unusual. The reply confirms the box, the quantity and the timing. Quotation requests receive a 24h quote response.",
        bullets: [
          "Ring, earrings, necklace, or a set",
          "The approximate size of the piece",
          "Shop handover, postal gift, or both",
          "Whether the lid is printed",
        ],
      },
    ],
  },
  pets: {
    description:
      "Pet packaging for UK pet brands covers treats, toys, accessories and grooming products. If the product is eaten, say so. Any food-contact requirement is confirmed on your quotation rather than assumed on this page.",
    metaDescription:
      "Pet packaging for UK treats, toys and grooming products. Tell Axis Packaging the product and any food-contact need so the pack can be confirmed on your quotation.",
    productsIntro: "These products can be quoted for pet treats, toys and accessories.",
    relatedProductSlugs: ["pet-packaging", "kraft-boxes", "mailer-boxes", "stickers-labels"],
    internalLinks: [
      { phrase: "pet product packaging", href: "/products/pet-packaging" },
      { phrase: "printed kraft boxes", href: "/products/kraft-boxes" },
      { phrase: "mailer boxes", href: "/products/mailer-boxes" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Pet products to keep separate",
        intro:
          "A treat pouch, a toy carton and a grooming bottle are different enquiries. The catalogue page is about pet products, not a plastic called PET.",
        subsections: [
          {
            title: "Treats and food",
            content:
              "Pet product packaging is the related product page. State if a pet eats the product so any food-contact requirement can be confirmed. Printed kraft boxes are a related retail carton.",
          },
          {
            title: "Toys and posted orders",
            content:
              "Toys and accessories sold online are often quoted as mailer boxes. Labels help when one carton is used for more than one line.",
          },
        ],
      },
      {
        title: "What a pet product quotation needs",
        intro:
          "Request a quotation with the product and the channel. Specification, quantity and timing are confirmed in the reply. Quotation requests receive a 24h quote response.",
        bullets: [
          "Treat, toy, accessory, or grooming product",
          "Whether a pet eats it",
          "Shelf or postal sale",
          "The quantity, size and brand text",
        ],
      },
    ],
  },
  pharmaceutical: {
    description:
      "Pharmaceutical packaging enquiries for UK pharmacies, clinics and health brands should name the product and the text that must be printed. This page does not state a regulatory approval. The pack is confirmed on your quotation.",
    metaDescription:
      "Pharmaceutical packaging enquiries for UK pharmacies and health brands. Describe the product and the text to print. Approvals are confirmed only on your quotation.",
    productsIntro: "These products can be discussed for cartons, supplement packs and outer shippers.",
    relatedProductSlugs: ["pharmaceutical", "supplement-bottles", "corrugated-shipping", "stickers-labels"],
    internalLinks: [
      { phrase: "pharmaceutical product packaging", href: "/products/pharmaceutical" },
      { phrase: "supplement packaging", href: "/products/supplement-bottles" },
      { phrase: "corrugated shipping boxes", href: "/products/corrugated-shipping" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Health packs to describe in plain language",
        intro:
          "A retail carton, a supplement pack and an outer shipper for a clinic are separate lines. Describe the product in plain language.",
        subsections: [
          {
            title: "Cartons and supplement packs",
            content:
              "Pharmaceutical product packaging is the catalogue page for health cartons. Supplement packaging is the related page when the product is a supplement.",
          },
          {
            title: "Distribution outers",
            content:
              "Corrugated shipping boxes are quoted when several packs travel together. Labels can carry text that changes between strengths or lines.",
          },
        ],
      },
      {
        title: "What the quotation must contain",
        intro:
          "Request a quotation with the product and the labelling you need. Axis Packaging confirms what can be supplied, the quantity and the timing. Quotation requests receive a 24h quote response.",
        bullets: [
          "The product, described by you",
          "The text that must be printed",
          "The quantity and pack size",
          "Whether an outer carton is also required",
        ],
      },
    ],
  },
  presentation: {
    description:
      "Presentation packaging for UK businesses is the box used when a product, sample or corporate gift is handed over in a meeting or a shop. Tell Axis Packaging what is inside and who opens it.",
    metaDescription:
      "Presentation packaging for UK products, samples and corporate gifts. Tell Axis Packaging what is inside so the box, print and quantity can be confirmed on your quotation.",
    productsIntro: "These products can be quoted for handover packs and sample sets.",
    relatedProductSlugs: ["rigid-boxes", "gift-boxes", "folding-carton-boxes", "box-inserts"],
    internalLinks: [
      { phrase: "rigid boxes", href: "/products/rigid-boxes" },
      { phrase: "gift wrapping boxes", href: "/products/gift-boxes" },
      { phrase: "folding carton boxes", href: "/products/folding-carton-boxes" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Presentation jobs to specify",
        intro:
          "A sales sample and a client gift can share a brand and still need different boxes. Say who opens the pack and whether they keep it.",
        subsections: [
          {
            title: "Client gifts and samples",
            content:
              "Rigid boxes and gift wrapping boxes are the related pages when the handover should feel substantial. Folding carton boxes suit a lighter retail-style presentation.",
          },
          {
            title: "Sets",
            content:
              "Box inserts can be quoted when several samples must stay in order. Describe the pieces rather than asking for a generic luxury finish.",
          },
        ],
      },
      {
        title: "What a presentation quotation needs",
        intro:
          "Request a quotation with the item and the audience. Specification, quantity and timing are confirmed in the reply. Quotation requests receive a 24h quote response.",
        bullets: [
          "The product, sample, or gift",
          "Who receives it",
          "The quantity and the size",
          "The name or message to print",
        ],
      },
    ],
  },
  restaurant: {
    description:
      "Restaurant packaging for UK cafés and food-service businesses covers trays, pizza and burger packs, cups and carry bags. Tell Axis Packaging the menu item and whether food is eaten on the journey home. Any food-contact requirement is confirmed on the quotation.",
    metaDescription:
      "Restaurant packaging for UK cafés and takeaway menus. Trays, pizza and burger packs, cups and bags, confirmed on your quotation with the food named.",
    productsIntro: "These products can be quoted for counter service and delivery menus.",
    relatedProductSlugs: ["food-trays", "pizza-boxes", "burger-boxes", "paper-cups"],
    internalLinks: [
      { phrase: "takeaway food trays", href: "/products/food-trays" },
      { phrase: "pizza boxes", href: "/products/pizza-boxes" },
      { phrase: "burger boxes", href: "/products/burger-boxes" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Menu items that need their own pack",
        intro:
          "A slice, a whole pizza, a burger and a hot drink should be listed separately. This page does not publish a food-contact certificate.",
        subsections: [
          {
            title: "Meals and bakery-style service",
            content:
              "Takeaway food trays suit meals handed over a counter. Pizza boxes and burger boxes are separate catalogue pages for those formats.",
          },
          {
            title: "Drinks",
            content:
              "Paper cups are the related page for served drinks. Say the cup size you use and whether a lid is part of the enquiry.",
          },
        ],
      },
      {
        title: "What a restaurant quotation should include",
        intro:
          "Request a quotation with the menu item and whether it travels. The reply confirms the pack, the quantity and the timing. Quotation requests receive a 24h quote response.",
        bullets: [
          "The dish or drink",
          "Eaten in, collected, or delivered",
          "The portion size and the quantity",
          "The restaurant name to print",
        ],
      },
    ],
  },
  retail: {
    description:
      "Retail packaging for UK shops covers the carton a product wears on the shelf and the display used to present a range. Tell Axis Packaging the product and whether you also need a counter or floor display quoted.",
    metaDescription:
      "Retail packaging for UK shops. Shelf cartons, kraft packs, labels and POP displays, with the product, quantity and print confirmed on your quotation.",
    productsIntro: "These products can be quoted for shelf packs and in-store display.",
    relatedProductSlugs: ["pop-displays", "folding-carton-boxes", "kraft-boxes", "stickers-labels"],
    internalLinks: [
      { phrase: "POP displays", href: "/products/pop-displays" },
      { phrase: "folding carton boxes", href: "/products/folding-carton-boxes" },
      { phrase: "printed kraft boxes", href: "/products/kraft-boxes" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Shelf and display jobs",
        intro:
          "A selling carton and a display that holds several products are different quotations. Say where in the shop the pack will stand.",
        subsections: [
          {
            title: "The product carton",
            content:
              "Folding carton boxes and printed kraft boxes are the related pages for retail cartons. Stickers and labels cover shade, size or price marks that change more often than the carton.",
          },
          {
            title: "In-store display",
            content:
              "POP displays are the catalogue page for counter and floor units. Describe the product that sits on the display and the shop type.",
          },
        ],
      },
      {
        title: "What a retail quotation needs",
        intro:
          "Request a quotation with the product and the fixture. Specification, quantity and timing are confirmed in the reply. Quotation requests receive a 24h quote response.",
        bullets: [
          "The product sold from the shelf",
          "Carton, label, display, or a combination",
          "The quantity and the size",
          "The shop type, such as a supermarket, boutique or convenience store",
        ],
      },
    ],
  },
  shipping: {
    description:
      "Shipping packaging for UK warehouses and online sellers covers outer cartons, mailers and tape used to move finished goods. Tell Axis Packaging what is inside a typical shipment and whether the outside is printed.",
    metaDescription:
      "Shipping packaging for UK warehouses and online sellers. Outer cartons, mailers and tape, with the shipment, quantity and print confirmed on your quotation.",
    productsIntro: "These products can be quoted for parcels, outers and carton sealing.",
    relatedProductSlugs: ["corrugated-shipping", "mailer-boxes", "mailer-bags", "packing-tape"],
    internalLinks: [
      { phrase: "corrugated shipping boxes", href: "/products/corrugated-shipping" },
      { phrase: "mailer boxes", href: "/products/mailer-boxes" },
      { phrase: "packing tape", href: "/products/packing-tape" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Shipments to describe",
        intro:
          "A light fashion parcel and a heavy parts carton should not be one line on the form. This page does not publish a weight limit or a courier approval.",
        subsections: [
          {
            title: "Customer parcels",
            content:
              "Mailer boxes and mailer bags are the related pages for individual parcels. Say if the brand should show on the outside.",
          },
          {
            title: "Outers and sealing",
            content:
              "Corrugated shipping boxes are the related page for storage and wholesale outers. Packing tape is quoted separately when the carton needs a branded or plain seal.",
          },
        ],
      },
      {
        title: "What a shipping quotation needs",
        intro:
          "Request a quotation with a typical shipment. The reply confirms the specification, quantity and timing. Quotation requests receive a 24h quote response.",
        bullets: [
          "What is inside, and the approximate weight if you know it",
          "Parcel, outer carton, or both",
          "The quantity and the size",
          "Whether the outside or the tape is printed",
        ],
      },
    ],
  },
  soap: {
    description:
      "Soap and personal-care packaging for UK makers covers cartons and labels for bars, bottles and gift sets. Tell Axis Packaging the format and whether the product is sold in a shop, a market, or online.",
    metaDescription:
      "Soap and personal-care packaging for UK makers. Bar cartons, labels and gift sets, with size, print and quantity confirmed on your quotation.",
    productsIntro: "These products can be quoted for bars, bottles and soap gifts.",
    relatedProductSlugs: ["kraft-boxes", "folding-carton-boxes", "cosmetic-boxes", "stickers-labels"],
    internalLinks: [
      { phrase: "printed kraft boxes", href: "/products/kraft-boxes" },
      { phrase: "folding carton boxes", href: "/products/folding-carton-boxes" },
      { phrase: "cosmetic boxes", href: "/products/cosmetic-boxes" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Personal-care formats to name",
        intro:
          "A naked bar, a bottled wash and a three-piece gift do not share a carton. Say if the soap is already wrapped.",
        subsections: [
          {
            title: "Bars and simple retail packs",
            content:
              "Printed kraft boxes and folding carton boxes are the related pages for bar cartons. Labels can name a fragrance when several soaps share one carton size.",
          },
          {
            title: "Bottles and sets",
            content:
              "Cosmetic boxes are the related page when the range sits closer to bottled personal care or a matched set. Describe the bottle if the carton has to fit it.",
          },
        ],
      },
      {
        title: "Details for a soap quotation",
        intro:
          "Request a quotation with the format and the fragrance names. Specification, quantity and timing are confirmed in the reply. Quotation requests receive a 24h quote response.",
        bullets: [
          "Bar, bottle, or gift set",
          "The bar or bottle size",
          "Shop, market, or online sale",
          "The fragrance names to print",
        ],
      },
    ],
  },
  toy: {
    description:
      "Toy packaging for UK toy and game brands covers the retail carton and the outer used to send stock to a shop. Tell Axis Packaging the toy and any wording that must be printed. This page does not state a toy-safety approval.",
    metaDescription:
      "Toy packaging for UK toy and game brands. Retail cartons and outer shippers, with the toy, wording, quantity and size confirmed on your quotation.",
    productsIntro: "These products can be quoted for shelf cartons and wholesale outers.",
    relatedProductSlugs: ["toy-packaging", "folding-carton-boxes", "corrugated-shipping", "stickers-labels"],
    internalLinks: [
      { phrase: "toy packaging boxes", href: "/products/toy-packaging" },
      { phrase: "folding carton boxes", href: "/products/folding-carton-boxes" },
      { phrase: "corrugated shipping boxes", href: "/products/corrugated-shipping" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Toy packs to separate",
        intro:
          "A small collectible and a board game need different cartons. A case of toys for a retailer is a further line.",
        subsections: [
          {
            title: "The retail carton",
            content:
              "Toy packaging boxes and folding carton boxes are the related pages for the carton a customer sees. Say if a label must carry a variant such as a colour or character.",
          },
          {
            title: "Stock sent to shops",
            content:
              "Corrugated shipping boxes are quoted for outers. Include how many retail units sit in one outer if you know it.",
          },
        ],
      },
      {
        title: "What a toy quotation should include",
        intro:
          "Request a quotation with the toy and the wording you must print. The reply confirms the box, the quantity and the timing. Quotation requests receive a 24h quote response.",
        bullets: [
          "The toy or game",
          "Shelf sale, online sale, or wholesale outer",
          "The quantity and the size",
          "The product name and any other required text",
        ],
      },
    ],
  },
  tea: {
    description:
      "Tea packaging for UK blenders, cafés and gift shops covers tins, pouches and cartons for loose tea, bags and gift sets. Tell Axis Packaging the format and whether the pack is a retail unit or a gift.",
    metaDescription:
      "Tea packaging for UK blenders, cafés and gift shops. Tins, pouches and cartons, with format, quantity and print confirmed on your quotation.",
    productsIntro: "These products can be quoted for loose tea, tea bags and gift caddies.",
    relatedProductSlugs: ["flexible-pouches", "tin-containers", "kraft-boxes", "gift-boxes"],
    internalLinks: [
      { phrase: "flexible packaging pouches", href: "/products/flexible-pouches" },
      { phrase: "metal tin containers", href: "/products/tin-containers" },
      { phrase: "printed kraft boxes", href: "/products/kraft-boxes" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Tea formats blenders should name",
        intro:
          "Loose leaf, a box of tea bags and a gift caddy are different packs. This page does not publish a freshness or barrier claim.",
        subsections: [
          {
            title: "Bags and pouches",
            content:
              "Flexible packaging pouches are the related page for pouch-style packs. Printed kraft boxes can be quoted when the pouch or the bags sit inside a carton.",
          },
          {
            title: "Tins and gifts",
            content:
              "Metal tin containers are the related page for caddies. Gift boxes suit a tea set sold as a present. Name the blends that must be printed.",
          },
        ],
      },
      {
        title: "What a tea quotation needs",
        intro:
          "Request a quotation with the format and the fill if you know it. Specification, quantity and timing are confirmed in the reply. Quotation requests receive a 24h quote response.",
        bullets: [
          "Loose tea, tea bags, or a gift caddy",
          "Retail unit or gift",
          "The quantity and the fill size",
          "The blend names to print",
        ],
      },
    ],
  },
  wine: {
    description:
      "Wine packaging for UK retailers, venues and gift brands covers single-bottle gifts and cases that travel. Tell Axis Packaging the bottle size and how many bottles sit in one pack. This page does not publish a carry rating.",
    metaDescription:
      "Wine packaging for UK retailers and gift brands. Single-bottle gifts and cases, with bottle size, count, print and quantity confirmed on your quotation.",
    productsIntro: "These products can be quoted for gift bottles and cases.",
    relatedProductSlugs: ["wine-boxes", "gift-boxes", "corrugated-shipping", "stickers-labels"],
    internalLinks: [
      { phrase: "wine and liquor boxes", href: "/products/wine-boxes" },
      { phrase: "gift boxes", href: "/products/gift-boxes" },
      { phrase: "corrugated shipping boxes", href: "/products/corrugated-shipping" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Wine packs to quote separately",
        intro:
          "A gift bottle carried from a shop and a six-bottle case sent by courier are different strengths and different prints. Describe the bottle first.",
        subsections: [
          {
            title: "Gift and retail bottles",
            content:
              "Wine and liquor boxes are the catalogue page for printed bottle packs. Gift boxes suit a bottle packed with other items.",
          },
          {
            title: "Cases",
            content:
              "Corrugated shipping boxes are the related page when several bottles move together. Labels can mark a vintage or a shop name on a shared carton.",
          },
        ],
      },
      {
        title: "Details for a wine quotation",
        intro:
          "Request a quotation with the bottle size and the count. The reply confirms the specification, quantity and timing. Quotation requests receive a 24h quote response.",
        bullets: [
          "Still wine, sparkling wine, or a mixed gift",
          "Bottle size and bottles per pack",
          "Shop carry or courier",
          "The brand text to print",
        ],
      },
    ],
  },
};

export const INDUSTRY_PAGE_CONTENT: Record<string, IndustryCopy> = Object.fromEntries(
  Object.entries(INDUSTRY_PAGES).map(([slug, entry]) => {
    const example = INDUSTRY_PAGE_EXAMPLES[slug];
    return [
      slug,
      {
        ...entry,
        ...(example?.metaDescription ? { metaDescription: example.metaDescription } : {}),
        contentSections: example
          ? [...entry.contentSections, { title: example.title, intro: example.intro }]
          : entry.contentSections,
      },
    ];
  })
);
