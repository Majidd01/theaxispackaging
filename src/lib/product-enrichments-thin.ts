/**
 * Useful copy for product pages that previously had only a short introduction.
 * No invented specifications, prices, MOQs, certifications, or delivery times.
 */
import { PRODUCT_PAGE_EXAMPLES } from "./thin-page-examples";

const THIN_PRODUCT_PAGES: Record<string, Record<string, unknown>> = {
  "folding-carton-boxes": {
    metaDescription:
      "Custom folding carton boxes for UK retail, gifting and e-commerce. Tell Axis Packaging the product, quantity and print so the quotation can confirm the specification.",
    alt: "Custom folding carton boxes for retail and gift packaging",
    description:
      "Custom folding carton boxes are the cartons UK shops, makers and online brands use when a product needs a printable pack that can be stored flat and assembled for sale. Axis Packaging supplies them for retail, gifting and smaller e-commerce lines. The size, print and order quantity are confirmed on your quotation, not assumed from a standard range.",
    internalLinks: [
      { phrase: "rigid boxes", href: "/products/rigid-boxes" },
      { phrase: "printed kraft boxes", href: "/products/kraft-boxes" },
      { phrase: "retail packaging", href: "/industries/retail" },
      { phrase: "bar of soap", href: "/industries/soap" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Where folding carton boxes are used",
        intro:
          "A folding carton suits products that are sold from a shelf, a counter or a parcel and do not need the stiffer board of rigid boxes. Brands choose a carton when the pack itself carries the product name and the selling message.",
        subsections: [
          {
            title: "Retail and gift counters",
            content:
              "Soap, confectionery, cosmetics, small gifts and accessories are often packed in a folding carton so the customer can see a branded face on the shelf. If the product needs a plainer board look, printed kraft boxes are a related option.",
          },
          {
            title: "Online orders",
            content:
              "Smaller e-commerce goods can leave the warehouse in a printed carton when the outer parcel is a separate mailer. Say whether the carton is the retail pack, the postal pack, or both. Retail packaging advice is also covered on the retail industry page.",
          },
        ],
      },
      {
        title: "What to send with a folding carton quotation",
        intro:
          "The quotation form asks for the details that change the carton. Axis Packaging confirms the specification, the order quantity and the timing on that quotation. Quotation requests receive a 24h quote response.",
        bullets: [
          "The item inside, such as a bar, a compact, a kit or a gift",
          "How many cartons you need",
          "The approximate length, width and depth, if you already know them",
          "Whether the carton needs printing, and any artwork you have",
          "Where in the UK the cartons will be filled or sold",
        ],
      },
    ],
  },
  "rigid-boxes": {
    metaDescription:
      "Premium rigid boxes for UK gifts, jewellery and cosmetics. Share the product, quantity and print with Axis Packaging so the quotation can confirm the specification.",
    alt: "Premium rigid boxes for gifts and presentation",
    description:
      "Premium rigid boxes are the stiffer presentation packs UK jewellers, beauty brands and gift retailers use when the box should feel substantial in the hand. Axis Packaging supplies them for products that are given, displayed or sold as a set. Board, finish, size and quantity are confirmed on your quotation.",
    internalLinks: [
      { phrase: "jewellery gift boxes", href: "/products/jewelry-boxes" },
      { phrase: "gift wrapping boxes", href: "/products/gift-boxes" },
      { phrase: "colour cosmetics", href: "/industries/cosmetics" },
      { phrase: "cosmetic boxes", href: "/products/cosmetic-boxes" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "When a rigid box is the right pack",
        intro:
          "Choose a rigid box when the packaging is part of the gift, not only a carrier. It is a common choice for products that customers open slowly and may keep.",
        subsections: [
          {
            title: "Gifts and jewellery",
            content:
              "Rings, watches, fragrance sets and corporate gifts are often presented in a rigid box. Jewellery gift boxes are a related product when the item is small and needs a dedicated presentation pack.",
          },
          {
            title: "Beauty and retail sets",
            content:
              "Cosmetic boxes cover creams and colour cosmetics. A rigid box is useful when several items are sold together and the lid should close firmly. Gift wrapping boxes suit broader occasion ranges.",
          },
        ],
      },
      {
        title: "What to include in a rigid box quotation",
        intro:
          "Describe the product the box has to present. Do not guess a board grade on this page. Request a quotation with the points below and the reply will confirm what can be supplied. Quotation requests receive a 24h quote response.",
        bullets: [
          "The product or set that sits in the box",
          "Whether you need one item or several pieces in the same pack",
          "The quantity and the approximate size",
          "Whether you need a printed lid, a plain board, or a label",
          "If an insert is required to stop the item moving",
        ],
      },
    ],
  },
  "box-inserts": {
    metaDescription:
      "Custom box inserts to hold or separate products inside a UK gift or retail box. Tell Axis Packaging the item and quantity so the quotation can confirm the fit.",
    alt: "Custom box inserts used inside gift and retail boxes",
    description:
      "Custom box inserts sit inside another box to hold one product still or to separate several pieces. UK gift brands, jewellers and retailers use them when a product would otherwise slide in transit or look unfinished when the lid opens. The material and the fit are confirmed on your quotation.",
    internalLinks: [
      { phrase: "rigid boxes", href: "/products/rigid-boxes" },
      { phrase: "gift wrapping boxes", href: "/products/gift-boxes" },
      { phrase: "jewellery gift boxes", href: "/products/jewelry-boxes" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "What an insert is for",
        intro:
          "An insert is not the outer box. It is the piece that organises what the customer sees when the pack is opened. It can cradle one item or divide a set.",
        subsections: [
          {
            title: "Holding one product",
            content:
              "A bottle, a candle, a device or a piece of jewellery often needs a shaped space so it does not rattle. Say how the item is shaped and whether the insert should hide the base of the product.",
          },
          {
            title: "Separating a set",
            content:
              "Gift sets, tool kits and cosmetic kits use inserts to keep pieces apart. Rigid boxes, gift wrapping boxes and jewellery gift boxes are the outer packs these inserts are commonly quoted with.",
          },
        ],
      },
      {
        title: "Details that help an insert quotation",
        intro:
          "The useful information is the product, not a material name copied from another supplier. Request a quotation with the points below. Order quantity and timing are confirmed in the reply. Quotation requests receive a 24h quote response.",
        bullets: [
          "What the insert must hold, and how many pieces",
          "The outer box it has to fit, if you already have one",
          "The quantity of inserts",
          "Whether the insert should be plain or printed",
          "A photo or a simple sketch if the shape is unusual",
        ],
      },
    ],
  },
  "corrugated-shipping": {
    metaDescription:
      "Corrugated shipping boxes for UK parcels, storage and retail outer packs. Share the product, quantity and size so Axis Packaging can confirm the box on your quotation.",
    h1: "Corrugated Shipping Boxes for UK Parcels",
    alt: "Corrugated shipping boxes for parcels and storage",
    description:
      "Corrugated shipping boxes are the outer cartons UK warehouses, shops and online sellers use to move goods and to store stock. Axis Packaging supplies them when a product needs a stronger postal or storage carton than a retail folding carton. Board strength, size and print are confirmed on your quotation.",
    internalLinks: [
      { phrase: "mailer boxes", href: "/products/mailer-boxes" },
      { phrase: "subscription boxes", href: "/products/subscription-boxes" },
      { phrase: "shipping packaging", href: "/industries/shipping" },
      { phrase: "online sellers", href: "/industries/ecommerce" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Typical corrugated box jobs",
        intro:
          "Use a corrugated box when the pack has to survive handling, stacking or a courier journey. The right board depends on the weight and the route, so this page does not publish a flute or a weight limit.",
        subsections: [
          {
            title: "Parcels and storage",
            content:
              "Spare parts, bottled goods, multi-packs and archive stock are common corrugated jobs. Mailer boxes are the related choice when the parcel is smaller and the box is also the branded mailer.",
          },
          {
            title: "Subscription and wholesale outers",
            content:
              "Subscription boxes that travel through a courier network often need a corrugated outer. Shipping packaging for warehouses is covered on the shipping industry page.",
          },
        ],
      },
      {
        title: "What to include in a shipping box quotation",
        intro:
          "Tell us what is going in the box and how it travels. Request a quotation rather than guessing a strength. The reply confirms the specification, quantity and timing. Quotation requests receive a 24h quote response.",
        bullets: [
          "The product and its approximate weight, if you know it",
          "Whether the box is posted, stored, or both",
          "The quantity and the size you have in mind",
          "Whether the outside needs printing or can be plain",
          "If the contents are fragile, sharp or need an insert",
        ],
      },
    ],
  },
  "cosmetic-boxes": {
    metaDescription:
      "Custom cosmetic boxes for UK beauty brands, salons and retailers. Tell Axis Packaging the product, quantity and print so the quotation can confirm the pack.",
    alt: "Custom cosmetic boxes for beauty products",
    description:
      "Custom cosmetic boxes pack creams, compacts, serums and beauty kits for UK salons, retailers and direct-to-consumer brands. The box is often the first thing a customer reads on a shelf or in an unboxing. Axis Packaging confirms the size, print and quantity on your quotation.",
    internalLinks: [
      { phrase: "rigid boxes", href: "/products/rigid-boxes" },
      { phrase: "stickers and labels", href: "/products/stickers-labels" },
      { phrase: "cosmetics packaging", href: "/industries/cosmetics" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Cosmetic products these boxes suit",
        intro:
          "A cosmetic box has to fit the container and leave room for the product name, the shade and the brand. It is not a claim about a particular finish until that finish is written on the quotation.",
        subsections: [
          {
            title: "Single products",
            content:
              "Jars, tubes and compacts sold one at a time usually need a carton that matches the container and stands on a shelf. Stickers and labels are useful when the same carton is used for more than one shade.",
          },
          {
            title: "Sets and gifts",
            content:
              "Kits and gift sets often move to rigid boxes when the lid should feel firmer. Cosmetics packaging for salons and shops is outlined on the cosmetics industry page.",
          },
        ],
      },
      {
        title: "Information for a cosmetic box quotation",
        intro:
          "Name the beauty product and how it is sold. Request a quotation with the points below. Specification, quantity and timing are confirmed in the reply. Quotation requests receive a 24h quote response.",
        bullets: [
          "The product, such as a jar, tube, palette or set",
          "How many boxes you need",
          "The size of the container the box must fit",
          "The wording and artwork that must be printed",
          "Whether the box is for a shop shelf, a salon, or an online order",
        ],
      },
    ],
  },
  "food-containers": {
    metaDescription:
      "Containers for UK food and drink brands. Tell Axis Packaging the food, quantity and any food-contact requirement so it can be confirmed on your quotation.",
    alt: "Containers for food and drink products",
    description:
      "Food and drink containers are the packs UK cafés, retailers and producers use to hold a product for sale or service. This page does not publish a food-contact certificate. Tell Axis Packaging what the container will hold, and any food-contact requirement is confirmed on your quotation together with the size and quantity.",
    internalLinks: [
      { phrase: "bakery and cake boxes", href: "/products/bakery-boxes" },
      { phrase: "takeaway food trays", href: "/products/food-trays" },
      { phrase: "food packaging", href: "/industries/food" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Food and drink uses",
        intro:
          "Say what is going in the container before a style is chosen. A dry snack, a chilled product and a served meal are different jobs.",
        subsections: [
          {
            title: "Retail and grocery",
            content:
              "Brands packing a food or drink product for a shelf need a container that can carry the product name and the information they want printed. Bakery and cake boxes are the related choice for baked goods.",
          },
          {
            title: "Cafés and service",
            content:
              "Takeaway food trays suit meals that are handed over a counter. Food packaging for producers and shops is described on the food industry page.",
          },
        ],
      },
      {
        title: "What to tell us about the food",
        intro:
          "A food container quotation starts with the food, not a certificate name. Request a quotation and include the points below. The reply confirms what can be supplied, the quantity and the timing. Quotation requests receive a 24h quote response.",
        bullets: [
          "The food or drink the container will hold",
          "Whether it is served hot, chilled, frozen or dry",
          "Any food-contact requirement you need confirmed",
          "The quantity and the approximate size",
          "The wording that must appear on the pack",
        ],
      },
    ],
  },
  pharmaceutical: {
    h1: "Pharmaceutical Packaging for UK Businesses",
    metaDescription:
      "Pharmaceutical packaging for UK pharmacies, clinics and health brands. Share the product and labelling needs so Axis Packaging can confirm them on your quotation.",
    alt: "Pharmaceutical packaging boxes for health products",
    description:
      "Pharmaceutical packaging covers cartons and related packs for medicines, health products and supplies sold by UK pharmacies, clinics and brands. This page does not state a regulatory approval. Axis Packaging confirms the pack, the labelling you ask for, the quantity and the timing on your quotation.",
    internalLinks: [
      { phrase: "supplement packaging", href: "/products/supplement-bottles" },
      { phrase: "corrugated shipping boxes", href: "/products/corrugated-shipping" },
      { phrase: "pharmaceutical packaging", href: "/industries/pharmaceutical" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Health products these packs are quoted for",
        intro:
          "Tell us the product in plain language. A carton for a boxed medicine is a different enquiry from an outer shipper for several packs.",
        subsections: [
          {
            title: "Retail and pharmacy cartons",
            content:
              "Boxed health products need space for the name and the information you must print. Supplement packaging is the related page when the product is a supplement rather than a medicine carton.",
          },
          {
            title: "Outer distribution cartons",
            content:
              "Corrugated shipping boxes are used when several packs travel together to a clinic or a warehouse. The pharmaceutical packaging industry page explains the wider enquiry.",
          },
        ],
      },
      {
        title: "What a pharmaceutical quotation needs",
        intro:
          "Do not assume a standard carton. Request a quotation with the product and the labelling you need. Specification, quantity and timing are confirmed in the reply. Quotation requests receive a 24h quote response.",
        bullets: [
          "The product type, described by you",
          "The text that must be printed",
          "The quantity and the pack size",
          "Whether you also need an outer shipping carton",
          "Any pack requirement your customer has asked you to meet",
        ],
      },
    ],
  },
  electronics: {
    h1: "Protective Electronics Packaging for UK Brands",
    metaDescription:
      "Electronics packaging for UK devices, accessories and spare parts. Tell Axis Packaging the item and the protection you need so the quotation can confirm it.",
    alt: "Protective packaging for electronic products and accessories",
    description:
      "Electronics packaging is for phones, accessories, small devices and spare parts sold or shipped by UK brands and retailers. Protection depends on the item. Tell Axis Packaging whether you need cushioning or static protection, and that requirement is confirmed on your quotation rather than promised as a standard feature.",
    internalLinks: [
      { phrase: "box inserts", href: "/products/box-inserts" },
      { phrase: "corrugated shipping boxes", href: "/products/corrugated-shipping" },
      { phrase: "electronics packaging", href: "/industries/electronics" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Electronics this packaging is quoted for",
        intro:
          "Describe the device and the journey. A retail carton on a shop shelf is a different pack from a spare part posted to an engineer.",
        subsections: [
          {
            title: "Retail accessories",
            content:
              "Cables, cases, small gadgets and replacement parts often need a printed carton that names the product. Box inserts can be quoted when the item should sit in a fixed place inside the carton.",
          },
          {
            title: "Posted and wholesale units",
            content:
              "Heavier or multiple units usually move in corrugated shipping boxes. Electronics packaging for brands and resellers is outlined on the electronics industry page.",
          },
        ],
      },
      {
        title: "Details for an electronics quotation",
        intro:
          "Request a quotation with the protection the product actually needs. The reply confirms the specification, quantity and timing. Quotation requests receive a 24h quote response.",
        bullets: [
          "The device or accessory, and whether it is fragile",
          "Whether you need cushioning, static protection, or both",
          "The quantity and the approximate size",
          "If the pack is a retail carton, a postal carton, or an outer shipper",
          "The branding that must be printed",
        ],
      },
    ],
  },
  "jewelry-boxes": {
    metaDescription:
      "Jewellery gift boxes for UK jewellers and gift retailers. Tell Axis Packaging the piece, quantity and print so the presentation box can be confirmed on your quotation.",
    alt: "Jewellery gift boxes for rings and accessories",
    description:
      "Jewellery gift boxes are presentation packs for rings, earrings, necklaces and small accessories sold by UK jewellers and gift retailers. The box is part of how the piece is handed over. Axis Packaging confirms the size, the print and the quantity on your quotation.",
    internalLinks: [
      { phrase: "rigid boxes", href: "/products/rigid-boxes" },
      { phrase: "gift wrapping boxes", href: "/products/gift-boxes" },
      { phrase: "jewellery packaging", href: "/industries/jewelry" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Jewellery the boxes are used for",
        intro:
          "A jewellery box has to fit the piece and look right when it is opened on a counter. This page does not list linings or board types. Those are confirmed when you describe the piece.",
        subsections: [
          {
            title: "Single pieces",
            content:
              "Rings, earrings and pendants are usually packed one piece, or one pair, to a box. Rigid boxes are the related choice when you want a stiffer presentation pack for a higher-value item.",
          },
          {
            title: "Gift retailers",
            content:
              "Gift wrapping boxes cover broader occasion gifts. Jewellery packaging for shops that sell accessories is described on the jewellery industry page.",
          },
        ],
      },
      {
        title: "What to send for a jewellery box quotation",
        intro:
          "A photo of the piece is more useful than a generic box name. Request a quotation with the points below. Specification, quantity and timing are confirmed in the reply. Quotation requests receive a 24h quote response.",
        bullets: [
          "The piece, such as a ring, earrings, a necklace or a set",
          "How many boxes you need",
          "The approximate size of the piece",
          "Whether the lid or base should be printed",
          "If the box is handed over in a shop or posted",
        ],
      },
    ],
  },
  "wine-boxes": {
    metaDescription:
      "Wine and liquor boxes for UK retailers and gift brands. Tell Axis Packaging the bottle size, quantity and print so the pack can be confirmed on your quotation.",
    alt: "Wine and liquor boxes for bottles and gift packs",
    description:
      "Wine and liquor boxes pack bottles and gift sets for UK retailers, venues and gift brands. Tell Axis Packaging the bottle size and how many bottles sit in the pack. Strength, print and quantity are confirmed on your quotation. This page does not publish a carry rating.",
    internalLinks: [
      { phrase: "corrugated shipping boxes", href: "/products/corrugated-shipping" },
      { phrase: "gift wrapping boxes", href: "/products/gift-boxes" },
      { phrase: "wine packaging", href: "/industries/wine" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Bottle packs these boxes are quoted for",
        intro:
          "A single gift bottle and a case that travels by courier are different packs. Describe the bottle before asking for a style.",
        subsections: [
          {
            title: "Retail and gifts",
            content:
              "One or two bottles sold as a gift often need a printed box that names the brand. Gift wrapping boxes are a related option when the bottle is part of a wider hamper.",
          },
          {
            title: "Cases and delivery",
            content:
              "Several bottles moving together are usually quoted as a stronger outer, often alongside corrugated shipping boxes. Wine packaging for retailers is outlined on the wine industry page.",
          },
        ],
      },
      {
        title: "Details for a wine box quotation",
        intro:
          "Request a quotation with the bottle, not only the word wine. The reply confirms the specification, quantity and timing. Quotation requests receive a 24h quote response.",
        bullets: [
          "Wine, spirits, or a mixed gift set",
          "The bottle size and how many bottles are in one box",
          "Whether the box is carried from a shop or sent by courier",
          "The quantity of boxes",
          "The branding that must be printed",
        ],
      },
    ],
  },
  "bakery-boxes": {
    h1: "Bakery and Cake Boxes for UK Bakeries",
    metaDescription:
      "Bakery and cake boxes for UK bakeries and cafés. Tell Axis Packaging the bake, quantity and any food-contact requirement so it can be confirmed on your quotation.",
    alt: "Bakery and cake boxes for cakes and pastries",
    description:
      "Bakery and cake boxes are for cakes, cupcakes, pastries and bakery gifts sold by UK bakeries and cafés. Tell Axis Packaging what is being packed and whether you need a food-contact requirement confirmed. Size, print and quantity are confirmed on your quotation.",
    internalLinks: [
      { phrase: "food and drink containers", href: "/products/food-containers" },
      { phrase: "takeaway food trays", href: "/products/food-trays" },
      { phrase: "bakery packaging", href: "/industries/bakery-cake" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Bakes these boxes are used for",
        intro:
          "A tall celebration cake and a box of cookies need different proportions. Describe the bake and how the customer carries it.",
        subsections: [
          {
            title: "Cakes and celebration bakes",
            content:
              "Whole cakes and cupcake sets need a box that clears the decoration. Say the diameter or the portion count if you know it. Food and drink containers are the related page when the product is not a bake.",
          },
          {
            title: "Counter and delivery sales",
            content:
              "Pastries sold from a counter or sent out for delivery need a box that can be closed for the journey. Takeaway food trays suit meals rather than cakes. Bakery packaging is also covered on the bakery industry page.",
          },
        ],
      },
      {
        title: "What a bakery quotation should include",
        intro:
          "Request a quotation with the bake and any food-contact requirement. The reply confirms the box, the quantity and the timing. Quotation requests receive a 24h quote response.",
        bullets: [
          "The bake, such as a whole cake, cupcakes or cookies",
          "The portion size or diameter",
          "How many boxes you need",
          "Whether the box is collected, delivered, or both",
          "The shop name or artwork to print",
        ],
      },
    ],
  },
  "apparel-packaging": {
    metaDescription:
      "Apparel packaging for UK clothing, shoe and accessory brands. Tell Axis Packaging whether you need a box or a bag, plus the quantity and print, for a confirmed quotation.",
    alt: "Apparel packaging boxes and bags for clothing brands",
    description:
      "Apparel packaging covers the boxes and bags UK clothing, shoe and accessory brands use when a garment is sold in a shop or posted to a customer. Say whether you need a box, a bag, or both. The size, print and quantity are confirmed on your quotation.",
    internalLinks: [
      { phrase: "mailer boxes", href: "/products/mailer-boxes" },
      { phrase: "paper shopping bags", href: "/products/paper-bags" },
      { phrase: "apparel packaging", href: "/industries/apparel" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Clothing and accessories this packaging suits",
        intro:
          "Folded knitwear, a pair of shoes and a small accessory do not share one pack. Describe the garment and the sales channel.",
        subsections: [
          {
            title: "Shops and boutiques",
            content:
              "A printed box or a paper shopping bag is the pack the customer carries out of a boutique. Paper shopping bags are the related product when the garment does not need a box.",
          },
          {
            title: "Posted fashion orders",
            content:
              "Online clothing orders often leave in mailer boxes. The apparel packaging industry page covers the wider clothing enquiry.",
          },
        ],
      },
      {
        title: "What to include in an apparel quotation",
        intro:
          "Request a quotation and name the garment. Specification, quantity and timing are confirmed in the reply. Quotation requests receive a 24h quote response.",
        bullets: [
          "The item, such as a shirt, shoes, jewellery or a full outfit",
          "Whether you need a box, a bag, or both",
          "The quantity and the approximate size",
          "Whether it is sold in a shop or posted",
          "The logo and any care or size text that must be printed",
        ],
      },
    ],
  },
  "subscription-boxes": {
    metaDescription:
      "Subscription boxes for UK kit and repeat-order brands. Tell Axis Packaging what goes in the kit, the quantity and the print so the quotation can confirm the box.",
    alt: "Branded subscription boxes for repeat customer kits",
    description:
      "Subscription boxes are the branded cartons UK kit and repeat-order businesses use when a customer receives a planned delivery. The box often introduces the products inside. Axis Packaging confirms the size, the strength, the print and the quantity on your quotation.",
    internalLinks: [
      { phrase: "mailer boxes", href: "/products/mailer-boxes" },
      { phrase: "corrugated shipping boxes", href: "/products/corrugated-shipping" },
      { phrase: "e-commerce packaging", href: "/industries/ecommerce" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Subscription kits these boxes suit",
        intro:
          "A useful enquiry describes the kit. Beauty samples, food items, hobby pieces and printed matter all change the size and the protection.",
        subsections: [
          {
            title: "Recurring customer kits",
            content:
              "Monthly and seasonal kits need a box that can be repeated. Mailer boxes are the related choice when the subscription is a simpler postal parcel rather than a presented kit.",
          },
          {
            title: "Heavier or posted kits",
            content:
              "Kits that travel through a courier and contain several items may need corrugated shipping boxes. E-commerce packaging for online brands is covered on the e-commerce industry page.",
          },
        ],
      },
      {
        title: "What to send with a subscription box quotation",
        intro:
          "List what goes in a typical kit. Request a quotation with the points below. The reply confirms the specification, quantity and timing. Quotation requests receive a 24h quote response.",
        bullets: [
          "The products in one kit",
          "How often you ship, if that changes the quantity",
          "The quantity of boxes for the first order",
          "Whether the outside is printed or plain",
          "If any item is fragile, leaky or needs separating",
        ],
      },
    ],
  },
  "gift-boxes": {
    metaDescription:
      "Gift boxes for UK retailers, companies and online shops. Tell Axis Packaging the gift, quantity and print so the box can be confirmed on your quotation.",
    alt: "Gift boxes for retail and corporate gifts",
    description:
      "Gift wrapping boxes are presentation cartons for gifts sold by UK retailers, companies and online shops. They suit a product that is given rather than only stored. Axis Packaging confirms the size, the print and the quantity on your quotation.",
    internalLinks: [
      { phrase: "rigid boxes", href: "/products/rigid-boxes" },
      { phrase: "tissue paper", href: "/products/tissue-paper" },
      { phrase: "gift packaging", href: "/industries/gift" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Gifts these boxes are used for",
        intro:
          "The occasion changes the pack. A single retail gift and a corporate set of fifty gifts should be described separately.",
        subsections: [
          {
            title: "Retail gifts",
            content:
              "Candles, confectionery, accessories and seasonal sets are often sold in a printed gift box. Rigid boxes are the related choice when the lid should feel firmer.",
          },
          {
            title: "Corporate and online gifts",
            content:
              "Companies sending a gift to clients usually need a box that can be posted and a way to finish the inside. Tissue paper is a related product for that finishing. Gift packaging is outlined on the gift industry page.",
          },
        ],
      },
      {
        title: "Details for a gift box quotation",
        intro:
          "Request a quotation with the gift itself. Specification, quantity and timing are confirmed in the reply. Quotation requests receive a 24h quote response.",
        bullets: [
          "What the gift is",
          "Whether it is one item or a set",
          "The quantity and the approximate size",
          "Whether the box is handed over or posted",
          "The name, message or artwork to print",
        ],
      },
    ],
  },
  "toy-packaging": {
    metaDescription:
      "Toy packaging boxes for UK toy and game brands. Tell Axis Packaging the toy, quantity and any wording you need printed so the quotation can confirm the box.",
    alt: "Toy packaging boxes for games and retail toys",
    description:
      "Toy packaging boxes present games, toys and collectibles for UK retailers and toy brands. The box has to fit the toy and carry the name the customer reads on the shelf or online. Axis Packaging confirms the size, the print and the quantity on your quotation. This page does not state a toy-safety approval.",
    internalLinks: [
      { phrase: "corrugated shipping boxes", href: "/products/corrugated-shipping" },
      { phrase: "stickers and labels", href: "/products/stickers-labels" },
      { phrase: "toy packaging", href: "/industries/toy" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Toys these boxes are quoted for",
        intro:
          "A small collectible and a larger game need different cartons. Describe the toy and where it is sold.",
        subsections: [
          {
            title: "Shelf and online toys",
            content:
              "Retail toys need a carton that names the product and can survive the shop or the parcel. Stickers and labels help when one carton style is used for more than one toy.",
          },
          {
            title: "Outer cartons",
            content:
              "Cases of toys travelling to a retailer are usually quoted as corrugated shipping boxes. Toy packaging for brands is also described on the toy industry page.",
          },
        ],
      },
      {
        title: "What a toy box quotation needs",
        intro:
          "Request a quotation and include any wording you must print. The reply confirms the box, the quantity and the timing. Quotation requests receive a 24h quote response.",
        bullets: [
          "The toy or game",
          "The quantity and the approximate size",
          "Whether it is sold from a shelf, online, or both",
          "The product name and any other text that must be printed",
          "If several toys ship together in an outer carton",
        ],
      },
    ],
  },
  "media-packaging": {
    metaDescription:
      "Book and media packaging for UK retailers and sellers of books, CDs and DVDs. Tell Axis Packaging the item, quantity and print so the pack can be confirmed.",
    alt: "Book and media packaging for books, CDs and DVDs",
    description:
      "Book and media packaging protects and presents books, CDs, DVDs and other printed media for UK retailers and sellers. Axis Packaging confirms the size, the print and the quantity on your quotation. This page does not specify a standard disc case or a book size.",
    internalLinks: [
      { phrase: "mailer boxes", href: "/products/mailer-boxes" },
      { phrase: "corrugated shipping boxes", href: "/products/corrugated-shipping" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Books and media these packs suit",
        intro:
          "A single book posted to a reader is a different pack from a retail sleeve or a carton of stock. Say which one you need.",
        subsections: [
          {
            title: "Retail presentation",
            content:
              "Shops and collectors often want a pack that names the title and keeps the item presentable. Describe the book, disc or printed piece and whether a window or a closed carton is preferred.",
          },
          {
            title: "Posting and wholesale",
            content:
              "Single mailed items are often quoted as mailer boxes. Cartons of stock are quoted as corrugated shipping boxes.",
          },
        ],
      },
      {
        title: "Information for a media packaging quotation",
        intro:
          "Request a quotation with the item and the sales channel. Specification, quantity and timing are confirmed in the reply. Quotation requests receive a 24h quote response.",
        bullets: [
          "The item, such as a book, CD, DVD or printed set",
          "Whether it is a retail pack, a postal pack, or an outer carton",
          "The quantity and the approximate size",
          "The title or artwork to print",
          "If the item must be kept flat",
        ],
      },
    ],
  },
  "automotive-boxes": {
    metaDescription:
      "Automotive parts boxes for UK garages, factors and brands. Tell Axis Packaging the part, quantity and whether it needs holding in place so the quotation can confirm the box.",
    alt: "Automotive parts boxes for spare parts and accessories",
    description:
      "Automotive parts boxes pack filters, accessories and other spare parts for UK garages, motor factors and brands. Tell Axis Packaging the part and whether it needs to be held in place. The box, any fitment, the quantity and the timing are confirmed on your quotation.",
    internalLinks: [
      { phrase: "box inserts", href: "/products/box-inserts" },
      { phrase: "corrugated shipping boxes", href: "/products/corrugated-shipping" },
      { phrase: "shipping packaging", href: "/industries/shipping" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Parts these boxes are quoted for",
        intro:
          "A small accessory and a heavier component should not be described as the same job. Name the part.",
        subsections: [
          {
            title: "Counter and retail parts",
            content:
              "Accessories sold over a counter or online need a carton that names the part. Box inserts can be quoted when the part should not move inside the carton.",
          },
          {
            title: "Trade and warehouse outers",
            content:
              "Parts sent in quantity are often packed in corrugated shipping boxes. Shipping packaging for trade deliveries is covered on the shipping industry page.",
          },
        ],
      },
      {
        title: "What an automotive quotation should include",
        intro:
          "Request a quotation with the part, not a guessed board name. The reply confirms the specification, quantity and timing. Quotation requests receive a 24h quote response.",
        bullets: [
          "The part, and whether it is sharp, oily or fragile",
          "The quantity and the approximate size",
          "Whether each part needs its own box or an outer carton",
          "If the part must be held in place",
          "The part number or brand text that must be printed",
        ],
      },
    ],
  },
  "sports-boxes": {
    metaDescription:
      "Sports packaging boxes for UK kit, accessories and smaller equipment. Tell Axis Packaging the item, quantity and print so the box can be confirmed on your quotation.",
    alt: "Sports packaging boxes for kit and accessories",
    description:
      "Sports packaging boxes present kit, accessories and smaller equipment for UK clubs, retailers and brands. Axis Packaging confirms the size, the print and the quantity on your quotation. This page does not publish a crush rating or a protection level.",
    internalLinks: [
      { phrase: "corrugated shipping boxes", href: "/products/corrugated-shipping" },
      { phrase: "mailer boxes", href: "/products/mailer-boxes" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Sports products these boxes suit",
        intro:
          "Describe the item and whether a person carries it from a shop or a courier delivers it. A pair of accessories and a larger piece of kit are different packs.",
        subsections: [
          {
            title: "Retail kit and accessories",
            content:
              "Gloves, bottles, small training aids and branded accessories often need a printed carton for the shelf or the website. Mailer boxes are the related choice for a simpler posted order.",
          },
          {
            title: "Bulk and club deliveries",
            content:
              "Several items sent to a club or a shop are usually quoted as corrugated shipping boxes. Say how the goods are stacked or carried.",
          },
        ],
      },
      {
        title: "Details for a sports box quotation",
        intro:
          "Request a quotation with the item and the journey. Specification, quantity and timing are confirmed in the reply. Quotation requests receive a 24h quote response.",
        bullets: [
          "The kit or accessory",
          "Whether it is sold singly or in a multi-pack",
          "The quantity and the approximate size",
          "Whether it is posted, stored, or sold from a shelf",
          "The club or brand name that must be printed",
        ],
      },
    ],
  },
  "pet-packaging": {
    h1: "Custom Pet Product Packaging",
    metaDescription:
      "Pet product packaging for UK treats, toys and grooming lines. Tell Axis Packaging the product and any food-contact need so the quotation can confirm the pack.",
    alt: "Pet product packaging for treats, toys and accessories",
    description:
      "Pet product packaging covers boxes and related packs for treats, toys, accessories and grooming products sold by UK pet brands and retailers. If the pack is for pet food, say so, and any food-contact requirement is confirmed on your quotation. Size, print and quantity are confirmed at the same time.",
    internalLinks: [
      { phrase: "printed kraft boxes", href: "/products/kraft-boxes" },
      { phrase: "food and drink containers", href: "/products/food-containers" },
      { phrase: "pet packaging", href: "/industries/pets" },
      { phrase: "request a quotation", href: "/quote" },
    ],
    contentSections: [
      {
        title: "Pet products this packaging is quoted for",
        intro:
          "Treats, a toy and a grooming bottle are different packs. The old heading on this page used the letters PET. This page is about pet products, not a plastic type.",
        subsections: [
          {
            title: "Treats and food",
            content:
              "If the product is eaten, say what it is and whether you need a food-contact requirement confirmed. Food and drink containers are a related page for food packs. Printed kraft boxes are a related retail carton.",
          },
          {
            title: "Toys and grooming",
            content:
              "Toys, leads, bows and grooming products usually need a carton that names the item for a shop or a website. Pet packaging for the wider range is on the pets industry page.",
          },
        ],
      },
      {
        title: "What to include in a pet product quotation",
        intro:
          "Request a quotation and name the pet product. The reply confirms the pack, the quantity and the timing. Quotation requests receive a 24h quote response.",
        bullets: [
          "The product, and whether a pet eats it",
          "Any food-contact requirement you need confirmed",
          "The quantity and the approximate size",
          "Whether it is sold from a shelf or posted",
          "The brand name and any other text to print",
        ],
      },
    ],
  },
};

export const THIN_PRODUCT_ENRICHMENTS: Record<string, Record<string, unknown>> = Object.fromEntries(
  Object.entries(THIN_PRODUCT_PAGES).map(([slug, entry]) => {
    const example = PRODUCT_PAGE_EXAMPLES[slug];
    const sections = (entry.contentSections as unknown[]) || [];
    return [
      slug,
      {
        ...entry,
        ...(example?.metaDescription ? { metaDescription: example.metaDescription } : {}),
        contentSections: example ? [...sections, { title: example.title, intro: example.intro }] : sections,
      },
    ];
  })
);
