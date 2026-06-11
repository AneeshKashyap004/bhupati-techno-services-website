import {
  Building2,
  Cloud,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  LockKeyhole,
  Network,
  Radar,
  ServerCog,
  ShieldCheck,
  ShoppingBag,
  Users,
} from "lucide-react";

export const site = {
  name: "Bhupati Techno Services",
  url: "https://www.bhupatitechno.com",
  phone: "+91 98765 43210",
  email: "connect@bhupatitechno.com",
  location: "Bangalore, Karnataka, India",
  whatsapp: "https://wa.me/919876543210",
  calendly: "https://calendly.com/bhupati-techno/consultation",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    title: "Infrastructure Management",
    slug: "infrastructure-management",
    icon: ServerCog,
    summary:
      "Resilient IT infrastructure operations across servers, endpoints, storage, networks, and business-critical platforms.",
    benefits: ["Higher uptime", "Predictable operations", "Lifecycle governance"],
    useCases: ["Data center modernization", "Endpoint hardening", "Hybrid infrastructure operations"],
  },
  {
    title: "Cybersecurity",
    slug: "cybersecurity",
    icon: ShieldCheck,
    summary:
      "Layered security strategy, controls, monitoring, and incident readiness without noisy hacker-style theatre.",
    benefits: ["Reduced attack surface", "Faster response", "Compliance readiness"],
    useCases: ["Firewall management", "Endpoint protection", "Security posture assessments"],
  },
  {
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    icon: Cloud,
    summary:
      "Cloud migration, optimization, backup, identity, and governance for Microsoft, AWS, and hybrid environments.",
    benefits: ["Scalable capacity", "Cost visibility", "Secure access"],
    useCases: ["Cloud migration", "Backup and DR", "Microsoft 365 governance"],
  },
  {
    title: "Managed Services",
    slug: "managed-services",
    icon: Radar,
    summary:
      "Continuous monitoring, helpdesk, patching, vendor coordination, and executive reporting for growing teams.",
    benefits: ["24/7 oversight", "Lower operational load", "SLA-driven support"],
    useCases: ["Remote IT support", "Patch operations", "Asset and vendor management"],
  },
  {
    title: "IT Consulting",
    slug: "it-consulting",
    icon: Landmark,
    summary:
      "Pragmatic technology strategy for infrastructure, security, cloud adoption, and digital transformation.",
    benefits: ["Clear roadmaps", "Better investment decisions", "Risk-aware execution"],
    useCases: ["IT audits", "Transformation roadmaps", "Board-ready advisory"],
  },
  {
    title: "Network Design & Implementation",
    slug: "network-design",
    icon: Network,
    summary:
      "Secure LAN, WAN, Wi-Fi, firewall, VPN, and branch connectivity designed for performance and resilience.",
    benefits: ["Reliable connectivity", "Secure segmentation", "Future-ready architecture"],
    useCases: ["Branch rollout", "Campus networks", "Firewall and VPN implementation"],
  },
];

export const industries = [
  {
    title: "Manufacturing",
    icon: Factory,
    summary: "Operational networks, production uptime, secure plant connectivity, and endpoint resilience.",
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
    summary: "Secure systems, availability, privacy-conscious workflows, and clinical infrastructure support.",
  },
  {
    title: "Retail",
    icon: ShoppingBag,
    summary: "Store networks, POS reliability, cloud productivity, and secure multi-location support.",
  },
  {
    title: "Education",
    icon: GraduationCap,
    summary: "Campus Wi-Fi, labs, identity, remote learning infrastructure, and secure collaboration.",
  },
  {
    title: "SMB",
    icon: Users,
    summary: "Practical managed IT, cloud, security, and helpdesk support for fast-moving teams.",
  },
  {
    title: "Enterprise",
    icon: Building2,
    summary: "Governed infrastructure, vendor coordination, executive reporting, and scalable operations.",
  },
];

export const stats = [
  { value: 99.9, suffix: "%", label: "Availability Focus" },
  { value: 120, suffix: "+", label: "Systems Managed" },
  { value: 18, suffix: " min", label: "Priority Response Target" },
  { value: 8, suffix: "+", label: "Technology Partner Ecosystems" },
];

export const partners = ["Microsoft", "AWS", "Cisco", "Fortinet", "Sophos", "Dell", "Lenovo", "VMware"];

export const testimonials = [
  {
    quote:
      "Bhupati Techno Services helped us stabilize our branch network and move from reactive fixes to planned operations.",
    name: "Operations Director",
    role: "Manufacturing Group",
  },
  {
    quote:
      "Their team brings calm, structured thinking to cybersecurity. We always know what is protected and what needs attention.",
    name: "CFO",
    role: "Healthcare Services",
  },
  {
    quote:
      "They feel like an extension of our IT leadership, not a ticket queue. That difference matters.",
    name: "Founder",
    role: "Growing SMB",
  },
];

export const blogs = [
  {
    title: "How Bangalore Businesses Can Build Resilient IT Infrastructure",
    description: "A practical guide to uptime, monitoring, lifecycle planning, and secure growth.",
    href: "/blog/resilient-it-infrastructure-bangalore",
    category: "Infrastructure",
  },
  {
    title: "Cybersecurity Services Bangalore: What to Prioritize First",
    description: "From endpoint protection to firewall policy, here is where risk reduction starts.",
    href: "/blog/cybersecurity-services-bangalore",
    category: "Cybersecurity",
  },
  {
    title: "Managed IT Services: When Support Becomes Strategy",
    description: "Why managed services should include reporting, governance, and business alignment.",
    href: "/blog/managed-it-services-strategy",
    category: "Managed Services",
  },
];

export const socMetrics = [
  { label: "Threats Blocked", value: 42870, suffix: "+" },
  { label: "Systems Protected", value: 120, suffix: "+" },
  { label: "Availability", value: 99.9, suffix: "%" },
  { label: "Response Time", value: 18, suffix: " min" },
];

export const architectureFlow = ["Users", "Network", "Firewall", "Cloud", "Applications", "Monitoring", "SOC"];

export const values = [
  "Strength in every architecture decision",
  "Reliability through disciplined operations",
  "Intelligence before implementation",
  "Trust earned through transparent communication",
];

export const timeline = [
  { year: "2018", title: "Foundation", copy: "Started with infrastructure support and network implementation for local businesses." },
  { year: "2020", title: "Managed Services", copy: "Expanded into proactive monitoring, helpdesk, patching, and vendor coordination." },
  { year: "2023", title: "Security & Cloud", copy: "Built dedicated cybersecurity and cloud solution practices for hybrid environments." },
  { year: "2026", title: "Enterprise Focus", copy: "Positioned as a trusted transformation partner for resilient digital operations." },
];

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  areaServed: ["Bangalore", "Karnataka", "India"],
  serviceType: [
    "IT Infrastructure Services Bangalore",
    "Cybersecurity Services Bangalore",
    "Managed IT Services Bangalore",
    "Cloud Solutions Bangalore",
    "IT Consulting Bangalore",
  ],
};

export const LockIcon = LockKeyhole;
