import {
  breadcrumbSchema,
  faqPageSchema,
  localBusinessSchema,
  organizationSchema,
  serviceSchema,
  webPageSchema,
} from "./seo";

/** Original USA landing copy. No invented offices, prices, lead times or certificates. */

export const USA_PAGE_SEO = {
  path: "/custom-packaging-usa",
  title: "Custom Packaging USA | Printed Boxes Quoted for Business",
  description:
    "Custom Packaging USA for printed boxes and branded packs. Orders are dispatched from a UK warehouse. Shipping costs and times are confirmed on quotation.",
  h1: "Custom Packaging USA for Businesses",
  keywords:
    "custom packaging USA, custom packaging boxes USA, custom printed boxes USA, branded packaging USA, custom packaging for small business USA, wholesale custom packaging USA, custom retail packaging USA, custom food packaging USA, printed packaging boxes USA, international custom packaging supplier",
};

export const USA_PAGE = {
  eyebrow: "United States enquiries",
  lede:
    "Axis Packaging is a custom packaging supplier. Postal correspondence is at 104 Pudsey Road, Leeds, LS12 3TZ, United Kingdom. US businesses can request custom packaging, including branded boxes and other packs from the catalogue. Orders are dispatched from a UK warehouse to the confirmed US delivery address.",
  support:
    "This page explains how a US quotation works. A product page can describe a possible format. Only the written quotation confirms the specification, the price and the shipping arrangements Axis Packaging can offer. There is no US office, warehouse or factory.",
  primaryCta: { href: "/quote?delivery=US", label: "Request a Quote" },
  secondaryCta: { href: "/products", label: "Browse packaging products" },
  image: {
    src: "/assets/custom-packaging-usa.webp",
    width: 1280,
    height: 720,
    alt: "Illustration of custom packaging formats, including a mailer, folding carton, window box, gift box and paper bag, with fictional brand names",
    caption:
      "Illustration only. Harbor & Rye, Northline Goods and Maple Press are fictional names. This picture does not show an Axis Packaging factory, warehouse, customer or completed US order.",
  },
  contact: {
    phone: "+44 7473 984273",
    phoneHref: "tel:+447473984273",
    email: "info@theaxispackaging.com",
    emailHref: "mailto:info@theaxispackaging.com",
  },
  sections: [
    {
      id: "solutions",
      title: "Custom Packaging Solutions for USA Businesses",
      paragraphs: [
        "Custom packaging USA buyers usually need a pack that fits a real product, carries their branding and can be shipped to a named US address. Axis Packaging supplies custom packaging for UK and US businesses, including cartons, rigid boxes, mailers, food and bakery packaging, retail packaging and paper bags. A style, material, print method or quantity is available only when the quotation says so.",
        "Axis Packaging is an international custom packaging supplier for these orders, not a domestic US supplier. Say whether the pack is a mailer, a counter box, a shelf carton or a gift box, and whether the contents are fragile, food or cosmetic. Freight, timing and import responsibilities are quoted for that order.",
      ],
    },
    {
      id: "printed-boxes",
      title: "Custom Printed Boxes and Branded Packaging",
      paragraphs: [
        "Custom printed boxes USA enquiries should describe the print as well as the box style. Send the words that must appear, the brand colours and the panels the customer sees first. A Pantone reference helps. If you do not have one, describe the colours and send the logo when the conversation starts. Colour matching, a dieline and the print method are confirmed only when the quotation includes them.",
        "Branded packaging USA projects often mix formats, such as a carton and a mailer, or a window box and a bag. Name each format with its own size and quantity. You can supply your own artwork. The form records a file name and does not upload the file. Vector artwork is more useful for print than a low-resolution logo. This page does not offer a free design service.",
      ],
    },
    {
      id: "products",
      title: "Popular Custom Packaging Products for US Businesses",
      paragraphs: [
        "US buyers use the same product pages as UK buyers and add a United States delivery address. These links are starting points, not a promise that every option can be supplied.",
      ],
      groups: [
        {
          title: "Ecommerce and shipping",
          links: [
            { href: "/products/mailer-boxes", label: "Mailer boxes" },
            { href: "/products/kraft-boxes", label: "Printed kraft boxes" },
            { href: "/industries/ecommerce", label: "Ecommerce packaging" },
          ],
        },
        {
          title: "Retail, gifts and branded cartons",
          links: [
            { href: "/products/folding-carton-boxes", label: "Folding carton boxes" },
            { href: "/products/gift-boxes", label: "Gift boxes" },
            { href: "/products/paper-bags", label: "Paper shopping bags" },
            { href: "/industries/retail", label: "Retail packaging" },
            { href: "/industries/gift", label: "Gift packaging" },
          ],
        },
        {
          title: "Food, bakery and cosmetics",
          links: [
            { href: "/products/bakery-boxes", label: "Bakery boxes" },
            { href: "/products/pizza-boxes", label: "Pizza boxes" },
            { href: "/products/cosmetic-boxes", label: "Cosmetic boxes" },
            { href: "/industries/bakery-cake", label: "Bakery and cake packaging" },
            { href: "/industries/restaurant", label: "Restaurant packaging" },
            { href: "/industries/cosmetics", label: "Cosmetics packaging" },
          ],
        },
      ],
    },
    {
      id: "food-retail",
      title: "Custom Packaging for Restaurants, Bakeries and Retailers",
      paragraphs: [
        "Restaurants and bakeries should describe the food before the box: what is packed, whether it is hot, cold, greasy or dry, and whether the customer eats from the pack. A pizza box, a bakery window box and a salad container are different enquiries. For custom food packaging USA orders, write any food-contact requirement in the message. A product page is not approval for that food.",
        "For custom retail packaging USA, say whether the pack is for a shelf, a counter or an unboxing, and whether you need an insert, tissue or window. Cosmetic and other regulated products need the product name, whether the pack touches it, and any document to be checked. Suitability applies to that order only.",
      ],
    },
    {
      id: "specifications",
      title: "Packaging Sizes, Materials and Artwork Requirements",
      paragraphs: [
        "Send the product length, width and height, or the diameter and height if it is round. If you know the box, also send its outside length, width and depth. State inches or millimetres, and say whether each figure is the product or the finished pack. Add clearance for an insert, tissue, a window or food. If you only know the product size, say the box size is still to be agreed.",
        "A size or material on a product page is a proposed packaging option. It is a confirmed supplier specification only when the quotation states the size, board, print and construction that can be supplied. Name kraft, carton board, corrugated board or a rigid box as a preference, with the product weight and how the pack is stacked, posted or handed over. A named grade or finish still has to be checked. A dieline is not required to start.",
      ],
    },
    {
      id: "how-to-order",
      title: "How to Order Custom Packaging in the USA",
      paragraphs: [
        "US customers request a quote on the same forms as UK customers. Choose United States, then add the delivery city, state and ZIP code. You can change the country if the delivery address is in the United Kingdom instead. Axis Packaging does not detect the country from your IP address.",
      ],
      steps: [
        {
          title: "Choose the format",
          body: "Pick the closest product page or describe the pack. Name one format at a time if the order mixes several.",
        },
        {
          title: "Measure the product and the pack",
          body: "Send product measurements and any known outside box dimensions, with the unit and which object you measured.",
        },
        {
          title: "Describe print, colour and quantity",
          body: "State the quantity you want quoted. No minimum is published here. A first run and a later repeat can be separate lines.",
        },
        {
          title: "Add the US destination",
          body: "Give the delivery city, state and ZIP code, plus a suite or dock note if the carrier needs it.",
        },
        {
          title: "Review the quotation",
          body: "Quotation requests receive a 24h quote response. The reply confirms what can be offered. It is not an order.",
        },
      ],
    },
    {
      id: "shipping",
      title: "Dispatch from a UK Warehouse to the United States",
      paragraphs: [
        "Orders for US customers are dispatched from a UK warehouse directly to the confirmed delivery address. Axis Packaging does not ship them from a US warehouse. The packaging specification is agreed before an order proceeds. Shipping cost depends on the order and the destination. Mailers to one ZIP code are not the same calculation as a larger shipment to another state.",
        "Delivery estimates are quoted individually. There is no guaranteed transit time, free international shipping or standard rate on this website. Dispatch from the UK warehouse does not remove US customs, duties, taxes or importer responsibilities. Those points depend on the shipment and are agreed as part of the shipping terms. Axis Packaging does not publish a tariff or a duty-free threshold, and it does not guarantee customs clearance.",
        "Before an order is confirmed, three points need an answer: who the importer of record is, whether a customs broker is involved, and which shipping terms apply. DDP, DAP, FOB and other Incoterms are not an automatic default. If a term is offered, it is written on that quotation.",
        "Import paperwork stays with the importer unless the quotation says otherwise. Country of origin is confirmed for the shipment when the documents require it. The UK warehouse location is not a statement of where the packaging was manufactured. [U.S. Customs and Border Protection](https://www.cbp.gov/) explains how goods are entered. That guidance is not legal advice, and it does not mean Axis Packaging files the entry.",
        "Food packaging, cosmetic packaging and other regulated uses need the product, the contact conditions and any document checked for that order. Suitability is not an FDA approval, and Axis Packaging does not claim one. The [U.S. Food and Drug Administration](https://www.fda.gov/) publishes its own food-contact guidance. A quotation covers a compliance point only after that point has been checked.",
      ],
    },
    {
      id: "small-business",
      title: "Custom Packaging for Small Businesses and Growing Brands",
      paragraphs: [
        "Custom packaging for small business USA enquiries are welcome for a first run or a later repeat. There is no published price and no published minimum order quantity. The quotation says whether your quantity can be supplied and what it costs, including freight. Wholesale custom packaging USA is the same process at a larger quantity. It is not a stock programme or a US warehousing service.",
        "Printed packaging boxes USA projects are easier to quote when you say whether the artwork is finished, in progress or still an idea. Customer support is available 24/7 by phone or email. That support is not a guaranteed design service or a guaranteed sample.",
      ],
    },
    {
      id: "quote-request",
      title: "What to Include in a USA Packaging Quote Request",
      paragraphs: [
        "A useful request is specific enough to price and honest about what is still unknown. You do not need a finished dieline to begin. You do need a destination in the United States if that is where the packaging must arrive.",
      ],
      checklist: [
        "Your name, email, phone and business name",
        "The packaging format, or the closest product page",
        "What the pack holds, including food or cosmetic contact if that applies",
        "Product measurements and any known box dimensions, in inches or millimetres",
        "Print, brand colours and whether the artwork is ready",
        "The quantity to quote, and a material preference to be checked",
        "The delivery city, state and ZIP code, plus a suite or dock note if the carrier needs it",
        "Any compliance document that must be checked before you can proceed",
      ],
    },
  ],
  trustTitle: "Why Work with Axis Packaging?",
  trustIntro:
    "These are facts about how Axis Packaging works. They are not customer reviews, awards or claims about completed US projects.",
  trust: [
    {
      title: "A UK contact for a US enquiry",
      body: "Postal correspondence is 104 Pudsey Road, Leeds, LS12 3TZ. Call +44 7473 984273 or email info@theaxispackaging.com. There is no US telephone number or US office listed here.",
    },
    {
      title: "A wide custom packaging catalogue",
      body: "Cartons, rigid boxes, mailers, food and bakery packaging, retail packaging and paper bags can be discussed from the product pages.",
    },
    {
      title: "A quotation for the product you named",
      body: "The reply uses the format, size, print, quantity and destination you send, and states the packaging, price and delivery arrangements that can be offered.",
    },
    {
      title: "Support while you decide",
      body: "Customer support is available 24/7, and quotation requests receive a 24h quote response. You can discuss the requirement before you proceed.",
    },
    {
      title: "USA shipping, stated plainly",
      body: "Custom packaging orders can be supplied and shipped to USA customers. They are dispatched from a UK warehouse, and the cost and timing are confirmed on the quotation.",
    },
    {
      title: "Pricing explained on the quotation",
      body: "Prices are not published because they depend on the order. Freight, duties and importer responsibilities are set out in the quotation.",
    },
  ],
  faqsTitle: "Frequently Asked Questions About USA Packaging Orders",
  faqs: [
    {
      question: "Does Axis Packaging deliver custom packaging to the USA?",
      answer:
        "Yes. US businesses can request custom packaging. Orders are dispatched from a UK warehouse to the confirmed US delivery address. The quotation confirms the specification, shipping cost and delivery arrangements. Axis Packaging does not operate a US office, warehouse or factory.",
    },
    {
      question: "Where are orders shipped from?",
      answer:
        "Orders for UK and US customers are dispatched from a UK warehouse to the delivery address on the quotation. Postal correspondence is 104 Pudsey Road, Leeds, LS12 3TZ, United Kingdom. That Leeds address is for correspondence, and it is not published as the warehouse address.",
    },
    {
      question: "Can US businesses order custom printed boxes?",
      answer:
        "Yes. Print colours, artwork, box style and quantity are discussed on the quotation. A product page is a proposed format. Only the written quotation confirms the specification Axis Packaging can supply.",
    },
    {
      question: "What packaging dimensions should I provide?",
      answer:
        "Send the product length, width and height, or diameter and height if it is round, plus the outside box length, width and depth if you know them. State inches or millimetres, and say whether each figure is the product or the finished box. If the box size is unknown, say so.",
    },
    {
      question: "How do I request a USA packaging quote?",
      answer:
        "Use the quotation form, select United States, and add the city, state and ZIP code with the format, quantity, dimensions and print notes. Quotation requests receive a 24h quote response. The reply is a quotation to review, not a confirmed order.",
    },
    {
      question: "Can I submit my own artwork or branding?",
      answer:
        "Yes. Describe the words, brand colours and logo position, and name the file on the form. The file is not uploaded. Send it when Axis Packaging replies. Artwork does not by itself confirm colour matching, a dieline or a print method.",
    },
    {
      question: "How are shipping costs and delivery estimates calculated?",
      answer:
        "Freight depends on the order and the US destination, and the delivery estimate is quoted individually. There is no published international rate, free-shipping offer or guaranteed delivery date. Duties and taxes also depend on the shipment.",
    },
    {
      question: "Who handles US customs duties and clearance?",
      answer:
        "The importer, any customs broker and the shipping terms must be agreed before an order is confirmed. Axis Packaging does not guarantee clearance or publish a duty rate, and no Incoterm is the default. The quotation names who is responsible.",
    },
    {
      question: "Can US customers request packaging samples?",
      answer:
        "You can ask. Availability, suitability, any cost and delivery are confirmed individually. A request is not a promise that a sample will be sent, and a sample is not the finished production specification.",
    },
    {
      question: "Is packaging suitable for food or regulated products?",
      answer:
        "Not automatically. Food, cosmetic and other regulated uses need the product and any required documents checked for that order. Axis Packaging does not claim FDA approval. Write the requirement in the enquiry so it can be reviewed before it is treated as agreed.",
    },
  ],
  closing: {
    title: "Request a USA packaging quotation",
    body: "Tell Axis Packaging what you need to pack, the quantity, the print and the US city, state and ZIP code. The quotation will set out what can be supplied and how dispatch from a UK warehouse would be arranged. Quotation requests receive a 24h quote response.",
    primary: { href: "/quote?delivery=US", label: "Request a Quote" },
    secondary: { href: "/contact", label: "Contact Axis Packaging" },
  },
};

export function usaLandingJsonLd() {
  return [
    organizationSchema(),
    localBusinessSchema(),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Custom Packaging USA", path: USA_PAGE_SEO.path },
    ]),
    webPageSchema({
      title: USA_PAGE_SEO.title,
      description: USA_PAGE_SEO.description,
      path: USA_PAGE_SEO.path,
      inLanguage: "en-US",
    }),
    serviceSchema({
      name: "Custom Packaging for USA Businesses",
      description:
        "Custom packaging quotations for businesses in the United States. Orders are dispatched from a UK warehouse to the confirmed delivery address. Specifications, shipping and import responsibilities are confirmed on the quotation. The business contact remains in Leeds.",
      path: USA_PAGE_SEO.path,
      image: USA_PAGE.image.src,
      areaServed: "United States",
    }),
    faqPageSchema(USA_PAGE.faqs),
  ].filter(Boolean);
}
