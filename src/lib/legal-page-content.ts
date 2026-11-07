/**
 * Factual privacy notice for the current website.
 * The date is the date of this correction. Change it if publication is approved on a later day.
 * Do not describe this notice as legally certified.
 */
export const PRIVACY_PAGE = {
  h1: "Privacy Policy",
  updated: "7 November 2026",
  intro:
    "Axis Packaging supplies custom packaging to businesses in the United Kingdom and the United States. This notice explains what this website does with personal information. It is not a security certification.",
  sections: [
    {
      title: "How to contact us",
      paragraphs: [
        "Email info@theaxispackaging.com, call +44 7473 984273, or write to 104 Pudsey Road, Leeds, LS12 3TZ, United Kingdom. Use the same details for a privacy question, a request for access or correction, or a complaint.",
        "The Leeds address is for letters. It is not the warehouse and it is not a factory. Orders are dispatched from a UK warehouse to the delivery address agreed for an order. This notice does not give the warehouse street, and it does not say that Axis Packaging owns the warehouse or manufactures the packaging in the United Kingdom.",
      ],
    },
    {
      title: "What the enquiry forms collect",
      paragraphs: [
        "The forms on the homepage, on product pages, at /quote and at /contact can collect your name, email address and telephone number, a company name where the form asks for one, and the packaging details you enter. Those details can include the product, quantity, dimensions, material, print, finishing, options, timing, budget and your message.",
        "The forms also ask whether delivery is in the United Kingdom or the United States. For the United Kingdom they ask for a town and postcode. For the United States they ask for a city, state and ZIP code. You can add a destination note.",
        "If you select an artwork file, the enquiry records the file name only. The file is not uploaded. There is no newsletter signup on this website.",
      ],
    },
    {
      title: "What happens when you send a form",
      paragraphs: [
        "Sending a form asks for a quotation. The website does not create an order and it does not take a payment. It does not save the enquiry in a database on the site.",
        "If the server accepts the form, it sends one email to the Axis Packaging mailbox, with your email address as the reply address. The email contains the details you entered, including the artwork file name when you selected one. A hidden field on the form is used only to catch automated submissions. The server also limits repeated submissions for a short time. That limit is not a saved customer record.",
        "The on-page chat does not send what you type to Axis Packaging. Links to WhatsApp, Facebook, Instagram and LinkedIn open those services. They are not embedded trackers.",
      ],
    },
    {
      title: "Why we use the information",
      paragraphs: [
        "We use the form details to reply, prepare a quotation, discuss a sample where you have asked about one, and carry out an order if one is later confirmed in writing. Delivery details are used to identify a UK or USA address.",
        "For those quotation and order messages, the lawful basis is steps you ask us to take before a contract, and the contract if an order is confirmed. The checks that reduce automated form abuse are used because of our legitimate interest in keeping the form available. Optional analytics, described below, is used only with your consent. These bases describe the forms as they work today. They are not a solicitor’s certificate.",
      ],
    },
    {
      title: "Analytics and cookies",
      paragraphs: [
        "Optional analytics uses Google Analytics 4, measurement ID G-7CGWJZE8QL. The analytics script does not load, and analytics cookies are not set, until you choose Accept Analytics. Reject Analytics leaves analytics off. Continued browsing is not treated as consent.",
        "Cookie Preferences in the footer lets you change that choice. The choice is stored in this browser under the name axis_analytics_consent, as granted or denied. It is not an advertising profile. Advertising storage, advertising user data and ad personalisation stay off.",
        "If you accept and later reject, the analytics cookies this site can clear are removed and further analytics requests from that page are blocked. If you have already typed into a form, the page is not reloaded, so that typing stays. If the form has no unsaved entries, the page reloads with analytics off. A script that was already downloaded is not treated as gone until that reload.",
        "When analytics is on and the server has accepted an enquiry, one lead event can be sent. It contains the form name, whether delivery is GB or US, the page path, and sometimes a short product category. It does not contain your name, email, telephone number, address or message. A failed submission does not send that event.",
        "For the rest of the browser session, the site may remember GB or US so the next form opens on the same country. That value does not include your name or address. The forms do not save your name, email or telephone number in local storage.",
      ],
    },
    {
      title: "Who else receives information",
      paragraphs: [
        "The enquiry email goes to the mailbox configured for this website. The name of the email provider is set outside the website, so it is not named here. This website is hosted on Vercel. If you accept analytics, Google processes that measurement.",
        "A carrier and the UK warehouse receive delivery details when an order is fulfilled. Their names are not published on this website. Enquiry lists from this website are not sold.",
        "Google, if you accept analytics, and Vercel can process information outside the United Kingdom. The email provider may do the same. This notice does not name a transfer safeguard, because none is set in the website.",
      ],
    },
    {
      title: "How long information is kept",
      paragraphs: [
        "The website does not keep its own copy of an enquiry, so it cannot delete one on a timer. The record is the email in the business mailbox.",
        "A future review of closed enquiries that did not become an order, about one month after they close, has not been adopted and is not carried out. Deletion is not automatic. This notice does not promise that an enquiry email is removed after one month.",
        "That one-month intention does not cover an enquiry that is still open, a confirmed or completed order, an invoice or other accounting record, a complaint or legal claim, or a record the law requires to be kept. Hosting logs follow the host. Google Analytics data follows the GA4 property and is collected only after you accept analytics. Those periods are not set in this website.",
        "The analytics choice stays in the browser until you change it or clear site data. The delivery-country value ends when the browser session ends.",
      ],
    },
    {
      title: "Your rights",
      paragraphs: [
        "You can ask for a copy of your information, a correction, deletion or restriction, and you can object to processing that is based on legitimate interests. You can withdraw analytics consent at any time with Cookie Preferences, or by emailing info@theaxispackaging.com.",
        "You can complain to the Information Commissioner’s Office at https://ico.org.uk/. A record may still be kept where an order, a payment, a complaint or the law requires it. No data-protection officer is named.",
        "United States state privacy laws apply only where their conditions are met. This notice does not say that those conditions are met, and it does not add a “do not sell or share” link on that basis.",
      ],
    },
    {
      title: "Changes to this notice",
      paragraphs: [
        "The notice published on this page is the one in force. It replaces the January 2024 text, including the newsletter sentence and the previous privacy email address. This notice has no approval certificate.",
      ],
    },
  ],
};

type TermsSection = {
  title: string;
  paragraphs: string[];
  subsections?: Array<{ title: string; paragraphs: string[] }>;
};

/**
 * Business terms for quotations and confirmed orders.
 * The date is the date of this local text. It is not a solicitor’s approval date.
 * Do not describe these terms as legally certified.
 */
export const TERMS_PAGE: {
  h1: string;
  updated: string;
  intro: string;
  sections: TermsSection[];
} = {
  h1: "Terms and Conditions",
  updated: "7 November 2026",
  intro:
    "Axis Packaging supplies custom packaging, including packaging boxes and paper bags, to businesses in the United Kingdom and the United States. These terms explain the quotations, samples, payment and delivery policies that apply today. They are not a solicitor’s certificate, and they do not guarantee legal compliance.",
  sections: [
    {
      title: "What these terms cover",
      paragraphs: [
        "Phone: +44 7473 984273. Email: info@theaxispackaging.com.",
        "Postal correspondence: 104 Pudsey Road, Leeds, LS12 3TZ, United Kingdom. That address is for letters. It is not the warehouse and it is not a factory. These terms do not say that Axis Packaging owns the warehouse, and they do not say that the packaging is manufactured in the United Kingdom.",
        "If you are buying as an individual for purposes outside your business, UK or US consumer law may give you rights that a contract cannot remove. These terms do not remove those rights, or any other right the law does not allow a contract to remove.",
      ],
    },
    {
      title: "What this website does",
      paragraphs: [
        "The product pages describe packaging you can ask us to quote. Pictures described as illustrative concepts are not photographs of stock and are not photographs of a finished order.",
        "The forms on the homepage, on a product page, at /quote and at /contact ask for a quotation. The website does not create an order, does not take a payment, and does not keep the enquiry in a database. If you select an artwork file, only the file name is recorded. The file is not uploaded.",
        "The specification that can be ordered is the one later set out in the quotation and, if you proceed, in the written confirmation of the order.",
      ],
    },
    {
      title: "Quotations",
      paragraphs: [
        "A quotation is valid for one calendar month from the date it is issued. If you want to proceed at the quoted price, confirm the quotation within that period.",
        "Sending a form, or receiving a quotation, is not an order. While the quotation is valid, the price is the price stated on it.",
      ],
    },
    {
      title: "Samples",
      paragraphs: [
        "Where a sample is part of the work, the sample itself is free. It is provided so you can approve it before the order is placed or confirmed. Approving the sample is part of the order confirmation process.",
        "Approving the sample is not, by itself, the written confirmation of the order, and it does not by itself make the advance payment due. The order is confirmed when that confirmation is made in writing.",
        "These terms do not say that a sample is available for every product. They do not say that sending the sample is free. If a charge applies to sending the sample, it is the charge stated on the quotation. No sample lead time is published here.",
        "Approving a sample and approving final artwork are different steps. The sample is the physical piece sent for review. The print on the order is the print described when the order is confirmed. These terms do not set a colour tolerance.",
      ],
    },
    {
      title: "Payment",
      paragraphs: [
        "A confirmed order requires a 50% advance payment. The remaining 50% is due on the same calendar day you receive the parcel.",
        "These terms do not name a payment method, a bank account, a processing fee, interest, or a late charge.",
      ],
    },
    {
      title: "Order confirmation",
      paragraphs: [
        "An order is not confirmed by the website form, by the quotation alone, or by approval of a sample on its own. It is confirmed when you and Axis Packaging confirm it in writing. The website does not generate that confirmation.",
        "After confirmation, the packaging is supplied to the confirmed specification and dispatched from a UK warehouse to the United Kingdom or United States address on the order.",
      ],
    },
    {
      title: "Cancellation",
      paragraphs: [
        "You may cancel before the order is confirmed in writing. After confirmation, an order ordinarily cannot be cancelled.",
        "These terms do not add a cancellation penalty, and they do not say that a payment is forfeited automatically. They do not remove a statutory right, including a right the law does not allow a contract to remove. A right that applies where packaging arrives damaged, or where the print does not match the approved specification, also remains.",
        "A change to size, quantity, material, print or delivery address after confirmation has to be agreed in writing. An agreed change can affect the price and the time.",
      ],
    },
    {
      title: "Damaged packaging and incorrect printing",
      paragraphs: [
        "Axis Packaging will replace packaging that arrives damaged, or that has printing which does not match the specification you approved.",
        "That is the remedy stated here. These terms do not set a deadline for reporting the problem, a compensation amount, a list of evidence, or any warranty beyond this replacement. They do not remove a statutory right that applies to the order.",
        "The pictures on the website are not the specification. The specification is the one in the written confirmation.",
      ],
    },
    {
      title: "Delivery and customs",
      paragraphs: [
        "The two points below are the delivery and customs policy for confirmed UK and USA orders. This page does not add a delivery time.",
      ],
      subsections: [
        {
          title: "Delivery",
          paragraphs: [
            "Confirmed orders for customers in the United Kingdom and the United States are dispatched from a UK warehouse directly to the delivery address on the order. The warehouse street is not published.",
            "Axis Packaging is responsible for the delivery charges of that agreed UK or USA delivery. A different address or an extra service is included only when the quotation or the written confirmation says so.",
          ],
        },
        {
          title: "Customs costs",
          paragraphs: [
            "Axis Packaging is responsible for the customs costs of the UK and USA deliveries it arranges under the order.",
            "These terms do not name an Incoterm, an importer of record, a tax registration, or a customs procedure. Those points are not decided on this page.",
          ],
        },
      ],
    },
    {
      title: "Customer support",
      paragraphs: [
        "Axis Packaging provides customer support 24 hours a day, seven days a week. You can call +44 7473 984273 or email info@theaxispackaging.com.",
        "These terms do not promise that a quotation request or other enquiry is answered within 24 hours. Customer support is not a production date or a delivery date.",
      ],
    },
    {
      title: "Artwork and specification",
      paragraphs: [
        "You are responsible for the sizes, quantities, materials and wording you ask us to quote, and for having the right to use the artwork and names you supply. You allow Axis Packaging to use that material to prepare a quotation, a sample where a sample is used, and the confirmed order.",
        "Packaging is quoted for the product and use you describe. A food-contact, cosmetic or other regulated suitability is confirmed only if the quotation or the written confirmation says so.",
      ],
    },
    {
      title: "What these terms do not decide",
      paragraphs: [
        "The earlier sections state the business policies for a quotation and a confirmed order. This section is different. It records points that have not been legally settled, so they are not added as extra obligations.",
        "These terms do not choose a governing law or a court. They do not set a limit on liability, and they do not exclude liability that the law does not allow a contract to exclude, including liability for death or personal injury caused by negligence, or for fraud.",
        "These terms do not name a registered company or a company number. A liability or dispute clause would need a separate legal review before it could be added. None is added here.",
      ],
    },
    {
      title: "Contact",
      paragraphs: [
        "For a question about these terms, email info@theaxispackaging.com or call +44 7473 984273. You can also write to 104 Pudsey Road, Leeds, LS12 3TZ, United Kingdom. Personal information is explained on the Privacy Policy page.",
      ],
    },
    {
      title: "Changes to these terms",
      paragraphs: [
        "These terms replace the January 2024 text, including the previous legal contact email. They apply to a new quotation from the date on this page. They do not rewrite a confirmation that has already been sent.",
      ],
    },
  ],
};
