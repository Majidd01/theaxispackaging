"use client";

import { ChatSupport } from "@/components/chat-support";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setActiveCategory } from "@/lib/slices/faqsSlice";
import { HelpCircle, MessageCircle, Search, ArrowLeft, Users, Clock, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function FAQsPage() {
  const dispatch = useAppDispatch();
  const { faqs, activeCategory } = useAppSelector((state) => state.faqs);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const categories = ["Orders", "Production", "Customization", "Materials", "Shipping", "Pricing"];

  // Extended FAQ data with more comprehensive answers
  const extendedFAQs = [
    {
      id: "1",
      question: "What are your minimum order quantities?",
      answer: `Our minimum order quantity (MOQ) depends on the specific product line and customization requirements. Here's a comprehensive breakdown:

**Product-Specific MOQs:**

**Boxes & Packaging:**
• Custom Folding Carton Boxes: 1,000 boxes minimum
• Corrugated Boxes: 500 boxes minimum
• Premium Rigid Boxes: 500 boxes minimum
• Food Grade Boxes: 5,000 boxes minimum

**Bags & Pouches:**
• Paper Shopping Bags: 1,000 bags minimum
• Gusset Bags: 10,000 bags minimum
• Stand-up Pouches: 10,000 pouches minimum
• Kraft Pouches: 10,000 pouches minimum

**Inserts & Displays:**
• Custom Box Inserts: 1,000 inserts minimum
• Molded Pulp Inserts: 10,000 inserts minimum
• Food Grade Paper Inserts: 5,000 inserts minimum
• Floor Displays: 100 displays minimum

**Other Products:**
• Cup Sleeves: 10,000 sleeves minimum
• Labels & Stickers: 1,000 labels minimum
• Kraft Paper Mailers: 10,000 mailers minimum
• Poly Mailers: 10,000 mailers minimum
• Recycled Bubble Mailers: 10,000 mailers minimum
• Bubble Mailers: 10,000 mailers minimum
• Packing Tape: 500 rolls minimum
• Tissue Paper: 10,000 sheets minimum
• Food Grade Tissue Paper: 10,000 sheets minimum

**Why These MOQs?**

Our MOQs are optimized for customer benefit based on tooling and setup costs. For reference, an offset (lithography) printed corrugated box with a minimum quantity of 500 boxes will cost just as much in setup fees for a lower quantity.

**Special Considerations:**

• **New Customers:** We may require higher MOQs initially
• **Custom Designs:** Complex designs may have higher minimums
• **Material Selection:** Premium materials may affect minimum quantities
• **Rush Orders:** Express production may require higher quantities

For special projects or unique requirements, we may be able to accommodate smaller orders. Please reach out to our product specialists for detailed information regarding the MOQ for your specific product needs.

**Volume Discounts Available:**

• 100-499 units: Base pricing
• 500-999 units: 5% discount
• 1,000-2,499 units: 10% discount
• 2,500-4,999 units: 15% discount
• 5,000-9,999 units: 20% discount
• 10,000+ units: 25% discount

We strive to accommodate orders of various sizes to meet our customers' diverse needs, so don't hesitate to contact us!`,
      category: "Orders",
    },
    {
      id: "2",
      question: "What are your turnaround times?",
      answer: `Our production timeline varies based on several factors. Here's a detailed breakdown:

**Standard Production Times by Product Type:**

**Simple Products (10-15 business days):**
• Basic corrugated boxes with simple printing
• Standard folding cartons
• Simple labels and stickers
• Basic paper bags

**Complex Products (15-25 business days):**
• Multi-color printed boxes
• Custom die-cut shapes
• Foil stamping and embossing
• Complex structural designs
• Premium rigid boxes

**Large Orders (20-30 business days):**
• Orders over 10,000 units
• Multiple SKU orders
• Complex finishing processes
• Seasonal rush periods

**Rush Order Options:**

**Express Production (5-7 business days):**
• Additional 25% rush fee
• Available for most products
• Subject to material availability
• Limited customization options

**Super Rush (3-5 business days):**
• Additional 50% rush fee
• Available for select products
• Premium material options only
• Basic customization only

**Factors Affecting Timeline:**

**Design & Artwork:**
• Artwork complexity and approval time
• Number of design revisions
• Custom illustrations or graphics
• Color matching requirements

**Production Processes:**
• Material availability and sourcing
• Finishing processes (foil, embossing, etc.)
• Quality control procedures
• Testing and certification requirements

**Order Volume & Seasonality:**
• Peak season demand (Q4 holidays)
• Material supply chain delays
• Factory capacity and scheduling
• Shipping and logistics

**Quality Assurance Steps:**

1. **Pre-Production Review** (1-2 days)
2. **Material Preparation** (2-3 days)
3. **Production Process** (5-15 days)
4. **Quality Inspection** (1-2 days)
5. **Packaging & Shipping** (1-3 days)

**Timeline Guarantees:**

• All dates provided are estimates
• Production times subject to change
• Rush orders have priority scheduling
• Weather and force majeure events may affect timelines

**How to Expedite Your Order:**

1. **Plan Ahead:** Avoid last-minute requests
2. **Use Standard Materials:** Custom materials add time
3. **Simplify Designs:** Complex artwork increases production time
4. **Order During Off-Peak:** Q1 and Q2 typically faster
5. **Consider Rush Options:** Available for urgent needs

Please note that all dates provided are estimates and not guaranteed. Production times are subject to change without prior notice due to the dynamic nature of order volumes.`,
      category: "Production",
    },
    {
      id: "3",
      question: "What are your payment terms?",
      answer: `We offer flexible payment terms to accommodate different business needs and customer relationships:

**Standard Payment Terms:**

**New Customers:**
• 100% payment required before production begins
• Payment due upon order confirmation
• No credit terms until relationship established

**Established Customers (3+ successful orders):**
• 50% deposit upon order confirmation
• 50% balance due before shipping
• Net 30 terms available for qualified accounts

**Large Volume Customers (Annual contracts):**
• 25% deposit upon order confirmation
• 50% payment at production start
• 25% balance due before shipping
• Net 45 terms available

**Accepted Payment Methods:**

**Electronic Payments:**
• Bank wire transfer (preferred for large orders)
• ACH transfers (US customers only)
• Credit cards: Visa, MasterCard, American Express
• PayPal (for orders under $5,000)

**Traditional Payments:**
• Company checks (US customers only)
• Cashier's checks
• Money orders
• Letter of credit (international orders over $50,000)

**International Payment Options:**

**Standard International:**
• 100% payment required before production
• Payment in USD or EUR only
• Bank wire transfer preferred
• 3-5 business days processing time

**DDP (Delivered Duty Paid):**
• Available for select countries
• Includes all duties and taxes
• Higher upfront cost but simplified delivery
• Available for orders over $25,000

**Volume Discounts & Payment Incentives:**

**Early Payment Discounts:**
• 2% discount for payment within 10 days
• 1% discount for payment within 15 days
• Standard terms: Net 30

**Volume-Based Payment Terms:**
• Orders $5,000-$10,000: Net 30
• Orders $10,000-$25,000: Net 45
• Orders $25,000+: Net 60
• Annual contracts: Custom terms available

**Seasonal Payment Programs:**

**Q4 Holiday Rush:**
• Extended payment terms available
• Special financing options
• Flexible payment schedules
• Volume commitment incentives

**Q1-Q2 Off-Peak:**
• Early payment discounts
• Flexible payment terms
• Special promotional pricing
• Extended credit options

**Payment Security & Guarantees:**

**Order Protection:**
• All payments held in escrow until production
• 100% money-back guarantee if specifications not met
• Insurance coverage for all orders
• Secure payment processing

**Credit Application Process:**

1. **Complete Application Form**
2. **Provide Business References**
3. **Credit Check & Verification**
4. **Terms Negotiation**
5. **Credit Limit Establishment**

**Late Payment Policies:**

• 1-15 days late: 1.5% monthly interest
• 16-30 days late: 2% monthly interest
• 31+ days late: 3% monthly interest
• 60+ days late: Account suspension

**Payment Plan Options:**

• **Installment Plans:** Available for orders over $10,000
• **Seasonal Payment:** Align with your business cash flow
• **Milestone Payments:** Based on production progress
• **Custom Schedules:** Tailored to your needs

For new customers, we may require full payment upfront until credit terms are established. Please contact our sales team to discuss payment options that work best for your business.`,
      category: "Pricing",
    },
    {
      id: "4",
      question: "Do you offer free samples?",
      answer: `Yes, we offer comprehensive sample programs to help you make informed decisions about your packaging solutions:

**Free Sample Policy:**

**First-Time Customers:**
• 1 free sample of their chosen product
• Free shipping within continental US
• Sample customization available
• No setup fees for basic samples

**Existing Customers:**
• Free samples for new product lines
• Free samples for design changes
• Free samples for material testing
• Priority sample processing

**Returning Customers (Annual):**
• 3 free samples per quarter
• Free samples for all new products
• Expedited sample shipping
• Custom sample creation

**Sample Types Available:**

**Blank Samples (Always Free):**
• Unprinted product samples
• Material swatches and samples
• Size and dimension samples
• Structural design samples

**Printed Samples:**
• Basic 1-color printing: Free
• 2-color printing: $25 setup fee
• Full-color printing: $50 setup fee
• Custom artwork: $75 setup fee

**3D Mockups & Prototypes:**
• Digital 3D renderings: Free
• Physical prototypes: Free for orders over $2,000
• Interactive mockups: Available for complex designs
• Virtual reality previews: Premium service

**Sample Request Process:**

**Step 1: Sample Request**
• Contact our sales team with requirements
• Specify product type and quantity needed
• Provide your shipping address
• Indicate any special requirements

**Step 2: Sample Preparation**
• Samples typically prepared within 2-3 business days
• Custom samples may take 5-7 business days
• Rush samples available with additional fees
• Quality inspection before shipping

**Step 3: Sample Delivery**
• Free shipping within continental US
• International shipping at cost
• Tracking information provided
• Delivery confirmation required

**Sample Limitations & Policies:**

**Quantity Limits:**
• Maximum 3 free samples per customer per month
• Additional samples at cost
• Bulk sample requests require approval
• Sample destruction policy applies

**Usage Restrictions:**
• Samples for evaluation purposes only
• Cannot be used for commercial purposes
• Cannot be resold or distributed
• Return policy applies to paid samples

**Sample Customization Options:**

**Basic Customization (Free):**
• Standard sizes and shapes
• Basic color options
• Standard materials
• Simple text or logo

**Advanced Customization (Fees Apply):**
• Custom sizes and shapes
• Special materials and finishes
• Complex artwork and designs
• Special effects and treatments

**Sample Quality Guarantee:**

• All samples meet production standards
• Material consistency guaranteed
• Print quality representative of production
• Structural integrity verified

**Sample Follow-Up:**

**After Receiving Samples:**
• 7-day feedback period
• Design modification requests
• Material preference changes
• Quantity adjustments

**Sample to Production:**
• Samples approved within 30 days
• Production starts within 5 business days
• Sample specifications maintained
• Quality consistency guaranteed

**Special Sample Programs:**

**Designer Samples:**
• Free samples for packaging designers
• Portfolio development assistance
• Trend and innovation samples
• Industry-specific samples

**Trade Show Samples:**
• Special pricing for trade show displays
• Custom branding options
• Bulk sample packages
• Expedited delivery available

**Educational Samples:**
• Free samples for educational institutions
• Student project assistance
• Research and development support
• Industry training materials

For custom printed samples, there may be a nominal setup fee to cover artwork preparation and printing costs. Contact our sample team for specific pricing and availability.`,
      category: "Orders",
    },
    {
      id: "5",
      question: "Do you ship internationally?",
      answer: `Yes, we ship worldwide to over 50 countries with comprehensive international shipping solutions:

**International Shipping Coverage:**

**North America:**
• United States (all 50 states)
• Canada (all provinces and territories)
• Mexico (all states)
• Caribbean nations

**Europe:**
• United Kingdom, Germany, France
• Italy, Spain, Netherlands, Belgium
• Switzerland, Austria, Scandinavia
• Eastern European countries

**Asia-Pacific:**
• China, Japan, South Korea
• Singapore, Australia, New Zealand
• India, Thailand, Vietnam
• Malaysia, Indonesia, Philippines

**Middle East & Africa:**
• UAE, Saudi Arabia, Israel
• South Africa, Egypt, Morocco
• Turkey, Jordan, Lebanon
• Nigeria, Kenya, Ghana

**South America:**
• Brazil, Argentina, Chile
• Colombia, Peru, Ecuador
• Uruguay, Paraguay, Bolivia
• Venezuela, Guyana, Suriname

**Shipping Methods & Timeline:**

**Air Freight (3-7 business days):**
• Fastest delivery option
• Best for urgent orders
• Higher cost but reliable
• Full tracking and insurance

**Sea Freight (15-30 business days):**
• Most economical option
• Best for large orders
• Container and LCL options
• Port-to-port or door-to-door

**Express Courier (2-5 business days):**
• DHL, FedEx, UPS service
• Premium delivery option
• Full tracking and insurance
• Customs clearance assistance

**Rail Freight (10-20 business days):**
• Available for Europe and Asia
• Cost-effective alternative
• Reliable transit times
• Environmental benefits

**International Order Requirements:**

**Business Documentation:**
• Valid business registration
• Import license or permit
• Tax identification number
• Business address verification

**Shipping Information:**
• Complete shipping address
• Contact person and phone
• Business hours and access
• Special delivery instructions

**Customs Documentation:**
• Commercial invoice
• Packing list
• Certificate of origin
• Material safety data sheets

**Shipping Costs & Fees:**

**Base Shipping Costs:**
• Calculated by weight and dimensions
• Distance-based pricing
• Fuel surcharge adjustments
• Seasonal rate variations

**Additional Fees:**
• Customs clearance fees
• Port handling charges
• Documentation fees
• Insurance premiums

**Free Shipping Options:**
• Orders over $5,000 (continental US)
• Annual contract customers
• VIP customer program
• Trade show orders

**Customs & Duties:**

**Customer Responsibilities:**
• Import duties and taxes
• Customs clearance fees
• Local delivery charges
• Storage fees if applicable

**Our Assistance:**
• Complete documentation preparation
• Customs clearance support
• Duty calculation assistance
• Delivery coordination

**DDP (Delivered Duty Paid):**
• Available for select countries
• Includes all duties and taxes
• Simplified delivery process
• Higher upfront cost

**International Shipping Process:**

**Pre-Shipping:**
• Order confirmation and payment
• Documentation preparation
• Customs clearance planning
• Shipping method selection

**Shipping:**
• Professional packaging
• Tracking number assignment
• Insurance coverage
• Regular status updates

**Customs Clearance:**
• Documentation submission
• Duty calculation
• Payment coordination
• Release authorization

**Final Delivery:**
• Local delivery coordination
• Delivery confirmation
• Customer satisfaction follow-up
• Post-delivery support

**Shipping Insurance & Protection:**

**Standard Coverage:**
• Full value insurance
• Damage protection
• Loss coverage
• Delay compensation

**Additional Protection:**
• Weather damage coverage
• Political risk insurance
• War risk coverage
• Terrorism protection

**Quality Assurance:**

**Pre-Shipping Inspection:**
• Quality control verification
• Packaging integrity check
• Documentation accuracy
• Compliance verification

**Shipping Protection:**
• Moisture barrier packaging
• Shock absorption materials
• Climate control options
• Special handling instructions

**Customer Support:**

**24/7 Support:**
• Emergency contact numbers
• Real-time tracking updates
• Problem resolution assistance
• Alternative shipping options

**Regional Representatives:**
• Local language support
• Cultural understanding
• Regional expertise
• Personal service

Contact our international sales team for specific shipping quotes and requirements for your country. We're here to make international shipping simple and reliable!`,
      category: "Shipping",
    },
    {
      id: "6",
      question: "Do you offer design services?",
      answer: `Absolutely! We provide comprehensive design services to bring your packaging vision to life with professional expertise:

**Our Design Service Portfolio:**

**Structural Design & Engineering:**
• Custom box structures and shapes
• Die-line creation and optimization
• Material selection and testing
• Prototype development
• 3D modeling and visualization
• Engineering analysis and testing

**Artwork Design & Branding:**
• Logo and brand integration
• Custom illustrations and graphics
• Typography and layout design
• Color matching and Pantone selection
• Brand guideline development
• Marketing material design

**Packaging Innovation:**
• Sustainable design solutions
• Smart packaging integration
• Interactive packaging elements
• Multi-functional designs
• Cost-optimized structures
• Material efficiency solutions

**Design Process & Methodology:**

**Phase 1: Discovery & Research (1-2 weeks)**
• Brand analysis and positioning
• Market research and trends
• Competitor analysis
• Target audience insights
• Technical requirements review
• Budget and timeline planning

**Phase 2: Concept Development (2-3 weeks)**
• Multiple design concepts
• Structural variations
• Material exploration
• Cost analysis
• Feasibility assessment
• Client feedback integration

**Phase 3: Design Refinement (1-2 weeks)**
• Concept selection and development
• Detailed design specifications
• Technical drawings and specifications
• Material and finish selection
• Cost optimization
• Client approval process

**Phase 4: Finalization & Production (1-2 weeks)**
• Print-ready file preparation
• Production specifications
• Quality control guidelines
• Production coordination
• Final approval and sign-off

**Design Team Expertise:**

**Certified Professionals:**
• Certified packaging designers
• Structural engineering specialists
• Graphic design experts
• Brand strategists
• Material science specialists
• Production technology experts

**Industry Experience:**
• 10+ years average experience
• Multiple industry expertise
• International design standards
• Sustainable design certification
• Innovation award winners
• Industry thought leaders

**Software & Technology:**

**Design Software:**
• Adobe Creative Suite (Illustrator, Photoshop, InDesign)
• ArtiosCAD for structural design
• 3D modeling software (Blender, Maya)
• CAD software for engineering
• Color management tools
• Prototyping software

**3D Visualization:**
• Realistic product mockups
• Interactive 3D presentations
• Virtual reality previews
• Augmented reality experiences
• 360-degree product views
• Animation and motion graphics

**Design Service Pricing:**

**Basic Design Package ($150-$300):**
• Simple structural design
• Basic artwork integration
• Standard material selection
• 2 design concepts
• 2 revision rounds
• Print-ready files

**Professional Design Package ($300-$600):**
• Complex structural design
• Custom artwork creation
• Material optimization
• 3-5 design concepts
• 3 revision rounds
• 3D mockups included

**Premium Design Package ($600-$1,200):**
• Innovative structural design
• Custom illustration and graphics
• Advanced material solutions
• Unlimited design concepts
• Unlimited revisions
• Full 3D visualization
• Prototype development

**Enterprise Design Package ($1,200+):**
• Complete brand development
• Multi-product line design
• Innovation consulting
• Patent application support
• Market research and analysis
• Ongoing design support

**Included Services:**

**Design Deliverables:**
• Structural design specifications
• Die-line files and templates
• Artwork files (AI, PDF, EPS)
• 3D mockups and renderings
• Production specifications
• Quality control guidelines

**Support Services:**
• Design consultation
• Material recommendations
• Cost optimization advice
• Production coordination
• Quality assurance support
• Ongoing design support

**Specialized Design Services:**

**Sustainable Design:**
• Eco-friendly material selection
• Minimal waste design
• Recyclable packaging solutions
• Biodegradable options
• Carbon footprint reduction
• Life cycle analysis

**Smart Packaging:**
• QR code integration
• NFC technology
• Augmented reality features
• Interactive elements
• Tracking and tracing
• Consumer engagement

**Luxury Packaging:**
• Premium material selection
• Sophisticated finishes
• Custom embellishments
• Limited edition designs
• Brand storytelling
• Unboxing experience

**Design Consultation & Training:**

**Client Education:**
• Design principles training
• Material selection guidance
• Cost optimization strategies
• Production process understanding
• Quality control procedures
• Industry best practices

**Ongoing Support:**
• Design maintenance
• Brand evolution support
• Market trend updates
• Technology advancement integration
• Competitive analysis
• Innovation consulting

**Design Quality Guarantee:**

• 100% satisfaction guarantee
• Unlimited revisions until approval
• Professional quality standards
• Industry best practices
• Innovation and creativity
• Cost-effective solutions

Let us know your design needs and we'll provide a custom quote tailored to your project requirements!`,
      category: "Customization",
    },
    {
      id: "7",
      question: "How do I place an order?",
      answer: `Placing an order with us is simple and straightforward. Here's our comprehensive step-by-step process:

**Order Process Overview:**

**Step 1: Initial Consultation (1-2 days)**
• Contact us via phone, email, or online quote form
• Schedule consultation with packaging specialist
• Discuss your packaging requirements and goals
• Review product specifications and materials
• Get preliminary pricing and timeline estimates
• Identify any special requirements or constraints

**Step 2: Design & Quotation (3-5 days)**
• Submit your artwork or work with our design team
• Review and approve design concepts
• Finalize material and finish specifications
• Receive detailed quote with all specifications
• Review pricing and payment terms
• Approve final quote and specifications

**Step 3: Order Confirmation (1-2 days)**
• Sign the order confirmation document
• Provide required payment (deposit or full payment)
• Confirm shipping address and delivery preferences
• Review production timeline and milestones
• Set up quality control checkpoints
• Establish communication protocols

**Step 4: Production & Quality Control (10-30 days)**
• We begin production according to your specifications
• Quality checks at multiple production stages
• Digital proofs sent for your approval (if applicable)
• Regular progress updates and photos
• Material and print quality verification
• Final quality inspection and approval

**Step 5: Shipping & Delivery (1-7 days)**
• Final quality inspection before shipping
• Professional packaging and protection
• Tracking information provided
• Delivery to your specified location
• Delivery confirmation and follow-up
• Post-delivery support and assistance

**Order Methods & Channels:**

**Online Ordering:**
• **Website Quote Form:** Fill out detailed requirements
• **E-commerce Platform:** Select products and options
• **Customer Portal:** Access your account and order history
• **Mobile App:** Order on-the-go from your device

**Traditional Ordering:**
• **Phone Orders:** Call +1 (813) 327-1566
• **Email Orders:** Send detailed requirements
• **In-Person:** Visit our sales office
• **Trade Shows:** Meet us at industry events

**Order Requirements & Information:**

**Essential Information:**
• Product specifications and dimensions
• Artwork files (if applicable)
• Quantity requirements
• Delivery timeline and location
• Contact and shipping information
• Special requirements or preferences

**Technical Specifications:**
• Material preferences and requirements
• Print specifications and colors
• Finishing requirements
• Quality standards and testing
• Packaging and labeling requirements
• Regulatory compliance needs

**Business Information:**
• Company name and contact details
• Tax identification number
• Shipping and billing addresses
• Payment method and terms
• Purchase order number (if required)
• Special instructions or notes

**Order Types & Categories:**

**Standard Orders:**
• Regular production timeline
• Standard material options
• Basic quality control
• Standard shipping options
• Regular pricing structure

**Rush Orders:**
• Expedited production timeline
• Priority material sourcing
• Enhanced quality control
• Express shipping options
• Rush fee pricing structure

**Custom Orders:**
• Special material requirements
• Custom design elements
• Specialized finishing
• Extended quality control
• Custom pricing structure

**Bulk Orders:**
• Volume pricing discounts
• Extended production timeline
• Enhanced quality control
• Special shipping arrangements
• Contract pricing structure

**Quality Assurance Process:**

**Pre-Production Quality:**
• Material quality verification
• Artwork accuracy review
• Specification compliance check
• Production readiness assessment
• Quality control plan development

**Production Quality:**
• In-process quality checks
• Material consistency verification
• Print quality monitoring
• Structural integrity testing
• Regular quality inspections

**Final Quality Control:**
• Comprehensive final inspection
• Specification compliance verification
• Quality standard validation
• Packaging and labeling review
• Final approval and release

**Order Tracking & Communication:**

**Progress Updates:**
• Production milestone notifications
• Quality control checkpoints
• Photo updates and progress reports
• Timeline adjustments and updates
• Issue identification and resolution

**Communication Channels:**
• Dedicated account manager
• 24/7 customer support
• Online order tracking
• Email notifications
• Phone support and updates

**Post-Order Support:**

**Delivery Support:**
• Delivery coordination and tracking
• Installation and setup assistance
• Quality issue resolution
• Return and replacement support
• Ongoing maintenance support

**Customer Success:**
• Performance monitoring and feedback
• Improvement recommendations
• Future order planning
• Relationship development
• Long-term partnership building

**Order Modification & Cancellation:**

**Modification Policy:**
• Changes allowed during design phase
• Limited changes during production
• Rush fees for production changes
• Quality impact assessment
• Timeline adjustment evaluation

**Cancellation Policy:**
• Full refund before production
• Partial refund during production
• Material and setup cost recovery
• Cancellation fee structure
• Alternative solution recommendations

Our team is here to guide you through every step of the process and ensure a smooth, successful order experience!`,
      category: "Orders",
    },
    {
      id: "8",
      question: "Do you have volume discounts?",
      answer: `Yes, we offer attractive volume discounts to help you save more as you order more. Here's our comprehensive discount structure:

**Volume Discount Structure:**

**Standard Volume Discounts:**

**Small Volume (100-499 units):**
• Base pricing applies
• Standard production timeline
• Basic quality control
• Standard shipping options

**Medium Volume (500-999 units):**
• 5% discount off base price
• Priority production scheduling
• Enhanced quality control
• Expedited shipping available

**Large Volume (1,000-2,499 units):**
• 10% discount off base price
• Dedicated production line
• Premium quality control
• Free standard shipping

**Extra Large Volume (2,500-4,999 units):**
• 15% discount off base price
• Custom production scheduling
• Advanced quality control
• Free expedited shipping

**Massive Volume (5,000-9,999 units):**
• 20% discount off base price
• Exclusive production capacity
• Premium quality assurance
• Free premium shipping

**Enterprise Volume (10,000+ units):**
• 25% discount off base price
• Dedicated factory capacity
• Custom quality protocols
• White-glove delivery service

**Additional Savings Opportunities:**

**Material Optimization Discounts:**

**Bulk Material Purchases:**
• 15% savings on material costs
• Volume material pricing
• Preferred supplier rates
• Material guarantee programs

**Standard Material Selection:**
• 5-10% savings on standard materials
• Faster material availability
• Consistent quality standards
• Reduced setup costs

**Eco-Friendly Material Options:**
• Special pricing for sustainable materials
• Green certification discounts
• Environmental impact reduction
• Sustainability program benefits

**Setup Cost Reduction:**

**Multiple SKU Orders:**
• 20% setup fee reduction
• Shared tooling costs
• Efficient production planning
• Reduced changeover time

**Repeat Orders:**
• 50% setup fee reduction
• Existing tooling reuse
• Streamlined production
• Faster turnaround times

**Annual Contracts:**
• Up to 30% total savings
• Guaranteed pricing
• Priority scheduling
• Dedicated support team

**Seasonal Promotions & Special Offers:**

**Q1 Promotions (January-March):**
• 10% off all orders
• New product introductions
• Material innovation discounts
• Early bird specials

**Q4 Holiday Rush (October-December):**
• 15% off holiday packaging
• Extended payment terms
• Rush order discounts
• Special delivery options

**New Customer Special:**
• 20% off first order
• Free design consultation
• Sample program access
• Dedicated account manager

**Contract & Commitment Pricing:**

**Annual Volume Commitments:**
• Up to 35% total savings
• Guaranteed capacity allocation
• Fixed pricing for 12 months
• Priority customer status

**Quarterly Ordering:**
• Up to 25% savings
• Flexible scheduling options
• Volume rollover benefits
• Seasonal adjustment options

**Multi-Product Line Orders:**
• Up to 20% savings
• Coordinated production scheduling
• Shared shipping and logistics
• Unified quality control

**Strategic Partnership Benefits:**

**Long-term Relationships:**
• Progressive discount increases
• Exclusive product access
• Innovation partnership opportunities
• Strategic planning support

**Industry Partnerships:**
• Industry-specific pricing
• Collaborative development
• Market expansion support
• Competitive advantage programs

**Technology Partnerships:**
• Innovation discounts
• Beta testing opportunities
• Technology transfer benefits
• Future product access

**How to Maximize Your Savings:**

**Order Consolidation Strategies:**
1. **Consolidate Multiple Orders:** Combine small orders into larger shipments
2. **Plan Annual Requirements:** Forecast and order in advance
3. **Use Standard Materials:** Opt for standard options when possible
4. **Coordinate Product Lines:** Order multiple products together
5. **Leverage Seasonal Timing:** Order during promotional periods

**Volume Planning Tips:**
1. **Forecast Accurately:** Plan your packaging needs in advance
2. **Consider Storage Costs:** Balance volume discounts with storage expenses
3. **Evaluate Cash Flow:** Consider payment terms and cash flow impact
4. **Assess Quality Needs:** Ensure volume doesn't compromise quality
5. **Plan for Growth:** Order with future expansion in mind

**Contract Negotiation Strategies:**
1. **Multi-Year Commitments:** Longer contracts often mean better rates
2. **Volume Guarantees:** Commit to specific volumes for better pricing
3. **Payment Terms:** Negotiate favorable payment schedules
4. **Service Levels:** Include additional services in contracts
5. **Performance Incentives:** Tie discounts to performance metrics

**Special Discount Programs:**

**Loyalty Programs:**
• Progressive discount increases
• Exclusive member benefits
• Special event invitations
• Priority customer service

**Referral Programs:**
• Discounts for new customer referrals
• Partnership development incentives
• Industry network expansion
• Collaborative growth opportunities

**Innovation Programs:**
• Discounts for product testing
• Innovation partnership pricing
• Technology development support
• Future product access

**Volume Discount Calculation Example:**

**Example Order:**
• Product: Custom Folding Carton Boxes
• Quantity: 5,000 units
• Base Price: $2.00 per unit
• Volume Discount: 20% off
• Final Price: $1.60 per unit
• Total Savings: $2,000

**Additional Benefits:**
• Free standard shipping
• Priority production scheduling
• Enhanced quality control
• Dedicated account manager

Contact our sales team to discuss your specific volume needs and maximize your savings! We're committed to providing the best possible pricing for your packaging requirements.`,
      category: "Pricing",
    },
  ];

  useEffect(() => {
    // Check if there's a specific question query parameter
    const questionQuery = searchParams.get('q');
    if (questionQuery) {
      const foundFAQ = extendedFAQs.find(faq => 
        faq.question.toLowerCase().includes(questionQuery.toLowerCase())
      );
      if (foundFAQ) {
        setSelectedQuestion(foundFAQ.id);
      }
    }
  }, [searchParams]);

  const filteredFAQs = extendedFAQs.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleQuestionClick = (faqId: string) => {
    setSelectedQuestion(selectedQuestion === faqId ? null : faqId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Frequently Asked Questions - Axis Packaging Solutions</title>
        <meta name="description" content="Find answers to common questions about our custom packaging products, production times, shipping, and more." />
        <link rel="canonical" href="https://theaxispackaging.com/faqs" />
      </Helmet>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="bg-[var(--axis-orange)] text-white mb-4">
                <HelpCircle className="h-4 w-4 mr-2" />
                Help Center
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-[var(--axis-dark-blue)] mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find comprehensive answers to all your questions about custom packaging solutions, 
                ordering process, and our services
              </p>
            </div>

            {/* Back to Contact Button */}
            <div className="text-center mb-8">
              <Link to="/contact">
                <Button variant="outline" className="border-[var(--axis-orange)] text-[var(--axis-orange)] hover:bg-[var(--axis-orange)] hover:text-white">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Contact
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for specific questions or topics..."
                  className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--axis-orange)] focus:border-transparent text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-3 mb-8 justify-center">
                <Button
                  variant={activeCategory === "All" ? "default" : "outline"}
                  onClick={() => dispatch(setActiveCategory("All"))}
                  className={
                    activeCategory === "All"
                      ? "bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90"
                      : "border-gray-300 text-gray-700 hover:border-[var(--axis-orange)] hover:text-[var(--axis-orange)] bg-transparent"
                  }
                >
                  All Questions
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    onClick={() => dispatch(setActiveCategory(category))}
                    className={
                      activeCategory === category
                        ? "bg-[var(--axis-orange)] hover:bg-[var(--axis-orange)]/90"
                        : "border-gray-300 text-gray-700 hover:border-[var(--axis-orange)] hover:text-[var(--axis-orange)] bg-transparent"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* FAQ List */}
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <Card key={faq.id} className="border border-gray-200 hover:border-[var(--axis-orange)] transition-colors">
                    <CardContent className="p-0">
                      <div
                        className="p-6 cursor-pointer"
                        onClick={() => handleQuestionClick(faq.id)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge variant="outline" className="text-xs">
                                {faq.category}
                              </Badge>
                              <h3 className="text-lg font-semibold text-[var(--axis-dark-blue)]">
                                {faq.question}
                              </h3>
                            </div>
                            
                            {selectedQuestion === faq.id && (
                              <div className="mt-4 pl-4 border-l-4 border-[var(--axis-orange)]">
                                <div className="prose prose-gray max-w-none">
                                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                    {faq.answer}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          <div className="ml-4">
                            <div className={`w-6 h-6 transition-transform duration-200 ${
                              selectedQuestion === faq.id ? 'rotate-180' : ''
                            }`}>
                              <svg className="w-6 h-6 text-[var(--axis-orange)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* No Results */}
              {filteredFAQs.length === 0 && (
                <div className="text-center py-12">
                  <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No FAQs Found</h3>
                  <p className="text-gray-500 mb-4">
                    We couldn't find any questions matching your search. Try different keywords or
                    browse all categories.
                  </p>
                  <Button
                    onClick={() => {
                      setSearchTerm("");
                      dispatch(setActiveCategory("All"));
                    }}
                    variant="outline"
                    className="bg-transparent"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}

              {/* Contact Support */}
              <div className="mt-16">
                <div className="bg-gradient-to-r from-[var(--axis-dark-blue)] to-[var(--axis-mid-blue)] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16 animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12 animate-bounce delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white rounded-full -translate-x-8 -translate-y-8 animate-ping delay-500"></div>
                    <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-orange-300 rounded-full animate-pulse delay-700"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-blue-300 rounded-full animate-bounce delay-300"></div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-6 h-6 bg-orange-400/30 rounded-full animate-bounce delay-200"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-blue-400/30 rounded-full animate-bounce delay-500"></div>
                  <div className="absolute top-1/2 right-8 w-3 h-3 bg-white/40 rounded-full animate-ping delay-1000"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                      <MessageCircle className="h-10 w-10 text-white group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-orange-200 transition-colors duration-300">
                      Still Have Questions?
                    </h3>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg group-hover:text-white transition-colors duration-300">
                      Our packaging experts are here to help. Get personalized answers to your specific questions and find the perfect solution for your needs.
                    </p>
                    
                    {/* Enhanced Support Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center group/stat hover:scale-105 transition-all duration-300">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover/stat:bg-orange-500/30 group-hover/stat:scale-110 transition-all duration-300">
                          <Users className="h-6 w-6 text-white group-hover/stat:animate-pulse" />
                        </div>
                        <div className="text-2xl font-bold group-hover/stat:text-orange-200 transition-colors duration-300">24/7</div>
                        <div className="text-blue-100 text-sm group-hover/stat:text-white transition-colors duration-300">Expert Support</div>
                      </div>
                      <div className="text-center group/stat hover:scale-105 transition-all duration-300">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover/stat:bg-orange-500/30 group-hover/stat:scale-110 transition-all duration-300">
                          <Clock className="h-6 w-6 text-white group-hover/stat:animate-spin" />
                        </div>
                        <div className="text-2xl font-bold group-hover/stat:text-orange-200 transition-colors duration-300">&lt; 2hr</div>
                        <div className="text-blue-100 text-sm group-hover/stat:text-white transition-colors duration-300">Response Time</div>
                      </div>
                      <div className="text-center group/stat hover:scale-105 transition-all duration-300">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover/stat:bg-orange-500/30 group-hover/stat:scale-110 transition-all duration-300">
                          <Shield className="h-6 w-6 text-white group-hover/stat:animate-bounce" />
                        </div>
                        <div className="text-2xl font-bold group-hover/stat:text-orange-200 transition-colors duration-300">100%</div>
                        <div className="text-blue-100 text-sm group-hover/stat:text-white transition-colors duration-300">Satisfaction</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact">
                        <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group/btn">
                          <span className="group-hover/btn:animate-pulse">Contact Support</span>
                        </Button>
                      </Link>
                      <Link to="/quote">
                        <Button
                          variant="outline"
                          className="border-2 border-white text-white hover:bg-white hover:text-[var(--axis-dark-blue)] bg-transparent px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group/btn"
                        >
                          <span className="group-hover/btn:animate-pulse">Get Custom Quote</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatSupport />
    </div>
  );
} 