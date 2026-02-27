import {
  InstagramIcon,
  Linkedin02Icon,
  Mail01Icon,
  Call02Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

const footerLinks = {
  services: [
    { label: "AI & ML Services", href: "/services/ai-ml" },
    { label: "Business Consulting", href: "/services/business-consulting" },
    { label: "Chatbot Development", href: "/services/chatbot" },
    { label: "Cybersecurity", href: "/services/cybersecurity" },
    { label: "Data Analytics", href: "/services/data-analytics" },
    { label: "RPA Solutions", href: "/services/rpa" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Philosophy", href: "/philosophy" },
    { label: "Contact Us", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/intelliqon",
    icon: InstagramIcon,
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/intelliqon",
    icon: NewTwitterIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/intelliqon",
    icon: Linkedin02Icon,
  },
];

export const Footer = () => {
  return (
    <footer className="bg-accent mt-24 border-t">
      <div className="mx-auto max-w-360 px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight">
                intelliqon
              </span>
            </Link>
            <p className="text-muted-foreground mt-4 max-w-xs text-sm leading-relaxed">
              Empowering businesses with innovative technology and strategic
              insights.
            </p>

            {/* Newsletter */}
            <div className="mt-6">
              <h3 className="mb-3 text-sm font-semibold">Stay Updated</h3>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="border-input bg-background placeholder:text-muted-foreground focus:ring-primary flex-1 rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="mb-4 font-semibold">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@intelligon.com"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
                >
                  <HugeiconsIcon icon={Mail01Icon} className="size-4" />
                  support@intelligon.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919167088519"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
                >
                  <HugeiconsIcon icon={Call02Icon} className="size-4" />
                  +91-91670-88519
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Intelligon. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.name}
                >
                  <HugeiconsIcon icon={Icon} className="size-5" />
                </a>
              );
            })}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4">
            {footerLinks.legal.map((link, i) => (
              <span key={link.href} className="flex items-center gap-4">
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {link.label}
                </Link>
                {i < footerLinks.legal.length - 1 && (
                  <span className="text-muted-foreground">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
