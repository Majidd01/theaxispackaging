export type FaqPageItem = { id: string; question: string; answer: string; category: string };

export const FAQ_PAGE_COPY = {
  badge: "Help Center",
  h1: "Frequently Asked Questions",
  intro:
    "Find comprehensive answers to all your questions about custom packaging solutions, ordering process, and our services",
  supportTitle: "Still Have Questions?",
  supportBody:
    "Our packaging experts are here to help. Get personalized answers to your specific questions and find the perfect solution for your needs.",
  supportStats: [
    { value: "24/7", label: "Customer Support" },
    { value: "Responsive Customer Support", label: "" },
    { value: "Customer Satisfaction Is Our Priority", label: "" },
  ],
  contactSupport: "Contact Support",
  customQuote: "Get Custom Quote",
};

export const FAQ_PAGE_ITEMS = [
    {
      id: "1",
      question: "What are your minimum order quantities?",
      answer: `Minimum order quantities depend on the product and the printing. A minimum is not published on this page. Tell us the product and the quantity you need, and we will confirm it on your quotation.`,
      category: "Orders",
    },
    {
      id: "2",
      question: "What are your turnaround times?",
      answer: `Production timing depends on the packaging, the print and the quantity. We confirm the expected timing on your quotation. Those dates are estimates and are not a guaranteed delivery time. Quotation requests receive a 24h quote response.`,
      category: "Production",
    },
    {
      id: "3",
      question: "What are your payment terms?",
      answer: `Payment terms are confirmed on your quotation. Deposits, credit terms and card fees are not published on this page.`,
      category: "Pricing",
    },
    {
      id: "4",
      question: "Do you offer free samples?",
      answer: `Ask us if a sample is available for the packaging you need. Any sample cost or timing is confirmed when you request it.`,
      category: "Orders",
    },
    {
      id: "5",
      question: "Do you ship internationally?",
      answer: `Tell us the delivery address and the packaging, and we will confirm the shipping options on your quotation. We do not publish a guaranteed delivery time.`,
      category: "Shipping",
    },
    {
      id: "6",
      question: "Do you offer design services?",
      answer: `Tell us if you need help with artwork or structure. Design support and any related cost are confirmed on your quotation. Customer satisfaction is our priority.`,
      category: "Customization",
    },
    {
      id: "7",
      question: "How do I place an order?",
      answer: `Contact us by phone, email or the quotation form. Share the product, the quantity and any artwork. Quotation requests receive a 24h quote response, and 24/7 customer support is available.`,
      category: "Orders",
    },
    {
      id: "8",
      question: "Do you have volume discounts?",
      answer: `Prices depend on the product, the print and the quantity. Include the quantities you are considering and we will show the relevant prices on your quotation. Percentage discounts are not published on this page.`,
      category: "Pricing",
    },
  ];
