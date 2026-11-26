import Link from "next/link";
import { callUrl, field, whatsappUrl } from "@/lib/copy";
import { Button, Eyebrow } from "./ui";
import { Wordmark } from "./header";
import { InquiryForm } from "./forms";

export function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container grid items-end gap-10 lg:grid-cols-[1fr_auto]">
        <div>
          <Eyebrow>Contact Us</Eyebrow>
          <h2>{field("2.2", "Callout Headline")}</h2>
          <p className="mt-7 max-w-xl">{field("2.2", "Callout Body Copy")}</p>
        </div>
        <div className="flex flex-col items-start gap-6">
          <Button href={callUrl} dark>
            Book Your Free Strategy Call
          </Button>
          <Link className="text-link" href={whatsappUrl}>
            Chat With Us <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="grid gap-10 border-b border-white/20 pb-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Eyebrow>SLiQWriterS</Eyebrow>
            <h2 className="max-w-lg">{field("2.2", "Newsletter Headline")}</h2>
            <p className="mt-5 text-white/60">
              {field("2.2", "Newsletter Subtitle")}
            </p>
          </div>
          <InquiryForm newsletter />
        </div>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/">
              <Wordmark />
            </Link>
            <p className="mt-6 max-w-sm text-sm text-white/60">
              SLiQWriterS is a market and business growth agency built and led
              by Deh Chukwuka, a marketing copywriter and entrepreneur
              who&apos;s been turning words into revenue for the past 13 years.
            </p>
            <p className="mt-4 text-sm text-white/60">
              9+ years. $3M+ in client revenue generated. 510+ brands served.
              100% client satisfaction.
            </p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <nav aria-label="Footer pages">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Services", "/services"],
                ["Blog", "/blog"],
                ["Contact Us", "/contact"],
                ["FAQ", "/faq"],
                ["Case Studies", "/case-studies"],
              ].map(([name, href]) => (
                <Link href={href} key={href}>
                  {name}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3>Services</h3>
            <nav aria-label="Footer services">
              {[
                ["Growthwright™", "/growthwright"],
                ["Voicewright™", "/voicewright"],
                ["Copywriting", "/copywriting"],
                ["Branding", "/branding"],
                ["Coaching/Mentorship", "/mentorship"],
                ["Academy", "https://sliqwritersacademy.carrd.co"],
              ].map(([name, href]) => (
                <Link href={href} key={href}>
                  {name}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3>Contact Us</h3>
            <nav aria-label="Contact links">
              <a href="mailto:hello@sliqwriters.com">hello@sliqwriters.com</a>
              <a href="tel:+2348133720549">+(234)-813-372-0549</a>
              <a href={whatsappUrl}>WhatsApp Us ↗</a>
            </nav>
            <p className="mt-6 text-sm text-white/60">
              Lagos · London · New York
            </p>
            <p className="mt-3 text-sm text-white/60">Remotely, 24/7</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-white/20 py-6 text-xs text-white/50">
          <p>
            Copyright © {new Date().getFullYear()} SLiQWriterS. All Rights
            Reserved.
          </p>
          <a href="https://www.techifice.com?utm_source=sliqwriters">
            Developed by Techifice ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
