export const products = [
  {
    id: "first",
    code: "FIRST",
    name: "Financial Reporting System",
    category: "Finance & Accounting",
    badge: "Flagship",
    shortDesc: "Automated, compliant financial intelligence and consolidated balance reporting with zero cross-posting friction.",
    fullDesc: "With all financial data unified in a single high-integrity ledger, finance teams and accountants eliminate hundreds of manual hours cross-posting transactions. Features automated tax filing (GST/VAT compliant), drill-down P&L statements, multi-currency reconciliations, and real-time cash flow diagnostics.",
    highlights: [
      "Auto Track Income & Real-Time Expenses",
      "Unified Multi-Entity Balance Sheet",
      "Instant Profit & Margin Diagnostics",
      "Full GST, VAT & Regional Tax Compliance",
      "Audit-Ready Automated Reporting Engine",
      "Multi-Currency Bank Account Reconciliation"
    ],
    stats: { metric: "85%", label: "Time Saved on Month-End Close" },
    iconName: "BarChart3",
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: "core",
    code: "CORE",
    name: "Customer-Oriented Relations Enterprise",
    category: "CRM & Operations",
    badge: "Flagship",
    shortDesc: "Enterprise customer lifecycle management, intelligent ticketing, and automated client workflow pipelines.",
    fullDesc: "CORE centralizes all client touchpoints, inquiries, SLA obligations, and account records into an adaptive, secure environment. Automates repetitive client engagement tasks, generates 360-degree customer relationship insights, and powers enterprise account retention.",
    highlights: [
      "Automated Repetitive Processes & Escalations",
      "Full 360° Account Visibility & Timeline",
      "Enterprise SLA & Omnichannel Helpdesk",
      "Adaptive & Flexible Pipeline Stages",
      "Role-Based Security & Audit Trail",
      "Integrated Sales & Service Contracting"
    ],
    stats: { metric: "3.2x", label: "Faster Client Resolution Rate" },
    iconName: "Users",
    color: "from-indigo-500 to-purple-400"
  },
  {
    id: "r-pos-resto",
    code: "R-POS RESTO",
    name: "Restaurant Point Of Sale",
    category: "Hospitality & POS",
    badge: "Flagship",
    shortDesc: "Lightning-fast hospitality POS engineered for table turnarounds, Kitchen Display Systems (KDS), and contactless orders.",
    fullDesc: "A complete restaurant management terminal that operates seamlessly offline and online. Manages table reservations, floor plans, real-time kitchen ticketing, recipe-level inventory deductions, combo menus, and split billing with instantaneous speed.",
    highlights: [
      "Hybrid Offline/Online Fault-Tolerant Engine",
      "Visual Floor Plan & Table Turn Manager",
      "Real-Time Kitchen Display System (KDS)",
      "Recipe & Ingredient-Level Inventory Depletion",
      "Split Bills, Tips & Contactless QR Menus",
      "Multi-Branch Central Kitchen Aggregation"
    ],
    stats: { metric: "< 1.2s", label: "Average Checkout Processing" },
    iconName: "UtensilsCrossed",
    color: "from-amber-500 to-orange-400"
  },
  {
    id: "fiesta",
    code: "FIESTA",
    name: "Enterprise Travel Accounting Suite",
    category: "Travel & Logistics",
    badge: "Industry Leader",
    shortDesc: "Premier travel accounting platform recognized across the global travel industry for complete back, mid, and front office governance.",
    fullDesc: "Tailored specifically for B2B/B2C travel agencies, consolidators, and destination management companies. Integrates seamlessly with global GDS feeds, airline ticket reconciliations, hotel voucher commissions, customer billing, and multi-currency foreign exchange tracking.",
    highlights: [
      "Mid, Back & Front-Office Travel Orchestration",
      "Automated GDS Ticket & Fare Reconciliations",
      "B2B Sub-Agent Credit & Commission Portals",
      "Real-Time Currency Hedging & Multi-FX",
      "Supplier Vouchers & Itinerary Invoicing",
      "Endorsed by Top Global Travel Consolidators"
    ],
    stats: { metric: "12M+", label: "Bookings Processed Annually" },
    iconName: "Compass",
    color: "from-teal-500 to-emerald-400"
  },
  {
    id: "r-pos-retail",
    code: "R-POS RETAIL",
    name: "Retail & Supermarket POS",
    category: "Retail & Commerce",
    badge: "Popular",
    shortDesc: "High-throughput barcode scanning, stock control, loyalty programs, and frictionless checkout for modern retailers.",
    fullDesc: "Designed for boutiques, supermarkets, electronics, and multi-chain retail establishments. Supports handheld barcode scanning, automated re-order points, integrated electronic weighing scales, and omni-channel customer loyalty programs.",
    highlights: [
      "Rapid Barcode & Weight Scale Integration",
      "Zero Downtime Offline Transaction Queuing",
      "Tiered Customer Loyalty & Discount Matrix",
      "Multi-Store Stock Rebalancing & Transfers",
      "Cash Drawer & Per-Shift Drawer Auditing"
    ],
    stats: { metric: "99.99%", label: "Operational Terminal Uptime" },
    iconName: "ShoppingBag",
    color: "from-pink-500 to-rose-400"
  },
  {
    id: "pac",
    code: "PAC",
    name: "Pack and Courier Logistics",
    category: "Logistics & Supply Chain",
    badge: "Enterprise",
    shortDesc: "Effortless, end-to-end booking, manifest generation, and worldwide tracking for packing, moving, and courier operators.",
    fullDesc: "Empowers domestic and international courier services and freight forwarders with real-time waypoint scanning, customs manifest generation, volume-to-weight automated calculators, and automated customer SMS/email tracking updates.",
    highlights: [
      "Instant Consignment Booking & Waybill Printing",
      "Volumetric Weight & Tariff Calculation",
      "Real-Time Parcel Waypoint Live Tracking",
      "Driver Run-Sheet & Proof-of-Delivery (POD)",
      "Global Customs & Harmonized Code Support"
    ],
    stats: { metric: "40%", label: "Faster Consignment Turnaround" },
    iconName: "PackageCheck",
    color: "from-blue-600 to-indigo-500"
  },
  {
    id: "edms",
    code: "EDMS",
    name: "Electronic Document Management",
    category: "Enterprise Infrastructure",
    badge: "Security",
    shortDesc: "Encrypted, centralized digital vault for archival, indexing, compliance audit trails, and instant document retrieval.",
    fullDesc: "Eliminate paper chaos with a zero-knowledge encrypted repository. Provides optical character recognition (OCR), metadata indexing, version histories, and granular access permissions for sensitive contracts, invoices, and employee records.",
    highlights: [
      "Single-Source Compliant Cloud Archiving",
      "Intelligent OCR & Full-Text Search",
      "Version Control & Immutable Audit Logs",
      "Granular Role & Department Access Rights",
      "Automated Document Retention Policies"
    ],
    stats: { metric: "100%", label: "Paperless Audit Readiness" },
    iconName: "FolderLock",
    color: "from-violet-500 to-purple-600"
  },
  {
    id: "hrms",
    code: "HRMS",
    name: "Human Resource Management Suite",
    category: "HR & Workforce",
    badge: "Essential",
    shortDesc: "End-to-end employee lifecycle management, biometric attendance sync, automated payroll, and tax deductions.",
    fullDesc: "Modern human capital software unifying recruitment, employee records, biometric clock-in, leave workflows, KPI appraisals, and one-click payroll generation with localized statutory tax deductions.",
    highlights: [
      "Biometric Hardware & Geo-Fenced Clock-in",
      "One-Click Automated Multi-Tier Payroll",
      "Self-Service Employee Portal & Leave Workflow",
      "Performance Appraisals & Goal Tracking",
      "Statutory Benefits & Social Security Sync"
    ],
    stats: { metric: "70%", label: "Reduction in HR Admin Overhead" },
    iconName: "UserCheck",
    color: "from-emerald-500 to-teal-400"
  },
  {
    id: "paynet",
    code: "PAYNET",
    name: "Secure Payment Gateway Engine",
    category: "Fintech & Payments",
    badge: "Fintech",
    shortDesc: "High-security payment processing platform supporting contactless NFC, payment links, and card network routing.",
    fullDesc: "Enterprise payment orchestration offering frictionless merchant checkouts, recurring billing tokenization, smart fraud detection, and instant multi-provider reconciliation.",
    highlights: [
      "PCI-DSS Compliant Payment Tokenization",
      "Smart Dynamic Routing for Lowest Fee Rates",
      "Digital Payment Links & Contactless QR",
      "Instant Settlement Dashboard & Reconcile",
      "Fraud Detection & Risk Scoring Engine"
    ],
    stats: { metric: "99.999%", label: "Transaction Reliability" },
    iconName: "CreditCard",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "force",
    code: "FORCE",
    name: "Clinical & Hospital Efficiency",
    category: "Healthcare",
    badge: "Healthcare",
    shortDesc: "Integrated clinical workflows, patient Electronic Health Records (EHR), doctor scheduling, and pharmacy dispensing.",
    fullDesc: "Developed in collaboration with healthcare providers. Streamlines outpatient triage, digital prescriptions, lab test orders, insurance pre-authorizations, and practitioner duty roster scheduling.",
    highlights: [
      "Comprehensive Patient EHR & Consultation History",
      "Doctor Shift Rostering & OPD Appointment Queue",
      "E-Prescription & In-House Pharmacy Dispensing",
      "Health Insurance Direct Claim Billing",
      "HIPAA-Aligned Encrypted Patient Data"
    ],
    stats: { metric: "50%", label: "Shorter Patient Wait Time" },
    iconName: "HeartPulse",
    color: "from-red-500 to-rose-400"
  },
  {
    id: "fiims",
    code: "FIIMS",
    name: "Inventory Management System",
    category: "Supply Chain",
    badge: "Supply Chain",
    shortDesc: "Deep inventory tracking across multiple warehouses with batch/expiry controls, serial numbers, and smart restock alerts.",
    fullDesc: "Provides dynamic stock valuation (FIFO, LIFO, Weighted Average), barcode bin locations, inter-warehouse transit tracking, and automated procurement orders when safety stock thresholds are reached.",
    highlights: [
      "Multi-Warehouse Bin & Shelf Tracking",
      "Batch Number & Expiry Date Lifecycle",
      "Automated Reorder Point Triggers",
      "Real-Time Inter-Branch Stock Transfers",
      "Barcode Scanning & Physical Stocktake Tools"
    ],
    stats: { metric: "99.4%", label: "Inventory Accuracy" },
    iconName: "Boxes",
    color: "from-yellow-500 to-amber-600"
  },
  {
    id: "atoms",
    code: "ATOMS",
    name: "Total Office Management Suite",
    category: "Enterprise ERP",
    badge: "All-in-One",
    shortDesc: "Comprehensive enterprise ERP connecting procurement, assets, communications, and inter-departmental operations.",
    fullDesc: "The pinnacle of connected enterprise operations. ATOMS orchestrates fixed asset depreciation, vendor bidding, project task milestones, internal memos, and executive BI dashboards into a unified command center.",
    highlights: [
      "Modular Enterprise Command Dashboard",
      "Fixed Asset Lifecycle & Depreciation Tracking",
      "Procurement Requisitions & RFP Management",
      "Cross-Departmental Project Task Tracking",
      "Executive KPI & Business Intelligence Visuals"
    ],
    stats: { metric: "360°", label: "Operational Enterprise Control" },
    iconName: "Cpu",
    color: "from-purple-500 to-indigo-600"
  }
];

export const industries = [
  { id: "all", name: "All Sectors" },
  { id: "travel", name: "Travel & Tourism", count: "120+ Agencies", featured: "FIESTA, FIRST", desc: "Automated GDS reconciliation, ticket mid-office, sub-agent credit management, and multi-currency billing." },
  { id: "restaurant", name: "Hospitality & Dining", count: "350+ Venues", featured: "R-POS RESTO, FIIMS", desc: "Kitchen display terminals, table management, recipe costing, and ultra-fast touch ordering." },
  { id: "manufacturing", name: "Industrial & Manufacturing", count: "90+ Plants", featured: "ATOMS, FIIMS", desc: "Raw material tracking, bill of materials (BOM), shop-floor routing, and equipment maintenance." },
  { id: "healthcare", name: "Healthcare & Clinics", count: "140+ Facilities", featured: "FORCE, EDMS", desc: "Digital clinical records, doctor appointment scheduling, pharmacy dispensing, and insurance claims." },
  { id: "petcare", name: "Veterinary & Pet Care", count: "65+ Clinics", featured: "FORCE, R-POS", desc: "Patient vaccination reminders, boarding scheduling, pet grooming appointments, and retail POS." },
  { id: "retail", name: "Retail & Supermarkets", count: "480+ Outlets", featured: "R-POS RETAIL, FIIMS", desc: "High-volume barcode scanning, dynamic promotions, multi-warehouse stock replenishment, and loyalty tiers." },
  { id: "sports", name: "Sports & Training Centers", count: "80+ Facilities", featured: "CORE, HRMS", desc: "Member subscription renewals, trainer scheduling, court bookings, and access control integration." },
  { id: "sme", name: "SME & BPO Operations", count: "600+ Enterprises", featured: "ATOMS, FIRST", desc: "Agile operational workflows, customer CRM ticketing, automated payroll, and audit-compliant accounting." }
];
