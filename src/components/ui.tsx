import Link from "next/link";
import Markdown from "react-markdown";
import type { ReactNode } from "react";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function Button({
  href,
  children,
  dark = false,
  outline = false,
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
  outline?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`button ${outline ? "button-outline" : dark ? "button-dark" : "button-yellow"}`}
    >
      {children}
      <Arrow />
    </Link>
  );
}

export function Rich({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <div className={`rich ${className}`}>
      <Markdown>{children}</Markdown>
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span
        className="inline-block size-1.5 rounded-full bg-current"
        aria-hidden="true"
      />
      {children}
    </p>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        {description && (
          <Rich className="mt-7 max-w-2xl text-lg text-muted">
            {description}
          </Rich>
        )}
      </div>
    </section>
  );
}

export function Accordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="accordion">
      {items.map((item) => (
        <details key={item.question}>
          <summary>
            {item.question}
            <span aria-hidden="true">+</span>
          </summary>
          <Rich>{item.answer}</Rich>
        </details>
      ))}
    </div>
  );
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
