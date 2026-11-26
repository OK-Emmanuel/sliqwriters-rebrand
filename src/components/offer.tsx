import Image from "next/image";
import Link from "next/link";
import { cases } from "@/lib/cases";
import {
  callUrl,
  clean,
  deliverables,
  faq,
  field,
  fields,
  quotedBullets,
  section,
} from "@/lib/copy";
import { Accordion, Button, Eyebrow, JsonLd, Rich } from "./ui";
import { CaseCards } from "./case-cards";

export function OfferFooter({ growth }: { growth: boolean }) {
  return (
    <footer className="offer-footer">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="offer-wordmark">
              {growth ? "Growthwright™" : "VOICEWRIGHT™"}
              <small>BY SLiQWriterS</small>
            </p>
            <p className="mt-6 max-w-md text-sm text-white/60">
              {growth
                ? "Growthwright™ is a marketing service of SLiQWriterS... a results-first marketing & business growth agency. We make businesses impossible to ignore."
                : "VOICEWRIGHT™ is a LinkedIn ghostwriting service of SLiQWriterS... a results-first marketing and business growth agency. We make businesses and the people leading them impossible to ignore."}
            </p>
          </div>
          <div className="space-y-5 text-sm md:text-right">
            <p>Lagos · London · New York</p>
            <p>
              <a href="mailto:hello@sliqwriters.com">hello@sliqwriters.com ↗</a>
            </p>
            <Link href="/case-studies" className="text-link">
              Explore all case studies
            </Link>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-5 border-t border-white/20 pt-6 text-xs text-white/60">
          <p>© {new Date().getFullYear()} SLiQWriterS. All rights reserved.</p>
          <Link href="/">Back to SLiQWriterS ↗</Link>
        </div>
      </div>
    </footer>
  );
}

function OfferFounder({ growth }: { growth: boolean }) {
  const id = growth ? "7.9" : "8.7";
  return (
    <section className="section">
      <div className="container grid items-start gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <Image
          src="/images/founder.jpg"
          width={584}
          height={730}
          alt="Deh Chukwuka, founder of SLiQWriterS"
          className="w-full"
          sizes="(max-width: 1024px) 90vw, 500px"
        />
        <div>
          <Eyebrow>
            {growth ? "ABOUT DEH & GROWTHWRIGHT" : field(id, "Eyebrow")}
          </Eyebrow>
          <h2 className="mb-7">{field(id, "Headline")}</h2>
          <p className="mb-6 text-xl">
            {field(id, growth ? "Lead Copy" : "Lead")}
          </p>
          <Rich>{field(id, "Body")}</Rich>
          <div className="my-8 border-t border-line pt-6">
            <Rich>
              {field(
                id,
                growth
                  ? "Crosslink to Voicewright"
                  : "Crosslink to Growthwright",
              )}
            </Rich>
            <Link
              className="text-link"
              href={growth ? "/voicewright" : "/growthwright"}
            >
              {growth ? "Voicewright™" : "Growthwright™"} ↗
            </Link>
          </div>
          <Button href={callUrl}>
            {growth
              ? "Book a Free Strategy Call with Deh ↗"
              : "Book a Free Discovery Call with Deh"}
          </Button>
        </div>
      </div>
    </section>
  );
}

function OfferCases({ growth }: { growth: boolean }) {
  return (
    <section className="section" id="case-studies">
      <div className="container">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>The work. The impact.</Eyebrow>
            <h2>Real businesses. Meaningful results.</h2>
          </div>
          <Link
            className="text-link"
            href={`/case-studies?service=${growth ? "growthwright" : "voicewright"}`}
          >
            See the full case studies ↗
          </Link>
        </div>
        <CaseCards
          stories={cases.filter(
            (story) =>
              story.service === (growth ? "Growthwright" : "Voicewright"),
          )}
        />
      </div>
    </section>
  );
}

function OfferFAQ({ growth }: { growth: boolean }) {
  const items = faq(growth ? "7.10" : "8.8");
  return (
    <section className="section border-t border-line">
      <div className="container two-col">
        <h2>FAQs</h2>
        <Accordion items={items} />
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
    </section>
  );
}

function OfferClose({ growth }: { growth: boolean }) {
  const id = growth ? "7.11" : "8.9";
  return (
    <section className="offer-final" id="discovery">
      <div className="container">
        <h2 className="mx-auto mb-8 max-w-4xl">{field(id, "Headline")}</h2>
        {!growth && (
          <p className="mx-auto mb-6 max-w-3xl text-xl">
            {field(id, "Subhead")}
          </p>
        )}
        <Rich>{field(id, "Body")}</Rich>
        <div className="my-9">
          <Button href={callUrl} dark>
            {growth
              ? "Book Your Free Strategy Call ↗"
              : "Book Your Free Discovery Call"}
          </Button>
        </div>
        {growth && <p className="mb-7 text-sm">{field(id, "Note")}</p>}
        <a
          className="text-link"
          href="https://www.linkedin.com/in/dehchukwuka/"
        >
          Send a DM on LinkedIn ↗
        </a>
        <p className="mt-7 text-xs">{field(id, "Microcopy")}</p>
      </div>
    </section>
  );
}

export function Growthwright() {
  const phases = section("7.6")
    .split(/(?=^\* \*\*Phase )/m)
    .filter((part) => part.startsWith("* **Phase"))
    .map((part) => ({
      title: part.match(/^\* \*\*Phase \d+: (.+)\*\*/)?.[1] ?? "",
      theme: part.match(/\*Theme:\* "(.+)"/)?.[1] ?? "",
      items: [...part.matchAll(/^\s+\d+\. \*\*(.+?):\*\* (.+)$/gm)].map(
        (match) => ({ name: match[1], description: match[2] }),
      ),
      output: part.match(/\*Deliverable:\* \*\*(.+)\*\*/)?.[1] ?? "",
    }));
  const comparison = section("7.5")
    .split("\n")
    .filter((line) => line.startsWith("| **"))
    .map((line) =>
      line
        .split("|")
        .slice(1, 3)
        .map((cell) => cell.trim()),
    );
  const fit = section("7.8").split("#### Who This Is NOT For:");
  const inventory = section("7.7")
    .split("\n")
    .filter((line) => line.startsWith("* "))
    .map((line) => line.slice(2));
  return (
    <>
      <main id="main" className="offer">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Growthwright™",
            description: field("7.1", "Meta Description"),
            provider: { "@type": "Organization", name: "SLiQWriterS" },
          }}
        />
        <section className="offer-hero">
          <div className="container grid items-center gap-16 lg:grid-cols-[1.45fr_1fr]">
            <div>
              <Eyebrow>{field("7.2", "Eyebrow")}</Eyebrow>
              <p className="mb-6 text-sm text-[#b3b7a9]">
                {field("7.2", "Audience Qualifier")}
              </p>
              <h1>
                Your brand deserves more than just &apos;content&apos;.{" "}
                <span className="offer-serif text-yellow">
                  It deserves a system that turns strangers into loyal
                  customers.
                </span>
              </h1>
              <Rich className="mt-7">{field("7.2", "Subheadline")}</Rich>
              <div className="my-7">
                <Button href={callUrl}>{field("7.2", "Primary CTA")}</Button>
              </div>
              <p className="text-xs text-[#b3b7a9]">
                {field("7.2", "Microcopy Below Button")}
              </p>
              <Link className="text-link mt-5" href="#case-studies">
                Explore Case Studies ↗
              </Link>
            </div>
            <div className="border border-[#434b37] bg-[#262b21] p-8">
              <p className="border-b border-[#434b37] pb-5 text-[10px] tracking-widest text-[#c2cbb3]">
                How it works
              </p>
              <p className="my-8 text-[clamp(30px,3vw,46px)] leading-tight tracking-[-.055em]">
                3 phases.
                <br />
                <em className="offer-serif text-yellow">
                  One complete marketing system (installed within 90 days)
                </em>
              </p>
              <ol className="space-y-3">
                {phases.map((phase, i) => (
                  <li
                    key={phase.title}
                    className={`border p-5 text-xl ${i === 2 ? "border-yellow bg-yellow text-ink" : "border-[#52643c] bg-[#353d29]"}`}
                  >
                    {phase.title}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
        <div className="offer-proof">
          <p className="container">{field("7.3", "Proof Statement")}</p>
        </div>
        <section className="section">
          <div className="container two-col">
            <div>
              <Eyebrow>{field("7.4", "Section Eyebrow")}</Eyebrow>
              <h2>{field("7.4", "Headline")}</h2>
            </div>
            <Rich>{quotedBullets("7.4").join("\n\n")}</Rich>
          </div>
        </section>
        <section className="section offer-tint">
          <div className="container">
            <div className="grid md:grid-cols-2">
              {[
                "Traditional Content & Agency Retainers",
                "Growthwright™ Marketing System",
              ].map((title, i) => (
                <div
                  key={title}
                  className={`p-7 lg:p-10 ${i === 1 ? "bg-ink text-white" : "border border-line"}`}
                >
                  <h3 className={`mb-8 ${i === 1 ? "text-yellow" : ""}`}>
                    {title}
                  </h3>
                  {comparison.map((row) => (
                    <Rich
                      key={row[i]}
                      className={`border-t py-5 ${i === 1 ? "border-white/20 text-white/75!" : "border-line"}`}
                    >
                      {row[i]}
                    </Rich>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section" id="system">
          <div className="container">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mb-14 max-w-3xl">
              3 phases. One complete marketing system (installed within 90 days)
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {phases.map((phase) => (
                <article
                  className="flex flex-col border border-line bg-white p-8"
                  key={phase.title}
                >
                  <h3 className="mb-5 text-3xl">{phase.title}</h3>
                  <p className="mb-7 text-sm text-muted">{phase.theme}</p>
                  <ul>
                    {phase.items.map((item) => (
                      <li
                        key={item.name}
                        className="border-t border-line py-4 text-sm"
                      >
                        <strong>{item.name}: </strong>
                        <span className="text-muted">{item.description}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto bg-[#eceee3] p-5 text-sm font-semibold">
                    {phase.output}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section offer-dark">
          <div className="container two-col">
            <div>
              <Eyebrow>Growthwright™</Eyebrow>
              <h2>What&apos;s Included</h2>
            </div>
            <ul>
              {inventory.map((item) => (
                <li
                  className="border-t border-white/20 py-4 text-sm"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <OfferCases growth />
        <section className="section offer-tint">
          <div className="container grid gap-8 md:grid-cols-2">
            {fit.map((group, index) => (
              <div
                key={index}
                className={`p-8 lg:p-10 ${index === 0 ? "bg-[#e0e4d5]" : "border border-line"}`}
              >
                <h2 className="mb-7 text-3xl!">
                  {index === 0 ? "Who This Is For" : "Who This Is NOT For"}
                </h2>
                <ul>
                  {group
                    .split("\n")
                    .filter((line) => line.startsWith("* "))
                    .map((line) => (
                      <li
                        key={line}
                        className="border-b border-[#ccd2c1] py-4 text-sm"
                      >
                        {line.slice(2)}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <OfferFounder growth />
        <OfferFAQ growth />
        <OfferClose growth />
      </main>
      <OfferFooter growth />
    </>
  );
}

export function Voicewright() {
  const steps = fields("8.4", "Headline");
  const bodies = fields("8.4", "Body");
  const reviews = [
    ...section("8.5").matchAll(
      /\* \*\*Quote \d+ \((.+?)\):\*\*\s*\n\s*\*"(.+)"\*/g,
    ),
  ].map((match) => ({ person: match[1], quote: match[2] }));
  const pricing =
    section("8.6")
      .match(/"([^"]+)"/g)
      ?.map(clean) ?? [];
  return (
    <>
      <main id="main" className="offer voice-offer">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Voicewright™",
            description: field("8.1", "Meta Description"),
            provider: { "@type": "Organization", name: "SLiQWriterS" },
          }}
        />
        <section className="offer-hero">
          <div className="container">
            <Eyebrow>{field("8.2", "Eyebrow")}</Eyebrow>
            <p className="mb-6 text-sm text-[#b3b7a9]">
              {field("8.2", "Audience Identifier")}
            </p>
            <h1>
              You built the business.
              <br />
              <span className="offer-serif text-yellow">
                Let&apos;s make sure the market knows who built it.
              </span>
            </h1>
            <Rich className="mt-8 max-w-3xl">
              {field("8.2", "Subheadline")}
            </Rich>
            <div className="my-8">
              <Button href={callUrl}>{field("8.2", "Primary CTA")}</Button>
            </div>
            <p className="text-xs text-[#b3b7a9]">
              {field("8.2", "Microcopy")}
            </p>
          </div>
        </section>
        <div className="offer-proof">
          <p className="container">{field("8.2", "Social Proof Strip")}</p>
        </div>
        <section className="section">
          <div className="container two-col">
            <div>
              <Eyebrow>{field("8.3", "Section Eyebrow")}</Eyebrow>
              <h2>{field("8.3", "Headline")}</h2>
              <Image
                src="/images/brand.jpg"
                width={1125}
                height={1500}
                alt="SLiQWriterS yellow brand mark displayed in a gallery"
                className="mt-8 w-full"
                sizes="(max-width: 1024px) 90vw, 550px"
              />
            </div>
            <Rich>{quotedBullets("8.3").join("\n\n")}</Rich>
          </div>
        </section>
        <section className="section offer-tint">
          <div className="container two-col">
            <div>
              <Eyebrow>Voicewright™</Eyebrow>
              <h2>What&apos;s Included</h2>
            </div>
            <Accordion items={deliverables("10.3")} />
          </div>
        </section>
        <section className="section" id="system">
          <div className="container">
            <Eyebrow>The VOICEWRIGHT system</Eyebrow>
            <h2 className="mb-14">How It Works in Five Moves</h2>
            <ol className="voice-timeline">
              {steps.map((step, i) => (
                <li key={step}>
                  <span className="timeline-number">0{i + 1}</span>
                  <div className="border border-line bg-white p-7 shadow-[0_12px_30px_#1719160d]">
                    <h3 className="mb-5 text-2xl">{step}</h3>
                    <Rich>{bodies[i]}</Rich>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <OfferCases growth={false} />
        <section className="section offer-tint">
          <div className="container">
            <Eyebrow>Testimonials</Eyebrow>
            <h2 className="mb-12">Customer Feedbacks</h2>
            <div className="columns-1 gap-6 md:columns-2">
              {reviews.map((review) => (
                <figure
                  className="mb-6 break-inside-avoid border border-line border-t-3 border-t-yellow bg-paper p-8"
                  key={review.person}
                >
                  <blockquote className="mb-6 font-serif text-2xl leading-relaxed">
                    {review.quote}
                  </blockquote>
                  <figcaption className="border-t border-line pt-4 text-xs text-muted">
                    {review.person}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
        <section className="section" id="investment">
          <div className="container two-col">
            {pricing.map((text, i) => (
              <div key={text}>
                <Eyebrow>
                  {i === 0 ? "Note on Pricing" : "Minimum Engagement"}
                </Eyebrow>
                <Rich>{text}</Rich>
              </div>
            ))}
          </div>
        </section>
        <OfferFounder growth={false} />
        <OfferFAQ growth={false} />
        <OfferClose growth={false} />
      </main>
      <OfferFooter growth={false} />
    </>
  );
}
