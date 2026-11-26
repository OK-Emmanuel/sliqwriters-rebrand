"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "./ui";

const links = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Blog", "/blog"],
  ["Contact Us", "/contact"],
  ["Results", "/case-studies"],
];

export function Wordmark() {
  return (
    <span className="wordmark">
      SLiQWriterS
      <span className="text-yellow" aria-hidden="true">
        .
      </span>
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const offer =
    pathname === "/growthwright"
      ? "Growthwright"
      : pathname === "/voicewright"
        ? "Voicewright"
        : null;
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className={`site-header ${offer ? "offer-header" : ""}`}>
      <div className="container flex min-h-23 items-center justify-between gap-5">
        <Link
          href={offer ? `/${offer.toLowerCase()}` : "/"}
          onClick={() => setOpen(false)}
          aria-label={offer ? `${offer} home` : "SLiQWriterS home"}
        >
          {offer ? (
            <span className="offer-wordmark">
              {offer}
              <sup>™</sup>
              <small>BY SLiQWriterS</small>
            </span>
          ) : (
            <Wordmark />
          )}
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {offer ? (
            <>
              <Link href="#system">The system</Link>
              <Link href="#case-studies">The results</Link>
              <Link href="#discovery">Contact Us</Link>
              <Link href="/">
                SLiQWriterS <span aria-hidden="true">↗</span>
              </Link>
            </>
          ) : (
            links.map(([name, href]) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
              >
                {name}
              </Link>
            ))
          )}
        </nav>
        <Link
          className="header-cta hidden sm:inline-flex"
          href="https://calendly.com/dehchukwuka/30-mins-chat-with-deh"
        >
          {offer === "Growthwright"
            ? "Book Your Free Strategy Call"
            : offer === "Voicewright"
              ? "Book Your Free Discovery Call"
              : "Contact Us"}{" "}
          <Arrow />
        </Link>
        <button
          ref={menuButton}
          type="button"
          className="menu-button lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="container grid max-h-[calc(100dvh-92px)] gap-0 overflow-y-auto border-t border-line pb-6 lg:hidden"
        >
          {[
            ...links,
            ["Growthwright™", "/growthwright"],
            ["Voicewright™", "/voicewright"],
            ["Academy", "https://sliqwritersacademy.carrd.co"],
          ].map(([name, href]) => (
            <Link
              className="flex items-center justify-between border-b border-line py-4"
              href={href}
              key={href}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {name}
              <Arrow />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
